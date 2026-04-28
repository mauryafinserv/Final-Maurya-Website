// src/components/Services.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { name: "Mutual Fund Distribution", desc: "Access top-performing funds across all leading AMCs — curated for your goals.", link: "/mutual-funds" },
  { name: "Equity Broking", desc: "Trade and invest in listed equities through our trusted brokerage platform.", link: "/equity-broking" },
  { name: "PMS Distribution", desc: "Professionally managed, high-conviction portfolios built for HNI wealth.", link: "/pms" },
  { name: "AIF Distribution", desc: "Exclusive access to Alternative Investment Funds for sophisticated investors.", link: "/aif" },
  { name: "NRI Investments", desc: "GIFT City and India-focused solutions for global Indians — seamless and compliant.", link: "/nri-investments" },
  { name: "Loan Against Securities", desc: "Unlock liquidity by pledging your MF units or stocks — without selling.", link: "/loan-against-mf" },
  { name: "Tax Planning", desc: "Strategic tax structuring in collaboration with qualified tax professionals.", link: "/tax-planning" },
  { name: "Insurance", desc: "Comprehensive life and health coverage tailored to your family's needs.", link: "/insurance-advisory" },
  { name: "NPS", desc: "Build a tax-efficient retirement corpus with the National Pension System.", link: "/nps" },
];

const Services = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("opacity-100", "translate-y-0"); }),
      { threshold: 0.1 }
    );
    const items = ref.current?.querySelectorAll(".fade-item");
    items?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-20 px-6 md:px-16" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 fade-item opacity-0 translate-y-8 transition-all duration-700">
          <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight max-w-2xl">
            Every wealth need.<br />One trusted partner.
          </h2>
        </div>

        {/* Service List — Apple style horizontal dividers */}
        <div className="divide-y divide-gray-800">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="fade-item opacity-0 translate-y-8 transition-all duration-700 group flex items-center justify-between py-8 hover:py-10 transition-all"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-start gap-8">
                <span className="text-gray-600 text-sm font-mono mt-1 w-6">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-semibold group-hover:text-primary transition duration-300 mb-1">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{service.desc}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
