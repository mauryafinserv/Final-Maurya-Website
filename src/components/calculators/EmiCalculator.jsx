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

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount.replace(/,/g, ""));
    const R = parseFloat(interestRate) / 100 / 12;
    const N = parseFloat(loanTenure) * 12;

    const monthlyEMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayable = monthlyEMI * N;
    const totalInt = totalPayable - P;

    setEmi(Math.round(monthlyEMI));
    setTotalPayment(Math.round(totalPayable));
    setTotalInterest(Math.round(totalInt));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-dark rounded-xl text-white border border-darkGold my-20">
      <h2 className="text-2xl font-bold text-primary mb-6">EMI Calculator</h2>
      <p className="mb-6 text-gray-300">Calculate your monthly loan EMIs and total interest payable.</p>

      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Loan Amount (e.g. 5,00,000)"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={formatIndianNumber(loanAmount)}
          onChange={(e) => setLoanAmount(e.target.value.replace(/[^0-9]/g, ""))}
        />
        <input
          type="number"
          placeholder="Interest Rate (% p.a.)"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Loan Tenure (in Years)"
          className="w-full px-4 py-2 bg-black border border-gray-700 rounded"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
        />

        <button
          onClick={calculateEMI}
          className="bg-primary text-black px-6 py-2 rounded hover:bg-darkGold transition w-full font-semibold mt-4"
        >
          Calculate EMI
        </button>

        {emi !== null && (
          <div className="mt-6 p-4 bg-black border border-gray-600 rounded text-center">
            <h3 className="text-lg font-semibold text-green-400">Your Monthly EMI:</h3>
            <p className="text-2xl font-bold text-white mt-2">₹ {formatIndianNumber(emi)}</p>
            <p className="mt-4 text-sm text-gray-300">Total Interest Payable: ₹ {formatIndianNumber(totalInterest)}</p>
            <p className="text-sm text-gray-300">Total Amount Payable: ₹ {formatIndianNumber(totalPayment)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmiCalculator;
