import React from "react";

const InsuranceAdvisoryPage = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Insurance Advisory
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we understand that insurance is not just a protective tool — it's a core part of your financial strategy.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our advisory service helps you:
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-3">
              <li>Identify the right mix of life and health insurance products for your needs</li>
              <li>Evaluate policy features, premiums, claim settlement ratios and riders</li>
              <li>Integrate insurance into your wealth and tax planning strategy</li>
            </ul>
            <p className="text-gray-400 mt-4 leading-relaxed">
              With access to trusted insurers and transparent comparisons, we help you make informed choices that safeguard your family and your goals.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/insurance-advisory.jpg"
              alt="Insurance Advisory Illustration"
              className="w-full max-w-md rounded-lg border-2 border-darkGold shadow-lg"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Secure your future with expert guidance
          </h4>
          <p className="text-gray-400 mb-6">
            Talk to us today for personalized life and health insurance recommendations.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-darkGold transition"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsuranceAdvisoryPage;
