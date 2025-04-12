export default async function handler(req, res) {
  const symbols = {
    NIFTY_50: "^NSEI",
    SENSEX: "^BSESN",
    BANK_NIFTY: "^NSEBANK"
  };

  const results = {};
  const rapidKey = "36eb6069a7msh6d97701d0dae609p1d7553jsn65ea6a382e39"; // ⛳ Replace with your key

  for (const [key, symbol] of Object.entries(symbols)) {
    try {
      const response = await fetch(
        `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${encodeURIComponent(symbol)}&region=IN`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": rapidKey,
            "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
          }
        }
      );

      const data = await response.json();

      results[key] = {
        symbol,
        price: data.price?.regularMarketPrice?.raw,
        change: data.price?.regularMarketChange?.raw,
        percent_change: data.price?.regularMarketChangePercent?.raw
      };
    } catch (err) {
      results[key] = { symbol, error: "Failed to fetch" };
    }
  }

  res.status(200).json(results);
}
