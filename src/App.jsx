import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LiveTicker from "./components/LiveTicker";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactBanner from "./components/ContactBanner";

// Pages
import MutualFundPage from "./pages/MutualFundPage";
import PMSPage from "./pages/PMSPage";
import KnowledgeCorner from "./pages/KnowledgeCorner";
import EquityBrokingPage from "./pages/EquityBrokingPage"; // ✅ Added here

function App() {
  return (
    <div className="bg-background text-text min-h-screen font-sans">
      <Header />

      <Routes>
        {/* ✅ Homepage */}
        <Route
          path="/"
          element={
            <>
              <LiveTicker />
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
        <Route path="/knowledge-corner" element={<KnowledgeCorner />} />
        <Route path="/equity-broking" element={<EquityBrokingPage />} /> {/* ✅ Fixed */}
      </Routes>
    </div>
  );
}

export default App;
