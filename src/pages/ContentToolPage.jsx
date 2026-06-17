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

const ContentToolPage = () => {
  const [contentType, setContentType] = useState("sip");
  const [platform, setPlatform] = useState("instagram");
  const [prompt, setPrompt] = useState("");
  const [generateImage, setGenerateImage] = useState(false);
  const [output, setOutput] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setOutput("");
    setImageUrl(null);
    setCopied(false);

    try {
      const response = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType, platform, prompt, generateImage }),
      });

      const data = await response.json();
      if (data.content) {
        setOutput(data.content);
      } else {
        setOutput("Something went wrong. Please try again.");
      }
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      }
    } catch {
      setOutput("Error connecting to server. Please try again.");
    }

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadImage = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "maurya-content-image.png";
    link.target = "_blank";
    link.click();
  };

  return (
    <section className="bg-black text-white font-sans min-h-screen">

      {/* Header */}
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

      {/* Tool */}
      <div className="px-6 md:px-16 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Left — Inputs */}
          <div className="space-y-8">

            {/* Content Type */}
            <div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">Content Type</p>
              <div className="flex flex-wrap gap-2">
                {CONTENT_TYPES.map((ct) => (
                  <button
                    key={ct.id}
                    onClick={() => setContentType(ct.id)}
                    className={`px-4 py-2 text-xs font-semibold border transition ${
                      contentType === ct.id
                        ? "bg-primary text-black border-primary"
                        : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {ct.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">Platform</p>
              <div className="flex gap-2">
                {PLATFORMS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`px-4 py-2 text-xs font-semibold border transition ${
                      platform === p.id
                        ? "bg-primary text-black border-primary"
                        : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt */}
            <div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">What do you want to say?</p>
              <textarea
                rows={5}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Write about why SIP is better than lump sum during volatile markets. Target first-time investors."
                className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700 resize-none"
              />
            </div>

            {/* Image toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGenerateImage(!generateImage)}
                className={`w-10 h-5 rounded-full transition-colors relative ${generateImage ? "bg-primary" : "bg-gray-700"}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${generateImage ? "translate-x-5" : "translate-x-0.5"}`} />
              </button>
              <span className="text-sm text-gray-400">
                Also generate an image <span className="text-gray-600 text-xs">(+₹0.42 per image)</span>
              </span>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className={`w-full py-4 text-sm font-bold tracking-wide transition ${
                loading || !prompt.trim()
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-primary text-black hover:bg-white"
              }`}
            >
              {loading ? "Generating..." : "Generate Content →"}
            </button>

          </div>

          {/* Right — Output */}
          <div className="space-y-6">

            {/* Text output */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">Output</p>
                {output && (
                  <button
                    onClick={handleCopy}
                    className="text-xs text-primary border border-primary px-3 py-1 hover:bg-primary hover:text-black transition"
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                )}
              </div>

              <div className="bg-gray-950 border border-gray-800 p-6 min-h-[220px]">
                {loading && (
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="animate-pulse">●</span>
                    <span>Writing your content...</span>
                  </div>
                )}
                {!loading && !output && (
                  <p className="text-gray-700 text-sm">Your generated content will appear here.</p>
                )}
                {!loading && output && (
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{output}</p>
                )}
              </div>

              {output && (
                <p className="text-gray-700 text-xs mt-2">
                  ✓ SEBI disclaimer auto-included · {platform.charAt(0).toUpperCase() + platform.slice(1)} format
                </p>
              )}
            </div>

            {/* Image output */}
            {(loading && generateImage) && (
              <div className="bg-gray-950 border border-gray-800 p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                  <span className="animate-pulse">●</span>
                  <span>Generating image...</span>
                </div>
              </div>
            )}

            {imageUrl && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">Generated Image</p>
                  <button
                    onClick={handleDownloadImage}
                    className="text-xs text-primary border border-primary px-3 py-1 hover:bg-primary hover:text-black transition"
                  >
                    Download
                  </button>
                </div>
                <img
                  src={imageUrl}
                  alt="Generated content"
                  className="w-full border border-gray-800"
                />
              </div>
            )}

          </div>

        </div>
      </div>

    </section>
  );
};

export default ContentToolPage;
