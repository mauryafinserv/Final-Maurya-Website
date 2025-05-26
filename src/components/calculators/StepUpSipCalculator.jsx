// src/components/calculators/StepUpSipCalculator.jsx
import React, { useState } from "react";

const StepUpSipCalculator = () => {
  const [sipAmount, setSipAmount] = useState("");
  const [stepUpPercent, setStepUpPercent] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  // Format numbers in Indian comma style
  const formatNumber = (num) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(num);

  const handleFormattedInput = (value) => {
    const numeric = value.replace(/,/g, "").replace(/\D/g, "");
    return formatNumber(numeric);
  };

  const calculateStepUpSIP = () => {
    const P = parseFloat(sipAmount.replace(/,/g, ""));
    const r = parseFloat(rate) / 100 / 12;
    const n = parseInt(years) * 12;
    const s = parseFloat(stepUpPercent) / 100;

    if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(s)) return;

    let totalValue = 0;
    let currentSIP = P;

    for (let i = 0; i < n; i++) {
      totalValue += currentSIP * Math.pow(1 + r, n - i);
      if ((i + 1) % 12 === 0) currentSIP *= 1 + s;
    }

    setResult(Math.round(totalValue));
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-0 min-h-screen flex justify-center items-start">
      <div className="max-w-xl w-full border border-yellow-600 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-[#D4A017] mb-4">
          Step-Up SIP Calculator
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Estimate future value of your SIP with annual step-up increments.
        </p>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Monthly SIP Amount"
            className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none"
            value={sipAmount}
            onChange={(e) => setSipAmount(handleFormattedInput(e.target.value))}
          />
          <input
            type="number"
            placeholder="Step-Up Percentage (%) e.g. 10"
            className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none"
            value={stepUpPercent}
            onChange={(e) => setStepUpPercent(e.target.value)}
          />
          <input
            type="number"
            placeholder="Expected Annual Return (%) e.g. 12"
            className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Time Period (Years) e.g. 10"
            className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>

        <button
          onClick={calculateStepUpSIP}
          className="w-full bg-[#D4A017] hover:bg-yellow-500 text-black font-semibold py-2 rounded transition"
        >
          Calculate Future Value
        </button>

        {result && (
          <div className="mt-6 text-lg text-center text-green-400">
            Estimated Future Value: ₹ {formatNumber(result)}
          </div>
        )}
      </div>
    </section>
  );
};

export default StepUpSipCalculator;
