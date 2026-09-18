import React, { useState } from "react";
import { View, Text } from "react-native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import PinPad, { PinDots } from "../../components/ui/PinPad";

const PIN_LENGTH = 4;
const CORRECT_PIN = "5555"; // demo only — replace with real verification

/**
 * Re-usable PIN gate shown before sensitive actions (withdraw, send, etc.)
 * route.params.onSuccessRoute — screen name to navigate to on success
 */
export default function EnterPinScreen({ navigation, route }) {
  const onSuccessRoute = route?.params?.onSuccessRoute || "Main";
  const onSuccessParams = route?.params?.onSuccessParams;
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  const handlePress = (digit) => {
    if (pin.length >= PIN_LENGTH) return;
    const next = pin + digit;
    setPin(next);
    if (next.length === PIN_LENGTH) {
      setTimeout(() => {
        if (next === CORRECT_PIN || true) {
          // demo: any 4-digit PIN proceeds
          navigation.navigate(onSuccessRoute, onSuccessParams);
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
      <Header title="Verification Required" />
      <Text className="text-paragraph text-gray text-center -mt-2 mb-2">
        Please enter your PIN to proceed
      </Text>

      <PinDots length={PIN_LENGTH} filled={pin.length} error={error} />

      <View className="flex-1 justify-end pb-6 items-center">
        <PinPad
          onPress={handlePress}
          onBackspace={() => setPin((p) => p.slice(0, -1))}
        />
      </View>
    </Screen>
  );
}
