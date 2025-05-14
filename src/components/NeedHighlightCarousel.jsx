import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const highlights = [
  {
    title: "Only 7% of Indians are financially prepared for retirement!",
    hook: "With no pension and rising healthcare costs, how will you fund your 30-year retirement?",
    cta: "➡️ Calculate your retirement need now.",
    image: "/images/highlights/retirement.jpg"
  },
  {
    title: "A top MBA in India today costs ₹25–30 lakhs. In 15 years, it may cost ₹75 lakhs+.",
    hook: "Will your child compromise on their dreams because you didn’t plan early?",
    cta: "➡️ Start your education goal plan today.",
    image: "/images/highlights/education.jpg"
  },
  {
    title: "₹1 lakh in 2000 is worth only ₹31,000 today after inflation.",
    hook: "Your savings lose value every year. Is your money growing faster than inflation?",
    cta: "➡️ Check if your portfolio is inflation-proof.",
    image: "/images/highlights/inflation.jpg"
  },
  {
    title: "Delaying SIPs by 5 years can cost you up to ₹60 lakhs in the long run.",
    hook: "The earlier you start, the lesser you need to invest.",
    cta: "➡️ See what your SIP can grow into.",
    image: "/images/highlights/sip.jpg"
  },
  {
    title: "Nearly 75% of Indian families have inadequate health or life insurance.",
    hook: "A single hospital bill or tragedy can derail your finances forever.",
    cta: "➡️ Check your insurance health today.",
    image: "/images/highlights/insurance.jpg"
  },
  {
    title: "Most NRIs invest through outdated routes — missing out on tax-free, digital options like GIFT City.",
    hook: "Invest in India the smarter way — with lower tax and better compliance.",
    cta: "➡️ Explore GIFT City opportunities.",
    image: "/images/highlights/nri.jpg"
  },
  {
    title: "Over ₹2 lakh crore lies unclaimed in banks, mutual funds & insurance due to missing wills and nominations.",
    hook: "Don’t let your wealth end up in courts or claims departments.",
    cta: "➡️ Secure your legacy. Make your estate plan today.",
    image: "/images/highlights/estate.jpg"
  }
];

const NeedHighlightCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const current = highlights[index];

  return (
    <section className="bg-background text-text py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-gray-900 border border-darkGold p-8 rounded-xl shadow-xl max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Text Block */}
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {current.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              {current.hook}
            </p>
            <p className="text-lg md:text-lg font-semibold text-green-400">
              {current.cta}
            </p>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIndex((index - 1 + highlights.length) % highlights.length)}
                className="bg-primary text-black px-4 py-2 rounded-full hover:bg-darkGold transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setIndex((index + 1) % highlights.length)}
                className="bg-primary text-black px-4 py-2 rounded-full hover:bg-darkGold transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Image Block */}
          <div>
            <img
              src={current.image}
              alt={current.title}
              className="rounded-lg w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHighlightCarousel;
