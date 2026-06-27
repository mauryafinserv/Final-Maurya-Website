// src/pages/SettingsPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const BRAND_COLOURS = [
  "#C9A84C", "#E63946", "#2196F3", "#4CAF50", "#9C27B0",
  "#FF5722", "#00BCD4", "#FF9800", "#3F51B5", "#009688",
  "#F44336", "#8BC34A", "#673AB7", "#03A9F4", "#FFC107",
  "#795548", "#607D8B", "#E91E63", "#CDDC39", "#FF6F00",
];

const getDaysLeft = (cycleStart) => {
  if (!cycleStart) return null;
  const start = new Date(cycleStart);
  const reset = new Date(start);
  reset.setDate(reset.getDate() + 30);
  const today = new Date();
  const diff = Math.ceil((reset - today) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
};

const SettingsPage = () => {
  const [user, setUser] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [brandColour, setBrandColour] = useState("#C9A84C");
  const [savingLogo, setSavingLogo] = useState(false);
  const [savingColour, setSavingColour] = useState(false);
  const [logoSuccess, setLogoSuccess] = useState("");
  const [colourSuccess, setColourSuccess] = useState("");
  const [logoError, setLogoError] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("mf_user");
    const token = localStorage.getItem("mf_token");
    if (!stored || !token) { navigate("/login"); return; }

    const u = JSON.parse(stored);
    setUser(u);
    setBrandColour(u.brand_colour || "#C9A84C");
    if (u.logo_url) setLogoPreview(u.logo_url);

    // Fetch fresh data
    fetch("/api/me", { headers: { "Authorization": `Bearer ${token}` } })
      .then(r => r.json())
      .then(data => {
        if (data.user) {
          const updated = { ...u, ...data.user };
          localStorage.setItem("mf_user", JSON.stringify(updated));
          setUser(updated);
          setBrandColour(data.user.brand_colour || "#C9A84C");
          if (data.user.logo_url) setLogoPreview(data.user.logo_url);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate type
    if (!["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
      setLogoError("Only PNG, JPG, or WEBP files allowed.");
      return;
    }

    // Validate size (500KB)
    if (file.size > 500 * 1024) {
      setLogoError("File size must be under 500KB.");
      return;
    }

    setLogoError("");
    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleLogoUpload = async () => {
    if (!logoFile) return;
    setSavingLogo(true);
    setLogoSuccess("");
    setLogoError("");

    try {
      const token = localStorage.getItem("mf_token");
      const formData = new FormData();
      formData.append("logo", logoFile);

      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (data.logo_url) {
        setLogoSuccess("Logo saved successfully!");
        setLogoFile(null);
        // Update localStorage
        const stored = JSON.parse(localStorage.getItem("mf_user") || "{}");
        stored.logo_url = data.logo_url;
        localStorage.setItem("mf_user", JSON.stringify(stored));
        setUser(prev => ({ ...prev, logo_url: data.logo_url }));
      } else {
        setLogoError(data.error || "Failed to upload logo.");
      }
    } catch {
      setLogoError("Network error. Please try again.");
    }
    setSavingLogo(false);
  };

  const handleColourSave = async () => {
    setSavingColour(true);
    setColourSuccess("");
    try {
      const token = localStorage.getItem("mf_token");
      const res = await fetch("/api/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({ brand_colour: brandColour }),
      });
      const data = await res.json();
      if (data.success) {
        setColourSuccess("Brand colour saved!");
        const stored = JSON.parse(localStorage.getItem("mf_user") || "{}");
        stored.brand_colour = brandColour;
        localStorage.setItem("mf_user", JSON.stringify(stored));
        setUser(prev => ({ ...prev, brand_colour: brandColour }));
      }
    } catch {}
    setSavingColour(false);
    setTimeout(() => setColourSuccess(""), 3000);
  };

  const handlePasswordChange = async () => {
    setPasswordError("");
    setPasswordSuccess("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("All fields are required.");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    setSavingPassword(true);
    try {
      const token = localStorage.getItem("mf_token");
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({ current_password: currentPassword, new_password: newPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setPasswordSuccess("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setPasswordError(data.error || "Failed to update password.");
      }
    } catch {
      setPasswordError("Network error. Please try again.");
    }
    setSavingPassword(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("mf_token");
    localStorage.removeItem("mf_user");
    navigate("/login");
  };

  const postsLimit = user?.posts_limit || 3;
  const imagesLimit = user?.images_limit || 2;
  const postsUsed = user?.posts_used || 0;
  const imagesUsed = user?.images_used || 0;
  const daysLeft = getDaysLeft(user?.cycle_start);

  return (
    <section className="bg-black text-white font-sans min-h-screen">

      {/* Header */}
      <div className="px-6 md:px-16 pt-24 pb-10 border-b border-gray-900">
        <div className="max-w-4xl mx-auto flex items-start justify-between">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-2">
              {user?.plan === "pro" ? "⭐ Pro Account" : "🔹 Trial Account"} · {user?.arn}
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              Account <span className="text-primary">Settings</span>
            </h1>
            <p className="text-gray-400 text-sm">{user?.firm_name}</p>
          </div>
          <div className="flex gap-3 mt-2">
            <button onClick={() => navigate("/content-tool")}
              className="text-xs text-primary border border-primary px-3 py-2 hover:bg-primary hover:text-black transition">
              ← Content Tool
            </button>
            <button onClick={handleLogout}
              className="text-xs text-gray-600 border border-gray-800 px-3 py-2 hover:text-white hover:border-gray-600 transition">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-12">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* ── Subscription Details ── */}
          <div className="bg-gray-950 border border-gray-800 p-6">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">Subscription</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-gray-500 text-xs mb-1">Plan</p>
                <p className="text-white font-bold text-sm">{user?.plan === "pro" ? "⭐ Pro" : "🔹 Trial"}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Posts used</p>
                <p className="text-white font-bold text-sm">{postsUsed} / {postsLimit}</p>
                <div className="w-full h-1 bg-gray-800 rounded-full mt-1">
                  <div className="h-1 bg-primary rounded-full" style={{ width: `${Math.min((postsUsed / postsLimit) * 100, 100)}%` }} />
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Images used</p>
                <p className="text-white font-bold text-sm">{imagesUsed} / {imagesLimit}</p>
                <div className="w-full h-1 bg-gray-800 rounded-full mt-1">
                  <div className="h-1 bg-primary rounded-full" style={{ width: `${Math.min((imagesUsed / imagesLimit) * 100, 100)}%` }} />
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-1">Cycle resets in</p>
                <p className={`font-bold text-sm ${daysLeft !== null && daysLeft <= 5 ? "text-yellow-400" : "text-white"}`}>
                  {daysLeft !== null ? `🔄 ${daysLeft} day${daysLeft !== 1 ? "s" : ""}` : "—"}
                </p>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t border-gray-800">
              <p className="text-gray-600 text-xs">To upgrade your plan or increase limits, contact us at <a href="mailto:support@mauryafinserv.com" className="text-primary hover:underline">support@mauryafinserv.com</a> or <a href="https://wa.me/917021477258" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a>.</p>
            </div>
          </div>

          {/* ── Firm Details ── */}
          <div className="bg-gray-950 border border-gray-800 p-6">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">Firm Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Full Name", value: user?.full_name },
                { label: "Firm Name", value: user?.firm_name },
                { label: "ARN Number", value: user?.arn },
                { label: "Email", value: user?.email },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value || "—"}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-xs mt-4">To update firm details, contact support.</p>
          </div>

          {/* ── Logo Upload ── */}
          <div className="bg-gray-950 border border-gray-800 p-6">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Firm Logo</p>
            <p className="text-gray-500 text-xs mb-5">Your logo will appear on every generated image. PNG, JPG or WEBP — max 500KB.</p>

            <div className="flex items-start gap-6">
              {/* Preview */}
              <div className="w-24 h-24 border border-gray-700 bg-gray-900 flex items-center justify-center flex-shrink-0">
                {logoPreview ? (
                  <img src={logoPreview} alt="Logo preview" className="w-full h-full object-contain p-2" />
                ) : (
                  <p className="text-gray-700 text-xs text-center">No logo uploaded</p>
                )}
              </div>

              <div className="flex-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleLogoChange}
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                />
                <button onClick={() => fileInputRef.current.click()}
                  className="px-4 py-2 text-xs font-semibold border border-gray-700 text-gray-400 hover:border-primary hover:text-primary transition mb-3">
                  {logoPreview ? "Change Logo" : "Upload Logo"}
                </button>

                {logoError && <p className="text-red-400 text-xs mb-2">{logoError}</p>}
                {logoSuccess && <p className="text-green-400 text-xs mb-2">✓ {logoSuccess}</p>}

                {logoFile && (
                  <div>
                    <p className="text-gray-500 text-xs mb-2">Selected: {logoFile.name} ({(logoFile.size / 1024).toFixed(1)}KB)</p>
                    <button onClick={handleLogoUpload} disabled={savingLogo}
                      className="px-4 py-2 text-xs font-bold bg-primary text-black hover:bg-white transition disabled:opacity-50">
                      {savingLogo ? "Uploading..." : "Save Logo →"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Brand Colour ── */}
          <div className="bg-gray-950 border border-gray-800 p-6">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Brand Colour</p>
            <p className="text-gray-500 text-xs mb-5">This colour will be used as the accent colour on your generated images.</p>

            <div className="flex flex-wrap gap-3 mb-5">
              {BRAND_COLOURS.map(colour => (
                <button
                  key={colour}
                  onClick={() => setBrandColour(colour)}
                  className={`w-8 h-8 rounded-full border-2 transition ${brandColour === colour ? "border-white scale-110" : "border-transparent hover:border-gray-500"}`}
                  style={{ backgroundColor: colour }}
                  title={colour}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border border-gray-600" style={{ backgroundColor: brandColour }} />
                <span className="text-gray-400 text-xs font-mono">{brandColour}</span>
              </div>
              <button onClick={handleColourSave} disabled={savingColour}
                className="px-4 py-2 text-xs font-bold bg-primary text-black hover:bg-white transition disabled:opacity-50">
                {savingColour ? "Saving..." : "Save Colour →"}
              </button>
              {colourSuccess && <p className="text-green-400 text-xs">✓ {colourSuccess}</p>}
            </div>
          </div>

          {/* ── Password Reset ── */}
          <div className="bg-gray-950 border border-gray-800 p-6">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-5">Change Password</p>

            <div className="space-y-4 max-w-sm">
              {[
                { label: "Current Password", value: currentPassword, setter: setCurrentPassword },
                { label: "New Password", value: newPassword, setter: setNewPassword },
                { label: "Confirm New Password", value: confirmPassword, setter: setConfirmPassword },
              ].map(field => (
                <div key={field.label}>
                  <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{field.label}</p>
                  <input
                    type="password"
                    value={field.value}
                    onChange={e => field.setter(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 text-white text-sm px-3 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
              ))}

              {passwordError && <p className="text-red-400 text-xs">⚠️ {passwordError}</p>}
              {passwordSuccess && <p className="text-green-400 text-xs">✓ {passwordSuccess}</p>}

              <button onClick={handlePasswordChange} disabled={savingPassword}
                className="w-full py-3 text-sm font-bold bg-primary text-black hover:bg-white transition disabled:opacity-50">
                {savingPassword ? "Updating..." : "Update Password →"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
