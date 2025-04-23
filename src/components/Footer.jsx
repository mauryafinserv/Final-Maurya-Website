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
          <p className="text-sm text-gray-400">
            ARN: 112272 | SEBI Registered Distributor (Non-Individual)
          </p>
          <img src="/images/amfi-logo.png" alt="AMFI Logo" className="h-8 mt-4" />
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
              ✉️ <a href="mailto:mssbpatna@gmail.com" className="hover:underline">mssbpatna@gmail.com</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-xl text-primary">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
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
