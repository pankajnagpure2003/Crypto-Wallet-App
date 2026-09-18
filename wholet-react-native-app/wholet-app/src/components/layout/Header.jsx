import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

/**
 * Top navigation header. Mirrors the kit's "header/light" and "header/dark"
 * variants (Header.png) used across detail / form screens.
 *
 * @param {string} title
 * @param {"light"|"dark"} variant - dark = midnight text on light bg, light = white text on colored bg
 * @param {boolean} showBack
 * @param {React.ReactNode} right - custom right-side element (e.g. menu icon)
 */
export default function Header({
  title,
  variant = "dark",
  showBack = true,
  right = null,
  onBack,
}) {
  const navigation = useNavigation();
  const isLight = variant === "light";
  const textColor = isLight ? "text-white" : "text-midnight";
  const iconColor = isLight ? "#FFFFFF" : "#0D1F3C";

  return (
    <View className="flex-row items-center justify-between h-14 mb-2">
      <View className="w-10">
        {showBack ? (
          <Pressable
            hitSlop={12}
            onPress={onBack || (() => navigation.goBack())}
            className="w-10 h-10 items-center justify-center -ml-2"
          >
            <Feather name="chevron-left" size={26} color={iconColor} />
          </Pressable>
        ) : null}
      </View>

      <Text className={`text-sublime ${textColor}`} numberOfLines={1}>
        {title}
      </Text>

      <View className="w-10 items-end">{right}</View>
    </View>
  );
}
