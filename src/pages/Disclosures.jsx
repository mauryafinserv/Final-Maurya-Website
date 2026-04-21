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
          <h2 className="text-xl font-semibold text-primary mb-2">Grievance Redressal</h2>
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
                    <td className="py-3 px-4">{row.web}</td>
                    <td className="py-3 px-4">{row.phone}</td>
                    <td className="py-3 px-4">{row.email}</td>
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
