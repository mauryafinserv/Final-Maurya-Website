// src/pages/ContentToolPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

const WORKER_URL = "https://maurya-image-generator.adarshcharanpahari.workers.dev";
const WORKER_TOKEN = "maurya-mf-tool-2026-xK9pL3mN";

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
  const [user, setUser] = useState(null);
  const [postsUsed, setPostsUsed] = useState(0);
  const [imagesUsed, setImagesUsed] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("mf_user");
    const token = localStorage.getItem("mf_token");
    if (!stored || !token) {
      navigate("/login");
      return;
    }
    const u = JSON.parse(stored);
    setUser(u);
    setPostsUsed(u.posts_used || 0);
    setImagesUsed(u.images_used || 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("mf_token");
    localStorage.removeItem("mf_user");
    navigate("/login");
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    const token = localStorage.getItem("mf_token");

    setLoadingText(true);
    setLoadingImage(false);
    setOutput("");
    setImageBase64(null);
    setCopied(false);

    // Step 1 — check post limit then generate text via Cloudflare
    try {
      // Check limit first via Vercel
      const limitRes = await fetch("/api/generate-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ checkOnly: true }),
      });

      const limitData = await limitRes.json();

      if (limitData.limit_reached) {
        setOutput(`⚠️ ${limitData.error}`);
        setLoadingText(false);
        return;
      }

      // Generate text via Cloudflare Worker
      const textRes = await fetch(WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": WORKER_TOKEN,
        },
        body: JSON.stringify({
          type: "text",
          prompt,
          platform,
          contentType,
          firmName: user?.firm_name,
          arn: user?.arn,
        }),
      });

      const textData = await textRes.json();

      if (textData.content) {
        setOutput(textData.content);

        // Increment post count via Vercel
        const incrementRes = await fetch("/api/generate-content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ incrementOnly: true }),
        });
        const incrementData = await incrementRes.json();
        if (incrementData.usage) setPostsUsed(incrementData.usage.posts_used);

      } else {
        setOutput("Something went wrong. Please try again.");
      }
    } catch {
      setOutput("Error connecting to server. Please try again.");
    }
    setLoadingText(false);

    // Step 2 — check image limit then generate image via Cloudflare
    if (generateImage) {
      setLoadingImage(true);
      try {
        const checkRes = await fetch("/api/use-image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        const checkData = await checkRes.json();

        if (checkData.limit_reached) {
          setOutput(prev => prev + `\n\n⚠️ ${checkData.error}`);
          setLoadingImage(false);
          return;
        }

        if (checkData.usage) setImagesUsed(checkData.usage.images_used);

        const imgRes = await fetch(WORKER_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": WORKER_TOKEN,
          },
          body: JSON.stringify({
            type: "image",
            prompt,
            platform,
            contentType,
            firmName: user?.firm_name,
            arn: user?.arn,
          }),
        });

        const imgData = await imgRes.json();
        if (imgData.imageBase64) {
          setImageBase64(imgData.imageBase64);
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
  const postsLimit = user?.posts_limit || 3;
  const imagesLimit = user?.images_limit || 2;

  return (
    <section className="bg-black text-white font-sans min-h-screen">

      <div className="px-6 md:px-16 pt-24 pb-12 border-b border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-2">
                {user?.plan === 'pro' ? '⭐ Pro Account' : '🔹 Trial Account'} · {user?.arn}
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                MF Content <span className="text-primary">Generator</span>
              </h1>
              <p className="text-gray-400 text-sm">{user?.firm_name}</p>
            </div>
            <button onClick={handleLogout}
              className="text-xs text-gray-600 border border-gray-800 px-3 py-2 hover:text-white hover:border-gray-600 transition mt-2">
              Logout
            </button>
          </div>

          <div className="flex gap-6 mt-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Posts used</p>
              <div className="flex items-center gap-2">
                <div className="w-32 h-1.5 bg-gray-800 rounded-full">
                  <div className="h-1.5 bg-primary rounded-full transition-all"
                    style={{ width: `${Math.min((postsUsed / postsLimit) * 100, 100)}%` }} />
                </div>
                <span className="text-xs text-gray-400">{postsUsed}/{postsLimit}</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Images used</p>
              <div className="flex items-center gap-2">
                <div className="w-32 h-1.5 bg-gray-800 rounded-full">
                  <div className="h-1.5 bg-primary rounded-full transition-all"
                    style={{ width: `${Math.min((imagesUsed / imagesLimit) * 100, 100)}%` }} />
                </div>
                <span className="text-xs text-gray-400">{imagesUsed}/{imagesLimit}</span>
              </div>
            </div>
          </div>
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
                <span className="text-gray-600 text-xs ml-1">(~30 sec)</span>
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
                {output && !output.startsWith("⚠️") && (
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
                  <p className={`text-sm leading-relaxed whitespace-pre-wrap ${output.startsWith("⚠️") ? "text-yellow-400" : "text-gray-300"}`}>
                    {output}
                  </p>
                )}
              </div>
              {output && !output.startsWith("⚠️") && (
                <p className="text-gray-700 text-xs mt-2">
                  ✓ SEBI compliant · {user?.firm_name} · {user?.arn}
                </p>
              )}
            </div>

            {loadingImage && (
              <div className="bg-gray-950 border border-gray-800 p-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="animate-pulse">●</span>
                  <span>Generating image... (~30 seconds)</span>
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
                <p className="text-gray-700 text-xs mt-2">✓ SEBI disclaimer included · Ready to post</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentToolPage;
