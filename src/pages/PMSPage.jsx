import React, { useState } from "react";

const PMSPage = () => {
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
              Portfolio Management Services (PMS)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              PMS is a professional service offered to high-net-worth individuals (HNIs) who seek customized investment solutions and personalized attention in managing their equity portfolios.
            </p>
            <p className="text-gray-400 leading-relaxed">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we offer access to top-performing PMS strategies across asset management firms, ensuring transparency, performance tracking, and expert research — all under one roof.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/pms-illustration.png"
              alt="PMS Illustration"
              className="w-full max-w-md rounded-lg border-2 border-darkGold shadow-lg"
            />
          </div>
        </div>

        {/* Why PMS */}
        <div className="bg-gray-900 p-8 rounded-lg shadow mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Why PMS is a Powerful Addition to an HNI’s Portfolio
          </h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-4">
            <li><strong>Personalized Portfolio Construction:</strong> Tailored to your risk profile, return expectations, and long-term goals — unlike one-size-fits-all mutual funds.</li>
            <li><strong>Direct Ownership of Securities:</strong> All investments are held in your demat account, offering full transparency and control.</li>
            <li><strong>Expert Active Management:</strong> Portfolios are dynamically managed by professionals to capitalize on market opportunities and mitigate risks.</li>
            <li><strong>Tax Efficiency & Customization:</strong> Strategies optimized for tax savings, with options like loss harvesting and profit staggering.</li>
            <li><strong>High-Conviction Bets:</strong> PMS allows concentrated investments in high-potential ideas, ideal for HNIs seeking superior returns.</li>
            <li><strong>Detailed Reporting:</strong> Get full visibility into every transaction with advanced analytics and transparent updates.</li>
            <li><strong>Legacy & Wealth Structuring:</strong> Align your portfolio with long-term family wealth planning and estate goals.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Looking to explore PMS?
          </h4>
          <p className="text-gray-400 mb-6">
            Connect with our team to understand which strategies align best with your financial vision.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
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

export default PMSPage;
