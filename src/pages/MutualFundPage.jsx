// src/pages/MutualFundPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MutualFundPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [targetAmount, setTargetAmount] = useState("");
  const [years, setYears] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [monthlySIP, setMonthlySIP] = useState(null);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xovezbow", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.ok || result.success || response.status === 200) {
        alert("Thank you! We will get back to you within 48 hours.");
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setShowModal(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch { alert("There was a problem submitting the form."); }
  };

  const calculateSIP = () => {
    const r = parseFloat(returnRate) / 100 / 12;
    const n = parseFloat(years) * 12;
    const fv = parseFloat(targetAmount);
    if (!r || !n || !fv) return;
    const sip = (fv * r) / ((Math.pow(1 + r, n) - 1) * (1 + r));
    setMonthlySIP(sip);
  };

  const features = [
    { no: "01", title: "Paperless & Seamless", desc: "100% digital onboarding and transaction processing — no paperwork, no hassle." },
    { no: "02", title: "Goal-Based Planning", desc: "We build portfolios around your life goals — retirement, education, home, or wealth creation." },
    { no: "03", title: "All AMCs, One Platform", desc: "Access funds from all leading AMCs — HDFC, SBI, Nippon, Mirae, PPFAS and more." },
    { no: "04", title: "No Hidden Charges", desc: "Full transparency on all transactions. Zero advisory fees — we earn only from AMC commission." },
    { no: "05", title: "Regular Portfolio Review", desc: "Periodic reviews to keep your portfolio aligned with your goals and market conditions." },
    { no: "06", title: "AI-Powered Research", desc: "Our recommendations are backed by Claude AI and NGen market intelligence." },
  ];

  const inputClass = "w-full bg-gray-900 border-b border-gray-700 px-0 py-3 text-white text-sm focus:outline-none focus:border-primary placeholder-gray-600";

  return (
    <section className="bg-black text-white font-sans">

      {/* Hero */}
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Mutual Fund Distribution</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
          Build a portfolio<br />that <span className="text-primary">outlives</span> you.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
          We are AMFI-registered Mutual Fund Distributors (ARN-112272), helping HNIs, NRIs, families and corporates invest across all leading fund houses — goal-based, research-backed, and completely paperless.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">
            Begin Your Journey
          </button>
          <Link to="/mutual-fund-basics" className="border border-gray-700 text-gray-300 font-semibold px-8 py-4 text-sm hover:border-primary hover:text-primary transition flex items-center gap-2">
            Learn MF Basics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Why Maurya — Apple numbered list */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Why Maurya</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 max-w-xl">
            The Maurya difference.
          </h2>
          <div className="divide-y divide-gray-900">
            {features.map((f) => (
              <div key={f.no} className="flex items-start gap-8 py-8 group">
                <span className="text-gray-700 text-sm font-mono mt-1 w-8 flex-shrink-0">{f.no}</span>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Calculator */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Quick Calculator</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">How much SIP do you need?</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Enter your goal, time horizon, and expected returns to calculate your required monthly SIP.</p>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-gray-600 text-xs uppercase tracking-widest block mb-2">Target Amount (₹)</label>
              <input type="number" placeholder="e.g. 10000000" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="text-gray-600 text-xs uppercase tracking-widest block mb-2">Time Horizon (Years)</label>
              <input type="number" placeholder="e.g. 10" value={years} onChange={e => setYears(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="text-gray-600 text-xs uppercase tracking-widest block mb-2">Expected Annual Return (%)</label>
              <input type="number" placeholder="e.g. 12" value={returnRate} onChange={e => setReturnRate(e.target.value)} className={inputClass} />
            </div>
            <button onClick={calculateSIP} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">
              Calculate
            </button>
            {monthlySIP && (
              <div className="pt-4 border-t border-gray-800">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Monthly SIP Required</p>
                <p className="text-4xl font-black text-primary">₹{Number(monthlySIP).toLocaleString("en-IN", { maximumFractionDigits: 0 })}</p>
                <p className="text-gray-600 text-xs mt-2">Investments are subject to market risks. Returns are not guaranteed.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* More Calculators */}
      <div className="px-6 md:px-16 py-16 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 text-sm mb-6">Explore all our financial calculators:</p>
          <div className="flex flex-wrap gap-3">
            {[
              ["SIP Future Value", "/calculators/sip-fv"],
              ["SIP Goal", "/calculators/sip-goal"],
              ["Lumpsum Calculator", "/calculators/lumpsum-fv"],
              ["SWP Calculator", "/calculators/swp"],
              ["Step-Up SIP", "/calculators/step-up-sip"],
              ["Retirement", "/calculators/retirement"],
              ["Education", "/calculators/education"],
            ].map(([name, link]) => (
              <Link key={name} to={link} className="border border-gray-800 text-gray-400 text-xs px-4 py-2 hover:border-primary hover:text-primary transition">
                {name} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Ready to start investing?</h2>
            <p className="text-gray-500">Our team will guide you every step of the way.</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-10 py-4 text-sm tracking-wide hover:bg-white transition flex-shrink-0">
            Speak with Our Team →
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-gray-800 w-full max-w-md p-8 relative">
            <button className="absolute top-4 right-5 text-gray-600 hover:text-white text-xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-2xl font-black text-white mb-1">Let's Talk</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 48 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[["name","Your Name","text"],["email","Email Address","email"],["mobile","Mobile Number","tel"]].map(([name,ph,type]) => (
                <div key={name} className="border-b border-gray-800 pb-2">
                  <input type={type} name={name} placeholder={ph} required value={formData[name]} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600" />
                </div>
              ))}
              <div className="border-b border-gray-800 pb-2">
                <textarea name="message" placeholder="What are you looking for?" rows={2} value={formData.message} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600 resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-black font-bold py-4 text-sm tracking-wide hover:bg-white transition">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default MutualFundPage;
