import React from "react";
import { View, Text, ScrollView } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";
import CoinIcon from "../../components/wallet/CoinIcon";
import BalanceChart from "../../components/wallet/BalanceChart";
import TransactionListItem from "../../components/wallet/TransactionListItem";
import { getCoin } from "../../theme/coins";
import { mockTransactions, mockBalanceHistory } from "../../data/mockData";

export default function AssetDetailScreen({ navigation, route }) {
  const { asset } = route.params;
  const coin = getCoin(asset.symbol);
  const positive = asset.changePct >= 0;
  const relatedTx = mockTransactions.filter((t) => t.symbol === asset.symbol);

  return (
    <Screen scroll>
      <Header title={`${coin.name} (${asset.symbol})`} />

      <View className="items-center mb-4">
        <CoinIcon symbol={asset.symbol} size={56} />
        <Text className="text-h2 text-midnight mt-3">${asset.valueUsd}</Text>
        <Text className={`text-link mt-1 ${positive ? "text-success" : "text-danger"}`}>
          {positive ? "+" : ""}
          {asset.changePct}% this week
        </Text>
      </View>

      <View className="items-center mb-6" style={{ height: 90 }}>
        <BalanceChart
          points={mockBalanceHistory.Week}
          color={positive ? "#75BF72" : "#DF5060"}
        />
      </View>

      <View className="flex-row mb-6" style={{ gap: 12 }}>
        <Button label="Deposit" variant="ghost" className="flex-1" onPress={() => navigation.navigate("Deposit", { symbol: asset.symbol })} />
        <Button label="Send" variant="ghost" className="flex-1" onPress={() => navigation.navigate("SendAmount", { symbol: asset.symbol })} />
      </View>

      <Text className="text-sublime text-midnight mb-2">Holdings</Text>
      <View className="bg-white rounded-2xl border border-border p-4 mb-6">
        <Text className="text-fineprint text-gray mb-1">Balance</Text>
        <Text className="text-paragraph text-midnight font-semibold">
          {asset.amount} {asset.symbol}
        </Text>
      </View>

      <Text className="text-sublime text-midnight mb-2">Transactions</Text>
      {relatedTx.length ? (
        relatedTx.map((tx) => (
          <TransactionListItem
            key={tx.id}
            tx={tx}
            onPress={() => navigation.navigate("TransactionDetails", { tx })}
          />
        ))
      ) : (
        <Text className="text-paragraph text-gray">No transactions yet for {asset.symbol}.</Text>
      )}
    </Screen>
  );
}
