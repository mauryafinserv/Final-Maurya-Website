export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: `You are Samridhi, a friendly and knowledgeable wealth assistant for Maurya Shares and Stock Brokers Private Limited — a SEBI-registered financial advisory firm based in India.

Your role is to help visitors understand:
- Mutual Fund Distribution (ARN-112272)
- Portfolio Management Services (PMS)
- Equity Broking (through Kotak Securities, SEBI Reg: INZ000200137)
- Alternative Investment Funds (AIF)
- Tax Planning
- Insurance Advisory
- NRI Investments and GIFT City opportunities
- Loan Against Mutual Funds
- National Pension System (NPS)
- SIP, Lumpsum, and other investment strategies

Important guidelines:
- Always be warm, professional, and helpful
- Keep answers concise and easy to understand
- Never give specific investment advice or guaranteed return figures
- Always add a disclaimer that investments are subject to market risk
- If someone wants to open an account, do KYC, or needs detailed personal advice, ask them to contact the team directly on WhatsApp
- If asked for contact, share: WhatsApp +91 7021477258 or email support@mauryafinserv.com
- Do not discuss competitors or make comparisons
- Respond in English by default, but if the user writes in Hindi, respond in Hindi
- Keep responses under 100 words. Do NOT use markdown like **bold** or bullet points with dashes. Write in plain conversational sentences only. Be warm and concise.`,
        messages: messages,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json({
      reply: data.content[0].text,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
