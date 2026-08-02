import React, { useState, useMemo } from "react";

// ── Commission Rate Data (Trail % p.a. excluding GST) ──────────────────
const COMMISSION_DATA = [
  { amc: "Aditya Birla Sun Life Mutual Fund", equity: "0.18% to 1.05%", debt: "0.08% to 0.75%", elss: "0.70%" },
  { amc: "Axis Mutual Fund", equity: "0.20% to 1.55%", debt: "0.02% to 1.27%", elss: "0.64%" },
  { amc: "Bandhan Mutual Fund", equity: "0.38% to 1.31%", debt: "0.02% to 1.10%", elss: "0.93%" },
  { amc: "DSP Mutual Fund", equity: "0.17% to 1.30%", debt: "0.04% to 0.93%", elss: "0.93%" },
  { amc: "Edelweiss Mutual Fund", equity: "0.30% to 1.40%", debt: "0.04% to 0.65%", elss: "1.27%" },
  { amc: "Franklin Templeton Mutual Fund", equity: "0.20% to 1.25%", debt: "0.03% to 0.45%", elss: "0.70%" },
  { amc: "HDFC Mutual Fund", equity: "0.17% to 1.23%", debt: "0.08% to 0.77%", elss: "0.78%" },
  { amc: "HSBC Mutual Fund", equity: "0.21% to 1.35%", debt: "0.07% to 1.35%", elss: "1.14%" },
  { amc: "ICICI Prudential Mutual Fund", equity: "0.07% to 1.23%", debt: "0.04% to 1.10%", elss: "0.81%" },
  { amc: "Invesco Mutual Fund", equity: "0.21% to 1.44%", debt: "0.04% to 0.76%", elss: "1.06%" },
  { amc: "Kotak Mahindra Mutual Fund", equity: "0.16% to 1.48%", debt: "0.08% to 1.04%", elss: "1.06%" },
  { amc: "LIC Mutual Fund", equity: "0.17% to 0.68%", debt: "0.02% to 0.42%", elss: "0.68%" },
  { amc: "Mirae Asset Mutual Fund", equity: "0.04% to 1.36%", debt: "0.08% to 0.72%", elss: "0.72%" },
  { amc: "Motilal Oswal Mutual Fund", equity: "0.10% to 1.25%", debt: "0.07% to 0.80%", elss: "0.86%" },
  { amc: "Nippon India Mutual Fund", equity: "0.23% to 1.10%", debt: "0.06% to 0.85%", elss: "0.86%" },
  { amc: "PGIM India Mutual Fund", equity: "0.10% to 0.85%", debt: "0.04% to 0.40%", elss: "N/A" },
  { amc: "PPFAS Mutual Fund", equity: "0.40% to 1.10%", debt: "0.04% to 0.50%", elss: "N/A" },
  { amc: "SBI Mutual Fund", equity: "0.17% to 1.15%", debt: "0.04% to 0.76%", elss: "0.79%" },
  { amc: "Sundaram Mutual Fund", equity: "0.47% to 1.27%", debt: "0.08% to 1.06%", elss: "1.27%" },
  { amc: "Tata Mutual Fund", equity: "0.25% to 1.30%", debt: "0.05% to 0.75%", elss: "1.00%" },
  { amc: "UTI Mutual Fund", equity: "0.10% to 1.45%", debt: "0.05% to 1.00%", elss: "1.05%" },
];

const CommissionDisclosure = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return COMMISSION_DATA;
    const q = search.toLowerCase();
    return COMMISSION_DATA.filter((r) => r.amc.toLowerCase().includes(q));
  }, [search]);

  return (
    <section className="bg-background text-text min-h-screen py-16 px-4 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Commission Disclosure
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-3xl">
          The firm receives trail commission from mutual fund AMCs for business sourced under its ARN code.
          The commission varies from fund house to fund house and from scheme to scheme. As per SEBI
          guidelines, following are the details of commission applicable to Maurya Shares and Stock Brokers
          Pvt. Ltd. from various AMCs whose products are distributed:
        </p>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search AMC..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg text-sm w-full max-w-xs focus:outline-none focus:border-primary"
          />
        </div>

        {/* Commission Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-800 mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-900">
                <th className="text-left px-4 py-3.5 text-gray-300 font-semibold min-w-[220px]">AMC Name</th>
                <th className="px-4 py-3.5 text-center text-gray-300 font-semibold min-w-[140px]">*Equity Funds</th>
                <th className="px-4 py-3.5 text-center text-gray-300 font-semibold min-w-[140px]">**Debt Funds</th>
                <th className="px-4 py-3.5 text-center text-gray-300 font-semibold min-w-[90px]">ELSS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr
                  key={row.amc}
                  className={`border-t border-gray-800 ${
                    idx % 2 === 0 ? "bg-black" : "bg-gray-950"
                  } hover:bg-gray-900 transition-colors`}
                >
                  <td className="px-4 py-3 text-white font-medium">{row.amc}</td>
                  <td className="px-4 py-3 text-center text-gray-300 tabular-nums">{row.equity}</td>
                  <td className="px-4 py-3 text-center text-gray-300 tabular-nums">{row.debt}</td>
                  <td className="px-4 py-3 text-center text-primary font-semibold tabular-nums">{row.elss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnotes */}
        <div className="text-xs text-gray-500 space-y-1 mb-12">
          <p>*Equity-oriented schemes also include equity-oriented hybrid funds and equity arbitrage funds.</p>
          <p>**Debt-oriented schemes include all schemes that do not fall under equity-oriented schemes (except ELSS).</p>
        </div>

        {/* Disclaimers */}
        <div className="border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-lg font-semibold text-primary mb-4">About the Commission Rates Disclosed Above</h2>
          <div className="text-sm text-gray-400 space-y-4">
            <p>
              <span className="text-white font-medium">1.</span> The rates refer to T-30 cities as defined by AMFI.
              Commission could be higher in case of B-30 cities.
            </p>
            <p>
              <span className="text-white font-medium">2.</span> Rates are subject to change without prior consent,
              at the sole discretion of the respective AMCs and in accordance with SEBI/AMFI regulations.
            </p>
            <p>
              <span className="text-white font-medium">3.</span> All investments are subscribed into Regular/Distributor
              Plan, which involves payment of trail commission to the distributor. No upfront commission is paid to or
              received by Maurya Shares and Stock Brokers Pvt. Ltd.
            </p>
            <p>
              <span className="text-white font-medium">4.</span> Details of scheme-level commission on mutual funds
              are available with your relationship manager and would be produced on request.
            </p>
            <p>
              <span className="text-white font-medium">5.</span> This information is compiled on a best-effort basis
              and rates are updated as and when they are received from AMCs.
            </p>
            <p>
              <span className="text-white font-medium">6.</span> You may check the gross commissions earned by
              Maurya Shares and Stock Brokers Pvt. Ltd. in any particular FY by visiting:{" "}
              <a
                href="https://www.amfiindia.com/commission-disclosure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                www.amfiindia.com/commission-disclosure
              </a>
            </p>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="border-t border-gray-800 pt-6">
          <h2 className="text-sm font-semibold text-gray-400 mb-3">Risk Factors</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully
            before investing. Mutual Fund schemes do not assure or guarantee any returns. Past performance of
            any scheme may or may not be sustained in future. There is no guarantee that the investment
            objective of any suggested scheme shall be achieved. All existing and prospective investors are
            advised to check and evaluate the exit loads and other cost structure (TER) applicable at the time
            of making the investment before finalizing on any investment decision. We deal in Regular Plans
            only for Mutual Fund schemes and earn a trailing commission on client investments. Disclosure of
            commission earnings is made to clients at the time of investments. Option of Direct Plan for every
            Mutual Fund scheme is available to investors offering advantage of lower expense ratio. We are not
            entitled to earn any commission on Direct Plans. Hence we do not deal in Direct Plans.
          </p>
          <p className="text-xs text-gray-500 mt-3">
            Maurya Shares and Stock Brokers Private Limited is an AMFI-registered Mutual Fund Distributor
            (ARN-112272) and an Authorised Person of Kotak Securities Limited. Registration does not
            guarantee performance or assure returns to investors.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CommissionDisclosure;
