// api/settings.js
import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

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
    const buffers = [];
    for await (const chunk of req) buffers.push(chunk);
    const body = JSON.parse(Buffer.concat(buffers).toString());
    const { brand_colour } = body;

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
    const buffers = [];
    for await (const chunk of req) buffers.push(chunk);
    const body = JSON.parse(Buffer.concat(buffers).toString());
    const { current_password, new_password } = body;

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

  // ── POST — Upload logo ─────────────────────────────────────────────
  if (req.method === "POST") {
    const form = formidable({ maxFileSize: 500 * 1024 }); // 500KB limit

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: "File too large or invalid. Max 500KB." });
      }

      const file = files.logo?.[0] || files.logo;
      if (!file) return res.status(400).json({ error: "No file uploaded" });

      const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
      if (!allowedTypes.includes(file.mimetype)) {
        return res.status(400).json({ error: "Only PNG, JPG, or WEBP allowed" });
      }

      try {
        const fileBuffer = fs.readFileSync(file.filepath);
        const ext = file.mimetype.split("/")[1];
        const fileName = `${user.arn}-logo.${ext}`;

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from("logos")
          .upload(fileName, fileBuffer, {
            contentType: file.mimetype,
            upsert: true, // overwrite if exists
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

        // Clean up temp file
        fs.unlinkSync(file.filepath);

        return res.status(200).json({ success: true, logo_url });
      } catch (e) {
        return res.status(500).json({ error: e.message });
      }
    });
    return;
  }

  return res.status(405).json({ error: "Method not allowed" });
}
