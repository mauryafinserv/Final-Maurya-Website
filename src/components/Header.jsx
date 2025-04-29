// src/components/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

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
  const blockLink = "block w-full px-2 py-2 rounded hover:bg-gray-100";

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 🔵 Top Black Bar */}
      <div className="bg-black text-gray-300 text-sm py-2 px-4 flex justify-end items-center gap-6 relative">
        {/* CLIENT LOGIN Dropdown */}
        <div className="relative" ref={loginDropdownRef}>
          <button
            onClick={() => setMobileMenu((prev) => ({ ...prev, loginTop: !prev.loginTop }))}
            className="hover:text-primary"
          >
            CLIENT LOG IN
          </button>
          {mobileMenu.loginTop && (
            <div className="absolute right-0 top-8 bg-white shadow-lg rounded-md w-72 text-gray-700">
              <ul className="py-2 text-sm">
                <li><a href="https://mauryasecurity.wealthmagic.in" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">Mutual Fund Platform</a></li>
                <li><a href="https://www.kotaksecurities.com/trade/login" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">Stock Investing Platform</a></li>
                <li><a href="https://apps.iciciprupms.com/wealthspectrum/portal/sign-in" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">ICICI Alternate Investments</a></li>
                <li><a href="https://pms.adityabirlacapital.com/wealthspectrum/app/loginWith" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100">ABSL Alternate Investments</a></li>
              </ul>
            </div>
          )}
        </div>

        {/* Contact Us */}
        <Link to="/contact-us" className="hover:text-primary">
          CONTACT US
        </Link>
      </div>

      {/* 🔵 Main White Navigation */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Maurya Logo" className="h-10 w-auto" />
            <span className="text-gray-800 text-sm font-semibold whitespace-nowrap hidden sm:inline-block">
              Maurya Shares & Stock Brokers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
            <Link to="/" className="hover:text-indigo-600">HOME</Link>
            <Link to="/about-us" className="hover:text-indigo-600">ABOUT US</Link>
            <Link to="/nri-investments" className="hover:text-indigo-600">NRI</Link>

            {/* Product Offering Dropdown */}
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

      {/* 🟠 Mobile Drawer */}
      {mobileMenu.menu && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={closeAll} />
          <div className="relative ml-auto w-72 h-full bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-end">
              <button onClick={closeAll}>
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <nav className="mt-6 space-y-4 text-sm text-gray-700">
              <Link to="/" className={blockLink} onClick={closeAll}>HOME</Link>
              <Link to="/about-us" className={blockLink} onClick={closeAll}>ABOUT US</Link>
              <Link to="/nri-investments" className={blockLink} onClick={closeAll}>NRI</Link>

              {/* Product Offering Mobile */}
              <div>
                <button className="w-full flex justify-between items-center font-medium" onClick={() => setMobileMenu(p => ({ ...p, product: !p.product }))}>
                  PRODUCT OFFERING {mobileMenu.product ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileMenu.product && (
                  <ul className="mt-1 space-y-1">
                    <li><Link to="/mutual-funds" className={blockLink} onClick={closeAll}>Mutual Fund</Link></li>
                    <li><Link to="/pms" className={blockLink} onClick={closeAll}>PMS</Link></li>
                    <li><Link to="/equity-broking" className={blockLink} onClick={closeAll}>Equity Broking</Link></li>
                    <li><Link to="/aif" className={blockLink} onClick={closeAll}>AIF</Link></li>
                    <li><Link to="/tax-planning" className={blockLink} onClick={closeAll}>Tax Planning</Link></li>
                    <li><Link to="/insurance-advisory" className={blockLink} onClick={closeAll}>Insurance Advisory</Link></li>
                    <li><Link to="/loan-against-mf" className={blockLink} onClick={closeAll}>Loan Against MF</Link></li>
                    <li><Link to="/nps" className={blockLink} onClick={closeAll}>NPS</Link></li>
                  </ul>
                )}
              </div>

              <Link to="/knowledge-corner" className={blockLink} onClick={closeAll}>KNOWLEDGE CORNER</Link>
              <a href="#partner" className={blockLink} onClick={closeAll}>PARTNER WITH US</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
