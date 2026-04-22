// src/pages/KnowledgeCorner.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const basics = [
  {
    title: "What is a Mutual Fund?",
    description: "Understand the basics of mutual funds and how they work.",
    link: "/mutual-fund-basics",
    image: "/images/mutual-fund.png",
  },
  {
    title: "Types of Portfolio Management Services (PMS)",
    description: "Explore discretionary, non-discretionary and advisory PMS options.",
    link: "/pms-types",
    image: "/images/pms.png",
  },
  {
    title: "What are Alternative Investment Funds (AIF)?",
    description: "An overview of AIF categories and their investment strategies.",
    link: "/aif-explained",
    image: "/images/aif.png",
  },
  {
    title: "Basics of Fundamental Analysis",
    description: "Learn how to evaluate companies based on financial metrics.",
    link: "/fundamental-analysis",
    image: "/images/fundamentals.png",
  },
];

const articles = [
  {
    id: "crude-oil-indian-equities",
    title: "Crude Oil & Indian Equities — Oil at $100+: Crisis or Opportunity?",
    date: "March 2026",
    category: "Market Outlook",
    summary: "When Brent Crude crosses $90, history shows short-term caution but strong 1-2 year returns for patient Nifty investors. A data-driven analysis of all oil spike episodes since 2000.",
    content: `Oil at $100+: Crisis or Opportunity?

When Brent Crude crosses $90, it creates fear in markets. But what does history actually say?

Maurya Shares & Stock Brokers Pvt. Ltd. | ARN-112272

KEY INSIGHT: Brent Crude above $90 has historically triggered short-term caution — but delivered strong positive 1-2 year returns for patient investors in Nifty 50 & Nifty 500.

WHEN BRENT CROSSED $90 — THE EPISODES (2000–2026)

2007–08: Peak Brent $146.69 | Trigger: China demand supercycle
2010–14: Peak Brent ~$128 | Trigger: Arab Spring / Iran Sanctions
2018: Peak Brent ~$86 | Trigger: US sanctions on Iran
2021–22: Peak Brent $139.13 | Trigger: Post-COVID + Russia-Ukraine
2026 (live): Peak Brent $141.37 | Trigger: Iran-Hormuz war crisis

NIFTY 50 FORWARD RETURNS AFTER $90 CROSSING (3 Completed Episodes)
6-Month Return: -3.8% avg
1-Year Return: +8.4% avg
2-Year Return: +24.6% avg

WHY OIL ABOVE $90 IS A CONTRARIAN OPPORTUNITY TODAY

1. History Says Buy the Dip
2 of 3 completed $90+ episodes gave >19% returns within 2 years. Corrections during oil spikes = entry points.

2. India's Oil Resilience Has Improved
Oil imports as % of GDP halved from 8.5% to 4.8%. Services exports and Russian crude discount now act as natural hedges.

3. DII Flows Are a Floor
30,000+ Cr/month SIP inflows. DIIs bought 8.5L Cr in FY26 absorbing FII exits — limiting market downside.

4. Valuations Now Attractive
Nifty 50 PE has corrected from 24x (Sep '24 peak) to ~19x — near long-term average. Oil-driven fear = valuation opportunity.

Disclaimer: For educational purposes only. Not financial advice. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.`,
  },
  {
    id: "nifty-through-wars-conflicts",
    title: "Nifty 50 Through Wars & Conflicts — Markets Recover. Always.",
    date: "March 2026",
    category: "Market Outlook",
    summary: "Every single conflict since 1990 was followed by a Nifty 50 recovery. A data-backed analysis of 13 geopolitical events and what they meant for long-term investors.",
    content: `Nifty 50: Through Wars & Conflicts
Price & PE Ratio | 1990–2025

Maurya Shares & Stock Brokers Pvt. Ltd. | ARN-112272
16th March 2026

KEY FINDINGS:

1. Markets Recover. Always.
Every single conflict since 1990 was followed by a Nifty recovery. The only question is when — not if.

2. Global Systemic Crises Hurt More
The 2008 GFC (-60%), 2011 Arab Spring (-28%), and 2022 commodity shock (-9%) caused more damage than any bilateral war. Geopolitical events tend to be short-term shocks, not structural breaks.

3. PE Below 20 = Buying Opportunity
Every time Nifty PE fell below 20 — in 2003, 2009, and 2022 — 3-year forward returns were exceptional. Current PE ~20 puts us in value territory.

4. SIP Investors Always Win
Investors who stayed invested through all 13 conflicts and kept their SIPs running saw Nifty deliver ~15% CAGR over 35 years.

The lesson is simple: volatility during conflict is noise. The signal — India's long-term growth — remains intact.

Disclaimer: Mutual fund investments are subject to market risks. Read all scheme related documents carefully. Source: NSE, Screener.in`,
  },
  {
    id: "fy26-annual-letter",
    title: "FY 2025–26 Annual Client Letter — A Year of Turbulence, A Decade of Conviction",
    date: "March 2026",
    category: "Market Outlook",
    summary: "Maurya Finserv's annual review of FY26 — a year of sharp corrections, geopolitical shocks, and why disciplined investors came out ahead. Market data, key events, and our promise for FY27.",
    content: `Maurya Finserv | Annual Client Letter
Vol. FY 2025-26 | 31 March 2026
mauryafinserv.com | ARN-112272 | Est. 1990 | Mumbai | Patna

THANK YOU FOR YOUR TRUST, YOUR SUPPORT & FOR STAYING THE COURSE.
A year of turbulence. A decade of conviction. Your wealth — our unwavering mission.

Dear Valued Client,

As we close FY 2025-26, we pause to say something we mean wholeheartedly — thank you.

Thank you for trusting us with your financial journey, for picking up the phone on difficult days, and for staying invested when the noise was loudest.

This was not an easy year. Global shocks, sharp corrections, relentless headlines — many investors panicked. You didn't. That made all the difference.

MARKET REPORT: FY 2025-26

FY26 opened with Nifty 50 near 23,519 on April 1, 2025 — buoyed by India's growth story and domestic flows.

By January 2026, the index peaked at 26,373 — a 52-week high that rewarded the disciplined investor.

Then the storm arrived. The US-Iran-Israel conflict, Houthi shipping attacks, and a global risk-off wave triggered a sharp correction. FII outflows accelerated.

Nifty 50 fell to a low of 21,744 before closing FY26 at 22,819 on March 28 — a net FY return of -3.0%. The broader Nifty 500 declined ~4.8%.

FY Open (Apr 1, 2025): 23,519
52-Week High (Jan '26): 26,373
52-Week Low (Mar '26): 21,744
FY Close (Mar 28, 2026): 22,819
Nifty 50 FY Return: -3.0%
Nifty 500 FY Return: -4.8%

FROM THE DESK OF MAURYA:
Turbulence Is the Price of Admission.

Every great year of compounding was preceded by a year of doubt. FY26 was no different.

Markets do not reward those who exit at the first sign of fear. They reward those who show up again and again — with patience and purpose.

The investor who held through 2008 watched a decade of compounding. The one who stayed through COVID's March 2020 crash tripled wealth in two years.

WHAT WE DID FOR YOU THIS YEAR:

Research & Geopolitical Alerts
From Iran-Hormuz supply chain risk to FII/DII flow analysis — we delivered timely intelligence before the market moved.

Market Reassurance
Every major drawdown was met with data-backed communication — historical context, long-term charts, and a calm, confident voice.

Portfolio Intelligence
Regular XIRR reviews, fund analysis, and rebalancing guidance kept portfolios aligned with goals through volatile months.

Wealth & Tax Planning
Retirement models, ULIP structuring, ELSS guidance, and year-end tax-saving campaigns ensured no financial goal slipped.

OUTPERFORMING THE BENCHMARK:
While benchmarks delivered negative returns in FY26, our clients — guided by timely research and data-backed communication — outperformed the indices.

LOOKING AHEAD: FY 2026-27

India's structural story remains intact. Corporate earnings, domestic consumption, infrastructure investment, and a young population continue to build the foundation for a generational wealth cycle.

Our focus in FY27 remains unchanged — deliver the right data, the right perspective, and the right guidance, so every market condition becomes an opportunity rather than a threat.

"Be fearful when others are greedy, and greedy when others are fearful." — Warren Buffett

Warm regards,
Adarsh & Team Maurya
Maurya Shares & Stock Brokers Pvt. Ltd.

Disclaimer: For informational purposes only. Not investment advice. Past performance is not indicative of future results. Mutual fund investments are subject to market risks.`,
  },
  {
    id: "budget-2026-updates",
    title: "Important Budget Updates — Income Tax, Capital Gains, Buyback & TCS Changes",
    date: "February 2026",
    category: "Tax & Compliance",
    summary: "Key Budget 2026 changes that impact your investments: updated return timelines, buyback taxation, capital gains tax rates, and TCS on foreign travel reduced to 2%.",
    content: `Important Budget Updates — Income Tax, Capital Gains, Buyback & TCS Changes
Maurya Shares & Stock Brokers Pvt. Ltd.
8th February 2026

We would like to share some important Budget / Income Tax updates that may impact your investments and tax planning.

KEY HIGHLIGHTS:

1. Revised / Updated Return Timeline
The last date for filing revised/updated returns has been extended from 31 December to 31 March.
(A 1-month filing window has also been announced for AY 2025-26.)

2. Updated Return Facility for Loss Returns
Earlier, updated returns were not allowed in loss cases. Now, updated returns will be accepted even if the loss is reduced.

3. Buyback Taxation Change
The amount received from a share buyback will now be treated as capital gain (previously taxed like dividend income).

Capital Gain Tax Rates:
Long Term: 12.5%
Short Term: 20%

Capital Gain Exemption:
Individuals earning below ₹12 lakh will not get the benefit of exemption on capital gains.

Effective Date: This buyback taxation rule will be effective from 1 April 2026.
The amount received over and above the cost will be considered capital gain.

Non-Corporate Promoters (Buyback):
A tax rate of 30% will be applicable for non-corporate promoters.

4. Updated Return After Re-assessment Notice
Even after receiving a re-assessment notice, an updated return can be filed with an additional 10% charge.

5. TCS on Foreign Travel Reduced
TCS on travel and studies abroad has been reduced from 5% to 2%.
Applicable from April 1, 2026 — only on travel.

Duty-Free Changes:
Monetary cap on duty-free gold has been removed. Women can bring up to 40g & men 20g of gold on short work assignments.

Disclaimer: This is for informational purposes only. Please consult your tax advisor for personal guidance. Maurya Shares & Stock Brokers Pvt. Ltd. | ARN-112272 | Creating Wealth, for generations!`,
  },
  {
    id: "starting-2026-strong",
    title: "Starting 2026 Strong — Why Long-Term Investors Have Reasons to Stay Positive",
    date: "January 2026",
    category: "Market Outlook",
    summary: "As we enter 2026 from a more balanced valuation base, structural themes like technology, infrastructure, and financialisation of savings continue to compound. A measured optimism guide for long-term investors.",
    content: `Starting 2026 Strong — Why Long-Term Investors Have Reasons to Stay Positive
Maurya Shares & Stock Brokers Pvt. Ltd.
4th January 2026

As we step into 2026, the mood across global markets feels very different from the uncertainty we witnessed over the past year. Instead of fear or speculation, the tone now is one of measured optimism — backed by improving earnings visibility, stabilising macro trends, and the continued strength of the Indian growth story.

VALUATIONS HAVE TURNED HEALTHIER — A BETTER STARTING POINT:

The market reset over the last year has quietly done something positive — it has brought valuations closer to long-term averages.

Index PE Comparison:
Nifty 500: Was 28 (Sep '24) → Now 22 | Long-term avg: 24.7
Nifty Midcap 100: Was 45.1 → Now 34.3 | Long-term avg: 31.9
Nifty Smallcap 250: Was 33.5 → Now 29.4 | Long-term avg: 30

We are entering 2026 not from a bubble zone — but from a more balanced base. That's a constructive setup for investors.

MACRO TRENDS — GROWTH WITH CAUTION:

Global GDP expected to expand at ~2.5-2.8% — supported by policy support and capital investment.
India: steady GDP expansion between 6-7% with a supportive consumption backdrop.

STRUCTURAL THEMES CONTINUE TO DRIVE WEALTH CREATION:

2026 isn't just about "markets going up". It's about long-term themes compounding quietly in the background:
- Technology & AI adoption
- Infrastructure & capital expenditure
- Financialisation of savings
- Manufacturing shift to India
- Expanding consumption beyond metros

These are decade-long stories, not short-term trades.

WHAT SHOULD INVESTORS EXPECT IN 2026?
Not a straight-line rally, but a year where fundamentals matter and patience is rewarded. Expect:
- Reasonable, earnings-led returns
- Leadership from quality & structural themes
- Healthy corrections creating opportunities

SELECTIVE AGGRESSION — THE BEST WAY FORWARD:
2026 is not the year to be reckless — but it is also not the year to sit on the sidelines.

- Stay fully aligned to long-term goals
- Remain disciplined in asset allocation
- Allocate more to quality when opportunities arise
- Let valuations & fundamentals guide decisions

Be cautious in behaviour — but confident in conviction.

Disclaimer: For informational purposes only. Not investment advice. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.`,
  },
  {
    id: "did-markets-fail-you",
    title: "Did the Markets Fail You — or Did Your Behaviour?",
    date: "January 2026",
    category: "Investor Education",
    summary: "Most investors earn 3-6% less per year than the funds they invest in — purely due to timing decisions. Understanding the behaviour gap and the silent return killers that compound your losses.",
    content: `Did the Markets Fail You — or Did Your Behaviour?
Maurya Shares & Stock Brokers Pvt. Ltd.
18th January 2026

Most investors believe poor returns are caused by bad markets.
Data tells a different story.

A mutual fund may deliver 12-15% CAGR over a full market cycle, but the average investor earns far less.

Why? Because investors don't stay invested long enough to capture those returns.

According to Morningstar India's investor return studies, Indian mutual fund investors have earned 3-6% less per year than the funds they invested in — purely due to timing decisions such as entering late, exiting early, and frequent switching.

The market compounds. The investor interrupts.

THE BEHAVIOUR GAP (IN REAL LIFE):

Most investors:
- Invest after strong past performance
- Panic or pause SIPs during corrections
- Switch funds chasing the "best performer"
- Exit when uncertainty rises

This repeated behaviour creates a gap between investment returns and investor returns.

THE TAX IMPACT OF FREQUENT INVESTING DECISIONS:

Every time you:
- Redeem a mutual fund early
- Switch between funds frequently
- Exit equity investments before one year

...you don't just lose compounding — you invite unnecessary tax.

In India:
- Short-term capital gains (STCG) on equity are taxed at 15%
- Long-term capital gains (LTCG) above ₹1 lakh are taxed at 10%
- Debt funds and frequent switches can attract higher tax leakage

In simple words: Impatience doesn't just reduce returns — it increases taxes.

THE REAL LESSON FOR INDIAN INVESTORS:

Wealth is not created by constant action. It is created by:
- Staying invested through cycles
- Letting SIPs run during volatility
- Minimising churn and tax leakage
- Allowing time and discipline to compound together

The market rarely fails disciplined investors. More often than not, it's our behaviour and our impatience — that does.

Disclaimer: For informational purposes only. Not investment advice. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.`,
  },
  {
    id: "2025-year-in-review",
    title: "A Year of Noise, Swings and Silent Accumulation — 2025 in Review",
    date: "December 2025",
    category: "Market Outlook",
    summary: "If there was one word to describe Indian markets in 2025, it would be 'flat'. But under the hood, disciplined investors quietly improved their future compounding. Here's the full picture.",
    content: `A Year of Noise, Swings and Silent Accumulation — 2025 in Review
Maurya Shares & Stock Brokers Pvt. Ltd.
28th December 2025

If there was one word to describe Indian markets in 2025, it wouldn't be "bullish" or "bearish". It would simply be: Flat.

Not in the sense of zero movement — the NIFTY 50 did end the year with moderate gains — but in terms of market experience. This was a year where the index largely moved sideways, punctuated by sharp swings, global scares, a tumbling rupee, FII selling... and yet, somehow, we still closed the year near all-time highs.

THE NUMBERS BEHIND THE YEAR:
Start of 2025: NIFTY ~23,700 | Sensex ~78,500
End of 2025: NIFTY ~26,000 | Sensex ~85,000
Year's high: NIFTY ~26,326 (Dec)
Year's deep panic low: ~21,700 (April crash)
VIX spikes: Frequent and sharp

WHAT CAUSED THE VOLATILITY?

April "Black Monday"
Markets fell sharply — over 5% in a single day — as fears of a global trade war and US tariff shocks dominated sentiment. Mid-caps and small-caps corrected even more. This was the biggest buy-the-fear moment of the year.

Geopolitical Tensions
Border tensions and global flashpoints briefly spiked volatility and pushed investors temporarily toward defensives and gold.

A Weak Rupee & FII Exits
The rupee weakened through the year, and FIIs recorded large net outflows — driven by global policy uncertainty and currency moves. Yet, despite foreign selling... Indian markets did not break. Domestic investors quietly stepped in. SIPs kept flowing. Confidence stayed anchored.

Rate-Cut Cycle Begins Globally
Central banks — including the RBI — shifted to easing mode. This supported financials and rate-sensitive sectors and laid the foundation for future growth. Gold and silver rallied strongly as real rates softened.

UNDER THE HOOD: THE MARKET QUIETLY RESET:

Here's the big story few headlines highlighted: Valuations came down — not because prices fell much, but because earnings caught up. That means:
- PE multiples compressed
- Excess froth evaporated
- Expectations reset
- Risk reduced

THE QUIET HERO OF 2025: DISCIPLINE

Key takeaway for long-term investors:
- 2025 didn't reward impatience — it rewarded consistency
- Flat years with volatility are not setbacks — they are reset years
- They clean excess, test conviction, and give disciplined investors an advantage
- They often precede healthier compounding

Our message remains simple:
Stay invested. Stay diversified. Stay valuation-aware.

Because wealth is rarely created in the exciting years. It is quietly built during the "boring but volatile" ones — like 2025.

Disclaimer: For informational purposes only. Not investment advice. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.`,
  },
  {
    id: "gift-city-nri-advantage",
    title: "Invest in India Seamlessly — The GIFT City Advantage for NRIs",
    date: "2026",
    category: "NRI",
    summary: "GIFT City — India's first International Financial Services Centre — lets NRIs invest in India without PAN, in USD, with zero capital gains on select trades. Here's everything you need to know.",
    content: `Invest in India Seamlessly — The GIFT City Advantage for NRIs
Maurya Shares & Stock Brokers Pvt. Ltd. | ARN-112272

GUJARAT INTERNATIONAL FINANCE TEC-CITY (GIFT City)
Unlock India's growth story through a global financial platform built for the Indian diaspora.

WHY INDIA?
#4 Largest Economy & growing fast
1.4B Population — demographic dividend
6.6% GDP Growth (IMF FY2025-26 forecast)
35M+ Indian Diaspora worldwide — NRIs & PIOs

India is the world's fastest-growing major economy — projected to grow at 6.6% in FY2025-26 (IMF).

WHAT IS GIFT CITY?

India's first International Financial Services Centre (IFSC) — Gujarat International Finance Tec-City — operates as a deemed foreign jurisdiction within India. Designed to rival Singapore & Dubai, it offers NRIs and global investors access to India-linked opportunities under internationally competitive rules, tax efficiency, and liberalised forex frameworks.

Tax Advantaged: No STT, no CTT. Zero capital gains on select IFSC trades. Concessional dividend tax.
USD Denominated: Invest and hold in USD, EUR, GBP, CAD, AUD — no forced INR conversion.
Globally Regulated: Single-window IFSCA oversight. Simplified compliance rivalling London & Singapore.

KEY BENEFITS FOR NRIs:

Global Market Access: Equities, bonds, ETFs, derivatives via India INX & NSE IFSC
USD Investments: Hold assets in USD, EUR, GBP — reduce FX friction
No STT/CTT: Zero Securities or Commodities Transaction Tax on IFSC trades
Free Repatriation: Move profits abroad freely in foreign currency
No Mandatory PAN: Invest via IFSC vehicles without Indian PAN in many structures
Streamlined KYC: IFSCA one-window approvals — fast, digital onboarding

HOW TO GET STARTED:

01. Contact Us — Share your details, we'll reach out within 24 hours
02. Online Verification — Complete e-KYC with minimal paperwork and quick approval
03. Account Setup — Open your IFSC investment account within GIFT City
04. Start Investing — Select curated products and begin building your portfolio

READY TO INVEST?
Talk to Our NRI Desk Today:
+91 7021477258
www.mauryafinserv.com
support@mauryafinserv.com
1st Floor, 264-265, Dr Annie Besant Rd, Worli, Mumbai 400030

Disclaimer: Maurya Shares & Stock Brokers Pvt. Ltd. is a SEBI-registered stock broker and MF/PMS distributor. This is not investment advice. Mutual fund investments are subject to market risks.`,
  },
  {
    id: "womens-day-financial-independence",
    title: "Financial Independence for Women — A Guide for Working Women & Homemakers",
    date: "March 2024",
    category: "Investor Education",
    summary: "On International Women's Day, a practical guide to financial independence — covering personal savings, insurance, the Married Women's Property Act, and continuous learning for both working women and homemakers.",
    content: `Financial Independence for Women
Maurya Shares & Stock Brokers Pvt. Ltd.
Sunday Newsletter | 10th March 2024

We celebrated International Women's Day on 8th March. Let's see how the women in a family can be financially independent.

FOR WOMEN WHO ARE WORKING:

1. Personal Savings
Setting aside a portion of income regularly into savings accounts or investment vehicles can build a financial cushion. This provides security and independence in times of need or emergencies.

2. Health and Life Insurance
Investing in health and life insurance policies ensures financial protection against medical emergencies or unexpected events. It also provides peace of mind knowing that dependents are financially secure in case of any unfortunate circumstances.

3. Husband's Insurance/Investment under Married Women's Property Act
Leveraging legal mechanisms such as the Married Women's Property Act to secure assets or investments in the wife's name provides an additional layer of financial security and independence.

4. Continuous Personal Growth
Investing in personal and professional development through courses, workshops, or further education helps women stay relevant and competitive in their careers. This not only enhances earning potential but also fosters confidence and independence.

5. Open Communication about Finances
Regular discussions with the spouse about financial goals, budgets, investments, and any concerns ensure transparency and mutual understanding. It facilitates joint decision-making and strengthens financial planning as a family.

FOR HOMEMAKERS:

1. Discussing Finances
Even though the woman may not be earning, active involvement in financial discussions with the spouse ensures awareness and understanding of the family's financial situation. It enables effective decision-making and planning together.

2. Husband's Insurance/Investment under Married Women's Property Act
Similar to the working woman, utilizing legal provisions like the Married Women's Property Act to secure assets in the wife's name offers financial protection and independence in case of unforeseen circumstances.

3. Continuous Learning about Personal Finance
Educating oneself about personal finance, budgeting, investing, and managing household expenses empowers homemakers to contribute actively to financial planning and management. It optimizes resource allocation and enhances the overall financial well-being of the family.

4. Personal Savings in the Woman's Name
Encouraging and facilitating savings in the woman's name — even if it's a portion of the household income — cultivates financial independence and a sense of ownership. These savings can be used for personal expenses, emergencies, or future investments.

In both scenarios, fostering a culture of financial literacy, responsibility, and partnership within the family not only empowers women but also strengthens the family's financial resilience and stability.

Disclaimer: For informational purposes only. Not investment advice. Mutual fund investments are subject to market risks. Read all scheme related documents carefully.`,
  },
];

const categories = ["All", "Market Outlook", "Investor Education", "Tax & Compliance", "NRI"];

const KnowledgeCorner = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filtered = articles.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedArticle) {
    return (
      <section className="bg-background text-text py-16 px-6 md:px-12 font-sans">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-primary text-sm mb-8 hover:underline flex items-center gap-2"
          >
            ← Back to Knowledge Corner
          </button>
          <span className="text-xs border border-primary text-primary rounded-full px-3 py-1 font-semibold mb-4 inline-block">
            {selectedArticle.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-2 leading-tight">
            {selectedArticle.title}
          </h1>
          <p className="text-gray-500 text-sm mb-10">{selectedArticle.date}</p>
          <div className="border-t border-darkGold pt-8 text-gray-300 leading-relaxed whitespace-pre-line text-base">
            {selectedArticle.content}
          </div>
          <div className="mt-12 border-t border-gray-700 pt-6 text-xs text-gray-500">
            Maurya Shares and Stock Brokers Private Limited | ARN-112272 | mauryafinserv.com
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background text-text py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Knowledge Corner
        </h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          Curated insights and educational content to guide your financial journey.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles by title, topic or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-900 border border-darkGold text-white placeholder-gray-500 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition ${
                activeCategory === cat
                  ? "bg-primary text-black border-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Investment Basics */}
        {activeCategory === "All" && !search && (
          <>
            <h3 className="text-2xl font-semibold text-primary mb-6">Investment Basics</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-14">
              {basics.map((item, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden shadow border border-darkGold group transform transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                    <a href={item.link} className="mt-4 text-primary font-medium hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Articles */}
        <h3 className="text-2xl font-semibold text-primary mb-6">
          {activeCategory === "All" && !search ? "Latest Articles" : `${filtered.length} Article${filtered.length !== 1 ? "s" : ""} Found`}
        </h3>

        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center py-12">No articles found. Try a different search or category.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-gray-950 border border-darkGold rounded-xl p-6 cursor-pointer hover:bg-gray-900 hover:border-primary transition group"
              >
                <span className="text-xs border border-primary text-primary rounded-full px-3 py-1 font-semibold">
                  {article.category}
                </span>
                <h4 className="text-white font-semibold text-base mt-3 mb-2 group-hover:text-primary transition leading-snug">
                  {article.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{article.summary}</p>
                <p className="text-gray-500 text-xs mb-3">{article.date}</p>
                <p className="text-primary text-sm font-medium">Read Article →</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default KnowledgeCorner;
