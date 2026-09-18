export const formatCurrency = (value, currency = "$") => {
  const num = typeof value === "string" ? Number(value.replace(/,/g, "")) : value;
  if (Number.isNaN(num)) return `${currency}0.00`;
  return `${currency}${num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

export const truncateAddress = (address, head = 6, tail = 6) => {
  if (!address || address.length <= head + tail) return address;
  return `${address.slice(0, head)}...${address.slice(-tail)}`;
};
