import React from "react";
import { ShieldCheck, BarChart3, Handshake } from "lucide-react"; // install with: npm install lucide-react

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-400 mb-4" />,
    title: "Legacy & Trust",
    desc: "30+ years of experience managing ₹300+ Cr in AUM for 2500+ families."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-400 mb-4" />,
    title: "Performance Focused",
    desc: "Clients have generated alpha over markets with our research-backed approach."
  },
  {
    icon: <Handshake className="h-8 w-8 text-blue-400 mb-4" />,
    title: "One-Stop Financial Partner",
    desc: "From mutual funds to insurance — everything under one roof."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-400 mb-4" />,
    title: "Personalized Planning",
    desc: "Tailored solutions for every generation and goal — not one-size-fits-all."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-400 mb-4" />,
    title: "Goal-Based Portfolios",
    desc: "We help you build, monitor, and refine long-term portfolios across life stages."
  },
  {
    icon: <Handshake className="h-8 w-8 text-blue-400 mb-4" />,
    title: "Strong Presence",
    desc: "Offices in Mumbai, Patna, Kolkata — expanding soon to Bengaluru and Pune."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-background py-20 px-6 md:px-12 text-text">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12">
          Why Invest with Maurya?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 border border-darkGold rounded-xl p-6 hover:shadow-lg hover:bg-darkGold hover:text-black transition duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
