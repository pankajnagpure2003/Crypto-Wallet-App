import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function SignUpScreen({ navigation }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <Screen scroll>
      <View className="items-center pt-6 pb-8">
        <View className="w-16 h-16 rounded-2xl bg-primary-light items-center justify-center mb-4">
          <Feather name="user-plus" size={28} color="#347AF0" />
        </View>
        <Text className="text-h3 text-midnight">Create Account</Text>
      </View>

      <Input label="First Name" value={form.firstName} onChangeText={set("firstName")} placeholder="Mattie" />
      <Input label="Last Name" value={form.lastName} onChangeText={set("lastName")} placeholder="Hardwick" />
      <Input
        label="Email Address"
        value={form.email}
        onChangeText={set("email")}
        placeholder="mattie@whollet.io"
        keyboardType="email-address"
      />
      <Input label="Password" value={form.password} onChangeText={set("password")} placeholder="Create a password" secure />

      <Button
        label="Let's Get Started"
        onPress={() => navigation.navigate("CreatePin", { form })}
        className="mt-4 mb-4"
      />

      <Pressable onPress={() => navigation.navigate("Login")} className="items-center">
        <Text className="text-paragraph text-graydark">
          Already have an account? <Text className="text-primary font-semibold">Login</Text>
        </Text>
      </Pressable>
    </Screen>
  );
}
