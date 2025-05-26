import React, { useState } from "react";

const formatIndianNumber = (value) => {
  if (!value) return "";
  const parts = value.toString().split(".");
  let intPart = parts[0].replace(/^0+/, "");
  let decimalPart = parts[1] ? "." + parts[1] : "";
  let lastThree = intPart.slice(-3);
  let rest = intPart.slice(0, -3);
  if (rest !== "") {
    rest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }
  return rest + (rest ? "," : "") + lastThree + decimalPart;
};

const SipFutureValueCalculator = () => {
  const [sipAmount, setSipAmount] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState(null);

  const calculateFV = () => {
    const P = parseFloat(sipAmount.replace(/,/g, ""));
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseInt(years) * 12;
    const fv = P * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    setFutureValue(Math.round(fv));
  };

  return (
    <section className="bg-background text-text py-20 px-6 min-h-screen">
      <div className="max-w-xl mx-auto p-6 bg-dark rounded-xl text-white border border-darkGold">
        <h2 className="text-2xl font-bold text-primary mb-6">SIP Future Value Calculator</h2>
        <p className="mb-6 text-gray-300">
          Estimate how much your SIPs will grow over time.
        </p>

        <div className="grid gap-4">
          <input
            type="text"
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
            placeholder="Monthly SIP Amount (e.g. 10,000)"
            value={formatIndianNumber(sipAmount)}
            onChange={(e) => setSipAmount(e.target.value.replace(/[^0-9]/g, ""))}
          />

          <input
            type="number"
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
            placeholder="Expected Return % (e.g. 12)"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />

          <input
            type="number"
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
            placeholder="Investment Duration (Years)"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />

          <button
            onClick={calculateFV}
            className="bg-primary text-black px-6 py-2 rounded hover:bg-darkGold transition w-full font-semibold mt-2"
          >
            Calculate Future Value
          </button>

          {futureValue !== null && (
            <div className="mt-6 p-4 bg-black border border-gray-600 rounded text-center">
              <h3 className="text-lg font-semibold text-green-400">Estimated Future Value:</h3>
              <p className="text-2xl font-bold text-white mt-2">
                ₹ {formatIndianNumber(futureValue)}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SipFutureValueCalculator;
