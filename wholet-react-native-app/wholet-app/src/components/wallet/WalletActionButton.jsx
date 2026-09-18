import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

/**
 * Round icon-button used in the "button/wallet/*" set (deposit / withdraw /
 * send / exchange quick actions on the Wallet Overview screen).
 */
export default function WalletActionButton({ icon, label, onPress, filled = false }) {
  return (
    <Pressable onPress={onPress} className="items-center" style={{ width: 72 }}>
      <View
        className={`w-14 h-14 rounded-full items-center justify-center mb-1.5 ${
          filled ? "bg-primary" : "bg-white border border-border"
        }`}
      >
        <Feather name={icon} size={20} color={filled ? "#FFFFFF" : "#347AF0"} />
      </View>
      <Text className="text-fineprint text-graydark">{label}</Text>
    </Pressable>
  );
}
