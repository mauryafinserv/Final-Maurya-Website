import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Maurya Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
          <Link to="/" className="hover:text-indigo-600">HOME</Link>
          <a href="#about" className="hover:text-indigo-600">ABOUT US</a>

          {/* Dropdown for Product Offering */}
          <div className="relative group">
            <div className="flex items-center">
              <button className="hover:text-indigo-600 focus:outline-none">
                PRODUCT OFFERING
              </button>
            </div>
            <div className="absolute top-full left-0 w-72 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link to="/mutual-funds" className="block px-4 py-2 hover:bg-gray-100">
                    Mutual Fund
                  </Link>
                </li>
                <li><a href="#equity" className="block px-4 py-2 hover:bg-gray-100">Equity Broking</a></li>
                <li><a href="#aif" className="block px-4 py-2 hover:bg-gray-100">AIF (Alternative Investment Fund)</a></li>
                <li><a href="#pms" className="block px-4 py-2 hover:bg-gray-100">PMS (Portfolio Management Services)</a></li>
                <li><a href="#loan" className="block px-4 py-2 hover:bg-gray-100">Loan Against MF</a></li>
                <li><a href="#nps" className="block px-4 py-2 hover:bg-gray-100">NPS</a></li>
                <li><a href="#fd" className="block px-4 py-2 hover:bg-gray-100">Company Fixed Deposits</a></li>
                <li><a href="#tax" className="block px-4 py-2 hover:bg-gray-100">Tax Consultation & Planning</a></li>
                <li><a href="#insurance" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisory</a></li>
              </ul>
            </div>
          </div>

          <a href="#knowledge" className="hover:text-indigo-600">KNOWLEDGE CORNER</a>
          <a href="#partner" className="hover:text-indigo-600">PARTNER WITH US</a>
          <a href="#login" className="hover:text-indigo-600">CLIENT LOG IN</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;