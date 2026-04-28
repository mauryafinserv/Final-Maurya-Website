// src/pages/NpsPage.jsx
import React, { useState } from "react";

const NpsPage = () => {
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
    { no: "01", title: "Extra ₹50,000 Tax Deduction", desc: "Over and above the ₹1.5 lakh 80C limit — NPS gives an additional ₹50,000 deduction under Section 80CCD(1B)." },
    { no: "02", title: "Market-Linked Returns", desc: "Your contributions are invested across equity, corporate bonds, and government securities — delivering inflation-beating returns over the long term." },
    { no: "03", title: "Low Cost Structure", desc: "NPS has one of the lowest fund management charges in the industry — maximising your corpus at retirement." },
    { no: "04", title: "Flexible Asset Allocation", desc: "Choose between Active Choice (you decide allocation) or Auto Choice (lifecycle-based). Switch fund managers anytime." },
    { no: "05", title: "Partial Withdrawal Allowed", desc: "After 3 years, partial withdrawal is allowed for specific purposes — higher education, home purchase, medical emergency." },
    { no: "06", title: "Annuity + Lumpsum at Retirement", desc: "At retirement, withdraw 60% as tax-free lumpsum. The remaining 40% is used to purchase an annuity for monthly pension." },
  ];

  return (
    <section className="bg-black text-white font-sans">
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">NPS — National Pension System</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
          Build your<br /><span className="text-primary">retirement</span> corpus.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
          The National Pension System is India's most tax-efficient retirement savings instrument — combining market-linked growth with an additional ₹50,000 tax deduction over and above 80C.
        </p>
        <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">Start Your NPS Journey</button>
      </div>

      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Why NPS</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 max-w-xl">Retire with confidence.</h2>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Start building your pension today.</h2>
            <p className="text-gray-500">The earlier you start, the larger your retirement corpus.</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-10 py-4 text-sm tracking-wide hover:bg-white transition flex-shrink-0">Speak with Our Team →</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-gray-800 w-full max-w-md p-8 relative">
            <button className="absolute top-4 right-5 text-gray-600 hover:text-white text-xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-2xl font-black text-white mb-1">Start Your NPS</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 48 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[["name","Your Name","text"],["email","Email Address","email"],["mobile","Mobile Number","tel"]].map(([name,ph,type]) => (
                <div key={name} className="border-b border-gray-800 pb-2">
                  <input type={type} name={name} placeholder={ph} required value={formData[name]} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600" />
                </div>
              ))}
              <div className="border-b border-gray-800 pb-2">
                <textarea name="message" placeholder="Any questions about NPS?" rows={2} value={formData.message} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600 resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-black font-bold py-4 text-sm tracking-wide hover:bg-white transition">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
export default NpsPage;