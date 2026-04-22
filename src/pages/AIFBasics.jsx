// src/pages/AIFBasics.jsx
import React, { useState } from "react";

const tabContent = [
  {
    title: "What is an AIF?",
    content: (
      <div className="space-y-4">
        <p>
          An Alternative Investment Fund (AIF) is a privately pooled investment vehicle that collects funds from sophisticated investors — whether Indian or foreign — for investing in accordance with a defined investment policy.
        </p>
        <p>
          AIFs invest in asset classes that are not covered under traditional investment products like mutual funds or equity shares — such as private equity, venture capital, hedge funds, real estate funds, infrastructure funds, and more.
        </p>
        <p>
          AIFs in India are regulated by SEBI under the <strong>SEBI (Alternative Investment Funds) Regulations, 2012</strong>.
        </p>
        <h4 className="text-primary font-semibold mt-2">Key Characteristics:</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Minimum investment: <strong>₹1 crore</strong> per investor (SEBI mandate)</li>
          <li>Maximum 1,000 investors per scheme (except angel funds)</li>
          <li>Privately pooled — not open to the general public</li>
          <li>SEBI registered and regulated</li>
          <li>Designed for HNIs, family offices, institutional investors, and sophisticated investors</li>
          <li>Offers access to premium, illiquid, and high-return potential asset classes</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Category I, II & III",
    content: (
      <div className="space-y-6">
        <p>SEBI classifies AIFs into three categories based on their investment strategy and the nature of assets they invest in.</p>
        <div className="border border-darkGold rounded-xl p-5">
          <h4 className="text-primary font-semibold text-lg mb-2">Category I — Growth & Social Impact</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            These funds invest in startups, early-stage ventures, social ventures, SMEs, infrastructure, and other sectors the government considers economically and socially desirable.
          </p>
          <p className="text-gray-400 text-sm"><strong className="text-white">Includes:</strong> Venture Capital Funds, Angel Funds, SME Funds, Social Venture Funds, Infrastructure Funds</p>
          <p className="text-primary text-sm mt-2 font-medium">Risk Level: Medium | Lock-in: 3+ years typical</p>
        </div>
        <div className="border border-darkGold rounded-xl p-5">
          <h4 className="text-primary font-semibold text-lg mb-2">Category II — Private Equity & Debt</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            These funds do not undertake leverage or borrowing other than to meet day-to-day operational requirements. They invest in unlisted companies through equity or debt instruments.
          </p>
          <p className="text-gray-400 text-sm"><strong className="text-white">Includes:</strong> Private Equity Funds, Debt Funds, Fund of Funds, Real Estate Funds</p>
          <p className="text-primary text-sm mt-2 font-medium">Risk Level: Medium-High | Lock-in: 3-7 years typical</p>
        </div>
        <div className="border border-darkGold rounded-xl p-5">
          <h4 className="text-primary font-semibold text-lg mb-2">Category III — Complex Trading Strategies</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            These funds employ complex or diverse trading strategies and may use leverage including through investment in listed or unlisted derivatives. They are the closest to hedge funds.
          </p>
          <p className="text-gray-400 text-sm"><strong className="text-white">Includes:</strong> Hedge Funds, PIPE Funds, Long-Short Equity Funds</p>
          <p className="text-primary text-sm mt-2 font-medium">Risk Level: High | Lock-in: Varies</p>
        </div>
      </div>
    ),
  },
  {
    title: "Who Can Invest?",
    content: (
      <div className="space-y-4">
        <p>
          AIFs are designed exclusively for sophisticated, high-net-worth investors. They are not available to retail investors.
        </p>
        <h4 className="text-primary font-semibold">Eligible Investors Include:</h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Indian resident individuals with minimum ₹1 crore investable surplus</li>
          <li>Non-Resident Indians (NRIs) — especially through GIFT City structures</li>
          <li>Family offices and family trusts</li>
          <li>High Net Worth Individuals (HNIs) and Ultra HNIs</li>
          <li>Corporates and institutional investors</li>
          <li>Foreign Portfolio Investors (FPIs)</li>
        </ul>
        <h4 className="text-primary font-semibold mt-4">SEBI Requirements:</h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Minimum investment: ₹1 crore per investor</li>
          <li>For employees or directors of AIF: ₹25 lakhs minimum</li>
          <li>Maximum 1,000 investors per AIF scheme</li>
          <li>Investors must sign an investment agreement acknowledging the risk</li>
        </ul>
        <h4 className="text-primary font-semibold mt-4">NRI Special Advantage — GIFT City:</h4>
        <p className="text-gray-300">
          NRIs can invest in AIFs through GIFT City (India's IFSC) without needing an Indian PAN card or Indian bank account, in USD or other foreign currencies, with zero capital gains tax in India on select structures.
        </p>
        <p className="text-gray-400 text-sm italic mt-4">
          Disclaimer: Investment in AIF is subject to market risks. AIFs are suitable only for sophisticated investors. Please read the Private Placement Memorandum carefully.
        </p>
      </div>
    ),
  },
  {
    title: "AIF vs PMS vs MF",
    content: (
      <div className="space-y-4">
        <p>Understanding how AIFs compare with PMS and Mutual Funds helps you choose the right product for your wealth stage.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-black">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">AIF</th>
                <th className="p-3 text-left">PMS</th>
                <th className="p-3 text-left">Mutual Fund</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["Min. Investment", "₹1 Crore", "₹50 Lakhs", "₹500 (SIP)"],
                ["Asset Classes", "Private equity, debt, hedge, real estate", "Listed equities", "Stocks, bonds, gold etc."],
                ["Ownership", "Units in pooled fund", "Direct securities in Demat", "Units of the fund"],
                ["Liquidity", "Low (lock-in 3-7 years)", "Medium", "High (open-ended)"],
                ["Regulation", "SEBI AIF Regulations", "SEBI PMS Regulations", "SEBI MF Regulations"],
                ["Target Investor", "Ultra HNI / Institutions", "HNI", "All investors"],
                ["Return Potential", "High (illiquidity premium)", "Medium-High", "Market returns"],
                ["Transparency", "Quarterly reports", "Full portfolio visibility", "Monthly/quarterly"],
              ].map(([feature, aif, pms, mf], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                  <td className="p-3 font-medium text-white">{feature}</td>
                  <td className="p-3">{aif}</td>
                  <td className="p-3">{pms}</td>
                  <td className="p-3">{mf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: "GIFT City AIFs for NRIs",
    content: (
      <div className="space-y-4">
        <p>
          GIFT City (Gujarat International Finance Tec-City) is India's first International Financial Services Centre (IFSC) — and it has opened up a revolutionary pathway for NRIs to invest in Indian private markets.
        </p>
        <h4 className="text-primary font-semibold">Why GIFT City AIFs are Special for NRIs:</h4>
        <div className="space-y-3">
          {[
            { title: "No Indian PAN Required", desc: "NRIs can invest in GIFT City AIFs without needing an Indian PAN card — a major barrier removed." },
            { title: "No Indian Bank Account Required", desc: "Investments can be made directly from overseas bank accounts in USD, EUR, GBP, or other foreign currencies." },
            { title: "Zero Capital Gains Tax in India", desc: "Gains from GIFT City AIF investments are generally exempt from Indian capital gains tax — significantly boosting post-tax returns." },
            { title: "USD-Denominated Investments", desc: "Invest and receive returns in foreign currency — no forced INR conversion, eliminating currency risk." },
            { title: "Free Repatriation", desc: "Profits can be repatriated freely in foreign currency without restrictions." },
            { title: "Global Regulatory Standards", desc: "IFSCA (GIFT City regulator) follows international norms — making compliance straightforward for global investors." },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-primary pl-4">
              <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm italic mt-4">
          Interested in GIFT City AIF investments? Contact our NRI Desk: +91 7021477258 | support@mauryafinserv.com
        </p>
      </div>
    ),
  },
  {
    title: "Risks & Considerations",
    content: (
      <div className="space-y-4">
        <p>
          AIFs offer access to premium asset classes and the potential for superior returns — but they come with unique risks that every investor must understand.
        </p>
        <div className="space-y-4">
          {[
            { title: "Illiquidity Risk", desc: "Most AIFs have a fixed lock-in period of 3-7 years. Your capital cannot be withdrawn before maturity. This is the most significant risk for most investors." },
            { title: "High Minimum Investment", desc: "The ₹1 crore minimum means a large portion of your wealth may be locked in one fund — concentration at the portfolio level." },
            { title: "Manager & Strategy Risk", desc: "AIF returns are highly dependent on the skill of the fund manager and their strategy. Poor execution can lead to significant capital loss." },
            { title: "Valuation Risk", desc: "Many AIF assets (private equity, unlisted debt) are not publicly traded — making accurate valuation challenging. NAV may not reflect true value." },
            { title: "Regulatory Risk", desc: "Tax laws, FEMA regulations, and SEBI rules can change — particularly relevant for NRI investors in GIFT City structures." },
            { title: "Limited Track Record", desc: "Many AIFs are relatively new products with limited long-term performance data. Due diligence on the manager's history is essential." },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-primary pl-4">
              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm italic mt-4">
          Disclaimer: Investment in AIF is subject to market risks. AIFs involve high risk and are suitable only for sophisticated investors with long investment horizons. Please read the Private Placement Memorandum carefully before investing.
        </p>
      </div>
    ),
  },
];

const AIFBasics = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6">AIF — Alternative Investment Funds</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {tabContent.map((tab, index) => (
            <button key={index} onClick={() => setActiveIndex(index)}
              className={`text-sm md:text-base px-4 py-2 rounded-full border transition-all font-medium ${
                activeIndex === index ? "bg-primary text-black" : "border-primary text-primary hover:bg-primary hover:text-black"
              }`}>
              {tab.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-900 border border-darkGold p-6 rounded-xl shadow animate-fade-up">
          <h3 className="text-xl font-semibold text-primary mb-4">{tabContent[activeIndex].title}</h3>
          <div className="text-gray-300 space-y-4">{tabContent[activeIndex].content}</div>
        </div>
      </div>
    </section>
  );
};

export default AIFBasics;
