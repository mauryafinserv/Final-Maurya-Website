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

const LANGUAGES = [
  { id: "English", label: "English" },
  { id: "Hindi", label: "हिंदी" },
  { id: "Marathi", label: "मराठी" },
  { id: "Tamil", label: "தமிழ்" },
  { id: "Telugu", label: "తెలుగు" },
  { id: "Gujarati", label: "ગુજરાતી" },
  { id: "Bengali", label: "বাংলা" },
  { id: "Kannada", label: "ಕನ್ನಡ" },
  { id: "Malayalam", label: "മലയാളം" },
];

const WORKER_URL = "https://maurya-image-generator.adarshcharanpahari.workers.dev";
const WORKER_TOKEN = "maurya-mf-tool-2026-xK9pL3mN";

const addOverlayToImage = (base64, firmName, arn, logoUrl, brandColour) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const brandingHeight = 54;
        const footerHeight = 80;
        canvas.width = img.width;
        canvas.height = img.height + brandingHeight + footerHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        // Branding bar
        ctx.fillStyle = "#0a1628";
        ctx.fillRect(0, img.height, canvas.width, brandingHeight);
        ctx.fillStyle = brandColour || "#C9A84C";
        ctx.fillRect(0, img.height, canvas.width, 2);

        const drawText = () => {
          ctx.fillStyle = brandColour || "#C9A84C";
          ctx.textAlign = logoUrl ? "right" : "center";
          ctx.font = "bold 15px Arial, sans-serif";
          ctx.fillText(
            `${firmName || "Your Firm"} | ${arn || "ARN-XXXXXX"} | AMFI Registered Mutual Fund Distributor`,
            logoUrl ? canvas.width - 10 : canvas.width / 2,
            img.height + 32
          );

          // Footer
          ctx.fillStyle = "#050d1a";
          ctx.fillRect(0, img.height + brandingHeight, canvas.width, footerHeight);
          ctx.fillStyle = brandColour || "#C9A84C";
          ctx.fillRect(0, img.height + brandingHeight, canvas.width, 1);
          ctx.fillStyle = "#cccccc";
          ctx.textAlign = "center";
          ctx.font = "13px Arial, sans-serif";
          ctx.fillText(
            "Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.",
            canvas.width / 2, img.height + brandingHeight + 24
          );
          ctx.fillStyle = "#999999";
          ctx.font = "12px Arial, sans-serif";
          ctx.fillText(
            "Past performance is not indicative of future returns. This content is for educational purposes only.",
            canvas.width / 2, img.height + brandingHeight + 46
          );
          ctx.fillStyle = "#777777";
          ctx.font = "11px Arial, sans-serif";
          ctx.fillText(
            "Not financial advice. Please read all scheme related documents carefully before investing.",
            canvas.width / 2, img.height + brandingHeight + 66
          );

          resolve(canvas.toDataURL("image/png").split(",")[1]);
        };

        // Draw logo if available
        if (logoUrl) {
          const logo = new Image();
          logo.crossOrigin = "anonymous";
          logo.onload = () => {
            const logoH = brandingHeight - 10;
            const logoW = logo.width * (logoH / logo.height);
            ctx.drawImage(logo, 8, img.height + 5, logoW, logoH);
            drawText();
          };
          logo.onerror = () => drawText();
          logo.src = logoUrl;
        } else {
          drawText();
        }
      } catch (e) {
        resolve(base64);
      }
    };
    img.onerror = () => resolve(base64);
    img.src = `data:image/png;base64,${base64}`;
  });
};

const getDaysLeft = (cycleStart) => {
  if (!cycleStart) return null;
  const start = new Date(cycleStart);
  const reset = new Date(start);
  reset.setDate(reset.getDate() + 30);
  const today = new Date();
  const diff = Math.ceil((reset - today) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
};

const ContentToolPage = () => {
  const [contentType, setContentType] = useState("sip");
  const [platform, setPlatform] = useState("instagram");
  const [language, setLanguage] = useState("English");
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
  const [cycleStart, setCycleStart] = useState(null);
  const [postWarning, setPostWarning] = useState("");
  const [imageWarning, setImageWarning] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("mf_user");
    const token = localStorage.getItem("mf_token");
    if (!stored || !token) { navigate("/login"); return; }
    const u = JSON.parse(stored);
    setUser(u);
    setPostsUsed(u.posts_used || 0);
    setImagesUsed(u.images_used || 0);
    setCycleStart(u.cycle_start || null);

    fetch("/api/me", { headers: { "Authorization": `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => {
        if (data.user) {
          setPostsUsed(data.user.posts_used || 0);
          setImagesUsed(data.user.images_used || 0);
          setCycleStart(data.user.cycle_start || null);
          const updated = { ...u, ...data.user };
          localStorage.setItem("mf_user", JSON.stringify(updated));
          setUser(updated);
        }
      })
      .catch(() => {});
  }, []);

  const updateLocalStorage = (key, value) => {
    const stored = JSON.parse(localStorage.getItem("mf_user") || "{}");
    stored[key] = value;
    localStorage.setItem("mf_user", JSON.stringify(stored));
  };

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
    setPostWarning("");
    setImageWarning("");

    try {
      const limitRes = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({ checkOnly: true }),
      });
      const limitData = await limitRes.json();
      if (limitData.limit_reached) {
        setPostWarning(limitData.error);
        if (imagesUsed >= imagesLimit) {
          setImageWarning(`You have used all ${imagesLimit} images this cycle.`);
        }
        setLoadingText(false);
        return;
      }
    } catch {}

    try {
      const textRes = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Auth-Token": WORKER_TOKEN },
        body: JSON.stringify({ type: "text", prompt, platform, contentType, language, firmName: user?.firm_name, arn: user?.arn }),
      });
      const textData = await textRes.json();
      if (textData.content) {
        setOutput(textData.content);
        try {
          const incrementRes = await fetch("/api/generate-content", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
            body: JSON.stringify({ incrementOnly: true }),
          });
          const incrementData = await incrementRes.json();
          if (incrementData.usage) {
            setPostsUsed(incrementData.usage.posts_used);
            updateLocalStorage("posts_used", incrementData.usage.posts_used);
          }
        } catch {}
      } else {
        setOutput("Something went wrong. Please try again.");
      }
    } catch {
      setOutput("Error connecting to server. Please try again.");
    }
    setLoadingText(false);

    if (generateImage) {
      setLoadingImage(true);
      try {
        const checkRes = await fetch("/api/use-image", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        });
        const checkData = await checkRes.json();
        if (checkData.limit_reached) {
          setImageWarning(checkData.error);
          setLoadingImage(false);
          return;
        }
        if (checkData.usage) {
          setImagesUsed(checkData.usage.images_used);
          updateLocalStorage("images_used", checkData.usage.images_used);
        }
        const imgRes = await fetch(WORKER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Auth-Token": WORKER_TOKEN },
          body: JSON.stringify({ type: "image", prompt, platform, contentType, language, firmName: user?.firm_name, arn: user?.arn }),
        });
        const imgData = await imgRes.json();
        if (imgData.imageBase64) {
          const withOverlay = await addOverlayToImage(
            imgData.imageBase64,
            user?.firm_name,
            user?.arn,
            user?.logo_url || null,
            user?.brand_colour || "#C9A84C"
          );
          setImageBase64(withOverlay);
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
    link.download = `${user?.arn || "content"}-image.png`;
    link.click();
  };

  const loading = loadingText || loadingImage;
  const postsLimit = user?.posts_limit || 3;
  const imagesLimit = user?.images_limit || 2;
  const daysLeft = getDaysLeft(cycleStart);

  return (
    <section className="bg-black text-white font-sans min-h-screen">

      <div className="px-6 md:px-16 pt-24 pb-10 border-b border-gray-900">
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
            <div className="flex gap-2 mt-2">
              <button onClick={() => navigate("/settings")}
                className="text-xs text-gray-400 border border-gray-800 px-3 py-2 hover:text-primary hover:border-primary transition">
                ⚙️ Settings
              </button>
              <button onClick={handleLogout}
                className="text-xs text-gray-600 border border-gray-800 px-3 py-2 hover:text-white hover:border-gray-600 transition">
                Logout
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-4 items-end">
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
            {daysLeft !== null && (
              <div>
                <p className="text-xs text-gray-500 mb-1">Cycle resets in</p>
                <span className={`text-xs font-semibold ${daysLeft <= 5 ? "text-yellow-400" : "text-gray-400"}`}>
                  🔄 {daysLeft} day{daysLeft !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="space-y-7">
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
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">Language</p>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((l) => (
                  <button key={l.id} onClick={() => setLanguage(l.id)}
                    className={`px-4 py-2 text-xs font-semibold border transition ${language === l.id ? "bg-primary text-black border-primary" : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"}`}>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-3">What do you want to say?</p>
              <textarea rows={5} value={prompt} onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Why SIP is better than lump sum during volatile markets. Target first-time investors."
                className="w-full bg-gray-950 border border-gray-800 text-white text-sm p-4 focus:outline-none focus:border-primary placeholder-gray-700 resize-none" />
              <p className="text-gray-700 text-xs mt-1">You can type your prompt in any language too.</p>
            </div>

            <div className="flex items-center gap-3">
              <div onClick={() => setGenerateImage(!generateImage)}
                className={`w-10 h-6 rounded-full transition-colors relative flex-shrink-0 cursor-pointer ${generateImage ? "bg-primary" : "bg-gray-700"}`}>
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${generateImage ? "translate-x-5" : "translate-x-1"}`} />
              </div>
              <span className="text-sm text-gray-400">
                Also generate an image
                <span className="text-gray-600 text-xs ml-1">(~30 sec)</span>
              </span>
            </div>

            <button onClick={handleGenerate} disabled={loading || !prompt.trim()}
              className={`w-full py-4 text-sm font-bold tracking-wide transition ${loading || !prompt.trim() ? "bg-gray-800 text-gray-600 cursor-not-allowed" : "bg-primary text-black hover:bg-white"}`}>
              {loadingText ? "Writing content..." : loadingImage ? "Generating image..." : "Generate Content →"}
            </button>

            {postWarning && (
              <div className="border border-yellow-600 bg-yellow-950 px-4 py-3 rounded">
                <p className="text-yellow-400 text-xs font-semibold">⚠️ Post Limit Reached</p>
                <p className="text-yellow-300 text-xs mt-1">{postWarning}</p>
                <p className="text-yellow-600 text-xs mt-1">Contact us to upgrade your plan or increase your limit.</p>
              </div>
            )}
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
                  <p className="text-sm leading-relaxed whitespace-pre-wrap text-gray-300">{output}</p>
                )}
              </div>
              {output && (
                <p className="text-gray-700 text-xs mt-2">
                  ✓ SEBI compliant · {user?.firm_name} · {user?.arn} · {language}
                </p>
              )}
            </div>

            {imageWarning && (
              <div className="border border-yellow-600 bg-yellow-950 px-4 py-3 rounded">
                <p className="text-yellow-400 text-xs font-semibold">⚠️ Image Limit Reached</p>
                <p className="text-yellow-300 text-xs mt-1">{imageWarning}</p>
                <p className="text-yellow-600 text-xs mt-1">Contact us to upgrade your plan or increase your limit.</p>
              </div>
            )}

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
                <p className="text-gray-700 text-xs mt-2">✓ {user?.firm_name} · {user?.arn} · SEBI compliant · Ready to post</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentToolPage;
