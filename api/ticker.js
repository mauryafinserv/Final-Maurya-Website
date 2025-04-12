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
        `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${apiKey}`,
        { headers: { "Content-Type": "application/json" } }
      );

      const data = await response.json();

      if (data && data.c) {
        results[key] = {
          symbol,
          price: data.c,
          change: data.d,
          percent_change: data.dp,
        };
      } else {
        results[key] = { symbol, error: "No data returned from Finnhub" };
      }

    } catch (error) {
      results[key] = { symbol, error: error.message };
    }
  }

  res.status(200).json(results);
}