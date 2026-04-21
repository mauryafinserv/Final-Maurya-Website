// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Samridhi from "./components/Samridhi";
import Header from "./components/Header";
import SmartTicker from "./components/SmartTicker";
import Hero from "./components/Hero";
import NeedHighlightCarousel from "./components/NeedHighlightCarousel";
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
import Downloads from "./pages/Downloads";
import Disclosures from "./pages/Disclosures";
import FinancialCalculators from "./pages/FinancialCalculators";

// Calculators
import SipGoalCalculator from "./components/calculators/SipGoalCalculator";
import StepUpSipCalculator from "./components/calculators/StepUpSipCalculator";
import SipFutureValueCalculator from "./components/calculators/SipFutureValueCalculator";
import LumpsumCalculator from "./components/calculators/LumpsumCalculator";
import SwpCalculator from "./components/calculators/SwpCalculator";
import EmiCalculator from "./components/calculators/EmiCalculator";
import RetirementCalculator from "./components/calculators/RetirementCalculator";
import EducationCalculator from "./components/calculators/EducationCalculator";

function App() {
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [giftFormData, setGiftFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleGiftChange = (e) => {
    const { name, value } = e.target;
    setGiftFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGiftSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xovezbow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(giftFormData),
      });

      const result = await response.json();
      if (result.ok || result.success || response.status === 200) {
        alert("Thank you! Your details have been submitted.");
        setGiftFormData({ name: "", email: "", mobile: "", message: "" });
        setShowGiftModal(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <div className="bg-background text-text min-h-screen font-sans flex flex-col">
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<><SmartTicker /><Hero /><NeedHighlightCarousel /><Services /><WhyChooseUs /><Testimonials /><ContactBanner /></>} />
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
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/disclosures" element={<Disclosures />} />
        <Route path="/financial-calculators" element={<FinancialCalculators />} />

        {/* Calculators */}
        <Route path="/calculators/sip-goal" element={<SipGoalCalculator />} />
        <Route path="/calculators/step-up-sip" element={<StepUpSipCalculator />} />
        <Route path="/calculators/sip-fv" element={<SipFutureValueCalculator />} />
        <Route path="/calculators/lumpsum-fv" element={<LumpsumCalculator />} />
        <Route path="/calculators/swp" element={<SwpCalculator />} />
        <Route path="/calculators/emi" element={<EmiCalculator />} />
        <Route path="/calculators/retirement" element={<RetirementCalculator />} />
        <Route path="/calculators/education" element={<EducationCalculator />} />
      </Routes>

      <Samridhi />
      <Footer />
    </div>
  );
}

export default App;
