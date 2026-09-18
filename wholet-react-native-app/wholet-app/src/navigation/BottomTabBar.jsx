import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ICONS = {
  Transactions: "download",
  Wallet: "home",
  Portfolio: "grid",
};

const LABELS = {
  Transactions: "Transactions",
  Wallet: "Wallet",
  Portfolio: "Portfolio",
};

/**
 * Custom tab bar mirroring "Bottom Navigation.png": two flat icon tabs with
 * a raised circular primary tab (Wallet/home) in the center.
 */
export default function BottomTabBar({ state, navigation }) {
  return (
    <View className="bg-white border-t border-border">
      <SafeAreaView edges={["bottom"]}>
        <View className="flex-row justify-around items-center py-2">
          {state.routes.map((route, index) => {
            const focused = state.index === index;
            const isCenter = route.name === "Wallet";

            if (isCenter) {
              return (
                <Pressable
                  key={route.key}
                  onPress={() => navigation.navigate(route.name)}
                  className="items-center"
                  style={{ width: 72, marginTop: -22 }}
                >
                  <View className="w-14 h-14 rounded-full bg-primary items-center justify-center mb-1.5 shadow-lg">
                    <Feather name={ICONS.Wallet} size={22} color="#FFFFFF" />
                  </View>
                  <Text className="text-fineprint text-primary">{LABELS.Wallet}</Text>
                </Pressable>
              );
            }

            return (
              <Pressable
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                className="items-center"
                style={{ width: 72 }}
              >
                <View className="w-14 h-14 items-center justify-center mb-1.5">
                  <Feather name={ICONS[route.name]} size={20} color={focused ? "#347AF0" : "#B5BBC9"} />
                </View>
                <Text className={`text-fineprint ${focused ? "text-primary" : "text-gray"}`}>
                  {LABELS[route.name]}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}
