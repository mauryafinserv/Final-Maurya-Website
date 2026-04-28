import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 border-t border-gray-900">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/">
            <img src="/logo.png" alt="Maurya Logo" className="h-10 mb-4" />
          </Link>
          <p className="text-xs leading-relaxed mb-2">AMFI Reg. Mutual Fund Distributor</p>
          <p className="text-primary font-mono text-xs font-semibold mb-1">ARN-112272</p>
          <p className="text-xs mb-1">Authorised Person — Kotak Securities</p>
          <p className="text-primary font-mono text-xs font-semibold mb-4">INZ000200137</p>
          <div className="flex items-center gap-4">
            <img src="/images/amfi-logo.png" alt="AMFI" className="h-7 opacity-70" />
            <img src="/images/sebi-logo.png" alt="SEBI" className="h-7 opacity-70"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://www.sebi.gov.in/sebi_data/attachdocs/1365239994602.png"; }}
            />
          </div>
        </div>

        {/* Products */}
        <div>
          <p className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Products</p>
          <ul className="space-y-3 text-xs">
            {[
              ["Mutual Fund Distribution", "/mutual-funds"],
              ["PMS Distribution", "/pms"],
              ["AIF Distribution", "/aif"],
              ["Equity Broking", "/equity-broking"],
              ["NRI Investments", "/nri-investments"],
              ["Loan Against Securities", "/loan-against-mf"],
              ["Insurance", "/insurance-advisory"],
              ["NPS", "/nps"],
            ].map(([name, link]) => (
              <li key={name}><Link to={link} className="hover:text-primary transition">{name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Resources</p>
          <ul className="space-y-3 text-xs">
            {[
              ["Knowledge Corner", "/knowledge-corner"],
              ["Financial Calculators", "/financial-calculators"],
              ["KYC Form", "/kyc"],
              ["Downloads", "/downloads"],
              ["Regulatory Disclosures", "/disclosures"],
              ["About Us", "/about-us"],
              ["Contact Us", "/contact-us"],
            ].map(([name, link]) => (
              <li key={name}><Link to={link} className="hover:text-primary transition">{name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Connect</p>
          <ul className="space-y-3 text-xs mb-6">
            <li><a href="tel:7004016074" className="hover:text-primary transition">+91 7004016074</a></li>
            <li><a href="tel:7021477258" className="hover:text-primary transition">+91 7021477258</a></li>
            <li><a href="mailto:support@mauryafinserv.com" className="hover:text-primary transition">support@mauryafinserv.com</a></li>
            <li className="text-gray-600">Mumbai — Worli</li>
            <li className="text-gray-600">Patna — S P Verma Road</li>
          </ul>
          <div className="flex gap-4 text-lg">
            <a href="https://www.instagram.com/mssb_finserv/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/mssbpvtltd/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><FaLinkedin /></a>
            <a href="https://www.facebook.com/MauryaFinserv/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><FaFacebook /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* SEBI EoDI Strip */}
      <div className="border-t border-gray-900 px-6 md:px-16 py-4 text-xs text-gray-600 text-center">
        <p className="text-primary text-xs font-semibold mb-1">Regulatory Disclosure — SEBI EoDI Circular HO/(79)2026-MIRSD-PODMMC dated 26-02-2026</p>
        <p>
          Maurya Shares and Stock Brokers Private Limited &nbsp;|&nbsp;
          ARN: <span className="text-primary font-mono">112272</span> &nbsp;|&nbsp;
          Kotak Securities SEBI Reg.: <span className="text-primary font-mono">INZ000200137</span> &nbsp;|&nbsp;
          NSE AP: <span className="text-primary font-mono">AP0291570133</span> &nbsp;|&nbsp;
          BSE AP: <span className="text-primary font-mono">AP01067301170504</span>
          &nbsp;&nbsp;
          <Link to="/disclosures" className="text-primary hover:underline">Full Disclosures →</Link>
        </p>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-900 px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-700">
        <p>© {new Date().getFullYear()} Maurya Shares & Stock Brokers Pvt. Ltd. All rights reserved.</p>
        <p>Investment in securities market is subject to market risks. Read all scheme related documents carefully.</p>
      </div>

    </footer>
  );
};

export default Footer;
