import React, { useState } from "react";

const formatIndianNumber = (value) => {
  if (!value) return "";
  const parts = value.toString().split(".");
  let intPart = parts[0].replace(/^0+/, ""); // Remove leading zeros
  let decimalPart = parts[1] ? "." + parts[1] : "";

  let lastThree = intPart.slice(-3);
  let rest = intPart.slice(0, -3);
  if (rest !== "") {
    rest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }
  return rest + (rest ? "," : "") + lastThree + decimalPart;
};

const SWPCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [years, setYears] = useState("");
  const [mode, setMode] = useState("amount"); // "amount" or "percent"
  const [withdrawalInput, setWithdrawalInput] = useState("");
  const [finalAmount, setFinalAmount] = useState(null);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(null);

  const calculateSWP = () => {
    const P = parseFloat(investment.replace(/,/g, ""));
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseInt(years) * 12;

    let W = 0;

    if (mode === "percent") {
      const annualWithdrawal = (parseFloat(withdrawalInput) / 100) * P;
      W = annualWithdrawal / 12;
      setMonthlyWithdrawal(Math.round(W));
    } else {
      W = parseFloat(withdrawalInput.replace(/,/g, ""));
      setMonthlyWithdrawal(null);
    }

    let balance = P;
    for (let i = 0; i < n; i++) {
      balance = balance * (1 + r) - W;
    }

    setFinalAmount(Math.round(balance));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-dark rounded-xl text-white border border-darkGold my-20">
      <h2 className="text-2xl font-bold text-primary mb-6">SWP Calculator</h2>
      <p className="mb-6 text-gray-300">
        Estimate your monthly withdrawals and final investment value.
      </p>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Total Investment (e.g. 5,00,000)"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={formatIndianNumber(investment)}
          onChange={(e) => setInvestment(e.target.value.replace(/[^0-9]/g, ""))}
        />
        <input
          type="number"
          placeholder="Expected Annual Return (%) e.g. 8"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={expectedReturn}
          onChange={(e) => setExpectedReturn(e.target.value)}
        />
        <input
          type="number"
          placeholder="Time Period (Years) e.g. 5"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />

        <div className="flex gap-2">
          <button
            onClick={() => setMode("amount")}
            className={`px-4 py-2 rounded font-semibold ${
              mode === "amount"
                ? "bg-primary text-black"
                : "bg-black border border-gray-600 text-white"
            }`}
          >
            Monthly Amount
          </button>
          <button
            onClick={() => setMode("percent")}
            className={`px-4 py-2 rounded font-semibold ${
              mode === "percent"
                ? "bg-primary text-black"
                : "bg-black border border-gray-600 text-white"
            }`}
          >
            Annual %
          </button>
        </div>

        <input
          type="text"
          placeholder={
            mode === "amount"
              ? "Monthly Withdrawal (e.g. 10,000)"
              : "Annual Withdrawal % (e.g. 8)"
          }
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={withdrawalInput}
          onChange={(e) => setWithdrawalInput(e.target.value)}
        />

        <button
          onClick={calculateSWP}
          className="bg-primary text-black px-6 py-2 rounded hover:bg-darkGold transition w-full font-semibold mt-4"
        >
          Calculate SWP
        </button>

        {finalAmount !== null && (
          <div className="mt-6 p-4 bg-black border border-gray-600 rounded text-center">
            {monthlyWithdrawal && (
              <p className="text-md font-medium text-gray-300 mb-2">
                Monthly Withdrawal: ₹ {formatIndianNumber(monthlyWithdrawal)}
              </p>
            )}
            <h3 className="text-lg font-semibold text-green-400">
              Final Investment Value:
            </h3>
            <p className="text-2xl font-bold text-white mt-2">
              ₹ {formatIndianNumber(finalAmount)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SWPCalculator;
