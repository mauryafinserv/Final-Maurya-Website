import React, { useState } from "react";

const NpsPage = () => {
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
    <section className="bg-black text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          National Pension System (NPS)
        </h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          NPS is a government-backed retirement savings scheme that enables individuals to build a retirement corpus through disciplined investments. It’s a cost-effective, tax-efficient, and flexible way to plan your future.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-400">
          <li>✅ Choice of Equity, Corporate Bonds, and Government Securities.</li>
          <li>✅ Low-cost structure and professional fund management.</li>
          <li>✅ Tax benefits under Section 80C and additional ₹50,000 under Section 80CCD(1B).</li>
          <li>✅ Partial withdrawals allowed for specific purposes.</li>
        </ul>

        <div className="mt-10 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-primary text-black font-semibold py-3 px-8 rounded-full hover:bg-darkGold transition"
          >
            Open Your NPS Account →
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
            <h3 className="text-2xl font-bold mb-4 text-center">NPS Account Enquiry</h3>
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

export default NpsPage;
