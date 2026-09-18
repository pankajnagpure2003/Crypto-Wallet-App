import React, { useState } from "react";
import { View, Text } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import PinPad, { PinDots } from "../../components/ui/PinPad";
import { useAuth } from "../../context/AuthContext";

const PIN_LENGTH = 4;

export default function ConfirmPinScreen({ navigation, route }) {
  const { pin: originalPin, form } = route?.params || {};
  const { signUp } = useAuth();
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handlePress = (digit) => {
    if (pin.length >= PIN_LENGTH) return;
    const next = pin + digit;
    setPin(next);
    if (next.length === PIN_LENGTH) {
      setTimeout(async () => {
        if (next === originalPin) {
          await signUp(form || {});
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
            setPin("");
          }, 600);
        }
      }, 150);
    }
  };

  return (
    <Screen>
      <Header title="" />
      <View className="items-center mt-2 mb-4">
        <Text className="text-h3 text-midnight mb-2">Confirm PIN</Text>
        <Text className="text-paragraph text-gray text-center px-6">
          Re-enter your PIN to confirm
        </Text>
      </View>

      <PinDots length={PIN_LENGTH} filled={pin.length} error={error} />
      {error ? (
        <Text className="text-fineprint text-danger text-center -mt-6 mb-4">
          PINs don't match, try again
        </Text>
      ) : null}

      <View className="flex-1 justify-end pb-6 items-center">
        <PinPad
          onPress={handlePress}
          onBackspace={() => setPin((p) => p.slice(0, -1))}
        />
      </View>
    </Screen>
  );
}
