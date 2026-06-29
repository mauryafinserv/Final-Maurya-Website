// src/pages/NriInvestmentPage.jsx
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const NriInvestmentPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", country: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xovezbow", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.ok || result.success || res.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", mobile: "", country: "", message: "" });
      } else { alert("Something went wrong. Please try again."); }
    } catch { alert("There was a problem submitting the form."); }
    finally { setLoading(false); }
  };

  const countries = [
    { name: "United States", flag: "🇺🇸", note: "FBAR & FATCA compliance. NRE/NRO accounts. MF investments allowed." },
    { name: "United Arab Emirates", flag: "🇦🇪", note: "No income tax in UAE. India-UAE DTAA benefit. GIFT City ideal." },
    { name: "United Kingdom", flag: "🇬🇧", note: "India-UK DTAA. NRE interest tax-free in India." },
    { name: "Canada", flag: "🇨🇦", note: "India-Canada DTAA. MF investments via NRE/NRO accounts." },
    { name: "Australia", flag: "🇦🇺", note: "India-Australia DTAA. GIFT City investments in AUD possible." },
    { name: "Singapore", flag: "🇸🇬", note: "India-Singapore DTAA. Strong GIFT City connectivity." },
  ];

  const giftCityBenefits = [
    { title: "No Indian PAN Required", desc: "Invest without needing an Indian PAN card — a major barrier removed for NRIs." },
    { title: "No Indian Bank Account", desc: "Invest directly from your overseas bank account in USD, GBP, EUR, AUD or other currencies." },
    { title: "Zero Capital Gains Tax", desc: "Gains from GIFT City AIF investments are exempt from Indian capital gains tax." },
    { title: "USD Denominated", desc: "Invest and receive returns in foreign currency — no forced INR conversion." },
    { title: "Free Repatriation", desc: "Move profits back to your overseas account freely — no restrictions." },
    { title: "Global Regulatory Standards", desc: "IFSCA follows international norms — compliance is straightforward for global investors." },
  ];

  const investmentOptions = [
    { no: "01", title: "Mutual Funds via NRE/NRO", desc: "Invest in all leading AMCs — equity, debt, hybrid, and international funds. Repatriable from NRE accounts.", tag: "Most Popular" },
    { no: "02", title: "GIFT City AIFs", desc: "Access India's private equity and alternative investment markets without PAN, in USD, with zero capital gains tax.", tag: "Premium" },
    { no: "03", title: "PMS Distribution", desc: "High-conviction, personalised portfolios managed by professional fund managers. Min ₹50 lakhs.", tag: "HNI" },
    { no: "04", title: "Equity via PIS Account", desc: "Invest directly in NSE/BSE listed stocks through a Portfolio Investment Scheme account.", tag: "Direct Equity" },
    { no: "05", title: "NRE Fixed Deposits", desc: "Tax-free interest in India, fully repatriable. Safe, stable returns for conservative NRI investors.", tag: "Low Risk" },
    { no: "06", title: "NPS for NRIs", desc: "Build a retirement corpus in India. Tax-efficient, government-regulated, long-term wealth building.", tag: "Retirement" },
  ];

  const accounts = [
    { type: "NRE Account", full: "Non-Resident External", currency: "INR", tax: "Tax-free interest", repatriation: "Fully repatriable", bestFor: "Parking foreign earnings in India" },
    { type: "NRO Account", full: "Non-Resident Ordinary", currency: "INR", tax: "Taxable interest", repatriation: "Up to $1M/year", bestFor: "Managing India-based income (rent, dividends)" },
    { type: "FCNR Account", full: "Foreign Currency Non-Resident", currency: "USD/GBP/EUR etc.", tax: "Tax-free interest", repatriation: "Fully repatriable", bestFor: "Avoiding currency risk — stay in foreign currency" },
  ];

  const steps = [
    { no: "01", title: "Connect with Our NRI Desk", desc: "Reach us on WhatsApp or email. We understand your country-specific requirements and DTAA benefits." },
    { no: "02", title: "Choose Your Investment Route", desc: "NRE/NRO for mutual funds, GIFT City for AIFs, PIS for equities. We guide you to the right structure." },
    { no: "03", title: "Complete KYC", desc: "Digital KYC with passport, visa/OCI, overseas address proof. Fully paperless and quick." },
    { no: "04", title: "Start Investing", desc: "Begin your investment journey from anywhere in the world. We handle everything on the ground." },
  ];

  return (
    <section className="bg-black text-white font-sans">

      {/* Hero */}
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">NRI Investments</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              India's growth.<br />Your <span className="text-primary">wealth.</span><br />From anywhere.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you're in the US, UAE, UK, or anywhere in the world — we help you invest in India's growth story in the most tax-efficient, compliant, and seamless way possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/917021477258"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition"
              >
                Talk to Our NRI Desk
              </a>
              <button
                onClick={() => setShowModal(true)}
                className="border border-gray-700 text-gray-300 font-semibold px-8 py-4 text-sm hover:border-primary hover:text-primary transition flex items-center gap-2"
              >
                Request a Callback <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <p className="text-gray-600 text-xs mt-6">
              WhatsApp: +91 7021477258 &nbsp;|&nbsp; support@mauryafinserv.com &nbsp;|&nbsp; Mon–Sat, 9 AM–7 PM IST
            </p>
          </div>
          <div>
            <img
              src="/images/nri-investment.jpg"
              alt="NRI Investments India"
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
        </div>
      </div>

      {/* Countries We Serve */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Global Reach</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">NRIs we serve,<br />across the world.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {countries.map((c) => (
              <div key={c.name} className="border-t border-gray-800 pt-6">
                <p className="text-3xl mb-3">{c.flag}</p>
                <p className="text-white font-bold mb-2">{c.name}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GIFT City — Special Section */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">GIFT City — India's IFSC</p>
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Invest in India.<br />Without the barriers.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                GIFT City (Gujarat International Finance Tec-City) is India's first International Financial Services Centre — a deemed foreign jurisdiction designed to rival Singapore and Dubai. For NRIs, it removes every traditional barrier to investing in India.
              </p>
              <p className="text-gray-600 text-sm">No PAN. No Indian bank account. No capital gains tax. In your currency.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {giftCityBenefits.map((b) => (
                <div key={b.title}>
                  <p className="text-primary text-sm mb-1">✦</p>
                  <p className="text-white text-sm font-semibold mb-1">{b.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <a
              href="https://wa.me/917021477258"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition inline-block"
            >
              Speak to a GIFT City Specialist →
            </a>
          </div>
        </div>
      </div>

      {/* Investment Options */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">What You Can Invest In</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Every opportunity.<br />One partner.</h2>
          <div className="divide-y divide-gray-900">
            {investmentOptions.map((f) => (
              <div key={f.no} className="flex items-start gap-8 py-8 group">
                <span className="text-gray-700 text-sm font-mono mt-1 w-8 flex-shrink-0">{f.no}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white text-xl font-bold group-hover:text-primary transition">{f.title}</h3>
                    <span className="text-xs border border-primary text-primary px-2 py-0.5 rounded-full">{f.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NRE vs NRO vs FCNR */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Account Types</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">NRE, NRO or FCNR?<br />Here's the difference.</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 pr-8 text-gray-500 text-xs uppercase tracking-widest font-normal">Account</th>
                  <th className="text-left py-4 pr-8 text-gray-500 text-xs uppercase tracking-widest font-normal">Currency</th>
                  <th className="text-left py-4 pr-8 text-gray-500 text-xs uppercase tracking-widest font-normal">Tax on Interest</th>
                  <th className="text-left py-4 pr-8 text-gray-500 text-xs uppercase tracking-widest font-normal">Repatriation</th>
                  <th className="text-left py-4 text-gray-500 text-xs uppercase tracking-widest font-normal">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900">
                {accounts.map((a) => (
                  <tr key={a.type} className="group">
                    <td className="py-5 pr-8">
                      <p className="text-primary font-bold">{a.type}</p>
                      <p className="text-gray-600 text-xs">{a.full}</p>
                    </td>
                    <td className="py-5 pr-8 text-gray-300">{a.currency}</td>
                    <td className="py-5 pr-8 text-gray-300">{a.tax}</td>
                    <td className="py-5 pr-8 text-gray-300">{a.repatriation}</td>
                    <td className="py-5 text-gray-400 text-sm">{a.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Taxation */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Taxation</p>
            <h2 className="text-4xl font-black text-white mb-6">Smart tax.<br />More returns.</h2>
            <p className="text-gray-400 leading-relaxed">
              As an NRI, India's Double Tax Avoidance Agreements (DTAA) with 90+ countries mean you don't pay tax twice on the same income. Combined with GIFT City's zero capital gains structure, your post-tax returns can be significantly higher.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { label: "Equity STCG (held < 1 year)", value: "20%" },
              { label: "Equity LTCG above ₹1.25L (held > 1 year)", value: "12.5%" },
              { label: "NRE FD Interest", value: "Tax Free in India" },
              { label: "GIFT City Capital Gains", value: "Zero in India" },
              { label: "DTAA Benefit", value: "Available in 90+ countries" },
            ].map((t) => (
              <div key={t.label} className="flex justify-between items-center border-b border-gray-800 pb-4">
                <p className="text-gray-400 text-sm">{t.label}</p>
                <p className="text-primary font-bold text-sm">{t.value}</p>
              </div>
            ))}
            <p className="text-gray-600 text-xs">Consult a tax advisor for your specific situation. DTAA benefits vary by country.</p>
          </div>
        </div>
      </div>

      {/* How to Start */}
      <div className="px-6 md:px-16 py-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Getting Started</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">Four steps to<br />start investing.</h2>
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

      {/* CTA */}
      <div className="px-6 md:px-16 py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Ready to invest in India?</h2>
            <p className="text-gray-500 mb-2">Our NRI desk is available Monday to Saturday, 9 AM – 7 PM IST.</p>
            <p className="text-gray-600 text-sm">WhatsApp: +91 7021477258 &nbsp;|&nbsp; support@mauryafinserv.com</p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href="https://wa.me/917021477258"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black font-bold px-10 py-4 text-sm tracking-wide hover:bg-white transition text-center"
            >
              WhatsApp Our NRI Desk →
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="border border-gray-700 text-gray-300 font-semibold px-10 py-4 text-sm hover:border-primary hover:text-primary transition"
            >
              Request a Callback
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-black border border-gray-800 w-full max-w-md p-8 relative">
            <button className="absolute top-4 right-5 text-gray-600 hover:text-white text-xl" onClick={() => setShowModal(false)}>×</button>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-white mb-2">Request Received!</h3>
                <p className="text-gray-400 text-sm">Our NRI desk will reach out within 48 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-white mb-1">NRI Desk Callback</h3>
                <p className="text-gray-500 text-sm mb-6">We'll call you back within 48 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    ["name", "Your Full Name", "text"],
                    ["email", "Email Address", "email"],
                    ["mobile", "Mobile / WhatsApp Number", "tel"],
                  ].map(([name, ph, type]) => (
                    <div key={name} className="border-b border-gray-800 pb-2">
                      <input type={type} name={name} placeholder={ph} required value={formData[name]} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600" />
                    </div>
                  ))}
                  <div className="border-b border-gray-800 pb-2">
                    <select name="country" value={formData.country} onChange={handleChange} required className="w-full bg-transparent text-gray-400 text-sm focus:outline-none">
                      <option value="">Country of Residence</option>
                      {["United States", "United Arab Emirates", "United Kingdom", "Canada", "Australia", "Singapore", "Other"].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="border-b border-gray-800 pb-2">
                    <textarea name="message" placeholder="What are you looking to invest in?" rows={2} value={formData.message} onChange={handleChange} className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-600 resize-none" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-primary text-black font-bold py-4 text-sm tracking-wide hover:bg-white transition disabled:opacity-50">
                    {loading ? "Submitting..." : "Request Callback →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default NriInvestmentPage;
