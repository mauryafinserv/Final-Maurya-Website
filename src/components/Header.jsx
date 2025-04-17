import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({
    menu: false,
    product: false,
    login: false,
  });

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenu.menu);
  }, [mobileMenu.menu]);

  const closeAll = () => setMobileMenu({ menu: false, product: false, login: false });
  const blockLink = "block w-full px-2 py-2 rounded hover:bg-gray-100";

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        <Link to="/">
          <img src="/logo.png" alt="Maurya Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
          <Link to="/" className="hover:text-indigo-600">HOME</Link>
          <a href="#about" className="hover:text-indigo-600">ABOUT&nbsp;US</a>

          {/* Product Offering Dropdown */}
          <div className="relative group">
            <button className="hover:text-indigo-600">PRODUCT&nbsp;OFFERING</button>
            <div className="absolute left-0 top-full w-72 bg-white shadow-lg rounded-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">
              <ul className="py-2 text-sm text-gray-700">
                <li><Link to="/mutual-funds"   className="block px-4 py-2 hover:bg-gray-100">Mutual Fund</Link></li>
                <li><Link to="/pms"            className="block px-4 py-2 hover:bg-gray-100">PMS</Link></li>
                <li><Link to="/equity-broking" className="block px-4 py-2 hover:bg-gray-100">Equity Broking</Link></li>
                <li><Link to="/aif"            className="block px-4 py-2 hover:bg-gray-100">AIF</Link></li>
                <li><Link to="/tax-planning"   className="block px-4 py-2 hover:bg-gray-100">Tax Planning</Link></li>
                <li><Link to="/insurance-advisory" className="block px-4 py-2 hover:bg-gray-100">Insurance Advisory</Link></li>
                <li><a href="#loan" className="block px-4 py-2 hover:bg-gray-100">Loan&nbsp;Against&nbsp;MF</a></li>
                <li><a href="#nps"  className="block px-4 py-2 hover:bg-gray-100">NPS</a></li>
              </ul>
            </div>
          </div>

          <Link to="/knowledge-corner" className="hover:text-indigo-600">KNOWLEDGE&nbsp;CORNER</Link>
          <a href="#partner" className="hover:text-indigo-600">PARTNER&nbsp;WITH&nbsp;US</a>

          {/* Client Login Dropdown */}
          <div className="relative group">
            <button className="hover:text-indigo-600">CLIENT&nbsp;LOG&nbsp;IN</button>
            <div className="absolute right-0 top-full w-72 bg-white shadow-lg rounded-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">
              <ul className="py-2 text-sm text-gray-700">
                <li><a href="https://mauryasecurity.wealthmagic.in" target="_blank" rel="noopener" className="block px-4 py-2 hover:bg-gray-100">Mutual&nbsp;Fund&nbsp;Platform</a></li>
                <li><a href="https://www.kotaksecurities.com/trade/login" target="_blank" rel="noopener" className="block px-4 py-2 hover:bg-gray-100">Stock&nbsp;Investing&nbsp;Platform</a></li>
                <li><a href="https://apps.iciciprupms.com/wealthspectrum/portal/sign-in" target="_blank" rel="noopener" className="block px-4 py-2 hover:bg-gray-100">ICICI&nbsp;Alternate&nbsp;Investments</a></li>
                <li><a href="https://pms.adityabirlacapital.com/wealthspectrum/app/loginWith" target="_blank" rel="noopener" className="block px-4 py-2 hover:bg-gray-100">ABSL&nbsp;Alternate&nbsp;Investments</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700" onClick={() => setMobileMenu(p => ({ ...p, menu: true }))}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu.menu && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={closeAll} />
          <div className="relative ml-auto w-72 h-full bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-end">
              <button onClick={closeAll}><X className="h-6 w-6 text-gray-600" /></button>
            </div>

            <nav className="mt-6 space-y-4 text-sm text-gray-700">
              <Link to="/" className={blockLink} onClick={closeAll}>HOME</Link>
              <a href="#about" className={blockLink} onClick={closeAll}>ABOUT&nbsp;US</a>

              {/* Product Offering - Mobile */}
              <div>
                <button className="w-full flex justify-between items-center font-medium" onClick={() => setMobileMenu(p => ({ ...p, product: !p.product }))}>
                  PRODUCT&nbsp;OFFERING {mobileMenu.product ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileMenu.product && (
                  <ul className="mt-1 space-y-1">
                    <li><Link to="/mutual-funds"   className={blockLink} onClick={closeAll}>Mutual Fund</Link></li>
                    <li><Link to="/pms"            className={blockLink} onClick={closeAll}>PMS</Link></li>
                    <li><Link to="/equity-broking" className={blockLink} onClick={closeAll}>Equity Broking</Link></li>
                    <li><Link to="/aif"            className={blockLink} onClick={closeAll}>AIF</Link></li>
                    <li><Link to="/tax-planning"   className={blockLink} onClick={closeAll}>Tax Planning</Link></li>
                    <li><Link to="/insurance-advisory" className={blockLink} onClick={closeAll}>Insurance Advisory</Link></li>
                  </ul>
                )}
              </div>

              {/* Client Login - Mobile */}
              <div>
                <button className="w-full flex justify-between items-center font-medium" onClick={() => setMobileMenu(p => ({ ...p, login: !p.login }))}>
                  CLIENT&nbsp;LOG&nbsp;IN {mobileMenu.login ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileMenu.login && (
                  <ul className="mt-1 space-y-1">
                    <li><a href="https://mauryasecurity.wealthmagic.in" target="_blank" rel="noopener" className={blockLink} onClick={closeAll}>Mutual&nbsp;Fund&nbsp;Platform</a></li>
                    <li><a href="https://www.kotaksecurities.com/trade/login" target="_blank" rel="noopener" className={blockLink} onClick={closeAll}>Stock&nbsp;Investing&nbsp;Platform</a></li>
                    <li><a href="https://apps.iciciprupms.com/wealthspectrum/portal/sign-in" target="_blank" rel="noopener" className={blockLink} onClick={closeAll}>ICICI&nbsp;Alternate&nbsp;Investments</a></li>
                    <li><a href="https://pms.adityabirlacapital.com/wealthspectrum/app/loginWith" target="_blank" rel="noopener" className={blockLink} onClick={closeAll}>ABSL&nbsp;Alternate&nbsp;Investments</a></li>
                  </ul>
                )}
              </div>

              <Link to="/knowledge-corner" className={blockLink} onClick={closeAll}>KNOWLEDGE&nbsp;CORNER</Link>
              <a href="#partner" className={blockLink} onClick={closeAll}>PARTNER&nbsp;WITH&nbsp;US</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
