import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Login required" });
  }

  let decoded;
  try {
    decoded = jwt.verify(authHeader.slice(7), process.env.JWT_SECRET);
  } catch {
    return res.status(401).json({ error: "Session expired" });
  }

  const { data: user, error } = await supabase
    .from("users")
    .select("arn, full_name, firm_name, email, plan, status, posts_used, images_used, posts_limit, images_limit, logo_url, cycle_start")
    .eq("arn", decoded.arn)
    .single();

  if (error || !user) {
    return res.status(401).json({ error: "User not found" });
  }

  return res.status(200).json({ user });
}
