import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../components/ui/Toast";

export default function PhoneVerificationScreen({ navigation }) {
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();
  const [phone, setPhone] = useState(user.phone);
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(user.phoneVerified);

  const handleVerify = () => {
    updateUser({ phoneVerified: true, phone });
    showToast({ title: "Phone number verified", variant: "success" });
    navigation.goBack();
  };

  return (
    <Screen scroll>
      <Header title="Phone Number" />

      <View className="items-center mb-8">
        <View className="w-16 h-16 rounded-2xl bg-primary-light items-center justify-center mb-4">
          <Feather name="phone" size={26} color="#347AF0" />
        </View>
        <Text className="text-paragraph text-gray text-center px-6">
          {sent ? "Your phone number is verified." : "Enter your phone number to receive a verification code."}
        </Text>
      </View>

      <Input label="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      {sent ? (
        <Input label="Verification Code" value={code} onChangeText={setCode} keyboardType="number-pad" placeholder="4-digit code" />
      ) : null}

      {sent ? (
        <Button label="Verify" onPress={handleVerify} className="mt-4" />
      ) : (
        <Button label="Send Code" onPress={() => setSent(true)} className="mt-4" />
      )}
    </Screen>
  );
}
