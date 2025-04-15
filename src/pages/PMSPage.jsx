import React from "react";

const PMSPage = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Portfolio Management Services (PMS)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              PMS is a professional service offered to high-net-worth individuals (HNIs) who seek customized investment solutions and personalized attention in managing their equity portfolios.
            </p>
            <p className="text-gray-400 leading-relaxed">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we offer access to top-performing PMS strategies across asset management firms, ensuring transparency, performance tracking, and expert research—all under one roof.
            </p>
          </div>
          <div>
            <img
              src="/pms-illustration.png"
              alt="PMS Illustration"
              className="w-full max-w-md mx-auto rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Why PMS */}
        <div className="bg-gray-900 p-8 rounded-lg shadow mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Why Invest in PMS?</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Personalized portfolio aligned to your financial goals</li>
            <li>Professionally managed by experienced fund managers</li>
            <li>Greater transparency and flexibility</li>
            <li>Access to thematic and concentrated strategies</li>
            <li>Detailed performance reporting and risk metrics</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">Looking to explore PMS?</h4>
          <p className="text-gray-400 mb-6">
            Connect with our team to understand which strategies align best with your financial vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Talk to an Advisor
          </a>
        </div>
      </div>
    </section>
  );
};

export default PMSPage;