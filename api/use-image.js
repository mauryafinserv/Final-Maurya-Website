import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
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
    return res.status(401).json({ error: "Session expired. Please login again." });
  }

  const { data: user, error: userError } = await supabase
    .from("users")
    .select("arn, images_used, images_limit, status, plan, plan_activated_at")
    .eq("arn", decoded.arn)
    .single();

  if (userError || !user) {
    return res.status(401).json({ error: "User not found" });
  }

  if (user.status !== "active") {
    return res.status(403).json({ error: "Your account is not active." });
  }

  // Rolling 30-day reset
  const activatedAt = new Date(user.plan_activated_at || new Date());
  const now = new Date();
  const daysSince = Math.floor((now - activatedAt) / (1000 * 60 * 60 * 24));
  if (daysSince >= 30) {
    await supabase.from("users").update({
      posts_used: 0,
      images_used: 0,
      plan_activated_at: now.toISOString(),
    }).eq("arn", decoded.arn);
    user.images_used = 0;
  }

  if (user.images_used >= user.images_limit) {
    return res.status(403).json({
      error: `You have used all ${user.images_limit} images this cycle. ${user.plan === "trial" ? "Upgrade to Pro for more access." : "Contact us to increase your limit."}`,
      limit_reached: true,
    });
  }

  await supabase.from("users").update({ images_used: user.images_used + 1 }).eq("arn", decoded.arn);

  return res.status(200).json({
    allowed: true,
    usage: { images_used: user.images_used + 1, images_limit: user.images_limit }
  });
}
