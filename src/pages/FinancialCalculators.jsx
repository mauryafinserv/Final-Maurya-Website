// src/pages/FinancialCalculators.jsx
import React from "react";
import { Link } from "react-router-dom";

const calculators = [
  { title: "SIP Goal Calculator", link: "/calculators/sip-goal" },
  { title: "Step-Up SIP Calculator", link: "/calculators/step-up-sip" }, // ✅ fixed path
  { title: "SIP Future Value Calculator", link: "/calculators/sip-fv" },
  { title: "Lumpsum Future Value Calculator", link: "/calculators/lumpsum-fv" },
  { title: "SWP Calculator", link: "/calculators/swp" },
  { title: "EMI Calculator", link: "/calculators/emi" },
  { title: "Retirement Planning Calculator", link: "/calculators/retirement" },
  { title: "Education Planning Calculator", link: "/calculators/education" },
];

const FinancialCalculators = () => {
  return (
    <section className="bg-background text-text py-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center">
          Financial Planning Calculators
        </h1>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc, idx) => (
            <Link
              key={idx}
              to={calc.link}
              className="bg-gray-900 border border-darkGold rounded-xl p-6 min-h-[10rem] flex flex-col justify-between hover:shadow-xl transition duration-200 hover:bg-darkGold/20"
            >
              <h3 className="text-xl font-semibold text-primary mb-2 text-center md:text-left">
                {calc.title}
              </h3>
              <span className="text-sm font-medium text-yellow-400 underline hover:text-yellow-300 text-center md:text-left">
                Start Now →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialCalculators;
