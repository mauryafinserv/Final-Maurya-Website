import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactBanner from "./components/ContactBanner";

function App() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <ContactBanner />
    </div>
  );
}

export default App;