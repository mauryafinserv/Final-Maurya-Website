import React from "react";

const EquityBrokingPage = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Equity Broking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we’ve partnered with{" "}
              <span className="font-semibold">Kotak Securities</span> to provide you with a powerful, seamless, and efficient equity trading experience.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you're a first-time investor or an experienced trader, our platform offers everything you need — from research tools to real-time data — to succeed in today's dynamic markets.
            </p>
            <ul className="list-disc pl-5 mt-4 text-gray-300 space-y-2">
              <li>Access to research-backed stock insights</li>
              <li>Advanced trading tools and real-time data</li>
              <li>Seamless mobile & desktop trading platform</li>
              <li>Zero paperwork, quick onboarding</li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/equity.jpg"
              alt="Equity Trading Illustration"
              className="w-full max-w-md rounded-lg border-2 border-darkGold shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 p-8 rounded-lg shadow text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Start Your Equity Journey?</h3>
          <p className="text-gray-400 mb-6">
            Open a trading account with us and get started with Kotak Securities' advanced platform.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Connect with Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default EquityBrokingPage;
