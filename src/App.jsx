// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import SmartTicker from "./components/SmartTicker";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactBanner from "./components/ContactBanner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// Pages
import MutualFundPage from "./pages/MutualFundPage";
import PMSPage from "./pages/PMSPage";
import KnowledgeCorner from "./pages/KnowledgeCorner";
import EquityBrokingPage from "./pages/EquityBrokingPage";
import AIFPage from "./pages/AIFPage";
import TaxPlanningPage from "./pages/TaxPlanningPage";
import InsuranceAdvisoryPage from "./pages/InsuranceAdvisoryPage";
import MutualFundBasics from "./pages/MutualFundBasics";
import NriInvestmentPage from "./pages/NriInvestmentPage";
import LoanAgainstMfPage from "./pages/LoanAgainstMfPage";
import NpsPage from "./pages/NpsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import Downloads from "./pages/Downloads"; // ✅ New import

function App() {
  return (
    <div className="bg-background text-text min-h-screen font-sans flex flex-col">
      <Header />
      <ScrollToTop />

      <Routes>
        {/* ✅ Homepage */}
        <Route
          path="/"
          element={
            <>
              <SmartTicker />
              <Hero />
              <Services />
              <WhyChooseUs />
              <Testimonials />

              {/* ✅ GIFT City Investment Section */}
              <section className="bg-background text-text py-20 px-6 md:px-12 border-t border-darkGold">
                <div className="max-w-7xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-up">
                    Invest in India through GIFT City
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 animate-fade-up delay-100">
                    Unlock global investment opportunities with Maurya Shares — your trusted advisor for tax-efficient, dollar-denominated investments through GIFT City, India's premier financial hub.
                  </p>

                  <div className="grid md:grid-cols-3 gap-8 mt-10 animate-fade-up delay-200">
                    <div className="border border-darkGold p-6 rounded-lg hover:shadow-lg transition">
                      <h4 className="text-xl font-semibold text-primary mb-3">Global Access</h4>
                      <p className="text-sm text-gray-400">
                        Seamless access to Indian markets using USD investments — ideal for NRIs and global investors.
                      </p>
                    </div>
                    <div className="border border-darkGold p-6 rounded-lg hover:shadow-lg transition">
                      <h4 className="text-xl font-semibold text-primary mb-3">Tax Efficiency</h4>
                      <p className="text-sm text-gray-400">
                        Enjoy benefits like no STT, reduced capital gains taxes, and estate planning advantages.
                      </p>
                    </div>
                    <div className="border border-darkGold p-6 rounded-lg hover:shadow-lg transition">
                      <h4 className="text-xl font-semibold text-primary mb-3">Expert Guidance</h4>
                      <p className="text-sm text-gray-400">
                        Leverage our expertise to build a globally diversified and compliant portfolio through GIFT City platforms.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <a
                      href="#contact"
                      className="inline-block bg-primary text-black px-8 py-4 rounded-full font-semibold hover:bg-darkGold transition"
                    >
                      Talk to Our GIFT City Expert →
                    </a>
                  </div>
                </div>
              </section>

              <ContactBanner />
            </>
          }
        />

        {/* ✅ Internal Pages */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/mutual-funds" element={<MutualFundPage />} />
        <Route path="/pms" element={<PMSPage />} />
        <Route path="/equity-broking" element={<EquityBrokingPage />} />
        <Route path="/aif" element={<AIFPage />} />
        <Route path="/tax-planning" element={<TaxPlanningPage />} />
        <Route path="/insurance-advisory" element={<InsuranceAdvisoryPage />} />
        <Route path="/knowledge-corner" element={<KnowledgeCorner />} />
        <Route path="/mutual-fund-basics" element={<MutualFundBasics />} />
        <Route path="/nri-investments" element={<NriInvestmentPage />} />
        <Route path="/loan-against-mf" element={<LoanAgainstMfPage />} />
        <Route path="/nps" element={<NpsPage />} />
        <Route path="/downloads" element={<Downloads />} /> {/* ✅ New Route */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
