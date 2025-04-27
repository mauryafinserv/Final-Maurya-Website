import React from "react";

const NpsPage = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          National Pension System (NPS)
        </h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          NPS is a government-backed retirement savings scheme that enables individuals to build a retirement corpus through disciplined investments. It’s a cost-effective, tax-efficient, and flexible way to plan your future.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-400">
          <li>✅ Choice of Equity, Corporate Bonds, and Government Securities.</li>
          <li>✅ Low-cost structure and professional fund management.</li>
          <li>✅ Tax benefits under Section 80C and additional ₹50,000 under Section 80CCD(1B).</li>
          <li>✅ Partial withdrawals allowed for specific purposes.</li>
        </ul>

        <div className="mt-10 text-center">
          <a href="#contact" className="bg-primary text-black font-semibold py-3 px-8 rounded-full hover:bg-darkGold transition">
            Open Your NPS Account →
          </a>
        </div>
      </div>
    </section>
  );
};

export default NpsPage;
