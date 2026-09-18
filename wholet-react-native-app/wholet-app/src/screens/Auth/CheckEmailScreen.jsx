import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Button from "../../components/ui/Button";

export default function CheckEmailScreen({ navigation, route }) {
  const email = route?.params?.email || "your inbox";

  return (
    <Screen>
      <Header title="" />
      <View className="flex-1 items-center justify-center px-4">
        <View className="w-20 h-20 rounded-full bg-primary-light items-center justify-center mb-6">
          <Feather name="mail" size={32} color="#347AF0" />
        </View>
        <Text className="text-h3 text-midnight mb-2">Check Your Email</Text>
        <Text className="text-paragraph text-gray text-center">
          We've sent a password reset link to {email}. Follow the instructions to reset your password.
        </Text>
      </View>
      <Button
        label="Back to Login"
        variant="ghost"
        onPress={() => navigation.navigate("Login")}
        className="mb-4"
      />
    </Screen>
  );
}
