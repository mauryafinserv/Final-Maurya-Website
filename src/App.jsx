// src/App.jsx
import React, { useState } from "react";
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
import Downloads from "./pages/Downloads";

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
        <Route
          path="/"
          element={
            <>
              <SmartTicker />
              <Hero />
              <Services />
              <WhyChooseUs />
              <Testimonials />

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
                    <button
                      onClick={() => setShowGiftModal(true)}
                      className="inline-block bg-primary text-black px-8 py-4 rounded-full font-semibold hover:bg-darkGold transition"
                    >
                      Talk to Our GIFT City Expert →
                    </button>
                  </div>
                </div>
              </section>

              {showGiftModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl flex flex-col md:flex-row text-black relative">
                    {/* Left Half */}
                    <div className="bg-[#C6A741] text-black w-full md:w-1/2 p-6 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                      <h4 className="text-xl font-semibold mb-4">Your GIFT City Expert</h4>
                      <p><strong>Name:</strong> Adarsh Charanpahari</p>
                      <p><strong>Email:</strong> adarshcharanpahari@mauryafinserv.com</p>
                      <p><strong>Phone:</strong> 7021477258</p>
                      <img src="/images/gift-expert.jpg" alt="Gift City Expert" className="mt-6 rounded-lg w-full h-auto" />
                    </div>
                    {/* Right Half */}
                    <div className="w-full md:w-1/2 p-6">
                      <button
                        className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
                        onClick={() => setShowGiftModal(false)}
                      >
                        ×
                      </button>
                      <h3 className="text-2xl font-bold mb-4 text-center">Book a Call</h3>
                      <form onSubmit={handleGiftSubmit} className="space-y-4">
                        <input type="text" name="name" placeholder="Name" value={giftFormData.name} onChange={handleGiftChange} className="w-full border border-gray-300 rounded px-4 py-2" required />
                        <input type="email" name="email" placeholder="Email" value={giftFormData.email} onChange={handleGiftChange} className="w-full border border-gray-300 rounded px-4 py-2" required />
                        <input type="tel" name="mobile" placeholder="Mobile Number" value={giftFormData.mobile} onChange={handleGiftChange} className="w-full border border-gray-300 rounded px-4 py-2" required />
                        <textarea name="message" placeholder="Message (Optional)" rows={3} value={giftFormData.message} onChange={handleGiftChange} className="w-full border border-gray-300 rounded px-4 py-2" />
                        <button type="submit" className="w-full bg-primary text-black font-semibold py-2 rounded hover:bg-darkGold">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              <ContactBanner />
            </>
          }
        />

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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;