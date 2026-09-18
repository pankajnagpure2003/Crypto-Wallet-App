import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import BalanceChart from "../../components/wallet/BalanceChart";
import AssetListItem from "../../components/wallet/AssetListItem";
import TransactionListItem from "../../components/wallet/TransactionListItem";
import { mockAssets, mockTransactions, mockBalanceHistory, mockPortfolioTotal } from "../../data/mockData";

const RANGES = ["Day", "Week", "Month", "Year", "All"];

export default function WalletOverviewScreen() {
  const navigation = useNavigation();
  const [range, setRange] = useState("Week");

  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView edges={["top"]}>
        <View className="flex-row items-center justify-between px-6 pt-2 pb-4">
          <Pressable hitSlop={12} onPress={() => navigation.goBack?.()}>
            <Feather name="chevron-left" size={24} color="#FFFFFF" />
          </Pressable>
          <Text className="text-sublime text-white">Portfolio</Text>
          <Pressable
            hitSlop={12}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Feather name="menu" size={22} color="#FFFFFF" />
          </Pressable>
        </View>

        <View className="items-center mb-4">
          <Text className="text-h1 text-white">${mockPortfolioTotal}</Text>
          <Text className="text-paragraph text-white/70 mt-1">Wallet Balance</Text>
        </View>

        <View className="items-center mb-2">
          <BalanceChart points={mockBalanceHistory[range]} />
        </View>

        <View className="flex-row justify-around px-4 pb-5 pt-2">
          {RANGES.map((r) => (
            <Pressable key={r} onPress={() => setRange(r)}>
              <View className={`px-3 py-1.5 rounded-full ${range === r ? "bg-white/20" : ""}`}>
                <Text className={`text-fineprint ${range === r ? "text-white" : "text-white/50"}`}>
                  {r}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>

      <View className="flex-1 bg-surface rounded-t-3xl">
        <ScrollView
          className="flex-1 px-6 pt-6"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-sublime text-midnight">Assets</Text>
          </View>
          {mockAssets.slice(0, 3).map((a) => (
            <AssetListItem
              key={a.symbol}
              asset={a}
              onPress={() => navigation.navigate("AssetDetail", { asset: a })}
            />
          ))}

          <Pressable
            onPress={() => navigation.navigate("Deposit")}
            className="border border-dashed border-gray rounded-full h-12 items-center justify-center mt-4 mb-2"
          >
            <Text className="text-link text-gray">+ Deposit more coins</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("AllAssets")} className="items-center py-3">
            <Text className="text-link text-primary">See All Assets</Text>
          </Pressable>

          <Text className="text-sublime text-midnight mb-2 mt-4">Latest transactions</Text>
          {mockTransactions.slice(0, 4).map((tx) => (
            <TransactionListItem
              key={tx.id}
              tx={tx}
              onPress={() => navigation.navigate("TransactionDetails", { tx })}
            />
          ))}

          <Pressable onPress={() => navigation.navigate("AllTransactions")} className="items-center py-4">
            <Text className="text-link text-primary">See All Transactions</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}
