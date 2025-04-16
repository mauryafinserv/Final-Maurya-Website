import React from "react";

const AIFPage = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Alternative Investment Funds (AIF)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AIFs are privately pooled investment vehicles that offer exposure to unique and high-growth opportunities beyond traditional asset classes. Categorized into Category I, II, and III — each serves a distinct purpose, from early-stage ventures to hedge strategies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we provide end-to-end access and support to onboard, track, and stay updated on your AIF investments — all through a seamless and transparent process.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="border-2 border-darkGold rounded-lg p-2 shadow-lg">
              <img
                src="/AIF.jpg"
                alt="AIF Illustration"
                className="w-full max-w-md rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Why AIF Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Why Consider AIFs?</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-3">
            <li>Access to niche, high-growth investment opportunities</li>
            <li>Custom strategies with professional fund management</li>
            <li>Higher risk-adjusted returns potential</li>
            <li>Minimal correlation with traditional equity or debt markets</li>
            <li>Transparent structure governed by SEBI</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Interested in Alternative Investments?
          </h4>
          <p className="text-gray-400 mb-6">
            Our team is here to help you explore and access the right AIF opportunities tailored to your financial profile.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-darkGold transition"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIFPage;
