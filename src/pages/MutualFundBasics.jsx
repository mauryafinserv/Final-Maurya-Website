import React, { useState } from "react";

const tabContent = [
  {
    title: "What is a Mutual Fund?",
    content: (
      <div className="space-y-4">
        <p>
          A mutual fund is a professionally managed investment vehicle that pools money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities.
        </p>
        <img src="/images/mutual-fund/what-is-mf.jpg" alt="What is a Mutual Fund" className="rounded-xl w-full max-w-3xl" />
        <p>
          Each investor owns units in the fund, which represent a portion of the holdings. Mutual funds are ideal for those who want to invest without directly managing securities.
        </p>
      </div>
    ),
  },
  {
    title: "Types of Mutual Funds",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Equity Funds:</strong> Invest primarily in stocks.</li>
          <li><strong>Debt Funds:</strong> Invest in fixed income securities like bonds and treasury bills.</li>
          <li><strong>Hybrid Funds:</strong> Combine equity and debt investments for balanced exposure.</li>
          <li><strong>Solution-Oriented Funds:</strong> Focused on goals like retirement or children’s education.</li>
          <li><strong>Index Funds & ETFs:</strong> Track market indices passively.</li>
          <li><strong>Fund of Funds:</strong> Invest in other mutual funds.</li>
          <li><strong>Thematic/Sectoral Funds:</strong> Invest in specific sectors like pharma, IT, or infra.</li>
        </ul>
        <img src="/images/mutual-fund/types-of-mf.jpg" alt="Types of Mutual Funds" className="rounded-xl w-full max-w-3xl" />
      </div>
    ),
  },
  {
    title: "Why Invest in Mutual Funds?",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>Access to a diversified portfolio with small investment.</li>
          <li>Professionally managed by experienced fund managers.</li>
          <li>High liquidity — easy to enter and exit.</li>
          <li>Transparent structure regulated by SEBI.</li>
          <li>Available for all risk profiles and financial goals.</li>
        </ul>
        <img src="/images/mutual-fund/why-invest.jpg" alt="Why Invest in Mutual Funds" className="rounded-xl w-full max-w-3xl" />
      </div>
    ),
  },
  {
    title: "SIP vs Lumpsum",
    content: (
      <div className="space-y-4">
        <p><strong>SIP (Systematic Investment Plan):</strong> Small, regular investments that average out market volatility.</p>
        <p><strong>Lumpsum:</strong> A one-time investment, ideal when markets are low or if you have idle capital.</p>
        <img src="/images/mutual-fund/sip-vs-lumpsum.jpg" alt="SIP vs Lumpsum" className="rounded-xl w-full max-w-3xl" />
      </div>
    ),
  },
  {
    title: "SEBI Mutual Fund Categories",
    content: (
      <div className="space-y-4">
        <p>SEBI classifies equity mutual funds by market cap exposure:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Large Cap:</strong> Top 100 listed companies.</li>
          <li><strong>Mid Cap:</strong> 101st–250th ranked companies.</li>
          <li><strong>Small Cap:</strong> Companies beyond 250th rank.</li>
          <li><strong>Flexi Cap / Multi Cap:</strong> Invest across all market caps.</li>
        </ul>
        <img src="/images/mutual-fund/sebi-categories.jpg" alt="SEBI Categories" className="rounded-xl w-full max-w-3xl" />
      </div>
    ),
  },
  {
    title: "How to Choose the Right Fund",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li>Match fund type to your goal (growth, income, safety).</li>
          <li>Review past performance vs benchmark.</li>
          <li>Check fund manager’s track record.</li>
          <li>Look for lower expense ratios.</li>
          <li>Evaluate consistency and volatility.</li>
        </ul>
        <img src="/images/mutual-fund/choose-right.jpg" alt="Choosing the Right Fund" className="rounded-xl w-full max-w-3xl" />
      </div>
    ),
  },
  {
    title: "Taxation of Mutual Funds",
    content: (
      <div className="space-y-4">
        <p><strong>Equity Funds:</strong> STCG (15%) if held &lt;1 year, LTCG (10% above ₹1L) if held &gt;1 year.</p>
        <p><strong>Debt Funds:</strong> Taxed as per slab (STCG) or with indexation (LTCG over 3 years).</p>
        <p><strong>ELSS:</strong> Offers ₹1.5L deduction under Section 80C with a 3-year lock-in.</p>
        <img src="/images/mutual-fund/taxation.jpg" alt="Mutual Fund Taxation" className="rounded-xl w-full max-w-3xl" />
      </div>
    ),
  },
  {
    title: "Mutual Fund Myths & Facts",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Myth:</strong> SIPs give fixed monthly returns.</li>
          <li><strong>Fact:</strong> SIPs help average cost, not guarantee return.</li>
          <li><strong>Myth:</strong> NAV shows how expensive a fund is.</li>
          <li><strong>Fact:</strong> NAV is just a unit value, not performance indicator.</li>
        </ul>
        <img src="/images/mutual-fund/myths.jpg" alt="Myths & Facts" className="rounded-xl w-full max-w-3xl" />
      </div>
    ),
  }
];

const MutualFundBasics = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6">Mutual Fund Basics</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          {tabContent.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-sm md:text-base px-4 py-2 rounded-full border transition-all font-medium ${
                activeIndex === index ? "bg-primary text-black" : "border-primary text-primary hover:bg-primary hover:text-black"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-900 border border-darkGold p-6 rounded-xl shadow animate-fade-up">
          <h3 className="text-xl font-semibold text-primary mb-4">
            {tabContent[activeIndex].title}
          </h3>
          <div className="text-gray-300 space-y-4">
            {tabContent[activeIndex].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MutualFundBasics;
