import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await login(email, password);
    setLoading(false);
  };

  return (
    <Screen scroll>
      <View className="items-center pt-6 pb-8">
        <View className="w-16 h-16 rounded-2xl bg-primary-light items-center justify-center mb-4">
          <Feather name="user" size={28} color="#347AF0" />
        </View>
        <Text className="text-h3 text-midnight">Welcome Back!</Text>
      </View>

      <Input
        label="Email address"
        value={email}
        onChangeText={setEmail}
        placeholder="you@whollet.io"
        keyboardType="email-address"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secure
      />

      <Pressable
        onPress={() => navigation.navigate("ForgotPassword")}
        className="self-end mb-10"
      >
        <Text className="text-link text-primary">Forgot your password?</Text>
      </Pressable>

      <Button label="Login" onPress={handleLogin} loading={loading} className="mb-4" />

      <Pressable onPress={() => navigation.navigate("SignUp")} className="items-center">
        <Text className="text-paragraph text-graydark">
          Don't have an account? <Text className="text-primary font-semibold">Sign Up</Text>
        </Text>
      </Pressable>
    </Screen>
  );
}
