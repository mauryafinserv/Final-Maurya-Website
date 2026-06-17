export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt, platform } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const imagePrompt = `Professional financial graphic for Indian mutual fund investors about: ${prompt}. Clean minimal design, dark background, gold and white colors, no text overlay, suitable for ${platform} social media post.`;

  try {
    const imageResponse = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt: imagePrompt,
        n: 1,
        size: "1024x1024",
        output_format: "png",
      }),
    });

    const imageData = await imageResponse.json();

    if (imageData.data && imageData.data[0] && imageData.data[0].b64_json) {
      return res.status(200).json({ imageBase64: imageData.data[0].b64_json });
    } else {
      return res.status(500).json({ error: JSON.stringify(imageData) });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
