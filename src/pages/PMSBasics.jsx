// src/pages/PMSBasics.jsx
import React, { useState } from "react";

const tabContent = [
  {
    title: "What is PMS?",
    content: (
      <div className="space-y-4">
        <p>
          Portfolio Management Services (PMS) is a professional investment service where a qualified portfolio manager manages your investments on your behalf — tailoring a portfolio specifically to your financial goals, risk appetite, and investment horizon.
        </p>
        <p>
          Unlike mutual funds where your money is pooled with other investors, in PMS your portfolio is individually managed. You retain direct ownership of the securities in your Demat account.
        </p>
        <p>
          SEBI regulates PMS providers in India. The minimum investment required is <strong>₹50 lakhs</strong> as per SEBI guidelines — making it a product designed for High Net Worth Individuals (HNIs).
        </p>
        <p>
          Key characteristics of PMS:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Personalised portfolio — not pooled like mutual funds</li>
          <li>Direct ownership of stocks/securities in your Demat account</li>
          <li>Minimum investment: ₹50 lakhs (SEBI mandate)</li>
          <li>Managed by SEBI-registered Portfolio Managers</li>
          <li>Higher degree of customisation and transparency</li>
          <li>Regular reporting and portfolio reviews</li>
        </ul>
      </div>
    ),
  },
  {
    title: "PMS vs Mutual Funds",
    content: (
      <div className="space-y-4">
        <p>
          Both PMS and Mutual Funds are professionally managed investment products — but they differ significantly in structure, ownership, and suitability.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-black">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">PMS</th>
                <th className="p-3 text-left">Mutual Fund</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["Ownership", "Direct — stocks in your Demat", "Pooled — units of a fund"],
                ["Minimum Investment", "₹50 lakhs (SEBI)", "As low as ₹500 (SIP)"],
                ["Customisation", "High — tailored to you", "Low — same for all investors"],
                ["Transparency", "Full visibility of holdings", "Disclosed monthly/quarterly"],
                ["Tax Treatment", "Each trade taxed individually", "Tax on redemption only"],
                ["Regulation", "SEBI — Portfolio Managers Reg.", "SEBI — MF Regulations"],
                ["Target Investor", "HNI / Ultra HNI", "All investor types"],
                ["Fees", "Fixed + Performance fee", "Expense ratio"],
              ].map(([feature, pms, mf], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                  <td className="p-3 font-medium text-white">{feature}</td>
                  <td className="p-3">{pms}</td>
                  <td className="p-3">{mf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-sm italic">
          PMS is not better or worse than mutual funds — it is appropriate for a different investor profile and wealth level.
        </p>
      </div>
    ),
  },
  {
    title: "Types of PMS",
    content: (
      <div className="space-y-4">
        <p>
          SEBI categorises Portfolio Management Services into three types based on the level of control and decision-making given to the portfolio manager.
        </p>
        <div className="space-y-6">
          <div className="border border-darkGold rounded-xl p-5">
            <h4 className="text-primary font-semibold text-lg mb-2">1. Discretionary PMS</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              The portfolio manager has full authority to make investment decisions on your behalf — without requiring your approval for each trade. You set the broad mandate (risk profile, goals), and the manager executes independently. This is the most common type.
            </p>
            <p className="text-primary text-sm mt-2 font-medium">Best for: Investors who trust the manager and want a fully hands-off approach.</p>
          </div>
          <div className="border border-darkGold rounded-xl p-5">
            <h4 className="text-primary font-semibold text-lg mb-2">2. Non-Discretionary PMS</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              The portfolio manager recommends investment decisions, but you must approve each trade before execution. You stay informed and in control at every step.
            </p>
            <p className="text-primary text-sm mt-2 font-medium">Best for: Investors who want professional guidance but wish to retain final decision-making authority.</p>
          </div>
          <div className="border border-darkGold rounded-xl p-5">
            <h4 className="text-primary font-semibold text-lg mb-2">3. Advisory PMS</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              The portfolio manager only provides advice and recommendations. You execute all trades yourself. The manager does not have any authority over your account.
            </p>
            <p className="text-primary text-sm mt-2 font-medium">Best for: Experienced investors who want expert input but wish to execute trades independently.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Who Should Invest?",
    content: (
      <div className="space-y-4">
        <p>
          PMS is not for everyone. It is a specialised product designed for a specific type of investor.
        </p>
        <h4 className="text-primary font-semibold">PMS is suitable if you:</h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Have investable surplus of ₹1.2 crore or more (SEBI minimum is ₹50L, but practical allocation is higher)</li>
          <li>Have a long-term investment horizon of 3-5+ years</li>
          <li>Want a personalised, high-conviction portfolio — not a generic fund</li>
          <li>Are comfortable with equity market volatility</li>
          <li>Want direct ownership of securities (not pooled exposure)</li>
          <li>Understand that PMS involves higher risk and is not for short-term goals</li>
        </ul>
        <h4 className="text-primary font-semibold mt-4">PMS may NOT be suitable if you:</h4>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Have investable corpus below ₹50 lakhs</li>
          <li>Need liquidity in the short term</li>
          <li>Are a conservative or first-time investor</li>
          <li>Cannot tolerate significant short-term drawdowns</li>
        </ul>
        <p className="text-gray-400 text-sm italic mt-4">
          Disclaimer: Investment in PMS is subject to market risks. Past performance is not indicative of future results. Please consult your wealth manager before investing.
        </p>
      </div>
    ),
  },
  {
    title: "How PMS Works",
    content: (
      <div className="space-y-4">
        <p>
          Here is a step-by-step overview of how PMS works in practice:
        </p>
        <div className="space-y-4">
          {[
            { step: "01", title: "Onboarding & KYC", desc: "You complete KYC formalities with the PMS provider. A Demat account and trading account are opened or linked in your name." },
            { step: "02", title: "Investment Policy Statement (IPS)", desc: "Your risk profile, goals, investment horizon, and any restrictions (e.g. sectors to avoid) are documented. This forms the framework for managing your portfolio." },
            { step: "03", title: "Portfolio Construction", desc: "The portfolio manager builds a concentrated, high-conviction portfolio — typically 15–25 stocks — based on your IPS and their investment strategy." },
            { step: "04", title: "Ongoing Management", desc: "The manager actively monitors and rebalances the portfolio. Buy/sell decisions are executed based on market conditions and evolving fundamentals." },
            { step: "05", title: "Reporting", desc: "You receive regular reports — monthly or quarterly — showing your portfolio performance, holdings, transactions, and XIRR vs benchmark." },
            { step: "06", title: "Fee Structure", desc: "PMS typically charges a fixed management fee (1-2% p.a.) and/or a performance fee (10-20% above a hurdle rate). All fees are disclosed upfront." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 border border-gray-800 rounded-xl p-4">
              <div className="text-2xl font-bold text-primary min-w-[40px]">{item.step}</div>
              <div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Risks & Considerations",
    content: (
      <div className="space-y-4">
        <p>
          PMS offers significant potential for wealth creation — but it comes with risks that every investor must understand before investing.
        </p>
        <div className="space-y-4">
          {[
            { title: "Market Risk", desc: "PMS portfolios are typically equity-heavy. They are subject to market volatility, and short-term NAV swings can be significant." },
            { title: "Concentration Risk", desc: "Unlike mutual funds that hold 50-100 stocks, PMS portfolios are concentrated (15-25 stocks). A few bad picks can have a larger impact." },
            { title: "Liquidity Risk", desc: "There is no guarantee of liquidity. Exit may take time depending on the portfolio composition and market conditions." },
            { title: "Manager Risk", desc: "Performance is heavily dependent on the skill of the portfolio manager. A change in manager can affect strategy and outcomes." },
            { title: "Higher Cost", desc: "PMS fees are generally higher than mutual funds. Performance fees can erode returns in certain market conditions." },
            { title: "Tax Complexity", desc: "Every trade in a PMS triggers a tax event for you. Frequent churning can lead to higher short-term capital gains tax." },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-primary pl-4">
              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm italic mt-4">
          Disclaimer: Investment in securities market is subject to market risks. Read all scheme related documents carefully before investing. PMS is suitable only for sophisticated investors with high risk appetite.
        </p>
      </div>
    ),
  },
];

const PMSBasics = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6">PMS — Portfolio Management Services</h2>
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

export default PMSBasics;
