import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

// Mirrors icon/transaction status/{deposit,withdrawn,sent,exchanged,pending,rejected}.png
const TYPE_CONFIG = {
  deposit: { icon: "arrow-down-left", color: "#75BF72", bg: "#E9F6E8", label: "Deposited" },
  withdraw: { icon: "arrow-up-right", color: "#DF5060", bg: "#FBEAEC", label: "Withdrawn" },
  send: { icon: "arrow-up-right", color: "#347AF0", bg: "#EAF1FE", label: "Sent" },
  exchange: { icon: "repeat", color: "#FDB32A", bg: "#FFF6E3", label: "Exchanged" },
};

/**
 * Single row for "Latest transactions" / "All Transactions" lists.
 */
export default function TransactionListItem({ tx, onPress }) {
  const cfg = TYPE_CONFIG[tx.type] || TYPE_CONFIG.deposit;

  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center py-3 border-b border-border active:opacity-70"
    >
      <View
        style={{ backgroundColor: cfg.bg }}
        className="w-10 h-10 rounded-full items-center justify-center"
      >
        <Feather name={cfg.icon} size={18} color={cfg.color} />
      </View>
      <View className="flex-1 ml-3">
        <Text className="text-paragraph text-midnight font-semibold">
          ${tx.amountUsd}
        </Text>
        <Text className="text-fineprint text-gray mt-0.5">
          {tx.amount} {tx.symbol}
        </Text>
      </View>
      <View className="items-end">
        <Text style={{ color: cfg.color }} className="text-link">
          {cfg.label}
        </Text>
        <Text className="text-fineprint text-gray mt-0.5">{tx.date}</Text>
      </View>
    </Pressable>
  );
}
