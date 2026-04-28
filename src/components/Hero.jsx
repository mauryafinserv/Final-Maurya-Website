// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

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
        alert("Thank you! Your details have been submitted.");
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setShowModal(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <section className="relative min-h-screen text-white flex items-center overflow-hidden">
      {/* Background Video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — more sophisticated than flat black */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-20 max-w-5xl">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Est. 1990s · Mumbai & Patna · ARN-112272
          </p>
          <h2 className="text-white text-lg md:text-xl font-semibold mb-4 tracking-wide">
            Maurya Shares & Stock Brokers Pvt. Ltd.
          </h2>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
            Creating<br />
            <span className="text-primary">Wealth,</span><br />
            for Generations.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-4 leading-relaxed">
            30 years of trust. AI-powered intelligence. Built for HNIs & NRIs who demand more than ordinary.
          </p>
          <p className="text-primary text-sm font-medium tracking-wider mb-10">
            ✦ Now Powered by AI-Driven Research & Insights ✦
          </p>
        </div>

        <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <button
            onClick={() => setShowModal(true)}
            className="bg-primary text-black px-8 py-4 font-bold text-sm tracking-wide hover:bg-white transition duration-300"
          >
            Begin Your Wealth Journey
          </button>
          <a
            href="/knowledge-corner"
            className="border border-white/30 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:border-primary hover:text-primary transition duration-300"
          >
            Explore Insights
          </a>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-none shadow-2xl w-full max-w-md p-8 text-black relative">
            <button className="absolute top-4 right-5 text-gray-400 hover:text-black text-2xl" onClick={() => setShowModal(false)}>×</button>
            <h3 className="text-2xl font-black mb-1">Begin Your Wealth Journey</h3>
            <p className="text-gray-500 text-sm mb-6">Our team will reach out within 48 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full border-b border-gray-300 px-0 py-3 text-sm focus:outline-none focus:border-black placeholder-gray-400" required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full border-b border-gray-300 px-0 py-3 text-sm focus:outline-none focus:border-black placeholder-gray-400" required />
              <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="w-full border-b border-gray-300 px-0 py-3 text-sm focus:outline-none focus:border-black placeholder-gray-400" required />
              <textarea name="message" placeholder="What are you looking for? (Optional)" rows={2} value={formData.message} onChange={handleChange} className="w-full border-b border-gray-300 px-0 py-3 text-sm focus:outline-none focus:border-black placeholder-gray-400 resize-none" />
              <button type="submit" className="w-full bg-black text-white font-bold py-4 text-sm tracking-wide hover:bg-primary hover:text-black transition mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
