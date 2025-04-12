export default async function handler(req, res) {
  const symbols = {
    NIFTY_50: "^NSEI",
    SENSEX: "^BSESN",
    BANK_NIFTY: "^NSEBANK"
  };

  const apiKey = "cvt81a1r01qhup0ur4ggcvt81a1r01qhup0ur4h0";
  const results = {};

  for (const [key, symbol] of Object.entries(symbols)) {
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
      );
      const data = await response.json();

      results[key] = {
        symbol,
        price: data.c,
        change: data.d,
        percent_change: data.dp,
      };
    } catch (error) {
      console.error(`Error fetching ${symbol}:`, error);
    }
  }

  res.status(200).json(results);
}