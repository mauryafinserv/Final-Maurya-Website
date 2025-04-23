// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SmartTicker from "./components/SmartTicker"; // ✅ Ticker
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer"; // ✅ Footer Component

// Pages
import MutualFundPage from "./pages/MutualFundPage";
import PMSPage from "./pages/PMSPage";
import KnowledgeCorner from "./pages/KnowledgeCorner";
import EquityBrokingPage from "./pages/EquityBrokingPage";
import AIFPage from "./pages/AIFPage";
import TaxPlanningPage from "./pages/TaxPlanningPage";
import InsuranceAdvisoryPage from "./pages/InsuranceAdvisoryPage";
import MutualFundBasics from "./pages/MutualFundBasics"; // ✅ Mutual Fund Article Page

function App() {
  return (
    <div className="bg-background text-text min-h-screen font-sans flex flex-col">
      <Header />

      <Routes>
        {/* ✅ Homepage */}
        <Route
          path="/"
          element={
            <>
              <SmartTicker />
              <Hero />
              <AboutUs />
              <Services />
              <WhyChooseUs />
              <ContactBanner />
            </>
          }
        />

        {/* ✅ Internal Pages */}
        <Route path="/mutual-funds" element={<MutualFundPage />} />
        <Route path="/pms" element={<PMSPage />} />
        <Route path="/equity-broking" element={<EquityBrokingPage />} />
        <Route path="/aif" element={<AIFPage />} />
        <Route path="/tax-planning" element={<TaxPlanningPage />} />
        <Route path="/insurance-advisory" element={<InsuranceAdvisoryPage />} />
        <Route path="/knowledge-corner" element={<KnowledgeCorner />} />
        <Route path="/mutual-fund-basics" element={<MutualFundBasics />} />
      </Routes>

      <Footer /> {/* ✅ Persistent footer at bottom */}
    </div>
  );
}

export default App;
