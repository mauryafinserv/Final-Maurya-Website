import React from "react";

const quotes = [
  { text: "Rule No.1: Never lose money. Rule No.2: Never forget rule No.1.", author: "Warren Buffett" },
  { text: "Price is what you pay. Value is what you get.", author: "Warren Buffett" },
  { text: "Risk comes from not knowing what you are doing.", author: "Warren Buffett" },
  { text: "The most important quality for an investor is temperament, not intellect.", author: "Warren Buffett" },
  { text: "Opportunities come infrequently. When it rains gold, put out the bucket.", author: "Warren Buffett" },
  { text: "Be fearful when others are greedy, and greedy when others are fearful.", author: "Warren Buffett" },
  { text: "Time is the friend of the wonderful company, the enemy of the mediocre.", author: "Warren Buffett" },
  { text: "Our favorite holding period is forever.", author: "Warren Buffett" },
];

const SmartTicker = () => {
  return (
    <div className="overflow-hidden bg-black border-b border-gray-900 py-2">
      <div className="whitespace-nowrap animate-marquee py-1 text-xs text-gray-500 tracking-wide">
        {quotes.map((quote, index) => (
          <span key={index} className="mx-16 inline-block">
            <span className="text-primary mr-2">✦</span>
            <span className="italic">{quote.text}</span>
            <span className="text-gray-700 ml-2">— {quote.author}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SmartTicker;
