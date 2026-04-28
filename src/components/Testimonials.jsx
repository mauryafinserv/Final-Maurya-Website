// src/components/Testimonials.jsx
import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  { name: "Dr. Abhishek Ranjan", message: "Excellent service and behavior. Truly a trusted partner for wealth management.", rating: 10, image: "/testimonials/abhishek.jpg" },
  { name: "Sujata Kumari", message: "Maurya Shares and Stock Brokers ke saath mera bahut he achha anubhav raha hai.", rating: 10, image: "/testimonials/sujata.jpg" },
  { name: "Dr. Prem Kumar", message: "Professionalism, prompt response, and effective problem solving. My association with this organisation is more than 25 years.", rating: 9, image: "/testimonials/prem.jpg" },
  { name: "Prabhakar Tiwari", message: "I have had a very good experience with Maurya Shares and Brokers.", rating: 10, image: "/testimonials/prabhakar.jpg" },
  { name: "Ajay Kumar", message: "I have been with Maurya Shares since 2015. My mutual funds gain has been excellent.", rating: 10, image: "/testimonials/ajay.jpg" },
  { name: "Archit Sahu", message: "Has been amazing helping us solve our questions efficiently and with great care.", rating: 10, image: "/testimonials/archit.jpg" },
  { name: "Satish Agarwal", message: "Very good service with deep knowledge and a personal touch.", rating: 10, image: "/testimonials/satish.jpg" },
];

const getInitials = (name) => name.split(" ").map(n => n[0]).join("").slice(0, 2);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const pauseRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseRef.current) setCurrent(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

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

        {/* Featured Testimonial */}
        <div className="flex flex-col md:flex-row items-start gap-10 mb-14 transition-all duration-700">

          {/* Photo */}
          <div className="flex-shrink-0">
            <img
              src={t.image}
              alt={t.name}
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-primary"
            />
            <div
              style={{ display: 'none' }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary bg-gray-900 flex items-center justify-center text-primary font-bold text-2xl"
            >
              {getInitials(t.name)}
            </div>
          </div>

          {/* Quote */}
          <div className="flex-1">
            <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-6">
              "{t.message}"
            </p>
            <p className="text-white font-semibold text-lg mb-1">{t.name}</p>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.round(t.rating / 2) ? "text-primary" : "text-gray-700"}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Name pills to switch */}
        <div className="flex flex-wrap gap-3">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                current === i
                  ? "border-primary text-primary bg-primary/10"
                  : "border-gray-700 text-gray-500 hover:border-gray-500"
              }`}
            >
              <img
                src={t.image}
                alt={t.name}
                onError={(e) => { e.target.style.display = 'none'; }}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-xs">{t.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
