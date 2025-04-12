import React from "react";

const services = [
  "Mutual Fund Distributor",
  "Equity Broking",
  "AIF (Alternative Investment Fund)",
  "PMS (Portfolio Management Services)",
  "Company Fixed Deposits",
  "Tax Consultation & Planning",
  "Insurance Advisory",
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
            >
              <p className="text-lg font-medium text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;