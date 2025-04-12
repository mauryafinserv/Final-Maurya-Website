import React from "react";

const points = [
  "📈 30+ Years of Financial Expertise",
  "💰 Managing ₹300+ Crores of AUM",
  "👨‍👩‍👧‍👦 2000+ Happy Investors & Families",
  "🛠️ One-Stop Solution for All Financial Needs",
  "🚀 Clients have Consistently Generated Alpha Over the Market",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Why Choose Maurya?
        </h2>
        <ul className="text-gray-600 space-y-4 text-lg text-left md:text-center">
          {points.map((point, index) => (
            <li key={index} className="flex items-start justify-center gap-2">
              <span className="text-xl">✅</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;