import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";

/**
 * KYC empty state — mirrors "Empty State/KYC.jpg": prompts the user to
 * verify their identity before unlocking withdrawals/higher limits.
 */
export default function KycIntroScreen({ navigation }) {
  return (
    <Screen>
      <Header title="Identity Verification" />
      <View className="flex-1 items-center justify-center px-4">
        <View className="w-20 h-20 rounded-full bg-primary-light items-center justify-center mb-6">
          <Feather name="shield" size={32} color="#347AF0" />
        </View>
        <Text className="text-h3 text-midnight mb-2 text-center">Verify Your Identity</Text>
        <Text className="text-paragraph text-gray text-center">
          To keep your account secure and unlock withdrawals, we need to verify a few details
          about you. It only takes a couple of minutes.
        </Text>
      </View>
      <Button
        label="Start Verification"
        onPress={() => navigation.navigate("KycDocument")}
        className="mb-4"
      />
    </Screen>
  );
}
