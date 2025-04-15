import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-background py-20 px-6 md:px-12 text-center text-text">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-wide">
          About Maurya Shares & Stock Brokers
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 rounded-full" />
        <p className="text-lg md:text-xl leading-relaxed font-light">
          Established in 1992, we’ve grown from Patna to Kolkata and Mumbai — with plans to expand into all major cities over the next 5 years.
          <br /><br />
          As trusted facilitators, we help families navigate their investment journey across generations — offering solutions across equity broking, mutual funds, insurance, and more.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
