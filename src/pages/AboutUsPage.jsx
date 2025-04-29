// src/pages/AboutUsPage.jsx
import React from "react";

const AboutUsPage = () => {
  return (
    <section className="bg-background text-text py-20 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Hero Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Maurya Shares & Stock Brokers Pvt Ltd
          </h1>
          <p className="text-2xl text-white font-semibold">Creating Wealth, for Generations.</p>
        </div>

        {/* Main About Us Content */}
        <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
          <p>
            At Maurya Shares, we are driven by a simple belief: <br />
            <span className="text-primary font-semibold">True wealth is built with patience, trust, and a long-term vision.</span>
          </p>

          <p>
            Established over 30 years ago, Maurya Shares has been serving individual investors, families, NRIs, HNIs, and corporates in their journey toward sustainable wealth creation.
          </p>

          <p>
            As a SEBI-registered Mutual Fund Distributor (ARN-112272) and a trusted name in the financial services space, we offer seamless access to a wide range of investment products and solutions across asset classes.
          </p>

          <h2 className="text-primary text-2xl font-bold mt-10 mb-4">Our Key Offerings Include:</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Distribution of Mutual Funds across all leading AMCs</li>
            <li>Execution support for Equity Broking through a leading brokerage platform</li>
            <li>Facilitation of investments into Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs)</li>
            <li>Loan Against Mutual Funds, NPS (National Pension System), and Company Fixed Deposits</li>
            <li>Insurance Advisory across Life, Health, and General Insurance</li>
            <li>Tax Planning and Structuring Support (in collaboration with qualified tax professionals)</li>
            <li>Estate Planning Facilitation through trusted legal and wealth partners to secure your legacy</li>
          </ul>

          <p>
            We also enable access to new frontiers through GIFT City — India's first international financial center. <br />
            NRIs and global investors can now invest into India through GIFT City structures, offering dollar-denominated investments, tax-efficiency, and global portfolio diversification, without the need for a PAN card or Indian bank account.
          </p>

          <p>
            At Maurya Shares, we do not offer investment advice or portfolio management. Instead, we curate solutions, facilitate execution, and empower clients to build robust, customized portfolios aligned with their aspirations.
          </p>

          <h2 className="text-primary text-2xl font-bold mt-10 mb-4">Our Strengths:</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Deep domain expertise and decades of market understanding</li>
            <li>Complete transparency and ethical practices</li>
            <li>Research-backed selection of investment opportunities</li>
            <li>Personalized and consistent client engagement</li>
            <li>Strict adherence to compliance and regulatory frameworks</li>
          </ul>

          <p>
            Your ambitions deserve more than just good returns — they deserve a strategic, secure, and lasting journey forward.
          </p>

          <p className="text-primary font-semibold text-xl mt-10">
            Partner with us —
            And create a legacy that transcends generations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUsPage;
