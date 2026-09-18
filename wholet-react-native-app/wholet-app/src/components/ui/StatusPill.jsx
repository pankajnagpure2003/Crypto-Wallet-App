import React from "react";
import { View, Text } from "react-native";

const STATUS_STYLES = {
  confirmed: { bg: "bg-success-light", text: "text-success", label: "Confirmed" },
  pending: { bg: "bg-warning-light", text: "text-warning", label: "Pending" },
  rejected: { bg: "bg-danger-light", text: "text-danger", label: "Rejected" },
};

/**
 * Small status badge used on transaction list items / details
 * (mirrors "Transaction status.png" / "Indicators.png").
 */
export default function StatusPill({ status = "confirmed", label }) {
  const s = STATUS_STYLES[status] || STATUS_STYLES.confirmed;
  return (
    <View className={`px-2.5 py-1 rounded-full self-start ${s.bg}`}>
      <Text className={`text-fineprint ${s.text}`}>{label || s.label}</Text>
    </View>
  );
}
