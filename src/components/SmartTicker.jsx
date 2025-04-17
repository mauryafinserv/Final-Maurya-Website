import React from "react";

const quotes = [
  "Rule No.1: Never lose money. Rule No.2: Never forget rule No.1.",
  "Price is what you pay. Value is what you get.",
  "Risk comes from not knowing what you are doing.",
  "The most important quality for an investor is temperament, not intellect.",
  "Opportunities come infrequently. When it rains gold, put out the bucket.",
  "Be fearful when others are greedy, and greedy when others are fearful.",
  "Someone's sitting in the shade today because someone planted a tree a long time ago.",
  "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
  "Time is the friend of the wonderful company, the enemy of the mediocre.",
  "Our favorite holding period is forever."
];

const SmartTicker = () => {
  return (
    <div className="overflow-hidden bg-black border-t border-b border-darkGold">
      <div className="whitespace-nowrap animate-marquee animate-fade-marquee py-3 text-[16px] italic font-serif text-primary">
        {quotes.map((quote, index) => (
          <span key={index} className="mx-12 inline-block">
            <span className="text-darkGold text-xl mr-2">“</span>
            {quote}
            <span className="ml-2 text-gray-400">— Warren Buffett</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SmartTicker;
