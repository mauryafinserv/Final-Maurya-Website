import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Login required" });
  }

  let decoded;
  try {
    decoded = jwt.verify(authHeader.split(" ")[1], process.env.JWT_SECRET);
  } catch {
    return res.status(401).json({ error: "Session expired. Please login again." });
  }

  const { data: user, error: userError } = await supabase
    .from("users")
    .select("arn, images_used, images_limit, status, plan")
    .eq("arn", decoded.arn)
    .single();

  if (userError || !user) {
    return res.status(401).json({ error: "User not found" });
  }

  if (user.status !== "active") {
    return res.status(403).json({ error: "Your account is not active." });
  }

  if (user.images_used >= user.images_limit) {
    return res.status(403).json({
      error: `You have used all ${user.images_limit} images this month. ${user.plan === 'trial' ? 'Upgrade to Pro for more access.' : 'Contact us to increase your limit.'}`,
      limit_reached: true,
    });
  }

  // Increment images_used
  await supabase
    .from("users")
    .update({ images_used: user.images_used + 1 })
    .eq("arn", decoded.arn);

  return res.status(200).json({
    allowed: true,
    usage: {
      images_used: user.images_used + 1,
      images_limit: user.images_limit,
    }
  });
}
