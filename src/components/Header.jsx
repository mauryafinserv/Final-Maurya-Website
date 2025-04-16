import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({
    menu: false,
    product: false,
    login: false,
  });

  /* prevent body scroll on mobile drawer */
  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenu.menu);
  }, [mobileMenu.menu]);

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/">
          <img src="/logo.png" alt="Maurya Logo" className="h-10 w-auto" />
        </Link>

        {/* =============== DESKTOP NAV =============== */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
          <Link to="/"  className="hover:text-indigo-600">HOME</Link>
          <a  href="#about" className="hover:text-indigo-600">ABOUT US</a>

          {/* PRODUCT OFFERING (hover) */}
          <div className="relative group">
            <button className="hover:text-indigo-600">PRODUCT OFFERING</button>
            <div className="absolute left-0 top-full w-72 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <ul className="py-2 text-sm text-gray-700">
                <li><Link to="/mutual-funds"   className="block px-4 py-2 hover:bg-gray-100">Mutual Fund</Link></li>
                <li><Link to="/pms"            className="block px-4 py-2 hover:bg-gray-100">PMS</Link></li>
                <li><Link to="/equity-broking" className="block px-4 py-2 hover:bg-gray-100">Equity Broking</Link></li>
                <li><Link to="/aif"            className="block px-4 py-2 hover:bg-gray-100">AIF</Link></li>
                <li><a href="#loan" className="block px-4 py-2 hover:bg-gray-100">Loan Against MF</a></li>
                <li><a href="#nps"  className="block px-4 py-2 hover:bg-gray-100">NPS</a></li>
              </ul>
            </div>
          </div>

          <Link to="/knowledge-corner" className="hover:text-indigo-600">KNOWLEDGE CORNER</Link>
          <a  href="#partner" className="hover:text-indigo-600">PARTNER WITH US</a>

          {/* CLIENT LOG IN (hover) */}
          <div className="relative group">
            <button className="hover:text-indigo-600">CLIENT LOG IN</button>
            <div className="absolute right-0 top-full w-72 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="https://mauryasecurity.wealthmagic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mutual Fund Platform
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kotaksecurities.com/trade/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Stock Investing Platform
                  </a>
                </li>
                <li>
                  <a
                    href="https://apps.iciciprupms.com/wealthspectrum/portal/sign-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    ICICI Alternate Investments
                  </a>
                </li>
                <li>
                  <a
                    href="https://pms.adityabirlacapital.com/wealthspectrum/app/loginWith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    ABSL Alternate Investments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenu(prev => ({ ...prev, menu: true }))}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* =============== MOBILE DRAWER =============== */}
      {mobileMenu.menu && (
        <div className="fixed inset-0 z-50 flex">
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenu({ menu: false, product: false, login: false })}
          />

          {/* drawer */}
          <div className="relative ml-auto w-72 max-w-full h-full bg-white shadow-lg p-6 z-50">
            <div className="flex justify-end">
              <button onClick={() => setMobileMenu({ menu: false, product: false, login: false })}>
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <nav className="mt-6 space-y-4 text-sm text-gray-700">
              <Link to="/" onClick={() => setMobileMenu({ menu: false })}>HOME</Link>
              <a href="#about" onClick={() => setMobileMenu({ menu: false })}>ABOUT US</a>

              {/* PRODUCT OFFERING toggle */}
              <div>
                <button
                  className="w-full flex justify-between items-center font-medium"
                  onClick={() => setMobileMenu(p => ({ ...p, product: !p.product }))}
                >
                  PRODUCT OFFERING
                  {mobileMenu.product ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileMenu.product && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li><Link to="/mutual-funds"   onClick={() => setMobileMenu({ menu: false })}>Mutual Fund</Link></li>
                    <li><Link to="/pms"            onClick={() => setMobileMenu({ menu: false })}>PMS</Link></li>
                    <li><Link to="/equity-broking" onClick={() => setMobileMenu({ menu: false })}>Equity Broking</Link></li>
                    <li><Link to="/aif"            onClick={() => setMobileMenu({ menu: false })}>AIF</Link></li>
                  </ul>
                )}
              </div>

              {/* CLIENT LOG IN toggle */}
              <div>
                <button
                  className="w-full flex justify-between items-center font-medium"
                  onClick={() => setMobileMenu(p => ({ ...p, login: !p.login }))}
                >
                  CLIENT LOG IN
                  {mobileMenu.login ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileMenu.login && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li>
                      <a
                        href="https://mauryasecurity.wealthmagic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenu({ menu: false })}
                      >
                        Mutual Fund Platform
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.kotaksecurities.com/trade/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenu({ menu: false })}
                      >
                        Stock Investing Platform
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://apps.iciciprupms.com/wealthspectrum/portal/sign-in"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenu({ menu: false })}
                      >
                        ICICI Alternate Investments
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://pms.adityabirlacapital.com/wealthspectrum/app/loginWith"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenu({ menu: false })}
                      >
                        ABSL Alternate Investments
                      </a>
                    </li>
                  </ul>
                )}
              </div>

              <Link to="/knowledge-corner" onClick={() => setMobileMenu({ menu: false })}>KNOWLEDGE CORNER</Link>
              <a href="#partner" onClick={() => setMobileMenu({ menu: false })}>PARTNER WITH US</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
