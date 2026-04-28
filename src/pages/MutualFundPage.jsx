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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Mutual Fund Distribution</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Build a portfolio<br />that <span className="text-primary">outlives</span> you.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              We are AMFI-registered Mutual Fund Distributors (ARN-112272), helping HNIs, NRIs, families and corporates invest across all leading fund houses — goal-based, research-backed, and completely paperless.
            </p>
            <p className="text-gray-600 text-xs mb-8">Investment in mutual funds is subject to market risks.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">
                Begin Your Journey
              </button>
              <Link to="/mutual-fund-basics" className="border border-gray-700 text-gray-300 font-semibold px-8 py-4 text-sm hover:border-primary hover:text-primary transition flex items-center gap-2">
                Learn MF Basics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <img src="/images/mutual-fund.png" alt="Mutual Fund Investment" className="w-full h-auto object-cover" onError={(e) => { e.target.style.display = "none"; }} />
          </div>
        </div>
