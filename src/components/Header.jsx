import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState({ menu: false, product: false, loginTop: false });
  const loginDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur shadow-md" : "bg-black"}`}>

      {/* Top utility bar */}
      <div className="border-b border-gray-800 text-xs py-2 px-6 md:px-16 flex justify-center md:justify-end items-center gap-6 text-gray-400">
        <Link to="/financial-calculators" className="hover:text-primary transition whitespace-nowrap">Financial Calculators</Link>
        <div ref={loginDropdownRef} className="relative">
          <button
            onClick={() => setMobileMenu((prev) => ({ ...prev, loginTop: !prev.loginTop }))}
            className="hover:text-primary transition whitespace-nowrap flex items-center gap-1"
          >
            Client Login <ChevronDown className="h-3 w-3" />
          </button>
          {mobileMenu.loginTop && (
            <div className="absolute right-0 top-full mt-2 bg-black border border-gray-800 w-64 z-[999] shadow-xl">
              <ul className="py-2 text-sm text-gray-300">
                <li><a href="https://mauryasecurity.wealthmagic.in" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:text-primary hover:bg-gray-900 transition">Mutual Fund Distribution</a></li>
                <li><a href="https://www.kotaksecurities.com/trade/login" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:text-primary hover:bg-gray-900 transition">Stock Investing Platform</a></li>
                <li><a href="https://apps.iciciprupms.com/wealthspectrum/portal/sign-in" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:text-primary hover:bg-gray-900 transition">ICICI Alternate Investments</a></li>
                <li><a href="https://pms.adityabirlacapital.com/wealthspectrum/app/loginWith" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 hover:text-primary hover:bg-gray-900 transition">ABSL Alternate Investments</a></li>
              </ul>
            </div>
          )}
        </div>
        <Link to="/downloads" className="hover:text-primary transition whitespace-nowrap hidden md:inline">Downloads</Link>
        <Link to="/kyc" className="text-primary font-semibold hover:text-white transition whitespace-nowrap">KYC Form</Link>
        <Link to="/contact-us" className="hover:text-primary transition whitespace-nowrap">Contact Us</Link>
      </div>

      {/* Main Nav */}
      <div className="px-6 md:px-16 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Maurya Logo" className="h-9 w-auto" />
          <span className="text-white text-sm font-semibold whitespace-nowrap hidden sm:block">
            Maurya Shares & Stock Brokers
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-xs font-medium text-gray-400 items-center tracking-widest uppercase">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about-us" className="hover:text-white transition">About Us</Link>
          <Link to="/nri-investments" className="hover:text-white transition">NRI</Link>

          <div className="relative group">
            <button className="hover:text-white transition flex items-center gap-1">
              Products <ChevronDown className="h-3 w-3" />
            </button>
            <div className="absolute left-0 top-full mt-0 pt-2 w-64 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
              <div className="bg-black border border-gray-800 shadow-xl">
                <ul className="py-2 text-xs text-gray-300">
                  {[
                    ["Mutual Fund Distribution", "/mutual-funds"],
                    ["PMS Distribution", "/pms"],
                    ["Equity Broking", "/equity-broking"],
                    ["AIF Distribution", "/aif"],
                    ["Tax Planning", "/tax-planning"],
                    ["Insurance", "/insurance-advisory"],
                    ["Loan Against Securities", "/loan-against-mf"],
                    ["NPS", "/nps"],
                  ].map(([name, link]) => (
                    <li key={name}>
                      <Link to={link} className="block px-4 py-3 hover:text-primary hover:bg-gray-900 transition tracking-normal normal-case">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link to="/knowledge-corner" className="hover:text-white transition">Knowledge</Link>
          <a href="#partner" className="hover:text-white transition">Partner</a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setMobileMenu(p => ({ ...p, menu: true }))}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu.menu && (
        <div className="fixed inset-0 z-40" onClick={closeAll}>
          <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-black border-l border-gray-800 p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <img src="/logo.png" alt="Maurya Logo" className="h-8" />
              <button onClick={closeAll}><X className="h-5 w-5 text-gray-400" /></button>
            </div>

            <nav className="flex flex-col gap-1 text-sm text-gray-300">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["NRI Investments", "/nri-investments"],
                ["Knowledge Corner", "/knowledge-corner"],
                ["Financial Calculators", "/financial-calculators"],
                ["Downloads", "/downloads"],
                ["Partner With Us", "#partner"],
              ].map(([name, link]) => (
                <Link key={name} to={link} onClick={closeAll} className="py-3 border-b border-gray-900 hover:text-primary transition">
                  {name}
                </Link>
              ))}

              <details className="border-b border-gray-900">
                <summary className="py-3 cursor-pointer hover:text-primary transition">Products</summary>
                <div className="ml-4 mb-2 flex flex-col gap-1 text-xs text-gray-400">
                  {[
                    ["Mutual Fund Distribution", "/mutual-funds"],
                    ["PMS Distribution", "/pms"],
                    ["Equity Broking", "/equity-broking"],
                    ["AIF Distribution", "/aif"],
                    ["Tax Planning", "/tax-planning"],
                    ["Insurance", "/insurance-advisory"],
                    ["Loan Against Securities", "/loan-against-mf"],
                    ["NPS", "/nps"],
                  ].map(([name, link]) => (
                    <Link key={name} to={link} onClick={closeAll} className="py-2 hover:text-primary transition">{name}</Link>
                  ))}
                </div>
              </details>

              <Link to="/kyc" onClick={closeAll} className="py-3 text-primary font-semibold border-b border-gray-900">KYC Form</Link>
              <Link to="/contact-us" onClick={closeAll} className="py-3 border-b border-gray-900 hover:text-primary transition">Contact Us</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
