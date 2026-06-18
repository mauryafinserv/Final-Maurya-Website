// src/pages/ContentToolPage.jsx
import React, { useState } from "react";

const CONTENT_TYPES = [
  { id: "sip", label: "SIP Awareness" },
  { id: "market_update", label: "Market Update" },
  { id: "nfo", label: "NFO Campaign" },
  { id: "tax_saving", label: "Tax Saving / ELSS" },
  { id: "general_mf", label: "General MF Education" },
];

const PLATFORMS = [
  { id: "instagram", label: "Instagram" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "linkedin", label: "LinkedIn" },
];

const addDisclaimerToImage = (base64) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const footerHeight = 90;
        canvas.width = img.width;
        canvas.height = img.height + footerHeight;
        const ctx = canvas.getContext("2d");

        // Draw original image
        ctx.drawImage(img, 0, 0);

        // Dark navy footer
        ctx.fillStyle = "#0a1628";
        ctx.fillRect(0, img.height, canvas.width, footerHeight);

        // Gold border line
        ctx.fillStyle = "#C9A84C";
        ctx.fillRect(0, img.height, canvas.width, 2);

        // Line 1
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.font = "bold 18px Arial, sans-serif";
        ctx.fillText("Mutual Fund investments are subject to market risks.", canvas.width / 2, img.height + 28);

        // Line 2
        ctx.font = "16px Arial, sans-serif";
        ctx.fillStyle = "#dddddd";
        ctx.fillText("Read all scheme related documents carefully.", canvas.width / 2, img.height + 52);

        // Line 3
        ctx.font = "14px Arial, sans-serif";
        ctx.fillStyle = "#aaaaaa";
        ctx.fillText("Past performance is not indicative of future returns. For educational purposes only.", canvas.width / 2, img.height + 74);

        resolve(canvas.toDataURL("image/png").split(",")[1]);
      } catch (e) {
        console.error("Canvas error:", e);
        resolve(base64);
      }
    };
    img.onerror = () => {
      console.error("Image load error");
      resolve(base64);
    };
    img.src = `data:image/png;base64,${base64}`;
  });
};

const ContentToolPage = () => {
  const [contentType, setContentType] = useState("sip");
  const [platform, setPlatform] = useState("instagram");
  const [prompt, setPrompt] = useState("");
  const [generateImage, setGenerateImage] = useState(false);
  const [output, setOutput] = useState("");
  const [imageBase64, setImageBase64] = useState(null);
  const [loadingText, setLoadingText] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoadingText(true);
    setLoadingImage(false);
    setOutput("");
    setImageBase64(null);
    setCopied(false);

    // Step 1 — generate text
    try {
      const textRes = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType, platform, prompt }),
      });
      const textData = await textRes.json();
      if (textData.content) setOutput(textData.content);
      else setOutput("Something went wrong. Please try again.");
    } catch {
      setOutput("Error connecting to server. Please try again.");
    }
    setLoadingText(false);

    // Step 2 — generate image via Cloudflare Worker (secured with auth token)
    if (generateImage) {
      setLoadingImage(true);
      try {
        const imgRes = await fetch("https://maurya-image-generator.adarshcharanpahari.workers.dev", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": import.meta.env.VITE_WORKER_SECRET,
          },
          body: JSON.stringify({ prompt, platform, contentType }),
        });
        const imgData = await imgRes.json();
        if (imgData.imageBase64) {
          const withDisclaimer = await addDisclaimerToImage(imgData.imageBase64);
          setImageBase64(withDisclaimer);
        }
      } catch (e) {
        console.error("Image generation failed:", e);
      }
      setLoadingImage(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadImage = () => {
    if (!imageBase64) return;
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${imageBase64}`;
    link.download = "maurya-content-image.png";
    link.click();
  };

  const loading = loadingText || loadingImage;

  return (
    <section className="bg-black text-white font-sans min-h-screen">

      <div className="px-6 md:px-16 pt-24 pb-12 border-b border-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Beta Tool</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            MF Content <span className="text-primary">Generator</span>
          </h1>
          <p className="text-gray-400 text-base">
            Generate SEBI-compliant social media content for mutual fund investors in seconds.
            Disclaimers are added automatically.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-8">
            <div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">Content Type</p>
              <div className="flex flex-wrap gap-2">
                {CONTENT_TYPES.map((ct) => (
                  <button key={ct.id} onClick={() => setContentType(ct.id)}
                    className={`px-4 py-2 text-xs font-semibold border transition ${contentType === ct.id ? "bg-primary text-black border-primary" : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"}`}>
                    {ct.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">Platform</p>
              <div className="flex gap-2">
                {PLATFORMS.map((p) => (
                  <button key={p.id} onClick={() => setPlatform(p.id)}
                    className={`px-4 py-2 text-xs font-semibold border transition ${platform === p.id ? "bg-primary text-black border-primary" : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"}`}>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">What do you want to say?</p>
              <textarea rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Why SIP is better than lump sum during volatile markets. Target first-time investors."
                className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700 resize-none" />
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => setGenerateImage(!generateImage)}
                className={`w-10 h-5 rounded-full transition-colors relative flex-shrink-0 ${generateImage ? "bg-primary" : "bg-gray-700"}`}>
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${generateImage ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
              <span className="text-sm text-gray-400">
                Also generate an image
                <span className="text-gray-600 text-xs ml-1">(~20 sec, ₹4 per image)</span>
              </span>
            </div>

            <button onClick={handleGenerate} disabled={loading || !prompt.trim()}
              className={`w-full py-4 text-sm font-bold tracking-wide transition ${loading || !prompt.trim() ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-primary text-black hover:bg-white"}`}>
              {loadingText ? "Writing content..." : loadingImage ? "Generating image..." : "Generate Content →"}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">Output</p>
                {output && (
                  <button onClick={handleCopy}
                    className="text-xs text-primary border border-primary px-3 py-1 hover:bg-primary hover:text-black transition">
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                )}
              </div>
              <div className="bg-gray-950 border border-gray-800 p-6 min-h-[220px]">
                {loadingText && (
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="animate-pulse">●</span>
                    <span>Writing your content...</span>
                  </div>
                )}
                {!loadingText && !output && (
                  <p className="text-gray-700 text-sm">Your generated content will appear here.</p>
                )}
                {!loadingText && output && (
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{output}</p>
                )}
              </div>
              {output && (
                <p className="text-gray-700 text-xs mt-2">
                  ✓ SEBI disclaimer auto-included · {platform.charAt(0).toUpperCase() + platform.slice(1)} format
                </p>
              )}
            </div>

            {loadingImage && (
              <div className="bg-gray-950 border border-gray-800 p-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="animate-pulse">●</span>
                  <span>Generating image... (~20 seconds)</span>
                </div>
              </div>
            )}

            {imageBase64 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">Generated Image</p>
                  <button onClick={handleDownloadImage}
                    className="text-xs text-primary border border-primary px-3 py-1 hover:bg-primary hover:text-black transition">
                    Download
                  </button>
                </div>
                <img src={`data:image/png;base64,${imageBase64}`} alt="Generated content" className="w-full border border-gray-800" />
                <p className="text-gray-700 text-xs mt-2">✓ SEBI disclaimer added · Ready to post</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentToolPage;
