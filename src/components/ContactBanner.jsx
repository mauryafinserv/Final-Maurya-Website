import React from "react";

const ContactBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Create Wealth for Your Family?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Talk to our advisors today and take the first step toward financial freedom.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Talk to an Advisor
        </button>
      </div>
    </section>
  );
};

export default ContactBanner;