// src/pages/TaxPlanningPage.jsx
import React from "react";

const TaxPlanningPage = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Tax Planning
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we help you make informed financial decisions by exploring tax-efficient investment options suited to your income and financial goals.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our team assists you in understanding:
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-3">
              <li>
                Eligible deductions under Sections 80C, 80D, and others through options like ELSS, NPS (via POPs), health and life insurance.
              </li>
              <li>
                How capital gains taxation works for equity, debt, and mutual fund investments — including applicable holding periods and indexation benefits.
              </li>
              <li>
                Strategies like tax-loss harvesting and rebalancing, where permitted, to help manage potential tax liabilities more efficiently.
              </li>
            </ul>
            <p className="text-gray-400 mt-4 leading-relaxed">
              We aim to guide you in aligning your investments with available tax benefits, so your portfolio supports both your wealth-building and compliance goals.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/tax-planning.jpg"
              alt="Tax Planning Illustration"
              className="w-full max-w-md rounded-lg border-2 border-darkGold shadow-lg"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Need Tax Guidance for Your Portfolio?
          </h4>
          <p className="text-gray-400 mb-6">
            Connect with our team for personalized advice on tax-efficient investing.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-darkGold transition"
          >
            Talk to an Advisor
          </a>
        </div>
      </div>
    </section>
  );
};

export default TaxPlanningPage;
