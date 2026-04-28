// src/components/Testimonials.jsx
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  { name: "Dr. Abhishek Ranjan", message: "Excellent service and behavior. Truly a trusted partner for wealth management.", rating: 10 },
  { name: "Sujata Kumari", message: "Maurya Shares and Stock Brokers ke saath mera bahut he achha anubhav raha hai.", rating: 10 },
  { name: "Dr. Prem Kumar", message: "Professionalism, prompt response, and effective problem solving. My association with this organisation is more than 25 years.", rating: 9 },
  { name: "Prabhakar Tiwari", message: "I have had a very good experience with Maurya Shares and Brokers.", rating: 10 },
  { name: "Ajay Kumar", message: "I have been with Maurya Shares since 2015. My mutual funds gain has been excellent.", rating: 10 },
  { name: "Archit Sahu", message: "Has been amazing helping us solve our questions efficiently and with great care.", rating: 10 },
  { name: "Satish Agarwal", message: "Very good service with deep knowledge and a personal touch.", rating: 10 },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const pauseRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseRef.current) setCurrent(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getInitials = (name) => name.split(" ").map(n => n[0]).join("").slice(0, 2);

  return (
    <section
      className="bg-black py-24 px-6 md:px-16"
      onMouseEnter={() => pauseRef.current = true}
      onMouseLeave={() => pauseRef.current = false}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">Client Stories</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Trusted by families.<br />For generations.
          </h2>
        </div>

        {/* Featured testimonial — large */}
        <div className="mb-12 transition-all duration-700">
          <p className="text-2xl md:text-3xl text-white font-light leading-relaxed max-w-4xl mb-8">
            "{testimonials[current].message}"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold text-sm">
              {getInitials(testimonials[current].name)}
            </div>
            <div>
              <p className="text-white font-semibold">{testimonials[current].name}</p>
              <div className="flex gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-3 h-3 ${i < Math.round(testimonials[current].rating / 2) ? "text-primary" : "text-gray-700"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots + names */}
        <div className="flex flex-wrap gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
                current === i
                  ? "border-primary text-primary bg-primary/10"
                  : "border-gray-700 text-gray-500 hover:border-gray-500"
              }`}
            >
              {t.name.split(" ")[0]}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
