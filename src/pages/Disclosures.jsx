import React from "react";
import { Link } from "react-router-dom";

const Disclosures = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen px-6 md:px-16 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Regulatory Disclosures
        </h1>
        <p className="text-gray-400 text-sm mb-10">
          As required under SEBI Circular HO/(79)2026-MIRSD-PODMMC dated 26-02-2026 
          (Ease of Doing Investment – EoDI), effective May 1, 2026.
        </p>

        {/* Company Identity */}
        <section className="mb-10 border border-primary rounded-xl p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Company Details</h2>
          <table className="w-full text-sm text-gray-300 border-collapse">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400 w-1/3">Registered Name</td>
                <td className="py-3 font-medium text-white">Maurya Shares and Stock Brokers Private Limited</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400">Trade Name</td>
                <td className="py-3 font-medium text-white">Maurya Shares and Stock Brokers Private Limited</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400">Registered Address</td>
                <td className="py-3">2nd Floor, 2B Durga Vihar, S P Verma Road, Patna, Bihar – 800001</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-gray-400">Type of Entity</td>
                <td className="py-3">Private Limited Company</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* SEBI / Exchange Registrations */}
        <section className="mb-10 border border-primary rounded-xl p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">SEBI & Exchange Registrations</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300 border-collapse">
              <thead>
                <tr className="bg-darkGold/20 text-white">
                  <th className="py-3 px-4 text-left">Capacity</th>
                  <th className="py-3 px-4 text-left">Principal Entity / Regulator</th>
                  <th className="py-3 px-4 text-left">Registration Number</th>
                  <th className="py-3 px-4 text-left">Exchange / Board</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-gray-900">
                  <td className="py-3 px-4">AMFI Registered Mutual Fund Distributor</td>
                  <td className="py-3 px-4">AMFI / SEBI</td>
                  <td className="py-3 px-4 font-mono text-primary">ARN-112272</td>
                  <td className="py-3 px-4">AMFI</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-900">
                  <td className="py-3 px-4">Authorised Person (AP) – Cash & Equity Derivatives</td>
                  <td className="py-3 px-4">Kotak Securities Ltd. (INZ000200137)</td>
                  <td className="py-3 px-4 font-mono text-primary">AP0291570133</td>
                  <td className="py-3 px-4">NSE</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-900">
                  <td className="py-3 px-4">Authorised Person (AP) – Cash Segment</td>
                  <td className="py-3 px-4">Kotak Securities Ltd. (INZ000200137)</td>
                  <td className="py-3 px-4 font-mono text-primary">AP01067301170504</td>
                  <td className="py-3 px-4">BSE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Principal Entity Details */}
        <section className="mb-10 border border-primary rounded-xl p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Principal Entity – Stock Broker Details</h2>
          <table className="w-full text-sm text-gray-300 border-collapse">
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400 w-1/3">Name</td>
                <td className="py-3 text-white font-medium">Kotak Securities Limited</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400">SEBI Registration No.</td>
                <td className="py-3 font-mono text-primary">INZ000200137</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400">Depository Participant Reg. No.</td>
                <td className="py-3 font-mono text-primary">IN-DP-629-2021</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400">Registered Address</td>
                <td className="py-3">27 BKC, C 27 G Block, Bandra Kurla Complex, Bandra (E), Mumbai – 400051</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400">Customer Care / Complaints</td>
                <td className="py-3">Mr. Ritesh Shah | 1800 209 9393 | ks.escalation@kotak.com</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400">Head of Customer Care</td>
                <td className="py-3">Mr. Tabrez Anwar | 022-42858208 | ks.servicehead@kotak.com</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-3 pr-6 text-gray-400">Compliance Officer</td>
                <td className="py-3">Mr. Hiren Thakkar | 022-42858484 | ks.compliance@kotak.com</td>
              </tr>
              <tr>
                <td className="py-3 pr-6 text-gray-400">CEO</td>
                <td className="py-3">Mr. Shripal Shah | 022-42858301 | ceo.ks@kotak.com</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Grievance Redressal */}
        <section className="mb-10 border border-primary rounded-xl p-6">
          <h2 className="text-xl font-semibold text-primary mb-2">Equity Broking — Grievance Redressal</h2>
          <p className="text-sm text-gray-400 mb-4">
            If not satisfied with the response from Kotak Securities Limited, you may contact the concerned 
            Stock Exchange / Depository:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300 border-collapse">
              <thead>
                <tr className="bg-darkGold/20 text-white">
                  <th className="py-3 px-4 text-left">Exchange / Depository</th>
                  <th className="py-3 px-4 text-left">Website</th>
                  <th className="py-3 px-4 text-left">Contact No.</th>
                  <th className="py-3 px-4 text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "BSE", web: "www.bseindia.com", phone: "022-22728097", email: "is@bseindia.com" },
                  { name: "NSE", web: "www.nseindia.com", phone: "1800 266 0058", email: "ignse@nse.co.in" },
                  { name: "MSE", web: "www.msei.in", phone: "022-61129000 Ext 9028", email: "investorcomplaints@msei.in" },
                  { name: "MCX", web: "www.mcxindia.com", phone: "022 6731 8888", email: "grievance@mcxindia.com" },
                  { name: "NCDEX", web: "www.ncdex.com", phone: "022 6640 6789", email: "ig@ncdex.com" },
                  { name: "CDSL", web: "www.cdslindia.com", phone: "022 2272 3333", email: "complaints@cdslindia.com" },
                  { name: "NSDL", web: "www.nsdl.co.in", phone: "022 2499 4200", email: "relations@nsdl.com" },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-gray-700 hover:bg-gray-900">
                    <td className="py-3 px-4 font-medium text-white">{row.name}</td>
                    <td className="py-3 px-4"><a href={`https://${row.web}`} target="_blank" rel="noopener noreferrer" className="text-primary underline">{row.web}</a></td>
                    <td className="py-3 px-4">{row.phone}</td>
                    <td className="py-3 px-4"><a href={`mailto:${row.email}`} className="hover:text-primary">{row.email}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <p>📋 File complaints with SEBI via SCORES: <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline">scores.sebi.gov.in</a></p>
            <p>📋 Initiate dispute resolution via SMART ODR Portal: <a href="https://smartodr.in/login" target="_blank" rel="noopener noreferrer" className="text-primary underline">smartodr.in</a></p>
            <p>📋 For cyber-related complaints, write to: ks.ccd@kotak.com or call 18002099595 (9am–6pm, all trading days)</p>
          </div>
        </section>

        {/* Mutual Fund — Grievance Redressal */}
        <section className="mb-10 border border-primary rounded-xl p-6">
          <h2 className="text-xl font-semibold text-primary mb-2">Mutual Fund — Grievance Redressal</h2>
          <p className="text-sm text-gray-400 mb-5">
            If you have any grievance or complaint related to mutual fund investments made through
            Maurya Shares and Stock Brokers Pvt. Ltd., please follow the escalation path below:
          </p>
          <div className="space-y-4">
            {[
              {
                level: "Level 1",
                title: "Contact Maurya Shares and Stock Brokers Pvt. Ltd.",
                detail: (
                  <>
                    <span className="block">Email: <a href="mailto:mssbpatna@gmail.com" className="text-primary underline">mssbpatna@gmail.com</a></span>
                    <span className="block">Phone: <a href="tel:9304817121" className="text-primary">+91 9304817121</a></span>
                  </>
                ),
              },
              {
                level: "Level 2",
                title: "Contact the respective AMC directly",
                detail: (
                  <span>Visit the AMC's website to register your grievance. <Link to="/amc-links" className="text-primary underline">View AMC websites →</Link></span>
                ),
              },
              {
                level: "Level 3",
                title: "Contact AMFI",
                detail: (
                  <>
                    <span className="block">AMFI Toll Free: 1800-22-2-3000</span>
                    <span className="block">Website: <a href="https://www.amfiindia.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.amfiindia.com</a></span>
                  </>
                ),
              },
              {
                level: "Level 4",
                title: "File complaint with SEBI via SCORES",
                detail: (
                  <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary underline">scores.sebi.gov.in</a>
                ),
              },
              {
                level: "Level 5",
                title: "Initiate dispute resolution via SMART ODR Portal",
                detail: (
                  <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-primary underline">smartodr.in</a>
                ),
              },
            ].map((step) => (
              <div key={step.level} className="flex gap-4 items-start">
                <span className="bg-primary text-black text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5">
                  {step.level}
                </span>
                <div className="text-sm">
                  <p className="text-white font-medium">{step.title}</p>
                  <div className="text-gray-400 mt-0.5">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEBI Circular Reference */}
        <section className="mb-10 border border-gray-700 rounded-xl p-6 bg-gray-900">
          <h2 className="text-lg font-semibold text-primary mb-2">Regulatory Reference</h2>
          <p className="text-sm text-gray-400">
            This disclosure page has been published in compliance with SEBI Circular No.{" "}
            <span className="text-white font-medium">HO/(79)2026-MIRSD-PODMMC</span> dated{" "}
            <span className="text-white font-medium">26-02-2026</span> on{" "}
            <em>Ease of Doing Investment (EoDI) – Disclosure of registered name and registration number 
            by SEBI regulated entities and their agents on Social Media Platforms</em>, effective from{" "}
            <span className="text-white font-medium">May 1, 2026</span>.
          </p>
        </section>

        {/* AMFI Code of Conduct */}
        <section className="mb-10 border border-primary rounded-xl p-6">
          <h2 className="text-xl font-semibold text-primary mb-3">AMFI Code of Conduct</h2>
          <p className="text-sm text-gray-400 mb-3">
            Maurya Shares and Stock Brokers Pvt. Ltd. abides by the AMFI Code of Conduct for Mutual Fund
            Distributors, which establishes professional standards of integrity, transparency, competency,
            and fairness in dealings with investors, AMCs, and other distributors.
          </p>
          <a
            href="https://www.amfiindia.com/distributor/mutual-funds-introduction?zoneName=CodeOfConduct"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline text-sm"
          >
            Read the full AMFI Code of Conduct →
          </a>
        </section>

        {/* Scheme Documents */}
        <section className="mb-10 border border-primary rounded-xl p-6">
          <h2 className="text-xl font-semibold text-primary mb-3">Scheme Documents (SID / KIM / Forms)</h2>
          <p className="text-sm text-gray-400 mb-3">
            Investors are advised to read the Scheme Information Document (SID), Key Information
            Memorandum (KIM), and Statement of Additional Information (SAI) of the respective mutual fund
            schemes before investing. These documents are available on the official websites of the AMCs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/amc-links"
              className="inline-block bg-primary text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-darkGold transition"
            >
              Visit AMC Websites →
            </Link>
            <a
              href="https://www.amfiindia.com/net-asset-value/mutual-fund-scheme-documents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-primary text-primary font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-primary hover:text-black transition"
            >
              AMFI Scheme Documents →
            </a>
          </div>
        </section>

        {/* Key Regulatory References */}
        <section className="mb-10 border border-primary rounded-xl p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Key Regulatory References</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300 border-collapse">
              <thead>
                <tr className="bg-darkGold/20 text-white">
                  <th className="py-3 px-4 text-left">Circular / Regulation</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Link</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "SEBI (Mutual Funds) Regulations, 2026",
                    date: "—",
                    url: "https://www.sebi.gov.in/legal/regulations/jan-2026/securities-and-exchange-board-of-india-mutual-funds-regulations-2026_99173.html",
                  },
                  {
                    name: "SEBI Master Circular for Mutual Funds",
                    date: "March 20, 2026",
                    url: "https://www.sebi.gov.in/legal/master-circulars/mar-2026/master-circular-for-mutual-funds_100491.html",
                  },
                  {
                    name: "SEBI EoDI Circular — HO/(79)2026-MIRSD-PODMMC",
                    date: "Feb 26, 2026",
                    url: "https://www.sebi.gov.in/legal/circulars/feb-2026/ease-of-doing-investment-eodi-disclosure-of-registered-name-and-registration-number-by-sebi-regulated-entities-and-their-agents-on-social-media-platforms-smps-_100005.html",
                  },
                  {
                    name: "SEBI Commission Disclosure Circular — SEBI/IMD/CIR No. 4/168230/09",
                    date: "June 30, 2009",
                    url: "https://www.sebi.gov.in/legal/circulars/jun-2009/mutual-funds-empowering-investors-through-transparency-in-payment-of-commission-and-load-structure_4626.html",
                  },
                  {
                    name: "AMFI Master Circular for Mutual Fund Distributors",
                    date: "January 2026",
                    url: "https://www.amfiindia.com/uploads/AMFI_Master_Cicular_for_MF_Ds_3c7f5ee44f.pdf",
                  },
                  {
                    name: "AMFI Code of Conduct for Mutual Fund Distributors",
                    date: "—",
                    url: "https://www.amfiindia.com/distributor/mutual-funds-introduction?zoneName=CodeOfConduct",
                  },
                  {
                    name: "AMFI Commission Disclosure Portal",
                    date: "—",
                    url: "https://www.amfiindia.com/research-information/commission-disclosure",
                  },
                  {
                    name: "SEBI SCORES — Investor Complaint Portal",
                    date: "—",
                    url: "https://scores.sebi.gov.in",
                  },
                  {
                    name: "SMART ODR — Online Dispute Resolution",
                    date: "—",
                    url: "https://smartodr.in",
                  },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-gray-700 hover:bg-gray-900">
                    <td className="py-3 px-4 text-white">{row.name}</td>
                    <td className="py-3 px-4 text-gray-400 whitespace-nowrap">{row.date}</td>
                    <td className="py-3 px-4">
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        Visit →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-xs text-gray-500 border-t border-gray-700 pt-6">
          <p>
            Investment in securities market is subject to market risks. Read all scheme-related documents carefully 
            before investing. Past performance is not indicative of future returns. Maurya Shares and Stock Brokers 
            Private Limited is an AMFI-registered Mutual Fund Distributor (ARN-112272) and an Authorised Person of 
            Kotak Securities Limited. Registration does not guarantee performance or assure returns to investors.
          </p>
          <p className="mt-2">
            <Link to="/contact-us" className="text-primary underline">Contact Us</Link> for any queries or concerns.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Disclosures;
