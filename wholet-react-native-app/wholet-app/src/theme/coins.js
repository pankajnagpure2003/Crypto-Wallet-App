// Simple, license-safe coin badge styling (initial + brand color)
// instead of bundling third-party cryptocurrency logo artwork.

export const COINS = {
  BTC: { symbol: "BTC", name: "Bitcoin", color: "#F7931A", letter: "B" },
  ETH: { symbol: "ETH", name: "Ethereum", color: "#627EEA", letter: "E" },
  LTC: { symbol: "LTC", name: "Litecoin", color: "#345D9D", letter: "L" },
  XRP: { symbol: "XRP", name: "Ripple", color: "#23292F", letter: "X" },
  XLM: { symbol: "XLM", name: "Stellar", color: "#08B5E5", letter: "S" },
  XMR: { symbol: "XMR", name: "Monero", color: "#FF6600", letter: "M" },
  DASH: { symbol: "DASH", name: "Dash", color: "#008CE7", letter: "D" },
  NEO: { symbol: "NEO", name: "NEO", color: "#58BF00", letter: "N" },
};

export const getCoin = (symbol) => COINS[symbol] || COINS.BTC;
