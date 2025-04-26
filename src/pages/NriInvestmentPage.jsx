// src/pages/NriInvestmentPage.jsx
import React from "react";
import { Helmet } from "react-helmet"; // ✅ for SEO

const NriInvestmentPage = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 font-sans">
      <Helmet>
        <title>NRI Investment Opportunities in India | GIFT City Specialist | Maurya Shares</title>
        <meta name="description" content="Unlock tax-efficient, dollar-denominated NRI investment opportunities through GIFT City. No PAN, No Indian bank account needed. Powered by Maurya Shares." />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              NRI Investment Opportunities in India
            </h1>
            <p className="text-gray-300 leading-relaxed">
              Unlock the potential of India’s growth story. As an NRI, you can access curated investment opportunities while staying compliant with FEMA regulations. Let us guide you through safe, regulated, and rewarding avenues tailored for global Indians.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/nri-investment.jpg"
              alt="NRI Investments"
              className="rounded-lg border-2 border-darkGold p-2"
            />
          </div>
        </div>

        {/* GIFT City Special Section */}
        <div className="bg-background text-white py-16 px-6 md:px-12 border-t border-darkGold mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Invest Seamlessly through GIFT City AIFs
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              NRIs can now invest in India's private markets without the usual barriers — thanks to GIFT City's international financial services platform.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: "No PAN Card or Indian Bank Account Required",
                  text: "NRIs can directly invest in GIFT City AIFs without needing an Indian PAN card or Indian bank account — simplifying the onboarding process.",
                },
                {
                  title: "Invest in Dollar Terms (USD)",
                  text: "All investments are denominated in USD or other global currencies, offering true global asset allocation.",
                },
                {
                  title: "Zero Indian Tax Liability",
                  text: "Capital gains on investments made through GIFT City structures are exempt from tax in India, enhancing post-tax returns.",
                },
                {
                  title: "Premium Investment Access",
                  text: "Access top-tier Alternative Investment Funds across private equity, debt, and infrastructure sectors, curated for HNIs and NRIs.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-darkGold p-6 rounded-lg shadow hover:shadow-lg transition animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-semibold text-primary mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-primary text-black px-8 py-4 rounded-full font-semibold hover:bg-darkGold transition"
              >
                Connect with a GIFT City Specialist →
              </a>
            </div>
          </div>
        </div>

        {/* What is an NRI Investment */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-6">What is an NRI Investment?</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Non-Resident Indians (NRIs) can invest in India through regulated routes set by FEMA, using accounts like NRE, NRO, and FCNR. Investment options span mutual funds, equities, bonds, and real estate, helping NRIs build wealth in India.
          </p>
        </div>

        {/* Popular Investment Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-6">Popular Investment Options for NRIs</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-3">
            <li><strong>Mutual Funds:</strong> Invest in equity, debt, hybrid, or international funds.</li>
            <li><strong>Stocks:</strong> Directly through PIS accounts with SEBI-registered brokers.</li>
            <li><strong>Fixed Deposits:</strong> Tax-free NRE FDs, taxable NRO FDs, and FCNR deposits.</li>
            <li><strong>Real Estate:</strong> Buy residential or commercial property (except agricultural land).</li>
          </ul>
        </div>

        {/* How to Start */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-6">How to Start Investing</h2>
          <ul className="list-decimal pl-6 text-gray-300 space-y-3">
            <li>Open an NRE/NRO account in an Indian bank.</li>
            <li>Complete KYC (PAN, Passport, Visa/OCI, Overseas Address Proof).</li>
            <li>For stocks, open a PIS account, trading, and Demat account.</li>
            <li>Invest in mutual funds through NRE/NRO-linked platforms.</li>
          </ul>
        </div>

        {/* Taxation */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-6">Taxation Overview</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>STCG on equity: 15% tax rate.</li>
            <li>LTCG above ₹1 lakh/year: 10% without indexation.</li>
            <li>Debt fund LTCG: 20% with indexation (after 36 months).</li>
            <li>DTAA benefits available to avoid double taxation.</li>
          </ul>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h4 className="text-2xl font-bold text-primary mb-4">
            Invest Smarter. Grow Globally.
          </h4>
          <p className="text-gray-400 leading-relaxed mb-6">
            Partner with Maurya Shares for customized NRI solutions across global markets and Indian opportunities.
          </p>
          <a
            href="#contact"
            className="bg-primary text-black font-bold py-3 px-8 rounded-full hover:bg-darkGold transition"
          >
            Start Your Investment Journey →
          </a>
        </div>
      </div>
    </section>
  );
};

export default NriInvestmentPage;
