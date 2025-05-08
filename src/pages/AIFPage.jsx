import React, { useState } from "react";

const AIFPage = () => {
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
              Alternative Investment Funds (AIF)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AIFs are privately pooled investment vehicles that offer exposure to unique and high-growth opportunities beyond traditional asset classes. Categorized into Category I, II, and III — each serves a distinct purpose, from early-stage ventures to hedge strategies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we provide end-to-end access and support to onboard, track, and stay updated on your AIF investments — all through a seamless and transparent process.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="border-2 border-darkGold rounded-lg p-2 shadow-lg">
              <img
                src="/AIF.jpg"
                alt="AIF Illustration"
                className="w-full max-w-md rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Why AIF Section */}
        <div className="bg-gray-900 p-8 rounded-lg shadow mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Why Consider AIFs?</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-3">
            <li>Access to niche, high-growth investment opportunities</li>
            <li>Custom strategies with professional fund management</li>
            <li>Higher risk-adjusted returns potential</li>
            <li>Minimal correlation with traditional equity or debt markets</li>
            <li>Transparent structure governed by SEBI</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Interested in Alternative Investments?
          </h4>
          <p className="text-gray-400 mb-6">
            Our team is here to help you explore and access the right AIF opportunities tailored to your financial profile.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-darkGold transition"
          >
            Book a Call
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
            <h3 className="text-2xl font-bold mb-4 text-center">Book a Call</h3>
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

export default AIFPage;
