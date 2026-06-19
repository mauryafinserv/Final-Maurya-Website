import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Verify JWT token
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

  // Fetch user from DB
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("arn, posts_used, posts_limit, status, plan, full_name, firm_name")
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
      error: `You have used all ${user.posts_limit} posts this month. ${user.plan === "trial" ? "Upgrade to Pro for more access." : "Contact us to increase your limit."}`,
      limit_reached: true,
    });
  }

  const { contentType, platform, prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  // Fetch compliance rules from Supabase settings
  const { data: settings } = await supabase
    .from("settings")
    .select("compliance_rules")
    .eq("id", 1)
    .single();

  const complianceRules = settings?.compliance_rules || `
You are a SEBI-compliant mutual fund content creator for Indian MF distributors.

STRICT COMPLIANCE RULES — always follow:
1. Never make return predictions or forward-looking statements
2. Never mention specific scheme returns without benchmark comparison
3. Never use words like "guaranteed returns", "risk-free", "best fund", "number 1 fund"
4. Never cherry-pick time periods to show performance
5. Educational content about MF concepts is always safe
6. Use illustrative numbers only — always add "for illustration purposes only"
7. Never display AMC logos or scheme names in promotional context without approval
8. Content must be "fair, clear and not misleading" per SEBI guidelines
9. MFDs are distributors, not investment advisors — never use "financial advice" language
10. Always use data from reliable sources like AMFI, SEBI, RBI only

MANDATORY IN EVERY POST:
- End with full disclaimer
- Include "AMFI Registered Mutual Fund Distributor" tagline
- Include the distributor's firm name and ARN number
`;

  // Platform specific style
  const platformStyle = {
    instagram: "Instagram caption style — hook in first line, engaging, 5 hashtags at end, visual language",
    whatsapp: "WhatsApp message style — conversational, short paragraphs, easy to read on mobile, no hashtags",
    linkedin: "LinkedIn post style — professional, data-driven, thought leadership tone, 3 hashtags max",
  }[platform] || "social media post";

  // Content type context
  const contentContext = {
    sip: "Systematic Investment Plan (SIP) — benefits, how it works, power of compounding, rupee cost averaging",
    market_update: "Market update — use factual index data, avoid predictions, focus on staying invested",
    nfo: "New Fund Offer awareness — educational about NFO concept, not specific scheme promotion",
    tax_saving: "Tax saving through ELSS mutual funds — Section 80C benefits, 3 year lock-in, dual benefit",
    general_mf: "General mutual fund education — awareness, concepts, investor education",
  }[contentType] || "mutual fund education";

  const fullPrompt = `${complianceRules}

DISTRIBUTOR DETAILS — include these in every post:
Firm Name: ${user.firm_name}
ARN: ${user.arn}
Tagline: AMFI Registered Mutual Fund Distributor

CONTENT TYPE: ${contentContext}
PLATFORM STYLE: ${platformStyle}

USER REQUEST: ${prompt}

Generate a complete ${platform} post. End with:
1. The full MF disclaimer
2. Firm name and ARN
3. "AMFI Registered Mutual Fund Distributor"`;

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: { maxOutputTokens: 1000, temperature: 0.7 },
        }),
      }
    );

    const geminiData = await geminiRes.json();
    const content = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!content) {
      return res.status(500).json({ error: "Failed to generate content", debug: JSON.stringify(geminiData) });
    }

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
