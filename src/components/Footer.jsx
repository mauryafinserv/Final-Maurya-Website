import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 px-6 md:px-16 border-t border-darkGold">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-10">

        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src={logo} alt="Maurya Logo" className="h-10 mr-3" />
            <span className="text-lg font-semibold text-white">
              Maurya Shares & Stock Brokers
            </span>
          </Link>

          {/* MF Distributor */}
          <p className="text-xs text-gray-400 mb-1">
            AMFI Registered Mutual Fund Distributor (Non-Individual)
          </p>
          <p className="text-xs text-primary font-mono font-semibold mb-3">ARN: 112272</p>

          {/* Stock Broker / AP */}
          <p className="text-xs text-gray-400 mb-1">
            Authorised Person of Kotak Securities Ltd.
          </p>
          <p className="text-xs text-gray-400 mb-1">
            NSE AP Reg.: <span className="text-primary font-mono">AP0291570133</span>
          </p>
          <p className="text-xs text-gray-400 mb-4">
            BSE AP Reg.: <span className="text-primary font-mono">AP01067301170504</span>
          </p>

          {/* Logos Row */}
          <div className="flex items-center gap-4">
            <img src="/images/amfi-logo.png" alt="AMFI Logo" className="h-8" />
            <img src="/images/sebi-logo.png" alt="SEBI Logo" className="h-8"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://www.sebi.gov.in/sebi_data/attachdocs/1365239994602.png";
              }}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/knowledge-corner" className="hover:underline">Knowledge Corner</Link></li>
            <li><a href="#partner" className="hover:underline">Partner with Us</a></li>
            <li><Link to="/aif" className="hover:underline">AIF</Link></li>
            <li><Link to="/pms" className="hover:underline">PMS</Link></li>
            <li><Link to="/insurance-advisory" className="hover:underline">Insurance Advisory</Link></li>
            <li><Link to="/disclosures" className="hover:underline text-primary">Regulatory Disclosures</Link></li>
          </ul>
        </div>

        {/* Calculators */}
        <div>
          <h4 className="text-primary font-semibold mb-4">Calculators</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/mutual-funds#sip-calculator" className="hover:underline">SIP Calculator</Link></li>
            <li><Link to="/mutual-funds#lumpsum-calculator" className="hover:underline">Lumpsum Calculator</Link></li>
            <li><Link to="/mutual-funds#goal-calculator" className="hover:underline">Goal Calculator</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-primary font-semibold mb-4">Connect With Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              📞 <a href="tel:7004016074" className="hover:underline">+91 7004016074</a>
            </li>
            <li>
              ✉️ <a href="mailto:support@mauryafinserv.com" className="hover:underline">support@mauryafinserv.com</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-xl text-primary">
            <a href="https://www.instagram.com/mssb_finserv/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/mssbpvtltd/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/MauryaFinserv/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* SEBI EoDI Compliance Strip */}
      <div className="border-t border-darkGold bg-gray-950 px-4 py-4 text-xs text-gray-400 text-center">
        <p className="font-semibold text-primary mb-1">Regulatory Disclosure (As per SEBI EoDI Circular dated 26-02-2026)</p>
        <p>
          <span className="text-white font-medium">Maurya Shares and Stock Brokers Private Limited</span> &nbsp;|&nbsp;
          AMFI Reg. No.: <span className="text-primary font-mono">ARN-112272</span> &nbsp;|&nbsp;
          Authorised Person of <span className="text-white">Kotak Securities Ltd.</span> (SEBI Reg.: <span className="text-primary font-mono">INZ000200137</span>) &nbsp;|&nbsp;
          NSE AP Reg.: <span className="text-primary font-mono">AP0291570133</span> &nbsp;|&nbsp;
          BSE AP Reg.: <span className="text-primary font-mono">AP01067301170504</span>
        </p>
        <p className="mt-1">
          <Link to="/disclosures" className="text-primary underline hover:text-darkGold">
            View Full Regulatory Disclosures →
          </Link>
        </p>
      </div>

      {/* Bottom Disclaimer */}
      <div className="border-t border-darkGold pt-6 pb-4 text-xs text-center text-gray-500">
        <p>
          Disclaimer: Investment in securities market are subject to market risks. Read all scheme related documents carefully.
          Maurya Shares & Stock Brokers Pvt Ltd is a SEBI-registered Mutual Fund Distributor (ARN-112272).
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Maurya Shares & Stock Brokers Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
