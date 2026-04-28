// src/pages/EquityBrokingPage.jsx
import React, { useState } from "react";

const EquityBrokingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xovezbow", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(formData) });
      const result = await res.json();
      if (result.ok || result.success || res.status === 200) { alert("Thank you! We will get back to you within 48 hours."); setFormData({ name: "", email: "", mobile: "", message: "" }); setShowModal(false); }
      else alert("Something went wrong.");
    } catch { alert("There was a problem submitting the form."); }
  };

  const features = [
    { no: "01", title: "Powered by Kotak Securities", desc: "We operate as an Authorised Person of Kotak Securities Limited (SEBI Reg: INZ000200137) — one of India's most trusted broking platforms." },
    { no: "02", title: "Research-Backed Insights", desc: "We share data pointers and research from institutional sources — helping you make informed decisions without noise." },
    { no: "03", title: "Long-Term Investing Focus", desc: "Our approach is built for wealth creation — not trading. We help you identify quality businesses and stay invested." },
    { no: "04", title: "Demat & Trading Account", desc: "Seamless account opening through Kotak Securities. One platform for equity, derivatives, and currency markets." },
    { no: "05", title: "NSE & BSE Access", desc: "Trade across both exchanges — NSE and BSE — with full market depth and order routing." },
    { no: "06", title: "Portfolio Tracking", desc: "Monitor your equity holdings alongside your mutual fund portfolio — a complete wealth picture in one place." },
  ];

  return (
    <section className="bg-black text-white font-sans">
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Equity Broking</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
          Invest in the<br />best <span className="text-primary">businesses.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-4">
          Access Indian equity markets through Kotak Securities — one of India's most trusted broking platforms. Research-backed, long-term focused, wealth-oriented.
        </p>
        <p className="text-gray-600 text-xs mb-8">We provide data and research support. We do not recommend specific stocks. All investments are subject to market risks.</p>
        <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">Open Your Account</button>
      </div>

      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 max-w-xl">The equity advantage.</h2>
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

      <div className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Ready to invest in equities?</h2>
            <p className="text-gray-500">Open your Demat and trading account through Kotak Securities today.</p>
            <p className="text-gray-600 text-xs mt-2">Equity investments are subject to market risks. We do not provide stock recommendations.</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-10 py-4 text-sm tracking-wide hover:bg-white transition flex-shrink-0">Get Started →</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-gray-800 w-full max-w-md p-8 relative">
            <button className="absolute top-4 right-5 text-gray-600 hover:text-white text-xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-2xl font-black text-white mb-1">Open Your Account</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 48 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[["name","Your Name","text"],["email","Email Address","email"],["mobile","Mobile Number","tel"]].map(([name,ph,type]) => (
                <div key={name} className="border-b border-gray-800 pb-2">
                  <input type={type} name={name} placeholder={ph} required value={formData[name]} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600" />
                </div>
              ))}
              <div className="border-b border-gray-800 pb-2">
                <textarea name="message" placeholder="Any questions?" rows={2} value={formData.message} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600 resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-black font-bold py-4 text-sm tracking-wide hover:bg-white transition">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
export default EquityBrokingPage;