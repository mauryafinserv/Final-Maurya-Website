import React, { useEffect, useState } from "react";
import axios from "axios";

const LiveTicker = () => {
  const [data, setData] = useState({});

  const symbols = {
    NIFTY_50: "^NSEI",
    SENSEX: "^BSESN",
    BANK_NIFTY: "^NSEBANK"
  };

  const fetchPrices = async () => {
    const apiKey = "cvt81a1r01qhup0ur4ggcvt81a1r01qhup0ur4h0"; // 🔐 Replace with your Finnhub API key
    const newData = {};

    for (const [key, symbol] of Object.entries(symbols)) {
      try {
        const res = await axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
        );

        const quote = res.data;
        newData[key] = {
          symbol,
          price: quote.c,
          change: quote.d,
          percent_change: quote.dp,
        };
      } catch (error) {
        console.error(`Error fetching ${symbol}:`, error);
      }
    }

    setData(newData);
  };

  useEffect(() => {
    const fetchPrices = async () => {
  try {
    const res = await axios.get("/api/ticker");
    setData(res.data);
  } catch (error) {
    console.error("Error fetching ticker data from backend:", error);
  }
};
;

    const interval = setInterval(() => {
      fetchPrices();
    }, 60000); // refresh every 60 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-100 border-b border-gray-300">
      <div className="animate-marquee whitespace-nowrap flex gap-12 py-2 px-4">
        {Object.entries(data).map(([key, d]) => (
          <div key={key} className="flex items-center gap-2 min-w-max">
            <span className="font-semibold">{d.symbol}</span>
            <span>{d.price?.toFixed(2)}</span>
            <span className={d.change >= 0 ? "text-green-600" : "text-red-500"}>
              {d.change >= 0 ? "+" : ""}
              {d.change?.toFixed(2)} ({d.percent_change?.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTicker;
