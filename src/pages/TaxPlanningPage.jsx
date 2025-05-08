import React, { useState } from "react";

const TaxPlanningPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xovezbow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.ok || result.success || response.status === 200) {
        alert("Thank you! Your details have been submitted.");
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setShowModal(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Tax Planning
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we help you make informed financial decisions by exploring tax-efficient investment options suited to your income and financial goals.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our team assists you in understanding:
            </p>
            <ul className="list-disc pl-5 text-gray-300 space-y-3">
              <li>Eligible deductions under Sections 80C, 80D, and others through options like ELSS, NPS, health and life insurance.</li>
              <li>How capital gains taxation works across equity, debt, and mutual fund instruments — including indexation benefits.</li>
              <li>Strategies like tax-loss harvesting and rebalancing to manage potential liabilities more efficiently.</li>
            </ul>
            <p className="text-gray-400 mt-4 leading-relaxed">
              We also have <span className="text-primary font-semibold">CA Amiy Kumar Mishra</span> on our panel to guide our clients on advanced taxation strategies, structuring, and compliance for better long-term efficiency.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/tax-planning.jpg"
              alt="Tax Planning Illustration"
              className="w-full max-w-md rounded-lg border-2 border-darkGold shadow-lg"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Need Tax Guidance for Your Portfolio?
          </h4>
          <p className="text-gray-400 mb-6">
            Connect with our team for personalized advice on tax-efficient investing.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-darkGold transition"
          >
            Talk to an Advisor
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 text-black relative">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Talk to an Advisor</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
              <textarea
                name="message"
                placeholder="Message (Optional)"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <button
                type="submit"
                className="w-full bg-primary text-black font-semibold py-2 rounded hover:bg-darkGold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TaxPlanningPage;
