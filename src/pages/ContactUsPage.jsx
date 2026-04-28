// src/pages/ContactUsPage.jsx
import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xovezbow", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.ok || result.success || response.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("There was a problem submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen font-sans">

      {/* Hero */}
      <div className="px-6 md:px-16 pt-24 pb-16 border-b border-gray-900">
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Get In Touch</p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight max-w-2xl">
          Begin your<br /><span className="text-primary">wealth</span> journey.
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-20">

        {/* Left — Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-10">Our Offices</h2>

          <div className="space-y-10">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Mumbai</p>
              <p className="text-white font-semibold mb-1">Worli Office</p>
              <p className="text-gray-400 text-sm leading-relaxed">1st Floor, 264-265, Dr Annie Besant Road,<br />Worli, Mumbai — 400030</p>
            </div>
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">Patna</p>
              <p className="text-white font-semibold mb-1">Head Office</p>
              <p className="text-gray-400 text-sm leading-relaxed">2nd Floor, 2B Durga Vihar,<br />S P Verma Road, Patna, Bihar — 800001</p>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-sm">
            <div>
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Phone</p>
              <a href="tel:7004016074" className="text-white hover:text-primary transition">+91 7004016074</a>
            </div>
            <div>
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
              <a href="https://wa.me/917021477258" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition">+91 7021477258</a>
            </div>
            <div>
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:support@mauryafinserv.com" className="text-white hover:text-primary transition">support@mauryafinserv.com</a>
            </div>
            <div>
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Working Hours</p>
              <p className="text-white">Monday – Saturday, 9 AM – 7 PM</p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          {submitted ? (
            <div className="h-full flex flex-col justify-center">
              <div className="text-5xl mb-6">✅</div>
              <h3 className="text-3xl font-black text-white mb-3">Message received.</h3>
              <p className="text-gray-400">Our team will get back to you within 48 hours.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-10">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  { name: "name", label: "Your Name", type: "text", required: true },
                  { name: "email", label: "Email Address", type: "email", required: true },
                  { name: "mobile", label: "Mobile Number", type: "tel", required: true },
                ].map((field) => (
                  <div key={field.name} className="border-b border-gray-800 pb-2">
                    <label className="text-gray-600 text-xs uppercase tracking-widest block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-700"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  </div>
                ))}
                <div className="border-b border-gray-800 pb-2">
                  <label className="text-gray-600 text-xs uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-gray-700 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-black font-bold px-10 py-4 text-sm tracking-wide hover:bg-white transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
