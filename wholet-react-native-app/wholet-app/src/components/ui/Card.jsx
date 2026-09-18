import React from "react";
import { View } from "react-native";

/**
 * Generic rounded surface card used for list groupings across
 * Wallet / Profile / Settings screens.
 */
export default function Card({ children, className = "" }) {
  return (
    <View className={`bg-white rounded-2xl border border-border p-4 ${className}`}>
      {children}
    </View>
  );
}
