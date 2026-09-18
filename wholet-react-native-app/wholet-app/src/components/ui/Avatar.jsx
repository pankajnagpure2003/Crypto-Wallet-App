import React from "react";
import { View, Text, Image } from "react-native";

/**
 * Circular avatar with graceful fallback to initials, matching
 * avatar/small.png and the Profile / Side Menu screens.
 */
export default function Avatar({ uri, name = "", size = 44 }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (uri) {
    return (
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    );
  }

  return (
    <View
      style={{ width: size, height: size, borderRadius: size / 2 }}
      className="bg-primary items-center justify-center"
    >
      <Text className="text-white text-link">{initials || "?"}</Text>
    </View>
  );
}
