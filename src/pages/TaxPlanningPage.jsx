// src/pages/TaxPlanningPage.jsx
import React, { useState } from "react";

const TaxPlanningPage = () => {
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
    { no: "01", title: "ELSS — Tax Saving Mutual Funds", desc: "Invest in Equity Linked Savings Schemes to claim deduction up to ₹1.5 lakh under Section 80C, with the shortest lock-in among tax-saving instruments (3 years)." },
    { no: "02", title: "Capital Gains Planning", desc: "Strategic timing of redemptions and switches to minimise short-term and long-term capital gains tax. We help you plan before year-end." },
    { no: "03", title: "NPS for Tax Saving", desc: "Additional ₹50,000 deduction under Section 80CCD(1B) through NPS — over and above the ₹1.5 lakh 80C limit." },
    { no: "04", title: "HUF & Family Structuring", desc: "Tax-efficient structuring through HUF accounts, income splitting, and family trust planning — in collaboration with qualified CAs." },
    { no: "05", title: "DTAA for NRIs", desc: "Double Tax Avoidance Agreement benefits for NRIs — ensuring you don't pay tax twice on the same income in India and abroad." },
    { no: "06", title: "Year-End Tax Planning", desc: "Proactive review of your portfolio before March 31 — identifying opportunities to harvest losses, book profits, and optimise your tax liability." },
  ];

  return (
    <section className="bg-black text-white font-sans">
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Tax Planning</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-3xl mb-6">
          Keep more of<br />what you <span className="text-primary">earn.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-4">
          Strategic tax planning in collaboration with qualified tax professionals — helping you minimise tax liability, maximise savings, and invest smarter.
        </p>
        <p className="text-gray-600 text-xs mb-8">Tax planning services are provided in collaboration with qualified chartered accountants and tax professionals. We do not provide independent tax advice.</p>
        <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition">Start Tax Planning</button>
      </div>

      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Our Approach</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 max-w-xl">Smart tax. Smart wealth.</h2>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Ready to plan smarter?</h2>
            <p className="text-gray-500">Our team will help you build a tax-efficient wealth strategy.</p>
          </div>
          <button onClick={() => setShowModal(true)} className="bg-primary text-black font-bold px-10 py-4 text-sm tracking-wide hover:bg-white transition flex-shrink-0">Speak with Our Team →</button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-gray-800 w-full max-w-md p-8 relative">
            <button className="absolute top-4 right-5 text-gray-600 hover:text-white text-xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-2xl font-black text-white mb-1">Let's Plan Your Taxes</h3>
            <p className="text-gray-500 text-sm mb-6">We'll get back to you within 48 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[["name","Your Name","text"],["email","Email Address","email"],["mobile","Mobile Number","tel"]].map(([name,ph,type]) => (
                <div key={name} className="border-b border-gray-800 pb-2">
                  <input type={type} name={name} placeholder={ph} required value={formData[name]} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600" />
                </div>
              ))}
              <div className="border-b border-gray-800 pb-2">
                <textarea name="message" placeholder="What tax challenge can we help with?" rows={2} value={formData.message} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600 resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-black font-bold py-4 text-sm tracking-wide hover:bg-white transition">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
export default TaxPlanningPage;