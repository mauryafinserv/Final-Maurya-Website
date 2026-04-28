// src/components/OurEdge.jsx
import React, { useEffect, useRef } from "react";
import { Building2, BrainCircuit, Users, Briefcase, SlidersHorizontal, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Transparency & Ethics", subtitle: "Zero Conflict. Pure Trust.", desc: "No hidden charges, no conflict of interest. Your trust is our most valuable asset.", tag: "Zero Conflict" },
  { icon: <Building2 className="h-6 w-6" />, title: "30 Years of Legacy", subtitle: "Trusted Across Generations", desc: "Three decades of partnering with HNI families, NRIs, and corporates to build enduring wealth.", tag: "Est. 1990s" },
  { icon: <BrainCircuit className="h-6 w-6" />, title: "AI-Powered Intelligence", subtitle: "Research Meets Technology", desc: "Claude AI and NGen market intelligence — institutional-grade insights for every client.", tag: "Powered by AI" },
  { icon: <Briefcase className="h-6 w-6" />, title: "One-Stop Financial Partner", subtitle: "Everything Under One Roof", desc: "MF, PMS, AIF, equity, insurance, NPS — your entire financial life, one trusted relationship.", tag: "Complete Solutions" },
  { icon: <SlidersHorizontal className="h-6 w-6" />, title: "Personalised Planning", subtitle: "Your Goals. Your Strategy.", desc: "Bespoke strategies tailored to your life stage, risk appetite, and long-term aspirations.", tag: "Tailored for You" },
  { icon: <Users className="h-6 w-6" />, title: "HNI & NRI Focused", subtitle: "Built for Those Who Think Beyond Ordinary", desc: "Curated solutions for high-net-worth individuals, NRI investors, and family offices.", tag: "Exclusive Access" },
];

const OurEdge = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0"); }),
      { threshold: 0.1 }
    );
    const items = ref.current?.querySelectorAll(".fade-item");
    items?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-32 px-6 md:px-16" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 fade-item opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">What Sets Us Apart</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            The Maurya Edge
          </h2>
        </div>

        {/* 3x2 Grid — clean, no borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="fade-item opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-primary mb-4">{pillar.icon}</div>
              <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-2">{pillar.tag}</p>
              <h3 className="text-white text-xl font-bold mb-2">{pillar.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-24 pt-12 border-t border-gray-800 fade-item opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-gray-500 text-base italic max-w-2xl">
            "Timeless wisdom. Intelligent wealth. Built for those who aspire to leave a legacy."
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurEdge;
