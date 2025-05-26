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

const EducationCalculator = () => {
  const [corpus, setCorpus] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [years, setYears] = useState("");
  const [sipAmount, setSipAmount] = useState(null);
  const [futureValue, setFutureValue] = useState(null);

  const calculateSIP = () => {
    const todayValue = parseFloat(corpus.replace(/,/g, ""));
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseInt(years) * 12;
    const inflation = 0.06;

    const FV = todayValue * Math.pow(1 + inflation, years);
    const sip = FV * r / (Math.pow(1 + r, n) - 1);

    setFutureValue(Math.round(FV));
    setSipAmount(Math.round(sip));
  };

  return (
    <div className="py-20 px-4 bg-background text-white min-h-screen">
      <div className="max-w-2xl mx-auto p-6 bg-dark rounded-xl border border-darkGold">
        <h2 className="text-2xl font-bold text-primary mb-6">Education Planning Calculator</h2>
        <p className="mb-6 text-gray-300">
          Enter the expected education cost in today’s value. We’ll adjust for inflation and calculate how much SIP you need to reach that amount.
        </p>

        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Education Cost in Today's Value (e.g. 30,00,000)"
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
            value={formatIndianNumber(corpus)}
            onChange={(e) => setCorpus(e.target.value.replace(/[^0-9]/g, ""))}
          />
          <input
            type="number"
            placeholder="Expected Annual Return (%)"
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
          <input
            type="number"
            placeholder="Years Until Required"
            className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />

          <button
            onClick={calculateSIP}
            className="bg-primary text-black px-6 py-2 rounded hover:bg-darkGold transition w-full font-semibold mt-4"
          >
            Calculate SIP
          </button>

          {sipAmount !== null && (
            <div className="mt-6 p-4 bg-black border border-gray-600 rounded text-center">
              <p className="text-md font-medium text-gray-300 mb-2">
                Future Education Cost (Adjusted for 6% inflation):
              </p>
              <p className="text-xl font-semibold text-yellow-400 mb-4">
                ₹ {formatIndianNumber(futureValue)}
              </p>
              <h3 className="text-lg font-semibold text-green-400">Required Monthly SIP:</h3>
              <p className="text-2xl font-bold text-white mt-2">
                ₹ {formatIndianNumber(sipAmount)} / month
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCalculator;
