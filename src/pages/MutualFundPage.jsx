import React, { useState } from "react";

const MutualFundPage = () => {
  // Goal SIP Calculator
  const [targetAmount, setTargetAmount] = useState("");
  const [years, setYears] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [monthlySIP, setMonthlySIP] = useState(null);

  const calculateSIP = () => {
    const r = parseFloat(returnRate) / 100 / 12;
    const n = parseFloat(years) * 12;
    const fv = parseFloat(targetAmount);
    if (!r || !n || !fv) return;

    const sip = fv * r / ((Math.pow(1 + r, n) - 1) * (1 + r));
    setMonthlySIP(sip.toFixed(2));
  };

  // SIP Future Value Calculator
  const [sipAmount, setSipAmount] = useState("");
  const [sipYears, setSipYears] = useState("");
  const [sipRate, setSipRate] = useState("");
  const [sipFutureValue, setSipFutureValue] = useState(null);

  const calculateSIPFuture = () => {
    const r = parseFloat(sipRate) / 100 / 12;
    const n = parseFloat(sipYears) * 12;
    const p = parseFloat(sipAmount);
    if (!r || !n || !p) return;

    const fv = p * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    setSipFutureValue(fv.toFixed(2));
  };

  // Lumpsum Calculator
  const [lumpAmount, setLumpAmount] = useState("");
  const [lumpYears, setLumpYears] = useState("");
  const [lumpRate, setLumpRate] = useState("");
  const [lumpFutureValue, setLumpFutureValue] = useState(null);

  const calculateLumpsum = () => {
    const r = parseFloat(lumpRate) / 100;
    const n = parseFloat(lumpYears);
    const p = parseFloat(lumpAmount);
    if (!r || !n || !p) return;

    const fv = p * Math.pow(1 + r, n);
    setLumpFutureValue(fv.toFixed(2));
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Introduction section with image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mutual Fund</h2>
            <p className="text-gray-700 leading-relaxed">
              Mutual Funds are professionally managed investment vehicles that pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              At <strong>Maurya Shares & Stock Brokers</strong>, we assist you in your wealth creation journey by offering a seamless and paperless platform to invest across mutual fund categories, process transactions efficiently, and track your investments with ease.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Whether you're starting a SIP, making a lumpsum investment, or planning towards a financial goal — we simplify the process so you can invest confidently and stay in control.
            </p>
          </div>
          <div>
            <img src="/mutual-fund-intro.png" alt="Investment Journey" className="w-full max-w-md mx-auto" />
          </div>
        </div>

        {/* Why Invest section + Goal Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg mb-4 text-indigo-600">Why Invest with Maurya?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Paperless transaction</li>
              <li>All products under one roof</li>
              <li>No hidden charges</li>
              <li>Superior customer support</li>
              <li>Seamless and hassle-free online platform</li>
              <li>Goal-based Portfolio Planning</li>
              <li>SIP & Lumpsum Investment Setup</li>
              <li>Regular Portfolio Review</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg mb-4 text-indigo-600">Goal SIP Calculator</h2>
            <p className="text-sm text-gray-600 mb-4">Estimate the monthly SIP needed to reach your financial goal.</p>
            <div className="space-y-4">
              <input type="number" placeholder="Target Amount (₹)" className="w-full px-4 py-2 border rounded" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} />
              <input type="number" placeholder="Time Horizon (Years)" className="w-full px-4 py-2 border rounded" value={years} onChange={(e) => setYears(e.target.value)} />
              <input type="number" placeholder="Expected Annual Return (%)" className="w-full px-4 py-2 border rounded" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={calculateSIP}>Calculate SIP</button>
              {monthlySIP && <div className="mt-4 text-green-600 font-medium">You need to invest ₹{monthlySIP}/month to reach your goal 🎯</div>}
            </div>
          </div>
        </div>

        {/* SIP Future Value */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
          <h2 className="font-semibold text-lg mb-4 text-indigo-600">SIP Future Value Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" placeholder="Monthly SIP Amount (₹)" className="w-full px-4 py-2 border rounded" value={sipAmount} onChange={(e) => setSipAmount(e.target.value)} />
            <input type="number" placeholder="Time (Years)" className="w-full px-4 py-2 border rounded" value={sipYears} onChange={(e) => setSipYears(e.target.value)} />
            <input type="number" placeholder="Expected Annual Return (%)" className="w-full px-4 py-2 border rounded" value={sipRate} onChange={(e) => setSipRate(e.target.value)} />
          </div>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={calculateSIPFuture}>Calculate Future Value</button>
          {sipFutureValue && <div className="mt-4 text-green-600 font-medium">Future value: ₹{sipFutureValue}</div>}
        </div>

        {/* Lumpsum Future Value */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold text-lg mb-4 text-indigo-600">Lumpsum Future Value Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" placeholder="Investment Amount (₹)" className="w-full px-4 py-2 border rounded" value={lumpAmount} onChange={(e) => setLumpAmount(e.target.value)} />
            <input type="number" placeholder="Time (Years)" className="w-full px-4 py-2 border rounded" value={lumpYears} onChange={(e) => setLumpYears(e.target.value)} />
            <input type="number" placeholder="Expected Annual Return (%)" className="w-full px-4 py-2 border rounded" value={lumpRate} onChange={(e) => setLumpRate(e.target.value)} />
          </div>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={calculateLumpsum}>Calculate Future Value</button>
          {lumpFutureValue && <div className="mt-4 text-green-600 font-medium">Future value: ₹{lumpFutureValue}</div>}
        </div>
      </div>
    </section>
  );
};

export default MutualFundPage;