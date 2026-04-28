// src/pages/LoanAgainstMfPage.jsx
import React, { useState } from "react";

const LoanAgainstMfPage = () => {
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

  const products = [
    {
      tag: "Loan Against Mutual Funds",
      headline: "Pledge your funds.\nKeep your returns.",
      desc: "Pledge your existing mutual fund units as collateral and get instant liquidity — without selling your investments. Your funds continue earning returns while you access the cash you need.",
      points: ["No need to redeem your MF investments", "Loan up to 50–80% of fund value", "Both equity and debt funds eligible", "Continue to earn returns on pledged units", "Quick digital processing"],
    },
    {
      tag: "Loan Against Stocks",
      headline: "Use your portfolio.\nFund your goals.",
      desc: "Pledge your listed equity shares to unlock instant funds — without exiting your stock positions. Stay invested, keep your dividends, and access liquidity when you need it most.",
      points: ["Retain ownership of your shares", "Continue receiving dividends", "Loan up to 50% of stock value", "NSE/BSE listed stocks eligible", "Flexible repayment options"],
    },
  ];

  const steps = [
    { no: "01", title: "Apply", desc: "Fill a simple application with your details and the securities you wish to pledge." },
    { no: "02", title: "Pledge", desc: "Securities are pledged digitally via your Demat account. You retain ownership." },
    { no: "03", title: "Get Funds", desc: "Loan amount disbursed to your bank account quickly after verification." },
    { no: "04", title: "Repay & Release", desc: "Repay at your convenience. Pledge released instantly on full repayment." },
  ];

  return (
    <section className="bg-black text-white font-sans">
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Loan Against Securities</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
          Liquidity without<br /><span className="text-primary">selling.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
          Unlock funds by pledging your mutual fund units or stocks — without disrupting your investment journey. Your wealth keeps growing while you access the capital you need.
        </p>
        <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">Apply for a Loan</button>
      </div>

      {/* Two Products */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto divide-y divide-gray-900">
          {products.map((p) => (
            <div key={p.tag} className="py-16 grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">{p.tag}</p>
                <h2 className="text-4xl font-black text-white mb-4 whitespace-pre-line">{p.headline}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="space-y-3">
                {p.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <span className="text-primary text-sm">✦</span>
                    <p className="text-gray-300 text-sm">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Four simple steps.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.no}>
                <p className="text-4xl font-black text-primary mb-3">{s.no}</p>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Need funds without selling?</h2>
            <p className="text-gray-500">Talk to our team and we\'ll find the right loan against your securities.</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-10 py-4 text-sm tracking-wide hover:bg-white transition flex-shrink-0">Apply for a Loan →</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-gray-800 w-full max-w-md p-8 relative">
            <button className="absolute top-4 right-5 text-gray-600 hover:text-white text-xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-2xl font-black text-white mb-1">Apply for a Loan</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 48 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[["name","Your Name","text"],["email","Email Address","email"],["mobile","Mobile Number","tel"]].map(([name,ph,type]) => (
                <div key={name} className="border-b border-gray-800 pb-2">
                  <input type={type} name={name} placeholder={ph} required value={formData[name]} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600" />
                </div>
              ))}
              <div className="border-b border-gray-800 pb-2">
                <select name="message" value={formData.message} onChange={handleChange} className="w-full bg-transparent text-gray-600 text-sm focus:outline-none">
                  <option value="">Select Loan Type</option>
                  <option>Loan Against Mutual Funds</option>
                  <option>Loan Against Stocks</option>
                  <option>Not Sure — Need Guidance</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-primary text-black font-bold py-4 text-sm tracking-wide hover:bg-white transition">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
export default LoanAgainstMfPage;
