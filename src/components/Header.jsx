/* Header.jsx */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({ menu:false, product:false, login:false });
  useEffect(()=>{ document.body.classList.toggle("menu-open", mobileMenu.menu); },[mobileMenu.menu]);

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      {/* === TOP BAR === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center h-16">
        <Link to="/"><img src="/logo.png" alt="Maurya Logo" className="h-10 w-auto" /></Link>

        {/* ===== DESKTOP NAV ===== */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
          {/* …desktop code unchanged… */}
        </nav>

        {/* HAMBURGER */}
        <button className="md:hidden text-gray-700" onClick={()=>setMobileMenu(p=>({...p,menu:true}))}>
          <Menu className="h-6 w-6"/>
        </button>
      </div>

      {/* ===== MOBILE DRAWER ===== */}
      {mobileMenu.menu && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={()=>setMobileMenu({menu:false,product:false,login:false})}/>
          <div className="relative ml-auto w-72 h-full bg-white shadow-lg p-6">
            <div className="flex justify-end">
              <button onClick={()=>setMobileMenu({menu:false,product:false,login:false})}><X className="h-6 w-6 text-gray-600"/></button>
            </div>

            <nav className="mt-6 space-y-4 text-sm text-gray-700">
              <Link to="/" onClick={()=>setMobileMenu({menu:false})}>HOME</Link>
              <a href="#about" onClick={()=>setMobileMenu({menu:false})}>ABOUT US</a>

              {/* PRODUCT OFFERING */}
              <div>
                <button className="w-full flex justify-between items-center font-medium"
                        onClick={()=>setMobileMenu(p=>({...p,product:!p.product}))}>
                  PRODUCT OFFERING {mobileMenu.product?<ChevronUp className="h-4 w-4"/>:<ChevronDown className="h-4 w-4"/>}
                </button>
                {mobileMenu.product && (
                  <ul className="mt-1 space-y-1 list-none">
                    <li><Link to="/mutual-funds"   className="block w-full px-2 py-2 rounded hover:bg-gray-100" onClick={()=>setMobileMenu({menu:false})}>Mutual Fund</Link></li>
                    <li><Link to="/pms"            className="block w-full px-2 py-2 rounded hover:bg-gray-100" onClick={()=>setMobileMenu({menu:false})}>PMS</Link></li>
                    <li><Link to="/equity-broking" className="block w-full px-2 py-2 rounded hover:bg-gray-100" onClick={()=>setMobileMenu({menu:false})}>Equity Broking</Link></li>
                    <li><Link to="/aif"            className="block w-full px-2 py-2 rounded hover:bg-gray-100" onClick={()=>setMobileMenu({menu:false})}>AIF</Link></li>
                  </ul>
                )}
              </div>

              {/* CLIENT LOGIN */}
              <div>
                <button className="w-full flex justify-between items-center font-medium"
                        onClick={()=>setMobileMenu(p=>({...p,login:!p.login}))}>
                  CLIENT LOG IN {mobileMenu.login?<ChevronUp className="h-4 w-4"/>:<ChevronDown className="h-4 w-4"/>}
                </button>
                {mobileMenu.login && (
                  <ul className="mt-1 space-y-1 list-none">
                    <li><a href="https://mauryasecurity.wealthmagic.in" target="_blank" rel="noopener"
                           className="block w-full px-2 py-2 rounded hover:bg-gray-100"
                           onClick={()=>setMobileMenu({menu:false})}>Mutual Fund Platform</a></li>
                    <li><a href="https://www.kotaksecurities.com/trade/login" target="_blank" rel="noopener"
                           className="block w-full px-2 py-2 rounded hover:bg-gray-100"
                           onClick={()=>setMobileMenu({menu:false})}>Stock Investing Platform</a></li>
                    <li><a href="https://apps.iciciprupms.com/wealthspectrum/portal/sign-in" target="_blank" rel="noopener"
                           className="block w-full px-2 py-2 rounded hover:bg-gray-100"
                           onClick={()=>setMobileMenu({menu:false})}>ICICI Alternate Investments</a></li>
                    <li><a href="https://pms.adityabirlacapital.com/wealthspectrum/app/loginWith" target="_blank" rel="noopener"
                           className="block w-full px-2 py-2 rounded hover:bg-gray-100"
                           onClick={()=>setMobileMenu({menu:false})}>ABSL Alternate Investments</a></li>
                  </ul>
                )}
              </div>

              <Link to="/knowledge-corner" onClick={()=>setMobileMenu({menu:false})}>KNOWLEDGE CORNER</Link>
              <a href="#partner" onClick={()=>setMobileMenu({menu:false})}>PARTNER WITH US</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
