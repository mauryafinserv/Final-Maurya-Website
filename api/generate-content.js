import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Verify JWT token
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

  // Fetch user from DB
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("arn, posts_used, posts_limit, status, plan")
    .eq("arn", decoded.arn)
    .single();

  if (userError || !user) {
    return res.status(401).json({ error: "User not found" });
  }

  if (user.status !== "active") {
    return res.status(403).json({ error: "Your account is not active. Please contact support." });
  }

  // Check post limit
  if (user.posts_used >= user.posts_limit) {
    return res.status(403).json({
      error: `You have used all ${user.posts_limit} posts this month. ${user.plan === 'trial' ? 'Upgrade to Pro for more access.' : 'Contact us to increase your limit.'}`,
      limit_reached: true,
    });
  }

  const { contentType, platform, prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const systemPrompt = `You are an expert mutual fund content creator for Indian IFAs and MF distributors. 
Create ${platform} content about: ${contentType}. 
Be informative, engaging and SEBI compliant.
End every post with: "Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. This post is for educational purposes only and not financial advice."
Keep it concise and suitable for ${platform}.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      max_tokens: 800,
    });

    const content = completion.choices[0].message.content;

    // Increment posts_used
    await supabase
      .from("users")
      .update({ posts_used: user.posts_used + 1 })
      .eq("arn", decoded.arn);

    return res.status(200).json({
      content,
      usage: {
        posts_used: user.posts_used + 1,
        posts_limit: user.posts_limit,
      }
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
