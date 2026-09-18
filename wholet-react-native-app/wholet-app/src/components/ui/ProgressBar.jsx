import React from "react";
import { View } from "react-native";

/**
 * Step progress bar - matches "Progress bars.png" (used in KYC / onboarding).
 * @param {number} step - current step (1-indexed)
 * @param {number} total
 */
export default function ProgressBar({ step, total }) {
  return (
    <View className="flex-row mb-6" style={{ gap: 6 }}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          className={`flex-1 h-1.5 rounded-full ${i < step ? "bg-primary" : "bg-border"}`}
        />
      ))}
    </View>
  );
}
