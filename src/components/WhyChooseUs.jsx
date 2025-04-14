import React from "react";
import { ShieldCheck, Briefcase, BarChart3, MapPin } from "lucide-react";

const features = [
  {
    title: "30+ Years of Legacy",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    desc: "Building wealth for generations with deep expertise in financial planning."
  },
  {
    title: "Research-Driven Advice",
    icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
    desc: "Our recommendations are backed by insights, analysis, and long-term thinking."
  },
  {
    title: "One-Stop Financial Partner",
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    desc: "From mutual funds to insurance, everything you need under one roof."
  },
  {
    title: "Trusted Across Cities",
    icon: <MapPin className="w-8 h-8 text-indigo-600" />,
    desc: "Serving families in Mumbai, Patna, and Kolkata — and expanding soon to Bengaluru and Pune, empowering wealth journeys across India."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Maurya?
        </h2>
        <p className="text-gray-600 mb-12">
          Experience. Trust. Results. Here's why families across generations choose us to guide their wealth journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;