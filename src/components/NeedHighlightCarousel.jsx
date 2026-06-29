// src/components/NeedHighlightCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    tag: "Retirement",
    title: "Only 7% of Indians are financially prepared for retirement.",
    hook: "With no pension and rising healthcare costs, how will you fund your 30-year retirement?",
    cta: "Calculate your retirement need",
    link: "/calculators/retirement",
  },
  {
    tag: "Education",
    title: "A top MBA costs ₹25–30 lakhs today. In 15 years, it may cost ₹75 lakhs+.",
    hook: "Will your child compromise on their dreams because you didn't plan early?",
    cta: "Start your education goal plan",
    link: "/calculators/education",
  },
  {
    tag: "Inflation",
    title: "₹1 lakh in 2000 is worth only ₹31,000 today.",
    hook: "Your savings lose value every year. Is your money growing faster than inflation?",
    cta: "Check if your portfolio is inflation-proof",
    link: "/calculators/sip-fv",
  },
  {
    tag: "SIP",
    title: "Delaying SIPs by 5 years can cost you up to ₹60 lakhs.",
    hook: "The earlier you start, the lesser you need to invest. Time is your biggest asset.",
    cta: "See what your SIP can grow into",
    link: "/calculators/sip-fv",
  },
  {
    tag: "Insurance",
    title: "75% of Indian families have inadequate health or life insurance.",
    hook: "A single hospital bill or tragedy can derail your finances forever.",
    cta: "Talk to our insurance team",
    link: "/insurance-advisory",
  },
  {
    tag: "NRI",
    title: "Most NRIs miss out on tax-free, digital options like GIFT City.",
    hook: "Invest in India the smarter way — lower tax, better compliance, in your currency.",
    cta: "Explore GIFT City opportunities",
    link: "/nri-investments",
  },
  {
    tag: "Estate Planning",
    title: "₹2 lakh crore lies unclaimed due to missing wills and nominations.",
    hook: "Don't let your wealth end up in courts or claims departments.",
    cta: "Secure your legacy today",
    link: "/contact-us",
  },
];

const NeedHighlightCarousel = () => {
  const [current, setCurrent] = useState(0);
  const pauseRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseRef.current) setCurrent(prev => (prev + 1) % highlights.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const h = highlights[current];

  return (
    <section
      className="bg-black border-t border-b border-gray-900 py-20 px-6 md:px-16"
      onMouseEnter={() => pauseRef.current = true}
      onMouseLeave={() => pauseRef.current = false}
    >
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-12">
          Why You Need to Act Now
        </p>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 items-end">

          {/* Left — Big statement */}
          <div>
            <span className="text-xs border border-gray-700 text-gray-500 px-3 py-1 rounded-full mb-6 inline-block">
              {h.tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 transition-all duration-500">
              {h.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {h.hook}
            </p>
            <Link
              to={h.link}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-4 transition-all duration-300"
            >
              {h.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — Progress + Navigation */}
          <div className="flex flex-col items-start md:items-end gap-6">

            {/* Progress bar */}
            <div className="w-full md:w-64 space-y-2">
              {highlights.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-full flex items-center gap-3 group text-left"
                >
                  <div className={`h-px flex-1 transition-all duration-300 ${i === current ? "bg-primary" : "bg-gray-800"}`} />
                  <span className={`text-xs transition-all duration-300 ${i === current ? "text-primary font-semibold" : "text-gray-700"}`}>
                    {item.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Counter */}
            <p className="text-gray-700 text-xs font-mono">
              {String(current + 1).padStart(2, "0")} / {String(highlights.length).padStart(2, "0")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NeedHighlightCarousel;
