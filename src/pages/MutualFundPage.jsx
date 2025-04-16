import React, { useState } from "react";

const MutualFundPage = () => {
  const [targetAmount, setTargetAmount] = useState("");
  const [years, setYears] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [monthlySIP, setMonthlySIP] = useState(null);

  const calculateSIP = () => {
    const r = parseFloat(returnRate) / 100 / 12;
    const n = parseFloat(years) * 12;
    const fv = parseFloat(targetAmount);
    if (!r || !n || !fv) return;

    const sip = (fv * r) / ((Math.pow(1 + r, n) - 1) * (1 + r));
    setMonthlySIP(sip.toFixed(2));
  };

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
    <section className="bg-background text-text py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* 🧾 Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Mutual Fund</h2>
            <p className="text-gray-300 leading-relaxed">
              Mutual Funds are professionally managed investment vehicles that pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities.
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              At <span className="text-primary font-medium">Maurya Shares & Stock Brokers</span>, we assist you in your wealth creation journey by offering a seamless and paperless platform to invest across mutual fund categories, process transactions efficiently, and track your investments with ease.
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Whether you're starting a SIP, making a lumpsum investment, or planning towards a financial goal — we simplify the process so you can invest confidently and stay in control.
            </p>
          </div>
          <div className="max-w-md mx-auto border-2 border-darkGold rounded-lg overflow-hidden shadow-lg">
            <img
              src="/mutual-fund-intro.png"
              alt="Investment Journey"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* 🛡️ Why Maurya + Goal Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <h2 className="font-semibold text-xl mb-4 text-primary">Why Invest with Maurya?</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
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

          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <h2 className="font-semibold text-xl mb-4 text-primary">Goal SIP Calculator</h2>
            <p className="text-sm text-gray-400 mb-4">Estimate the monthly SIP needed to reach your financial goal.</p>
            <div className="space-y-4">
              <input type="number" placeholder="Target Amount (₹)" className="w-full px-4 py-2 border rounded text-black" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} />
              <input type="number" placeholder="Time Horizon (Years)" className="w-full px-4 py-2 border rounded text-black" value={years} onChange={(e) => setYears(e.target.value)} />
              <input type="number" placeholder="Expected Annual Return (%)" className="w-full px-4 py-2 border rounded text-black" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} />
              <button className="bg-primary text-black px-4 py-2 rounded hover:bg-darkGold transition" onClick={calculateSIP}>Calculate SIP</button>
              {monthlySIP && <div className="mt-4 text-green-400 font-medium">You need to invest ₹{monthlySIP}/month to reach your goal 🎯</div>}
            </div>
          </div>
        </div>

        {/* 📈 SIP Future Value */}
        <div className="bg-gray-900 p-6 rounded-lg shadow mb-6">
          <h2 className="font-semibold text-xl mb-4 text-primary">SIP Future Value Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" placeholder="Monthly SIP Amount (₹)" className="w-full px-4 py-2 border rounded text-black" value={sipAmount} onChange={(e) => setSipAmount(e.target.value)} />
            <input type="number" placeholder="Time (Years)" className="w-full px-4 py-2 border rounded text-black" value={sipYears} onChange={(e) => setSipYears(e.target.value)} />
            <input type="number" placeholder="Expected Annual Return (%)" className="w-full px-4 py-2 border rounded text-black" value={sipRate} onChange={(e) => setSipRate(e.target.value)} />
          </div>
          <button className="mt-4 bg-primary text-black px-4 py-2 rounded hover:bg-darkGold transition" onClick={calculateSIPFuture}>Calculate Future Value</button>
          {sipFutureValue && <div className="mt-4 text-green-400 font-medium">Future value: ₹{sipFutureValue}</div>}
        </div>

        {/* 💰 Lumpsum */}
        <div className="bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="font-semibold text-xl mb-4 text-primary">Lumpsum Future Value Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" placeholder="Investment Amount (₹)" className="w-full px-4 py-2 border rounded text-black" value={lumpAmount} onChange={(e) => setLumpAmount(e.target.value)} />
            <input type="number" placeholder="Time (Years)" className="w-full px-4 py-2 border rounded text-black" value={lumpYears} onChange={(e) => setLumpYears(e.target.value)} />
            <input type="number" placeholder="Expected Annual Return (%)" className="w-full px-4 py-2 border rounded text-black" value={lumpRate} onChange={(e) => setLumpRate(e.target.value)} />
          </div>
          <button className="mt-4 bg-primary text-black px-4 py-2 rounded hover:bg-darkGold transition" onClick={calculateLumpsum}>Calculate Future Value</button>
          {lumpFutureValue && <div className="mt-4 text-green-400 font-medium">Future value: ₹{lumpFutureValue}</div>}
        </div>
      </div>
    </section>
  );
};

export default MutualFundPage;
