import React, { useState } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useToast } from "../../components/ui/Toast";

export default function NewPasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { showToast } = useToast();

  const handleSubmit = () => {
    showToast({ title: "Password changed", message: "Use your new password to log in.", variant: "success" });
    navigation.navigate("Login");
  };

  return (
    <Screen scroll>
      <Header title="" />
      <View className="items-center mb-8">
        <View className="w-16 h-16 rounded-2xl bg-primary-light items-center justify-center mb-4">
          <Feather name="key" size={26} color="#347AF0" />
        </View>
        <Text className="text-h3 text-midnight">Create New Password</Text>
      </View>

      <Input label="New Password" value={password} onChangeText={setPassword} placeholder="Enter new password" secure />
      <Input label="Confirm Password" value={confirm} onChangeText={setConfirm} placeholder="Re-enter new password" secure />

      <Button label="Update Password" onPress={handleSubmit} className="mt-6" />
    </Screen>
  );
}
