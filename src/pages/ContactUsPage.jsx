// src/pages/ContactUsPage.jsx
import React, { useState } from "react";

const ContactUsPage = () => {
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
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <section className="bg-background text-text py-20 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 mb-4">
            Have questions? Our team is here to assist you.
          </p>

          <div className="space-y-6 text-gray-400">
            <div>
              <h4 className="text-primary font-semibold mb-2">Email Support:</h4>
              <p>support@mauryafinserv.com</p>
            </div>

            <div>
              <h4 className="text-primary font-semibold mb-2">Phone Numbers:</h4>
              <p>📞 Resident Clients: +91 7004016074</p>
              <p>🌎 NRI Clients: +91 7021477258</p>
            </div>

            <div>
              <h4 className="text-primary font-semibold mb-2">Mumbai Office:</h4>
              <p>
                1st Floor, 264-265, Dr Annie Besant Rd,<br />
                Municipal Colony, Worli Shivaji Nagar,<br />
                Worli, Mumbai, Maharashtra 400030
              </p>
            </div>

            <div>
              <h4 className="text-primary font-semibold mb-2">Patna Office:</h4>
              <p>
                Durga Vihar, S. P. Verma Road,<br />
                Patna, Bihar 800001
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-4 py-2 bg-black text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-4 py-2 bg-black text-white"
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-4 py-2 bg-black text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Message (Optional)"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-4 py-2 bg-black text-white"
            />
            <button
              type="submit"
              className="w-full bg-primary text-black font-semibold py-3 rounded hover:bg-darkGold"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUsPage;
