// Static mock data — this is a frontend-only build, no backend/API calls.
// Swap this module out for real data fetching when wiring up a backend.

export const mockUser = {
  firstName: "Mattie",
  lastName: "Hardwick",
  fullName: "Mattie Hardwick",
  email: "mattie@whollet.io",
  avatar: null,
  phone: "+1 (555) 019-2837",
  phoneVerified: true,
  kycStatus: "verified", // "verified" | "pending" | "rejected" | "unverified"
  defaultCurrency: "Dollar (USD)",
};

export const mockAssets = [
  { symbol: "BTC", amount: "0.8934", valueUsd: "8,452.98", changePct: 5.24 },
  { symbol: "ETH", amount: "8.0175", valueUsd: "1,825.72", changePct: 1.45 },
  { symbol: "LTC", amount: "24.82", valueUsd: "1,378.45", changePct: -0.91 },
  { symbol: "XRP", amount: "612.40", valueUsd: "312.10", changePct: 2.02 },
  { symbol: "XLM", amount: "1,204.0", valueUsd: "148.32", changePct: -1.18 },
];

export const mockTransactions = [
  { id: "tx1", type: "withdraw", symbol: "BTC", amount: "0.021", amountUsd: "204", date: "Aug 19, 2019", status: "confirmed" },
  { id: "tx2", type: "deposit", symbol: "ETH", amount: "3.21", amountUsd: "695.03", date: "Aug 16, 2019", status: "confirmed" },
  { id: "tx3", type: "send", symbol: "NEO", amount: "37.81", amountUsd: "250", date: "Aug 10, 2019", status: "confirmed" },
  { id: "tx4", type: "exchange", symbol: "LTC", amount: "12.4", amountUsd: "412.20", date: "Aug 06, 2019", status: "pending" },
  { id: "tx5", type: "withdraw", symbol: "BTC", amount: "0.021", amountUsd: "204", date: "Aug 19, 2019", status: "rejected" },
];

export const mockBalanceHistory = {
  Day: [0.4, 0.5, 0.45, 0.6, 0.55, 0.7, 0.65],
  Week: [0.3, 0.5, 0.35, 0.6, 0.4, 0.75, 0.6],
  Month: [0.2, 0.4, 0.3, 0.55, 0.5, 0.8, 0.7],
  Year: [0.1, 0.3, 0.25, 0.5, 0.45, 0.65, 0.9],
  All: [0.05, 0.2, 0.4, 0.3, 0.6, 0.5, 1],
};

export const mockPortfolioTotal = "24,825.90";

export const countries = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "AL", name: "Albania" },
  { code: "AR", name: "Argentina" },
];
