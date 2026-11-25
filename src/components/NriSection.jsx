// src/components/NriSection.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NriSection = () => {
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
    <section className="bg-gray-950 py-24 px-6 md:px-16 border-t border-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="fade-item opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">For NRIs</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            India's growth story.<br />Your <span className="text-primary">global</span> opportunity.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Whether you're in the US, UAE, UK, or anywhere in the world — we help you invest in India seamlessly. GIFT City, NRE/NRO accounts, mutual funds, PMS, AIFs — all from the comfort of your home abroad.
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
            <Link
              to="/nri-investments"
              className="border border-gray-700 text-gray-300 font-semibold px-8 py-4 text-sm hover:border-primary hover:text-primary transition flex items-center gap-2"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right — Key highlights */}
        <div className="grid grid-cols-2 gap-6 fade-item opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "150ms" }}>
          {[
            { flag: "🇺🇸", label: "USA" },
            { flag: "🇦🇪", label: "UAE" },
            { flag: "🇬🇧", label: "UK" },
            { flag: "🇨🇦", label: "Canada" },
            { flag: "🇦🇺", label: "Australia" },
            { flag: "🇸🇬", label: "Singapore" },
          ].map((c) => (
            <div key={c.label} className="border border-gray-800 p-5 hover:border-primary transition">
              <p className="text-2xl mb-2">{c.flag}</p>
              <p className="text-white text-sm font-semibold">{c.label}</p>
              <p className="text-gray-600 text-xs mt-1">NRI clients served</p>
            </div>
          ))}
        </div>

      </div>

      {/* GIFT City strip */}
      <div className="mt-16 pt-12 border-t border-gray-800 max-w-7xl mx-auto fade-item opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: "300ms" }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">GIFT City Specialist</p>
            <p className="text-white text-lg font-bold">Invest in India without PAN, without Indian bank account, in USD — zero capital gains tax.</p>
          </div>
          <Link to="/nri-investments" className="text-primary text-sm font-semibold hover:underline flex items-center gap-2 flex-shrink-0">
            Explore GIFT City <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NriSection;
