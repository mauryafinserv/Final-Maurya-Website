import React from "react";
import LiveTicker from "./components/LiveTicker";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactBanner from "./components/ContactBanner";

function App() {
  return (
    <div>
      <LiveTicker />   {/* ✅ This is the only new line */}
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <ContactBanner />
    </div>
  );
}

export default App;