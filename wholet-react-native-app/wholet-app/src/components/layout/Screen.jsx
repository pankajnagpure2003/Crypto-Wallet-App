import React from "react";
import { View, ScrollView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * Base screen wrapper: safe area + optional scroll + consistent background.
 *
 * @param {"light"|"dark"} statusBarStyle - matches the kit's light/dark status bar states
 * @param {string} bg - tailwind background class for the screen
 * @param {boolean} scroll - wrap children in a ScrollView
 * @param {boolean} noPadding - disable default horizontal padding
 */
export default function Screen({
  children,
  bg = "bg-surface",
  statusBarStyle = "dark",
  scroll = false,
  noPadding = false,
  edges = ["top", "bottom"],
  className = "",
}) {
  const Container = scroll ? ScrollView : View;

  return (
    <SafeAreaView edges={edges} className={`flex-1 ${bg}`}>
      <StatusBar
        barStyle={statusBarStyle === "light" ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <Container
          className={`flex-1 ${noPadding ? "" : "px-6"} ${className}`}
          contentContainerStyle={scroll ? { flexGrow: 1, paddingBottom: 32 } : undefined}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
