import React from "react";

const LoanAgainstMfPage = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          Loan Against Mutual Funds
        </h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Unlock liquidity without redeeming your investments! A Loan Against Mutual Funds (LAMF) allows you to pledge your existing mutual fund units as collateral and avail a loan — ensuring your investments continue to grow while providing you with immediate financial flexibility.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-400">
          <li>✅ No need to sell your mutual fund investments.</li>
          <li>✅ Attractive interest rates compared to unsecured loans.</li>
          <li>✅ Quick and hassle-free processing.</li>
          <li>✅ Continue to earn potential returns on pledged units.</li>
        </ul>

        <div className="mt-10 text-center">
          <a href="#contact" className="bg-primary text-black font-semibold py-3 px-8 rounded-full hover:bg-darkGold transition">
            Apply for a Loan →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoanAgainstMfPage;
