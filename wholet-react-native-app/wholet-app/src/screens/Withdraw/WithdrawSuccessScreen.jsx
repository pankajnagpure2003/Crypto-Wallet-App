import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Button from "../../components/ui/Button";
import { useToast } from "../../components/ui/Toast";

export default function WithdrawSuccessScreen({ navigation, route }) {
  const { symbol, amount } = route.params;
  const { showToast } = useToast();

  useEffect(() => {
    showToast({ title: "Successful Withdrawal", message: `${amount} ${symbol} is on its way.`, variant: "success" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <View className="w-20 h-20 rounded-full bg-success-light items-center justify-center mb-6">
          <Feather name="check" size={36} color="#75BF72" />
        </View>
        <Text className="text-h3 text-midnight mb-2">Withdrawal Submitted</Text>
        <Text className="text-paragraph text-gray text-center px-6">
          {amount} {symbol} is being processed. You'll be notified once it's confirmed.
        </Text>
      </View>
      <Button
        label="Back to Wallet"
        onPress={() => navigation.navigate("Main")}
        className="mb-4"
      />
    </Screen>
  );
}
