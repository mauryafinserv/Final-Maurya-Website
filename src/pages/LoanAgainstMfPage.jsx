import React, { useState } from "react";

const LoanAgainstMfPage = () => {
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

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Loan Against Securities
        </h1>
        <p className="text-gray-400 mb-12 text-lg leading-relaxed">
          Unlock liquidity without disrupting your investments. Pledge your existing securities as collateral and get funds instantly — while your investments continue to grow.
        </p>

        {/* Two Product Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* Card 1 - Loan Against MF */}
          <div className="border border-darkGold rounded-2xl p-8 bg-gray-900">
            <h2 className="text-2xl font-bold text-primary mb-3">
              Loan Against Mutual Funds
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Pledge your existing mutual fund units as collateral and avail a loan — without having to redeem your investments. Your funds keep earning returns while you get the liquidity you need.
            </p>
            <ul className="space-y-3 text-gray-300 text-sm mb-6">
              <li>✅ No need to sell your mutual fund investments</li>
              <li>✅ Attractive interest rates vs unsecured loans</li>
              <li>✅ Quick and hassle-free processing</li>
              <li>✅ Continue to earn potential returns on pledged units</li>
              <li>✅ Both equity and debt funds eligible</li>
              <li>✅ Loan amount up to 50–80% of fund value</li>
            </ul>
            <div className="border-t border-gray-700 pt-4 text-xs text-gray-500">
              <p><strong className="text-gray-400">Eligible:</strong> Equity Funds, Debt Funds, Hybrid Funds, ETFs</p>
              <p className="mt-1"><strong className="text-gray-400">Tenure:</strong> Flexible — short term to long term</p>
            </div>
          </div>

          {/* Card 2 - Loan Against Stocks */}
          <div className="border border-darkGold rounded-2xl p-8 bg-gray-900">
            <h2 className="text-2xl font-bold text-primary mb-3">
              Loan Against Stocks
            </h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Use your existing equity holdings as collateral to get instant funds. Ideal for investors who need liquidity without exiting their stock positions — especially during market opportunities.
            </p>
            <ul className="space-y-3 text-gray-300 text-sm mb-6">
              <li>✅ Retain ownership of your shares</li>
              <li>✅ Continue to receive dividends on pledged stocks</li>
              <li>✅ Higher loan-to-value on blue chip stocks</li>
              <li>✅ Instant fund disbursal once pledge is set up</li>
              <li>✅ Flexible repayment options</li>
              <li>✅ Loan amount up to 50% of stock value</li>
            </ul>
            <div className="border-t border-gray-700 pt-4 text-xs text-gray-500">
              <p><strong className="text-gray-400">Eligible:</strong> NSE/BSE listed stocks in approved list</p>
              <p className="mt-1"><strong className="text-gray-400">Tenure:</strong> Short to medium term, revolving facility</p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Apply", desc: "Fill a simple application form with your details and the securities you wish to pledge." },
              { step: "02", title: "Pledge", desc: "Your securities are pledged digitally via your Demat account. You retain ownership." },
              { step: "03", title: "Get Funds", desc: "Loan amount is disbursed to your bank account quickly after verification." },
              { step: "04", title: "Repay & Release", desc: "Repay at your convenience. On full repayment, the pledge is released instantly." },
            ].map((item) => (
              <div key={item.step} className="text-center border border-gray-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">{item.step}</div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 overflow-x-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">Quick Comparison</h2>
          <table className="w-full text-sm text-gray-300 border-collapse">
            <thead>
              <tr className="bg-primary text-black">
                <th className="py-3 px-4 text-left">Feature</th>
                <th className="py-3 px-4 text-left">Loan Against MF</th>
                <th className="py-3 px-4 text-left">Loan Against Stocks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Collateral", "Mutual Fund Units", "Listed Equity Shares"],
                ["Loan to Value", "Up to 50–80%", "Up to 50%"],
                ["Continue Earning", "Yes — fund returns", "Yes — dividends"],
                ["Processing", "Very Fast", "Fast"],
                ["Ideal For", "MF investors needing liquidity", "Equity investors needing funds"],
              ].map(([feature, mf, stocks], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                  <td className="py-3 px-4 font-medium text-white">{feature}</td>
                  <td className="py-3 px-4">{mf}</td>
                  <td className="py-3 px-4">{stocks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h4 className="text-2xl font-bold text-primary mb-4">
            Need Funds Without Selling Your Investments?
          </h4>
          <p className="text-gray-400 mb-8">
            Talk to our team and we'll help you find the right loan against your securities.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-primary text-black font-bold py-3 px-10 rounded-full hover:bg-darkGold transition"
          >
            Apply for a Loan →
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
            <h3 className="text-2xl font-bold mb-4 text-center">Apply for a Loan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Name" value={formData.name}
                onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" required />
              <input type="email" name="email" placeholder="Email" value={formData.email}
                onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" required />
              <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile}
                onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2" required />
              <select name="message" value={formData.message} onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700">
                <option value="">Select Loan Type</option>
                <option value="Loan Against Mutual Funds">Loan Against Mutual Funds</option>
                <option value="Loan Against Stocks">Loan Against Stocks</option>
                <option value="Not Sure - Need Guidance">Not Sure — Need Guidance</option>
              </select>
              <button type="submit"
                className="w-full bg-primary text-black font-semibold py-2 rounded hover:bg-darkGold transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoanAgainstMfPage;
