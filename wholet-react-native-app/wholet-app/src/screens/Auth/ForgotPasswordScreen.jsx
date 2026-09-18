import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <Screen scroll>
      <Header title="" />
      <View className="items-center mb-8">
        <View className="w-16 h-16 rounded-2xl bg-primary-light items-center justify-center mb-4">
          <Feather name="lock" size={26} color="#347AF0" />
        </View>
        <Text className="text-h3 text-midnight mb-2">Forgot Password?</Text>
        <Text className="text-paragraph text-gray text-center">
          Enter the email associated with your account and we'll send a reset link.
        </Text>
      </View>

      <Input
        label="Email address"
        value={email}
        onChangeText={setEmail}
        placeholder="you@whollet.io"
        keyboardType="email-address"
      />

      <Button
        label="Send Reset Link"
        onPress={() => navigation.navigate("CheckEmail", { email })}
        className="mt-6"
      />
    </Screen>
  );
}
