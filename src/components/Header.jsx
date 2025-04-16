import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenuOpen);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Maurya Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
          <Link to="/" className="hover:text-indigo-600">HOME</Link>
          <a href="#about" className="hover:text-indigo-600">ABOUT US</a>

          {/* Desktop PRODUCT OFFERING Dropdown */}
          <div className="relative group">
            <button className="hover:text-indigo-600 focus:outline-none">PRODUCT OFFERING</button>
            <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li><Link to="/mutual-funds" className="block px-4 py-2 hover:bg-gray-100">Mutual Fund</Link></li>
                <li><Link to="/pms" className="block px-4 py-2 hover:bg-gray-100">PMS</Link></li>
                <li><Link to="/equity-broking" className="block px-4 py-2 hover:bg-gray-100">Equity Broking</Link></li>
                <li><Link to="/aif" className="block px-4 py-2 hover:bg-gray-100">AIF</Link></li>
                <li><a href="#loan" className="block px-4 py-2 hover:bg-gray-100">Loan Against MF</a></li>
                <li><a href="#nps" className="block px-4 py-2 hover:bg-gray-100">NPS</a></li>
                <li><a href="#fd" className="block px-4 py-2 hover:bg-gray-100">Company Fixed Deposits</a></li>
                <li><a href="#tax" className="block px-4 py-2 hover:bg-gray-100">Tax Consultation</a></li>
                <li><a href="#insurance" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisory</a></li>
              </ul>
            </div>
          </div>

          <Link to="/knowledge-corner" className="hover:text-indigo-600">KNOWLEDGE CORNER</Link>
          <a href="#partner" className="hover:text-indigo-600">PARTNER WITH US</a>
          <a href="#login" className="hover:text-indigo-600">CLIENT LOG IN</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative ml-auto w-72 max-w-full h-full bg-white shadow-lg p-6 z-50">
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <nav className="mt-6 space-y-4 text-sm text-gray-700">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block">HOME</Link>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block">ABOUT US</a>

              {/* Toggleable PRODUCT OFFERING */}
              <div>
                <button
                  className="font-medium w-full flex justify-between items-center"
                  onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                >
                  PRODUCT OFFERING
                  {productDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {productDropdownOpen && (
                  <ul className="mt-2 space-y-2 pl-2">
                    <li><Link to="/mutual-funds" onClick={() => setMobileMenuOpen(false)}>Mutual Fund</Link></li>
                    <li><Link to="/pms" onClick={() => setMobileMenuOpen(false)}>PMS</Link></li>
                    <li><Link to="/equity-broking" onClick={() => setMobileMenuOpen(false)}>Equity Broking</Link></li>
                    <li><Link to="/aif" onClick={() => setMobileMenuOpen(false)}>AIF</Link></li>
                    <li><a href="#loan" onClick={() => setMobileMenuOpen(false)}>Loan Against MF</a></li>
                    <li><a href="#nps" onClick={() => setMobileMenuOpen(false)}>NPS</a></li>
                    <li><a href="#fd" onClick={() => setMobileMenuOpen(false)}>Company FDs</a></li>
                    <li><a href="#tax" onClick={() => setMobileMenuOpen(false)}>Tax Consultation</a></li>
                    <li><a href="#insurance" onClick={() => setMobileMenuOpen(false)}>Insurance Advisory</a></li>
                  </ul>
                )}
              </div>

              <Link to="/knowledge-corner" onClick={() => setMobileMenuOpen(false)} className="block">KNOWLEDGE CORNER</Link>
              <a href="#partner" onClick={() => setMobileMenuOpen(false)}>PARTNER WITH US</a>
              <a href="#login" onClick={() => setMobileMenuOpen(false)}>CLIENT LOG IN</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
