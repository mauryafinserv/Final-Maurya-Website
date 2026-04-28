// src/pages/InsuranceAdvisoryPage.jsx
import React, { useState } from "react";

const InsuranceAdvisoryPage = () => {
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

  const types = [
    { title: "Term Life Insurance", desc: "Pure protection — maximum cover at the lowest cost. Ensures your family's financial security if something happens to you.", tag: "Protection" },
    { title: "Health Insurance", desc: "Comprehensive coverage for hospitalisation, critical illness, and medical expenses. For individuals and families.", tag: "Health" },
    { title: "ULIP", desc: "Unit Linked Insurance Plans — combining life cover with market-linked investment growth. Long-term wealth with protection.", tag: "Investment + Protection" },
  ];

  const providers = ["ICICI Prudential Life", "Star Health Insurance", "HDFC Life Insurance"];

  return (
    <section className="bg-black text-white font-sans">
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Insurance</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
          Protect what<br />matters <span className="text-primary">most.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
          Comprehensive life and health insurance solutions — curated to protect your family, your health, and your wealth. Because the best investment is the one that protects everything else.
        </p>
        <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">Explore Insurance Options</button>
      </div>

      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Coverage for every need.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {types.map((t) => (
              <div key={t.title}>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">{t.tag}</p>
                <h3 className="text-white text-2xl font-black mb-3">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Partners</p>
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

      <div className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Is your family protected?</h2>
            <p className="text-gray-500">Let us help you find the right coverage for your needs and budget.</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-10 py-4 text-sm tracking-wide hover:bg-white transition flex-shrink-0">Speak with Our Team →</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-gray-800 w-full max-w-md p-8 relative">
            <button className="absolute top-4 right-5 text-gray-600 hover:text-white text-xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-2xl font-black text-white mb-1">Let's Talk Insurance</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 48 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[["name","Your Name","text"],["email","Email Address","email"],["mobile","Mobile Number","tel"]].map(([name,ph,type]) => (
                <div key={name} className="border-b border-gray-800 pb-2">
                  <input type={type} name={name} placeholder={ph} required value={formData[name]} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600" />
                </div>
              ))}
              <div className="border-b border-gray-800 pb-2">
                <textarea name="message" placeholder="What coverage are you looking for?" rows={2} value={formData.message} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600 resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-black font-bold py-4 text-sm tracking-wide hover:bg-white transition">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
export default InsuranceAdvisoryPage;