// src/pages/FundamentalAnalysis.jsx
import React, { useState } from "react";

const tabContent = [
  {
    title: "What is Fundamental Analysis?",
    content: (
      <div className="space-y-4">
        <p>
          Fundamental Analysis is a method of evaluating a company's intrinsic value by examining related economic, financial, and qualitative factors — to determine whether a stock is overvalued, undervalued, or fairly priced.
        </p>
        <p>
          The core idea: <strong className="text-primary">every stock has an intrinsic (true) value</strong>. The market price may be above or below this value at any given time. Fundamental analysts try to find stocks trading below their intrinsic value — and buy them before the market corrects the price.
        </p>
        <h4 className="text-primary font-semibold mt-2">Two Approaches:</h4>
        <div className="space-y-3">
          <div className="border border-darkGold rounded-xl p-4">
            <h4 className="text-white font-semibold mb-1">Top-Down Analysis</h4>
            <p className="text-gray-300 text-sm">Start with the macro picture — global economy → country → industry → company. Used by macro investors and sector-focused funds.</p>
          </div>
          <div className="border border-darkGold rounded-xl p-4">
            <h4 className="text-white font-semibold mb-1">Bottom-Up Analysis</h4>
            <p className="text-gray-300 text-sm">Start directly with the company — its financials, business model, and management — regardless of the broader macro environment. Used by most value investors.</p>
          </div>
        </div>
        <p>
          Fundamental analysis is the backbone of long-term, value-based investing — used by legendary investors like Warren Buffett, Charlie Munger, and Indian investors like Rakesh Jhunjhunwala.
        </p>
      </div>
    ),
  },
  {
    title: "Key Financial Statements",
    content: (
      <div className="space-y-4">
        <p>
          Every publicly listed company publishes three core financial statements. Understanding them is the foundation of fundamental analysis.
        </p>
        <div className="space-y-5">
          <div className="border border-darkGold rounded-xl p-5">
            <h4 className="text-primary font-semibold text-lg mb-2">1. Profit & Loss Statement (P&L)</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              Shows the company's revenues, expenses, and profits over a period (quarterly or annually).
            </p>
            <p className="text-gray-400 text-sm"><strong className="text-white">Key lines to check:</strong> Revenue, Gross Profit, EBITDA, Net Profit, EPS (Earnings Per Share)</p>
            <p className="text-primary text-sm mt-2">Ask: Is the company growing revenue? Are margins expanding or shrinking?</p>
          </div>
          <div className="border border-darkGold rounded-xl p-5">
            <h4 className="text-primary font-semibold text-lg mb-2">2. Balance Sheet</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              A snapshot of the company's assets, liabilities, and shareholders' equity at a specific point in time.
            </p>
            <p className="text-gray-400 text-sm"><strong className="text-white">Key lines to check:</strong> Total Assets, Total Debt, Cash & Equivalents, Book Value, Net Worth</p>
            <p className="text-primary text-sm mt-2">Ask: Is the company debt-heavy? Does it have enough cash? Is it asset-light or asset-heavy?</p>
          </div>
          <div className="border border-darkGold rounded-xl p-5">
            <h4 className="text-primary font-semibold text-lg mb-2">3. Cash Flow Statement</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-2">
              Shows actual cash coming in and going out — from operations, investing, and financing activities.
            </p>
            <p className="text-gray-400 text-sm"><strong className="text-white">Key lines to check:</strong> Operating Cash Flow, Free Cash Flow (FCF), CapEx</p>
            <p className="text-primary text-sm mt-2">Ask: Is the company actually generating real cash — or just reporting accounting profits?</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm italic">
          Tip: A company can show profits on the P&L but still be in trouble if it has poor cash flows. Always check all three together.
        </p>
      </div>
    ),
  },
  {
    title: "Key Ratios to Know",
    content: (
      <div className="space-y-4">
        <p>Financial ratios help you quickly compare companies and assess valuation, profitability, and financial health.</p>
        <div className="space-y-4">
          <h4 className="text-primary font-semibold">Valuation Ratios</h4>
          {[
            { ratio: "P/E Ratio (Price to Earnings)", formula: "Market Price ÷ EPS", meaning: "How much you're paying for ₹1 of earnings. Lower = cheaper. Compare with sector average." },
            { ratio: "P/B Ratio (Price to Book)", formula: "Market Price ÷ Book Value per Share", meaning: "How much above (or below) book value the stock trades. Below 1 may indicate undervaluation." },
            { ratio: "EV/EBITDA", formula: "Enterprise Value ÷ EBITDA", meaning: "Better than P/E for comparing capital-heavy businesses. Lower is generally better." },
          ].map((item, i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold text-sm">{item.ratio}</h4>
              <p className="text-primary text-xs mt-1 font-mono">{item.formula}</p>
              <p className="text-gray-400 text-sm mt-1">{item.meaning}</p>
            </div>
          ))}
          <h4 className="text-primary font-semibold mt-2">Profitability Ratios</h4>
          {[
            { ratio: "ROE (Return on Equity)", formula: "Net Profit ÷ Shareholders' Equity × 100", meaning: "How efficiently is the company using shareholders' money? Above 15% is generally good." },
            { ratio: "ROCE (Return on Capital Employed)", formula: "EBIT ÷ Capital Employed × 100", meaning: "Overall capital efficiency. Better than ROE for asset-heavy businesses." },
            { ratio: "Net Profit Margin", formula: "Net Profit ÷ Revenue × 100", meaning: "What % of revenue becomes profit. Higher and expanding margins = better business." },
          ].map((item, i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold text-sm">{item.ratio}</h4>
              <p className="text-primary text-xs mt-1 font-mono">{item.formula}</p>
              <p className="text-gray-400 text-sm mt-1">{item.meaning}</p>
            </div>
          ))}
          <h4 className="text-primary font-semibold mt-2">Leverage & Liquidity Ratios</h4>
          {[
            { ratio: "Debt/Equity Ratio", formula: "Total Debt ÷ Shareholders' Equity", meaning: "How much debt vs equity the company uses. Below 1 is conservative. High D/E = higher risk." },
            { ratio: "Current Ratio", formula: "Current Assets ÷ Current Liabilities", meaning: "Short-term liquidity. Above 1.5 means the company can comfortably meet short-term obligations." },
          ].map((item, i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold text-sm">{item.ratio}</h4>
              <p className="text-primary text-xs mt-1 font-mono">{item.formula}</p>
              <p className="text-gray-400 text-sm mt-1">{item.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Qualitative Factors",
    content: (
      <div className="space-y-4">
        <p>
          Numbers tell you the past. Qualitative factors help you assess the future. Some of the most important investment insights cannot be found in spreadsheets.
        </p>
        <div className="space-y-4">
          {[
            { title: "Business Model & Moat", desc: "Does the company have a durable competitive advantage (moat)? Is it a brand, cost advantage, network effect, or switching costs? Companies with strong moats tend to maintain profitability over time." },
            { title: "Management Quality", desc: "Who runs the company? Are they honest, competent, and shareholder-friendly? Check their track record, capital allocation decisions, and how they communicate with investors (annual reports, earnings calls)." },
            { title: "Industry & Sector Tailwinds", desc: "Is the company in a growing industry? A great company in a dying industry will struggle. A good company in a tailwind industry compounds faster." },
            { title: "Corporate Governance", desc: "Are minority shareholders treated fairly? Are promoter pledgings high? Are related-party transactions suspicious? Poor governance is a major red flag." },
            { title: "Promoter Holding & Insider Activity", desc: "High promoter holding (60%+) generally shows skin in the game. Watch for promoter selling — it can be a warning sign." },
            { title: "Customer & Supplier Concentration", desc: "If 80% of revenue comes from one customer, the business is fragile. Diversified revenue streams reduce risk." },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-primary pl-4">
              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "How to Read an Annual Report",
    content: (
      <div className="space-y-4">
        <p>
          The Annual Report is the single most important document for fundamental analysis. Every listed Indian company publishes one each year. Here's how to read it efficiently.
        </p>
        <div className="space-y-4">
          {[
            { step: "01", title: "Chairman's Letter / MD&A", desc: "Start here. The Chairman or MD's letter tells you the company's strategy, challenges, and vision. Read between the lines — honest management acknowledges problems, not just successes." },
            { step: "02", title: "Business Overview", desc: "Understand what the company actually does, its products/services, customer base, and competitive landscape. Can you explain the business in one sentence?" },
            { step: "03", title: "Risk Factors", desc: "Companies are required to disclose risks. Read these carefully — they tell you what could go wrong, and whether management is aware of the risks." },
            { step: "04", title: "Financial Statements", desc: "Go through P&L, Balance Sheet, and Cash Flow for the last 5 years. Look for trends — is revenue growing consistently? Are margins stable? Is debt under control?" },
            { step: "05", title: "Notes to Accounts", desc: "The fine print. This is where accounting tricks, related-party transactions, contingent liabilities, and off-balance-sheet items hide. Always read this section." },
            { step: "06", title: "Auditor's Report", desc: "A qualified audit report is a red flag. Look for any qualifications, emphasis of matter, or adverse opinions from the auditor." },
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
        <p className="text-gray-400 text-sm italic">
          Pro tip: Annual reports of great companies like HDFC Bank, Asian Paints, and Infosys are excellent examples to learn from. Read one end-to-end before analysing any other company.
        </p>
      </div>
    ),
  },
  {
    title: "FA vs Technical Analysis",
    content: (
      <div className="space-y-4">
        <p>
          Investors often debate whether Fundamental Analysis (FA) or Technical Analysis (TA) is better. The truth is — they serve different purposes and time horizons.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-black">
                <th className="p-3 text-left">Aspect</th>
                <th className="p-3 text-left">Fundamental Analysis</th>
                <th className="p-3 text-left">Technical Analysis</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {[
                ["Focus", "Intrinsic value of the business", "Price patterns and market behaviour"],
                ["Time Horizon", "Long-term (3-10+ years)", "Short to medium term (days to months)"],
                ["Data Used", "Financial statements, ratios, qualitative", "Charts, price, volume, indicators"],
                ["Question Asked", "What is the stock worth?", "Where is the price going next?"],
                ["Best For", "Long-term investors, value investors", "Traders, swing traders"],
                ["Limitation", "Doesn't tell you when to buy/sell", "Doesn't tell you if business is good"],
                ["Used By", "Warren Buffett, Peter Lynch", "Traders, hedge funds for entry/exit"],
              ].map(([aspect, fa, ta], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                  <td className="p-3 font-medium text-white">{aspect}</td>
                  <td className="p-3">{fa}</td>
                  <td className="p-3">{ta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border border-darkGold rounded-xl p-5 mt-4">
          <h4 className="text-primary font-semibold mb-2">The Best Approach: Use Both Together</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Use Fundamental Analysis to identify what to buy — great businesses at fair or cheap prices. Use Technical Analysis to decide when to buy — finding good entry points based on price patterns and support levels. Together, they give you the full picture.
          </p>
        </div>
        <p className="text-gray-400 text-sm italic">
          Disclaimer: This content is for educational purposes only. It does not constitute investment advice. Equity investments are subject to market risks.
        </p>
      </div>
    ),
  },
];

const FundamentalAnalysis = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6">Basics of Fundamental Analysis</h2>
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

export default FundamentalAnalysis;
