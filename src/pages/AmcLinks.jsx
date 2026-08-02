import React from "react";

const AMC_LIST = [
  { name: "Aditya Birla Sun Life Mutual Fund", url: "https://mutualfund.adityabirlacapital.com" },
  { name: "Axis Mutual Fund", url: "https://www.axismf.com" },
  { name: "Bandhan Mutual Fund", url: "https://www.bandhanmutual.com" },
  { name: "DSP Mutual Fund", url: "https://www.dspim.com" },
  { name: "Edelweiss Mutual Fund", url: "https://www.edelweissmf.com" },
  { name: "Franklin Templeton Mutual Fund", url: "https://www.franklintempletonindia.com" },
  { name: "HDFC Mutual Fund", url: "https://www.hdfcfund.com" },
  { name: "HSBC Mutual Fund", url: "https://www.assetmanagement.hsbc.co.in" },
  { name: "ICICI Prudential Mutual Fund", url: "https://www.icicipruamc.com" },
  { name: "Invesco Mutual Fund", url: "https://www.invescomutualfund.com" },
  { name: "Kotak Mahindra Mutual Fund", url: "https://www.kotakmf.com" },
  { name: "LIC Mutual Fund", url: "https://www.licmf.com" },
  { name: "Mirae Asset Mutual Fund", url: "https://www.miraeassetmf.co.in" },
  { name: "Motilal Oswal Mutual Fund", url: "https://www.motilaloswalmf.com" },
  { name: "Nippon India Mutual Fund", url: "https://www.nipponindiamf.com" },
  { name: "PGIM India Mutual Fund", url: "https://www.pgimindiamf.com" },
  { name: "PPFAS Mutual Fund", url: "https://amc.ppfas.com" },
  { name: "SBI Mutual Fund", url: "https://www.sbimf.com" },
  { name: "Sundaram Mutual Fund", url: "https://www.sundarammutual.com" },
  { name: "Tata Mutual Fund", url: "https://www.tatamutualfund.com" },
  { name: "UTI Mutual Fund", url: "https://www.utimf.com" },
];

const AmcLinks = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen px-6 md:px-16 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Our Empanelled AMCs
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-2xl">
          Maurya Shares and Stock Brokers Pvt. Ltd. (ARN-112272) distributes mutual fund schemes from
          the following AMCs. Visit any AMC's official website to access Scheme Information Documents (SID),
          Key Information Memorandum (KIM), application forms, NAVs, and factsheets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {AMC_LIST.map((amc) => (
            <a
              key={amc.name}
              href={amc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-gray-800 rounded-lg px-5 py-4 hover:border-primary hover:bg-gray-900 transition-all group"
            >
              <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                {amc.name}
              </span>
              <span className="text-gray-600 group-hover:text-primary text-xs transition-colors">
                Visit →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 leading-relaxed">
            Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully
            before investing. Investors are advised to check the SID, KIM, SAI, and addendums of the respective
            schemes on the AMC's official website before making any investment decision. Past performance is
            not indicative of future returns.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AmcLinks;
