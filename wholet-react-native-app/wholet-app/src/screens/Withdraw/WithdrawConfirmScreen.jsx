import React, { useState } from "react";
import { View, Text } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";
import { truncateAddress } from "../../utils/formatters";

export default function WithdrawConfirmScreen({ navigation, route }) {
  const { symbol, amount, address } = route.params;
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("WithdrawSuccess", { symbol, amount, address });
    }, 900);
  };

  return (
    <Screen>
      <Header title="Confirm Withdrawal" />

      <View className="bg-white rounded-2xl border border-border p-5 mb-6">
        <Row label="Amount" value={`${amount} ${symbol}`} />
        <Row label="Network fee" value={`0.0015 ${symbol}`} />
        <Row label="Total deducted" value={`${(Number(amount || 0) + 0.0015).toFixed(4)} ${symbol}`} />
        <Row label="Destination" value={truncateAddress(address)} last />
      </View>

      <Text className="text-fineprint text-gray text-center mb-8 px-4">
        Double-check the destination address. Crypto transactions can't be reversed once confirmed.
      </Text>

      <Button label="Confirm Withdrawal" onPress={handleConfirm} loading={loading} className="mb-3" />
      <Button label="Cancel" variant="ghost" onPress={() => navigation.goBack()} />
    </Screen>
  );
}

function Row({ label, value, last }) {
  return (
    <View className={`flex-row justify-between py-3 ${last ? "" : "border-b border-border"}`}>
      <Text className="text-paragraph text-gray">{label}</Text>
      <Text className="text-paragraph text-midnight font-semibold">{value}</Text>
    </View>
  );
}
