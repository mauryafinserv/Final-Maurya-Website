// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({
    menu: false,
    product: false,
    loginTop: false,
  });

  const loginDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setMobileMenu((prev) => ({ ...prev, loginTop: false }));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenu.menu);
  }, [mobileMenu.menu]);

  const closeAll = () => setMobileMenu({ menu: false, product: false, loginTop: false });

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 🔷 Top Black Bar */}
      <div className="bg-black text-gold-500 text-sm py-2 px-4 flex justify-end items-center gap-6 relative">
        {/* CLIENT LOGIN */}
        <div className="relative" ref={loginDropdownRef}>
          <button
            onClick={() => setMobileMenu((prev) => ({ ...prev, loginTop: !prev.loginTop }))}
            className="hover:text-yellow-500"
          >
            CLIENT LOG IN
          </button>
          <div
            className={`absolute top-8 right-0 bg-white shadow-lg rounded-md w-[90vw] max-w-xs text-gray-700 z-50 transition-all duration-200 ease-in-out ${
              mobileMenu.loginTop
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <ul className="py-2 text-sm">
              <li>
                <a href="https://mauryasecurity.wealthmagic.in" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">
                  Mutual Fund Platform
                </a>
              </li>
              <li>
                <a href="https://www.kotaksecurities.com/trade/login" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">
                  Stock Investing Platform
                </a>
              </li>
              <li>
                <a href="https://apps.iciciprupms.com/wealthspectrum/portal/sign-in" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">
                  ICICI Alternate Investments
                </a>
              </li>
              <li>
                <a href="https://pms.adityabirlacapital.com/wealthspectrum/app/loginWith" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">
                  ABSL Alternate Investments
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <Link to="/contact-us" className="hover:text-yellow-500">
          CONTACT US
        </Link>
      </div>

      {/* 🔷 Main Nav */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Maurya Logo" className="h-10 w-auto" />
            <span className="text-gray-800 text-sm font-semibold whitespace-nowrap hidden sm:inline-block">
              Maurya Shares & Stock Brokers
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
            <Link to="/" className="hover:text-indigo-600">HOME</Link>
            <Link to="/about-us" className="hover:text-indigo-600">ABOUT US</Link>
            <Link to="/nri-investments" className="hover:text-indigo-600">NRI</Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="hover:text-indigo-600">PRODUCT OFFERING</button>
              <div className="absolute left-0 top-full w-72 bg-white shadow-lg rounded-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">
                <ul className="py-2 text-sm text-gray-700">
                  <li><Link to="/mutual-funds" className="block px-4 py-2 hover:bg-gray-100">Mutual Fund</Link></li>
                  <li><Link to="/pms" className="block px-4 py-2 hover:bg-gray-100">PMS</Link></li>
                  <li><Link to="/equity-broking" className="block px-4 py-2 hover:bg-gray-100">Equity Broking</Link></li>
                  <li><Link to="/aif" className="block px-4 py-2 hover:bg-gray-100">AIF</Link></li>
                  <li><Link to="/tax-planning" className="block px-4 py-2 hover:bg-gray-100">Tax Planning</Link></li>
                  <li><Link to="/insurance-advisory" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisory</Link></li>
                  <li><Link to="/loan-against-mf" className="block px-4 py-2 hover:bg-gray-100">Loan Against MF</Link></li>
                  <li><Link to="/nps" className="block px-4 py-2 hover:bg-gray-100">NPS</Link></li>
                </ul>
              </div>
            </div>

            <Link to="/knowledge-corner" className="hover:text-indigo-600">KNOWLEDGE CORNER</Link>
            <a href="#partner" className="hover:text-indigo-600">PARTNER WITH US</a>
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-gray-700 z-50 relative" onClick={() => setMobileMenu((p) => ({ ...p, menu: true }))}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* 🔷 Side Drawer Mobile Menu */}
      {mobileMenu.menu && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40">
          <div className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <img src="/logo.png" alt="Maurya Logo" className="h-10" />
              <button onClick={closeAll}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-gray-800 text-sm font-medium">
              <Link to="/" onClick={closeAll}>HOME</Link>
              <Link to="/about-us" onClick={closeAll}>ABOUT US</Link>
              <Link to="/nri-investments" onClick={closeAll}>NRI</Link>
              <details className="group">
                <summary className="cursor-pointer">PRODUCT OFFERING</summary>
                <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                  <li><Link to="/mutual-funds" onClick={closeAll}>Mutual Fund</Link></li>
                  <li><Link to="/pms" onClick={closeAll}>PMS</Link></li>
                  <li><Link to="/equity-broking" onClick={closeAll}>Equity Broking</Link></li>
                  <li><Link to="/aif" onClick={closeAll}>AIF</Link></li>
                  <li><Link to="/tax-planning" onClick={closeAll}>Tax Planning</Link></li>
                  <li><Link to="/insurance-advisory" onClick={closeAll}>Insurance Advisory</Link></li>
                  <li><Link to="/loan-against-mf" onClick={closeAll}>Loan Against MF</Link></li>
                  <li><Link to="/nps" onClick={closeAll}>NPS</Link></li>
                </ul>
              </details>
              <Link to="/knowledge-corner" onClick={closeAll}>KNOWLEDGE CORNER</Link>
              <a href="#partner" onClick={closeAll}>PARTNER WITH US</a>
              <Link to="/contact-us" onClick={closeAll}>CONTACT US</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
