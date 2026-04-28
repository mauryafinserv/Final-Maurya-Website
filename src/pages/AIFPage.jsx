// src/pages/AIFPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AIFPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });

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
      } else { alert("Something went wrong."); }
    } catch { alert("There was a problem submitting the form."); }
  };

  const categories = [
    { cat: "Category I", title: "Growth & Social Impact", desc: "Venture capital, angel funds, SME funds, social ventures, and infrastructure. Government-encouraged sectors with long-term growth potential.", lock: "3+ years" },
    { cat: "Category II", title: "Private Equity & Debt", desc: "Private equity funds, debt funds, real estate funds, and fund of funds. No leverage. Access to premium unlisted opportunities.", lock: "3-7 years" },
    { cat: "Category III", title: "Complex Trading Strategies", desc: "Hedge funds, PIPE funds, and long-short equity strategies. Closest to global hedge funds — for sophisticated investors.", lock: "Varies" },
  ];

  const providers = ["ICICI Prudential AIF", "Aditya Birla Sun Life AIF", "Nippon India AIF"];

  return (
    <section className="bg-black text-white font-sans">

      {/* Hero */}
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">AIF Distribution</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
          Access the<br /><span className="text-primary">alternative.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-4">
          Alternative Investment Funds unlock private equity, hedge strategies, and real assets — asset classes unavailable through traditional mutual funds. Minimum ₹1 crore as per SEBI regulations.
        </p>
        <p className="text-gray-600 text-sm mb-8">For sophisticated investors with long investment horizons and high risk appetite.</p>
        <div className="flex flex-wrap gap-4">
          <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">
            Explore AIF Options
          </button>
          <Link to="/aif-explained" className="border border-gray-700 text-gray-300 font-semibold px-8 py-4 text-sm hover:border-primary hover:text-primary transition flex items-center gap-2">
            AIF Basics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* 3 Categories */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">SEBI Categories</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Three categories.<br />Infinite possibilities.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {categories.map((c) => (
              <div key={c.cat}>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">{c.cat}</p>
                <h3 className="text-white text-2xl font-black mb-3">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                <p className="text-gray-700 text-xs">Typical lock-in: <span className="text-gray-400">{c.lock}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GIFT City */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">NRI Special</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">GIFT City AIFs for NRIs.</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              NRIs can access Indian alternative investments through GIFT City — without Indian PAN, in USD, with zero capital gains tax in India on select structures.
            </p>
            <Link to="/nri-investments" className="text-primary text-sm font-semibold hover:underline flex items-center gap-2">
              Learn about NRI Investments <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {["No Indian PAN Required", "USD Denominated", "Zero Capital Gains Tax", "Free Repatriation"].map((item) => (
              <div key={item} className="border border-gray-800 p-5">
                <p className="text-primary text-xs mb-2">✦</p>
                <p className="text-white text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Providers */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our AIF Partners</p>
          <h2 className="text-4xl font-black text-white mb-12">Providers we work with.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {providers.map((p) => (
              <div key={p} className="border border-gray-800 p-6 hover:border-primary transition">
                <p className="text-white text-sm font-semibold">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Ready to go alternative?</h2>
            <p className="text-gray-500">Our team will guide you through AIF selection and onboarding.</p>
            <p className="text-gray-600 text-xs mt-2">Investment in AIF is subject to market risks. Minimum ₹1 crore.</p>
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
            <h3 className="text-2xl font-black text-white mb-1">Let's Talk AIF</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 48 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[["name","Your Name","text"],["email","Email Address","email"],["mobile","Mobile Number","tel"]].map(([name,ph,type]) => (
                <div key={name} className="border-b border-gray-800 pb-2">
                  <input type={type} name={name} placeholder={ph} required value={formData[name]} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600" />
                </div>
              ))}
              <div className="border-b border-gray-800 pb-2">
                <textarea name="message" placeholder="Your investment goals" rows={2} value={formData.message} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600 resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-black font-bold py-4 text-sm tracking-wide hover:bg-white transition">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default AIFPage;
