// src/pages/PMSPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PMSPage = () => {
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

  const features = [
    { no: "01", title: "Personalised Portfolio", desc: "Tailored to your risk profile, return expectations, and long-term goals — unlike one-size-fits-all funds." },
    { no: "02", title: "Direct Ownership", desc: "Securities are held directly in your Demat account — full transparency and control at all times." },
    { no: "03", title: "Expert Active Management", desc: "Portfolios dynamically managed by professionals to capitalise on opportunities and mitigate risks." },
    { no: "04", title: "High-Conviction Strategies", desc: "Concentrated, focused portfolios built around high-potential ideas with research-backed conviction." },
    { no: "05", title: "Tax Efficiency", desc: "Strategies optimised for tax savings through loss harvesting and thoughtful profit booking." },
    { no: "06", title: "Detailed Reporting", desc: "Advanced analytics, XIRR tracking, and transparent performance updates — always in your hands." },
  ];

  const providers = ["ICICI Prudential PMS", "Aditya Birla Sun Life PMS", "Motilal Oswal PMS", "PPFAS PMS"];

  return (
    <section className="bg-black text-white font-sans">

      {/* Hero */}
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">PMS Distribution</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Wealth managed<br />with <span className="text-primary">conviction.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Portfolio Management Services for HNIs seeking personalised, professionally managed equity portfolios. Minimum investment ₹50 lakhs as per SEBI guidelines.
            </p>
            <p className="text-gray-600 text-sm mb-8">Suitable for investors with ₹1.2 Cr+ investable surplus and a 3-5 year horizon.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">
                Explore PMS Options
              </button>
              <Link to="/pms-types" className="border border-gray-700 text-gray-300 font-semibold px-8 py-4 text-sm hover:border-primary hover:text-primary transition flex items-center gap-2">
                PMS Basics <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <img src="/images/pms.png" alt="Portfolio Management Services" className="w-full h-auto object-cover rounded-sm" onError={(e) => { e.target.style.display = "none"; }} />
          </div>
        </div>

      {/* Providers */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our PMS Partners</p>
          <h2 className="text-4xl font-black text-white mb-12">Providers we work with.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Ready to explore PMS?</h2>
            <p className="text-gray-500">Our team will help you identify the right strategy for your wealth.</p>
            <p className="text-gray-600 text-xs mt-2">Investment in PMS is subject to market risks. Minimum investment ₹50 lakhs.</p>
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
            <h3 className="text-2xl font-black text-white mb-1">Let's Talk PMS</h3>
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

export default PMSPage;
