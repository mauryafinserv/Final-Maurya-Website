// src/pages/AboutUsPage.jsx
import React from "react";
import { Link } from "react-router-dom";

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
            Established over 30 years ago, Maurya Shares has been serving HNIs, NRIs, families, and corporates in their journey toward sustainable wealth creation.
          </p>

          <p>
            As a SEBI-registered Mutual Fund Distributor (ARN-112272) and a trusted name in the financial services space, we offer seamless access to a wide range of investment products and solutions across asset classes.
          </p>

          <h2 className="text-primary text-2xl font-bold mt-10 mb-4">Our Key Offerings Include:</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Distribution of Mutual Funds across all leading AMCs</li>
            <li>Execution support for Equity Broking through Kotak Securities Limited</li>
            <li>Facilitation of investments into PMS Distribution and Alternative Investment Funds (AIFs)</li>
            <li>Loan Against Securities (Mutual Funds & Stocks), NPS (National Pension System), and Company Fixed Deposits</li>
            <li>Insurance Advisory across Life, Health, and General Insurance</li>
            <li>Tax Planning and Structuring Support (in collaboration with qualified tax professionals)</li>
            <li>Estate Planning Facilitation through trusted legal and wealth partners to secure your legacy</li>
          </ul>

          <p>
            We also enable access to new frontiers through GIFT City — India's first international financial center. <br />
            NRIs and global investors can now invest into India through GIFT City structures, offering dollar-denominated investments, tax-efficiency, and global portfolio diversification, without the need for a PAN card or Indian bank account.
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
            Partner with us — And create a legacy that transcends generations.
          </p>
        </div>


        {/* Our Approach Section */}
        <div className="mt-16 mb-6 border border-darkGold rounded-2xl p-8 bg-gray-950">
          <h2 className="text-primary text-2xl font-bold mb-2">Our Approach</h2>
          <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-6">Where Legacy Meets Intelligence</p>
          <p className="text-gray-300 leading-relaxed mb-6">
            At Maurya Shares, we believe that great wealth decisions are built on two foundations —
            decades of human expertise and the power of modern intelligence. We are one of the few
            wealth distribution firms in India that actively combines both.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="border border-gray-800 rounded-xl p-5 bg-black">
              <p className="text-primary font-semibold mb-2">🧠 AI-Powered Research</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We leverage Claude AI for deep research and analysis, helping us cut through market noise
                and bring you insights that are accurate, timely, and relevant to your portfolio.
              </p>
            </div>
            <div className="border border-gray-800 rounded-xl p-5 bg-black">
              <p className="text-primary font-semibold mb-2">📊 NGen Market Intelligence</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Through our partnership with NGen, we access institutional-grade market intelligence
                and research tools — the same quality of information that powers top wealth firms globally.
              </p>
            </div>
            <div className="border border-gray-800 rounded-xl p-5 bg-black">
              <p className="text-primary font-semibold mb-2">🤖 Samridhi — Your AI Wealth Assistant</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our AI-powered wealth assistant Samridhi is available 24/7 to answer your investment
                queries, guide you to the right resources, and connect you with our team when needed.
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm italic">
            Technology does not replace the human touch — it sharpens it. Our experienced team uses
            these tools to serve you better, faster, and smarter.
          </p>
        </div>

        {/* Regulatory Details Section */}
        <div className="mt-16 border border-darkGold rounded-2xl p-8">
          <h2 className="text-primary text-2xl font-bold mb-6">Regulatory Information</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">

            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Registered Name</p>
                <p className="text-white font-medium">Maurya Shares and Stock Brokers Private Limited</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">AMFI Registration (Mutual Fund Distributor)</p>
                <p className="text-primary font-mono font-semibold">ARN-112272</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">NSE Authorised Person Registration</p>
                <p className="text-primary font-mono font-semibold">AP0291570133</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">BSE Authorised Person Registration</p>
                <p className="text-primary font-mono font-semibold">AP01067301170504</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Principal Stock Broker</p>
                <p className="text-white font-medium">Kotak Securities Limited</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Kotak Securities SEBI Registration</p>
                <p className="text-primary font-mono font-semibold">INZ000200137</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Registered Address</p>
                <p className="text-gray-300">2nd Floor, 2B Durga Vihar, S P Verma Road, Patna, Bihar - 800001</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Full Disclosures</p>
                <Link to="/disclosures" className="text-primary underline hover:text-darkGold transition">
                  View Regulatory Disclosures
                </Link>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs mt-8 border-t border-gray-700 pt-4">
            Investment in securities market is subject to market risks. Read all scheme-related documents carefully before investing.
            Registration does not guarantee performance or assure returns to investors.
            Maurya Shares and Stock Brokers Private Limited is an AMFI-registered Mutual Fund Distributor and an Authorised Person of Kotak Securities Limited.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUsPage;
