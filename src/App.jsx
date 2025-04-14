import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LiveTicker from "./components/LiveTicker";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactBanner from "./components/ContactBanner";
import MutualFundPage from "./pages/MutualFundPage"; // ✅ Import the new page

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Homepage route */}
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

        {/* Mutual Funds page route */}
        <Route path="/mutual-funds" element={<MutualFundPage />} />
      </Routes>
    </>
  );
}

export default App;