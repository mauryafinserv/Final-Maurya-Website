// src/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Mutual Fund Distribution",
    desc: "Access top-performing funds across all leading AMCs — curated for your goals.",
    link: "/mutual-funds",
  },
  {
    name: "Equity Broking",
    desc: "Trade and invest in listed equities through our trusted brokerage platform.",
    link: "/equity-broking",
  },
  {
    name: "AIF Distribution",
    desc: "Exclusive access to Alternative Investment Funds for sophisticated investors.",
    link: "/aif",
  },
  {
    name: "PMS Distribution",
    desc: "Professionally managed, high-conviction portfolios built for HNI wealth.",
    link: "/pms",
  },
  {
    name: "Loan Against Securities",
    desc: "Unlock liquidity by pledging your MF units or stocks — without selling.",
    link: "/loan-against-mf",
  },
  {
    name: "NPS",
    desc: "Build a tax-efficient retirement corpus with the National Pension System.",
    link: "/nps",
  },
  {
    name: "Tax Planning",
    desc: "Strategic tax structuring in collaboration with qualified tax professionals.",
    link: "/tax-planning",
  },
  {
    name: "Insurance",
    desc: "Comprehensive life and health coverage tailored to your family's needs.",
    link: "/insurance-advisory",
  },
  {
    name: "NRI Investments",
    desc: "GIFT City and India-focused solutions for global Indians — seamless and compliant.",
    link: "/nri-investments",
  },
];

const Services = () => {
  return (
    <section className="bg-background py-24 px-6 md:px-12 text-text border-t border-darkGold border-b">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
          Our Solutions
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          What We Offer
        </h2>
        <p className="text-gray-400 text-lg mb-14 max-w-2xl mx-auto">
          A complete suite of wealth solutions — designed for HNIs, NRIs, families, and corporates who demand more than the ordinary.
        </p>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group border border-darkGold rounded-xl p-6 bg-gray-950 hover:bg-primary hover:border-primary transition duration-300"
            >
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-black transition">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-black transition">
                {service.desc}
              </p>
              <p className="text-primary text-xs font-semibold mt-4 group-hover:text-black transition">
                Learn more →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
