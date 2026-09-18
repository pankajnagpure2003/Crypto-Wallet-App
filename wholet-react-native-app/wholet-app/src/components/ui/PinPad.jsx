import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["", "0", "back"],
];

/**
 * Dot indicators for PIN length, matching input/pin/1-4.png ... 4-4.png
 */
export function PinDots({ length = 4, filled = 0, error = false }) {
  return (
    <View className="flex-row justify-center my-10" style={{ gap: 16 }}>
      {Array.from({ length }).map((_, i) => {
        const isFilled = i < filled;
        return (
          <View
            key={i}
            className="w-4 h-4 rounded-full"
            style={{
              backgroundColor: error
                ? "#DF5060"
                : isFilled
                ? "#75BF72"
                : "#E4E8F0",
            }}
          />
        );
      })}
    </View>
  );
}

/**
 * Numeric keypad, matching the "system/keyboard/numeric" layout used on
 * Create PIN / Confirm PIN / Enter PIN screens.
 */
export default function PinPad({ onPress, onBackspace }) {
  return (
    <View className="w-full">
      {KEYS.map((row, ri) => (
        <View key={ri} className="flex-row justify-between mb-2">
          {row.map((key, ki) => {
            if (key === "") {
              return <View key={ki} style={{ width: 72, height: 72 }} />;
            }
            if (key === "back") {
              return (
                <Pressable
                  key={ki}
                  onPress={onBackspace}
                  style={{ width: 72, height: 72 }}
                  className="items-center justify-center"
                >
                  <Feather name="delete" size={22} color="#347AF0" />
                </Pressable>
              );
            }
            return (
              <Pressable
                key={ki}
                onPress={() => onPress(key)}
                style={{ width: 72, height: 72 }}
                className="items-center justify-center rounded-full active:bg-primary-light"
              >
                <Text className="text-h3 text-primary">{key}</Text>
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
}
