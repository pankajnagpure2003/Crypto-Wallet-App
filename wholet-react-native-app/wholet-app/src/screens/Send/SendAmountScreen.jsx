import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";
import CoinIcon from "../../components/wallet/CoinIcon";
import { mockAssets } from "../../data/mockData";

export default function SendAmountScreen({ navigation, route }) {
  const symbol = route?.params?.symbol || "BTC";
  const asset = mockAssets.find((a) => a.symbol === symbol) || mockAssets[0];
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const canContinue = amount.length > 0 && recipient.length > 0;

  return (
    <Screen scroll>
      <Header title="Send" />

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

      <Text className="text-fineprint text-gray mb-1.5">Send to</Text>
      <View className="border-b border-border pb-2 mb-8">
        <TextInput
          value={recipient}
          onChangeText={setRecipient}
          placeholder="Friend's username or address"
          placeholderTextColor="#B5BBC9"
          className="text-paragraph text-midnight"
        />
      </View>

      <Button
        label="Continue"
        disabled={!canContinue}
        onPress={() => navigation.navigate("SendMessage", { symbol: asset.symbol, amount, recipient })}
      />
    </Screen>
  );
}
