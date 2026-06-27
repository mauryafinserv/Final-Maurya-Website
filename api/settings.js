// api/settings.js
import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const getUser = async (req) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  try {
    const decoded = jwt.verify(authHeader.slice(7), process.env.JWT_SECRET);
    const { data } = await supabase
      .from("users")
      .select("arn, full_name, firm_name, email, password_hash")
      .eq("arn", decoded.arn)
      .single();
    return data;
  } catch {
    return null;
  }
};

export default async function handler(req, res) {
  const user = await getUser(req);
  if (!user) return res.status(401).json({ error: "Unauthorized" });

  // ── PATCH — Save brand colour ──────────────────────────────────────
  if (req.method === "PATCH") {
    const { brand_colour } = req.body;
    if (!brand_colour || !/^#[0-9A-Fa-f]{6}$/.test(brand_colour)) {
      return res.status(400).json({ error: "Invalid colour format" });
    }
    const { error } = await supabase
      .from("users")
      .update({ brand_colour })
      .eq("arn", user.arn);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true, brand_colour });
  }

  // ── PUT — Change password ──────────────────────────────────────────
  if (req.method === "PUT") {
    const { current_password, new_password } = req.body;
    if (!current_password || !new_password) {
      return res.status(400).json({ error: "Both passwords are required" });
    }
    if (new_password.length < 8) {
      return res.status(400).json({ error: "New password must be at least 8 characters" });
    }
    const valid = await bcrypt.compare(current_password, user.password_hash);
    if (!valid) {
      return res.status(400).json({ error: "Current password is incorrect" });
    }
    const new_hash = await bcrypt.hash(new_password, 12);
    const { error } = await supabase
      .from("users")
      .update({ password_hash: new_hash })
      .eq("arn", user.arn);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  // ── POST — Upload logo (base64) ────────────────────────────────────
  if (req.method === "POST") {
    const { logo_base64, mime_type } = req.body;

    if (!logo_base64 || !mime_type) {
      return res.status(400).json({ error: "No file data received" });
    }

    const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedTypes.includes(mime_type)) {
      return res.status(400).json({ error: "Only PNG, JPG, or WEBP allowed" });
    }

    // Check size (base64 is ~33% larger than original, so 500KB file = ~680KB base64)
    const sizeInBytes = Buffer.byteLength(logo_base64, "base64");
    if (sizeInBytes > 500 * 1024) {
      return res.status(400).json({ error: "File size must be under 500KB" });
    }

    try {
      const fileBuffer = Buffer.from(logo_base64, "base64");
      const ext = mime_type.split("/")[1];
      const fileName = `${user.arn}-logo.${ext}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("logos")
        .upload(fileName, fileBuffer, {
          contentType: mime_type,
          upsert: true,
        });

      if (uploadError) {
        return res.status(500).json({ error: uploadError.message });
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("logos")
        .getPublicUrl(fileName);

      const logo_url = urlData.publicUrl;

      // Save URL to users table
      const { error: dbError } = await supabase
        .from("users")
        .update({ logo_url })
        .eq("arn", user.arn);

      if (dbError) return res.status(500).json({ error: dbError.message });

      return res.status(200).json({ success: true, logo_url });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
