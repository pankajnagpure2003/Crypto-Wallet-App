import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

/**
 * Text field — mirrors "Inputs & Text Fields.png": label, underline style,
 * focus/active/error/disabled states and an optional trailing icon
 * (e.g. the eye icon used for password reveal across the auth flow).
 */
export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  secure = false,
  disabled = false,
  keyboardType = "default",
  autoCapitalize = "none",
  trailingIcon,
  onTrailingIconPress,
  className = "",
}) {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(secure);

  const borderColor = error
    ? "border-b-danger"
    : focused
    ? "border-b-primary"
    : "border-b-border";

  return (
    <View className={`mb-5 ${className}`}>
      {label ? (
        <Text className="text-fineprint text-gray mb-1.5">{label}</Text>
      ) : null}
      <View className={`flex-row items-center border-b ${borderColor} pb-2`}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#B5BBC9"
          editable={!disabled}
          secureTextEntry={hidden}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`flex-1 text-paragraph ${disabled ? "text-gray" : "text-midnight"}`}
          style={{ paddingVertical: 4 }}
        />
        {secure ? (
          <Pressable hitSlop={10} onPress={() => setHidden((h) => !h)}>
            <Feather name={hidden ? "eye" : "eye-off"} size={18} color="#B5BBC9" />
          </Pressable>
        ) : trailingIcon ? (
          <Pressable hitSlop={10} onPress={onTrailingIconPress}>
            <Feather name={trailingIcon} size={18} color="#B5BBC9" />
          </Pressable>
        ) : null}
      </View>
      {error ? <Text className="text-fineprint text-danger mt-1.5">{error}</Text> : null}
    </View>
  );
}
