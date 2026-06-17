// api/generate-content.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { contentType, platform, prompt, generateImage } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const platformInstructions = {
    instagram: "Write for Instagram. Use line breaks for readability. End with exactly 5 relevant hashtags. Keep it engaging and visual in tone. Max 300 words.",
    whatsapp: "Write for WhatsApp broadcast. Use simple language, short paragraphs, and emojis sparingly. No hashtags. Conversational and warm tone. Max 200 words.",
    linkedin: "Write for LinkedIn. Professional tone. Use short paragraphs. Can include 3-5 hashtags at the end. Thought leadership style. Max 300 words.",
  };

  const contentTypeContext = {
    sip: "The topic is SIP (Systematic Investment Plan) awareness for mutual fund investors.",
    market_update: "The topic is a market update or commentary for mutual fund investors.",
    nfo: "The topic is an NFO (New Fund Offer) campaign announcement.",
    tax_saving: "The topic is tax saving through ELSS mutual funds under Section 80C.",
    general_mf: "The topic is general mutual fund education for retail investors.",
  };

  const disclaimer = {
    instagram: "\n\nMutual Fund investments are subject to market risks. Read all scheme related documents carefully. Past performance is not indicative of future returns. This post is for educational purposes only and not financial advice.",
    whatsapp: "\n\n_Mutual Fund investments are subject to market risks. Read all scheme related documents carefully. This message is for educational purposes only._",
    linkedin: "\n\nMutual Fund investments are subject to market risks. Read all scheme related documents carefully. Past performance is not indicative of future returns. This content is for educational purposes only and not financial advice.",
  };

  const systemPrompt = `You are an expert financial content writer for Maurya Shares & Stock Brokers Pvt. Ltd. (ARN-112272), a SEBI-registered Mutual Fund Distributor based in India.

Your job is to write social media content for MF distributors that is:
- Clear, engaging, and educational
- Written for Indian retail investors
- NEVER making specific return promises or guarantees
- Always compliant with SEBI guidelines
- In a confident but approachable tone

${contentTypeContext[contentType] || ""}
${platformInstructions[platform] || ""}

IMPORTANT: Do NOT add any disclaimer at the end — it will be added automatically. Just write the main content.`;

  try {
    // Generate text content
    const textResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 600,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
      }),
    });

    const textData = await textResponse.json();

    if (!textData.choices || !textData.choices[0]) {
      return res.status(500).json({ error: "No response from OpenAI" });
    }

    const content = textData.choices[0].message.content + disclaimer[platform];

    // Generate image if requested
    let imageUrl = null;
    if (generateImage) {
      const imagePrompt = `Professional financial social media graphic for Indian mutual fund investors. Topic: ${prompt}. Style: clean, modern, minimal design with dark background, gold and white accents. No text in image. Suitable for ${platform} post. High quality, professional look.`;

      const imageResponse = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "dall-e-2",
          prompt: imagePrompt,
          n: 1,
          size: "1024x1024",
        }),
      });

      const imageData = await imageResponse.json();
      if (imageData.data && imageData.data[0]) {
        imageUrl = imageData.data[0].url;
      }
    }

    return res.status(200).json({ content, imageUrl });

  } catch (error) {
    return res.status(500).json({ error: "Failed to generate content" });
  }
}
