import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";
import CoinIcon from "../../components/wallet/CoinIcon";
import { mockAssets } from "../../data/mockData";

export default function WithdrawAmountScreen({ navigation, route }) {
  const symbol = route?.params?.symbol || "BTC";
  const asset = mockAssets.find((a) => a.symbol === symbol) || mockAssets[0];
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const canContinue = amount.length > 0 && address.length > 0;

  return (
    <Screen scroll>
      <Header title="Withdraw" />

      <View className="items-center mb-8">
        <CoinIcon symbol={asset.symbol} size={48} />
        <Text className="text-fineprint text-gray mt-2">
          Available: {asset.amount} {asset.symbol}
        </Text>
      </View>

      <Text className="text-fineprint text-gray text-center mb-2">Amount</Text>
      <View className="flex-row items-center justify-center mb-8">
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="0.00"
          placeholderTextColor="#CFD2D8"
          keyboardType="decimal-pad"
          className="text-h1 text-midnight text-center"
          style={{ minWidth: 140 }}
        />
        <Text className="text-h3 text-gray ml-2">{asset.symbol}</Text>
      </View>

      <Text className="text-fineprint text-gray mb-1.5">Withdraw to address</Text>
      <View className="border-b border-border pb-2 mb-8">
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="Paste destination address"
          placeholderTextColor="#B5BBC9"
          className="text-paragraph text-midnight"
        />
      </View>

      <View className="bg-surface rounded-2xl p-4 mb-8">
        <View className="flex-row justify-between mb-2">
          <Text className="text-fineprint text-gray">Network fee</Text>
          <Text className="text-fineprint text-midnight">0.0015 {asset.symbol}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-fineprint text-gray">You will receive</Text>
          <Text className="text-fineprint text-midnight">
            {amount ? Math.max(0, Number(amount) - 0.0015).toFixed(4) : "0.00"} {asset.symbol}
          </Text>
        </View>
      </View>

      <Button
        label="Continue"
        disabled={!canContinue}
        onPress={() =>
          navigation.navigate("EnterPin", {
            onSuccessRoute: "WithdrawConfirm",
            onSuccessParams: { symbol: asset.symbol, amount, address },
          })
        }
      />
    </Screen>
  );
}
