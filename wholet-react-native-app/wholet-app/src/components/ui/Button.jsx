import React from "react";
import { Pressable, Text, ActivityIndicator, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const VARIANT_STYLES = {
  primary: {
    container: "bg-primary active:bg-primary-dark",
    text: "text-white",
  },
  primaryWhite: {
    container: "bg-white active:bg-surface",
    text: "text-primary",
  },
  ghost: {
    container: "bg-transparent border border-border active:bg-surface",
    text: "text-midnight",
  },
  dotted: {
    container: "bg-transparent border border-dashed border-gray",
    text: "text-graydark",
  },
  danger: {
    container: "bg-danger active:bg-danger",
    text: "text-white",
  },
  disabled: {
    container: "bg-border",
    text: "text-gray",
  },
};

/**
 * Button — covers "Regular Buttons" (primary / primary white / ghost /
 * dotted / disabled / loading) from the kit's component sheet.
 *
 * @param {"primary"|"primaryWhite"|"ghost"|"dotted"|"danger"} variant
 * @param {"lg"|"md"} size
 * @param {string} icon - Feather icon name, rendered left of the label
 * @param {boolean} loading
 * @param {boolean} disabled
 */
export default function Button({
  label,
  onPress,
  variant = "primary",
  size = "lg",
  icon,
  loading = false,
  disabled = false,
  className = "",
}) {
  const isDisabled = disabled || loading;
  const styles = isDisabled ? VARIANT_STYLES.disabled : VARIANT_STYLES[variant];
  const height = size === "lg" ? "h-14" : "h-11";

  return (
    <Pressable
      onPress={isDisabled ? undefined : onPress}
      className={`${height} rounded-full items-center justify-center flex-row px-6 ${styles.container} ${className}`}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
    >
      {loading ? (
        <ActivityIndicator color="#B5BBC9" />
      ) : (
        <View className="flex-row items-center">
          {icon ? (
            <Feather
              name={icon}
              size={18}
              color={isDisabled ? "#B5BBC9" : "#fff"}
              style={{ marginRight: 8 }}
            />
          ) : null}
          <Text className={`text-link ${styles.text}`}>{label}</Text>
        </View>
      )}
    </Pressable>
  );
}
