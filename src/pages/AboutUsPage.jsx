// src/pages/AboutUsPage.jsx
import React from "react";

const AboutUsPage = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          About Maurya Shares & Stock Brokers Pvt. Ltd.
        </h1>

        <p className="text-gray-400 leading-relaxed text-lg mb-8">
          Maurya Shares & Stock Brokers Pvt Ltd, with a rich legacy of trust and excellence, has been empowering investors for over three decades. As a SEBI-registered Mutual Fund Distributor and trusted Financial Intermediary, we specialize in providing curated investment avenues designed to help you build, manage, and protect your wealth across generations.
        </p>

        <h2 className="text-2xl font-semibold text-primary mb-4">Our Key Offerings</h2>
        <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
          <li>Mutual Fund Distribution</li>
          <li>Portfolio Management Services (PMS)</li>
          <li>Alternative Investment Funds (AIF)</li>
          <li>Equity Broking Solutions</li>
          <li>Loan Against Mutual Funds</li>
          <li>National Pension Scheme (NPS)</li>
          <li>Company Fixed Deposits</li>
          <li>Insurance Solutions</li>
          <li>Tax Planning Support</li>
          <li>Estate Planning Facilitation</li>
        </ul>

        <p className="text-gray-400 leading-relaxed text-lg">
          Guided by a vision of creating sustainable wealth, we stay at the forefront of financial innovations — including enabling NRIs to seamlessly invest through GIFT City mechanisms. Our client-centric philosophy ensures that each relationship is nurtured with transparency, compliance, and personalized service.
        </p>
      </div>
    </section>
  );
};

export default AboutUsPage;
