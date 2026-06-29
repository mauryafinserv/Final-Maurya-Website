// src/components/SamridhiSection.jsx
import React, { useEffect, useRef } from "react";

const sampleQuestions = [
  "How do I start investing as an NRI?",
  "What is the minimum investment for PMS?",
  "How much SIP do I need to retire at 60?",
  "What is GIFT City and how does it benefit me?",
  "How do I start a mutual fund SIP?",
  "What is the difference between NRE and NRO accounts?",
];

const SamridhiSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0");
      }),
      { threshold: 0.1 }
    );
    const items = ref.current?.querySelectorAll(".fade-item");
    items?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const openSamridhi = (question = "") => {
    // Dispatch custom event to open Samridhi bubble
    window.dispatchEvent(new CustomEvent("openSamridhi", { detail: { question } }));
  };

  return (
    <section className="bg-gray-950 py-24 px-6 md:px-16 border-t border-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Introduction */}
        <div className="fade-item opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Meet Samridhi</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Your AI wealth<br />assistant. Always<br /><span className="text-primary">available.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Samridhi is Maurya's AI-powered wealth assistant — trained on 30 years of our expertise. She can answer your investment questions, help you understand products, and connect you with our team — anytime, day or night.
          </p>
          <div className="space-y-3 text-sm text-gray-500">
            <p className="flex items-center gap-2"><span className="text-primary">✦</span> Available 24/7 — even on weekends</p>
            <p className="flex items-center gap-2"><span className="text-primary">✦</span> Answers in English and Hindi</p>
            <p className="flex items-center gap-2"><span className="text-primary">✦</span> Connects you to our team when needed</p>
          </div>
        </div>

        {/* Right — Sample questions + CTA */}
        <div className="fade-item opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "150ms" }}>
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-5">Ask Samridhi anything — try these:</p>
          <div className="space-y-3 mb-8">
            {sampleQuestions.map((q) => (
              <button
                key={q}
                onClick={() => openSamridhi(q)}
                className="w-full text-left border border-gray-800 px-5 py-4 text-gray-300 text-sm hover:border-primary hover:text-primary transition-all duration-200 flex items-center justify-between group"
              >
                <span>"{q}"</span>
                <span className="text-gray-700 group-hover:text-primary transition text-lg">→</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => openSamridhi()}
            className="bg-primary text-black font-bold px-8 py-4 text-sm tracking-wide hover:bg-white transition w-full"
          >
            Chat with Samridhi →
          </button>
          <p className="text-gray-700 text-xs mt-3 text-center">
            Powered by Claude AI · Not a SEBI registered advisor
          </p>
        </div>

      </div>
    </section>
  );
};

export default SamridhiSection;
