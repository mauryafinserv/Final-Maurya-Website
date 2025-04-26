// src/components/Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "Mutual Fund Distributor", link: "/mutual-funds" },
  { name: "Equity Broking", link: "/equity-broking" },
  { name: "AIF (Alternative Investment Fund)", link: "/aif" },
  { name: "PMS (Portfolio Management Services)", link: "/pms" },
  { name: "Loan Against Mutual Funds", link: "#" },
  { name: "NPS", link: "#" },
  { name: "Company Fixed Deposits", link: "#" },
  { name: "Tax Consultation & Planning", link: "/tax-planning" },
  { name: "Insurance Advisory", link: "/insurance-advisory" },
  { name: "NRI Investments", link: "/nri-investments" }, // ✅ Added NRI Investments
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
              {service.link !== "#" ? (
                <Link to={service.link} className="leading-snug hover:underline">
                  {service.name}
                </Link>
              ) : (
                <span className="leading-snug">{service.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
