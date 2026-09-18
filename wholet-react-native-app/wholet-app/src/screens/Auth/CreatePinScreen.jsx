import React, { useState } from "react";
import { View, Text } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import PinPad, { PinDots } from "../../components/ui/PinPad";

const PIN_LENGTH = 4;

export default function CreatePinScreen({ navigation, route }) {
  const [pin, setPin] = useState("");

  const handlePress = (digit) => {
    if (pin.length >= PIN_LENGTH) return;
    const next = pin + digit;
    setPin(next);
    if (next.length === PIN_LENGTH) {
      setTimeout(() => {
        navigation.navigate("ConfirmPin", { pin: next, form: route?.params?.form });
      }, 200);
    }
  };

  return (
    <Screen>
      <Header title="" />
      <View className="items-center mt-2 mb-4">
        <Text className="text-h3 text-midnight mb-2">Create a PIN</Text>
        <Text className="text-paragraph text-gray text-center px-6">
          You'll use this PIN to unlock the app and confirm transactions
        </Text>
      </View>

      <PinDots length={PIN_LENGTH} filled={pin.length} />

      <View className="flex-1 justify-end pb-6 items-center">
        <PinPad
          onPress={handlePress}
          onBackspace={() => setPin((p) => p.slice(0, -1))}
        />
      </View>
    </Screen>
  );
}
