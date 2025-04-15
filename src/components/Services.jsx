import React from "react";

const services = [
  "Mutual Fund Distributor",
  "Equity Broking",
  "AIF (Alternative Investment Fund)",
  "PMS (Portfolio Management Services)",
  "Loan Against Mutual Funds",
  "NPS",
  "Company Fixed Deposits",
  "Tax Consultation & Planning",
  "Insurance Advisory"
];

const Services = () => {
  return (
    <section className="bg-background py-20 px-6 md:px-12 text-text">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-10">
          What We Offer
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left text-lg md:text-xl font-light">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-l-4 border-darkGold pl-4 hover:bg-darkGold/20 transition duration-200 rounded"
            >
              <span className="h-2 w-2 bg-blue-400 rounded-full mt-1" />
              <span className="leading-snug">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
