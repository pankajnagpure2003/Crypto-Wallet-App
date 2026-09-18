import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Button from "../../components/ui/Button";

export default function WelcomeScreen({ navigation }) {
  return (
    <Screen bg="bg-primary" statusBarStyle="light" noPadding>
      <View className="flex-1 px-6 items-center justify-center">
        <View className="w-24 h-24 rounded-full border-2 border-white/60 items-center justify-center mb-8">
          <Feather name="hexagon" size={44} color="#FFFFFF" />
        </View>
        <Text className="text-paragraph text-white/70">Welcome to</Text>
        <Text className="text-h1 text-white tracking-widest">WHOLLET</Text>
      </View>

      <View className="px-6 pb-8">
        <Button
          label="Create Account"
          variant="primaryWhite"
          onPress={() => navigation.navigate("SignUp")}
          className="mb-4"
        />
        <Pressable
          onPress={() => navigation.navigate("Login")}
          className="items-center py-2"
        >
          <Text className="text-paragraph text-white/80">
            Already have an account?{" "}
            <Text className="text-white font-semibold">Login</Text>
          </Text>
        </Pressable>
      </View>
    </Screen>
  );
}
