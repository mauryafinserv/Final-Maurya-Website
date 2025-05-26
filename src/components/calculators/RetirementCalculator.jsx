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

const RetirementCalculator = () => {
  const [corpusToday, setCorpusToday] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [yearsToRetire, setYearsToRetire] = useState("");
  const [monthlyInvestment, setMonthlyInvestment] = useState(null);
  const [futureValueCorpus, setFutureValueCorpus] = useState(null);

  const calculateSIP = () => {
    const PV = parseFloat(corpusToday.replace(/,/g, ""));
    const rInflation = 6 / 100;
    const years = parseInt(yearsToRetire);
    const FV = PV * Math.pow(1 + rInflation, years);

    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = years * 12;
    const sip = FV * r / (Math.pow(1 + r, n) - 1);

    setMonthlyInvestment(Math.round(sip));
    setFutureValueCorpus(Math.round(FV));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-dark rounded-xl text-white border border-darkGold my-20">
      <h2 className="text-2xl font-bold text-primary mb-6">Retirement Planning Calculator</h2>
      <p className="mb-6 text-gray-300">
        Enter the retirement corpus you need in today’s terms. We'll adjust for inflation and calculate how much SIP you need to reach that amount.
      </p>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Desired Corpus in Today's Value (e.g. 1,00,00,000)"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={formatIndianNumber(corpusToday)}
          onChange={(e) => setCorpusToday(e.target.value.replace(/[^0-9]/g, ""))}
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
          placeholder="Years Until Retirement"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={yearsToRetire}
          onChange={(e) => setYearsToRetire(e.target.value)}
        />

        <button
          onClick={calculateSIP}
          className="bg-primary text-black px-6 py-2 rounded hover:bg-darkGold transition w-full font-semibold mt-4"
        >
          Calculate Monthly Investment
        </button>

        {monthlyInvestment !== null && (
          <div className="mt-6 p-4 bg-black border border-gray-600 rounded text-center">
            <p className="text-md font-medium text-gray-300 mb-2">
              Future Value of Retirement Corpus: ₹ {formatIndianNumber(futureValueCorpus)}
            </p>
            <h3 className="text-lg font-semibold text-green-400">Monthly Investment Required:</h3>
            <p className="text-2xl font-bold text-white mt-2">
              ₹ {formatIndianNumber(monthlyInvestment)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RetirementCalculator;
