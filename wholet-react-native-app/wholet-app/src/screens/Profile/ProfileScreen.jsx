import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import Avatar from "../../components/ui/Avatar";
import { useAuth } from "../../context/AuthContext";

function Row({ icon, label, value, onPress, danger }) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white border border-border rounded-2xl px-4 py-4 flex-row items-center justify-between mb-3 active:bg-surface"
    >
      <View className="flex-row items-center">
        {icon ? <Feather name={icon} size={18} color={danger ? "#DF5060" : "#347AF0"} style={{ marginRight: 12 }} /> : null}
        <Text className={`text-paragraph ${danger ? "text-danger" : "text-midnight"} font-medium`}>{label}</Text>
      </View>
      <View className="flex-row items-center">
        {value ? <Text className="text-fineprint text-gray mr-2">{value}</Text> : null}
        <Feather name="chevron-right" size={18} color="#B5BBC9" />
      </View>
    </Pressable>
  );
}

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <Screen scroll>
      <Header title="" />
      <View className="items-center mb-8">
        <Avatar name={user.fullName} size={84} />
        <Text className="text-sublime text-midnight mt-3">{user.fullName}</Text>
      </View>

      <Row icon="user" label="Personal information" onPress={() => navigation.navigate("PersonalInformation")} />
      <Row icon="phone" label="Phone number verification" value={user.phoneVerified ? "Verified" : "Unverified"} onPress={() => navigation.navigate("PhoneVerification")} />

      <Text className="text-fineprint text-gray mb-2 mt-4">Settings</Text>
      <Row label="Default Currency" value={user.defaultCurrency} onPress={() => {}} />
      <Row label="Security" onPress={() => {}} />
      <Row label="Help & Support" onPress={() => {}} />
      <Row label="Legal" onPress={() => {}} />

      <View className="mt-4">
        <Row icon="log-out" label="Sign out" danger onPress={logout} />
      </View>
    </Screen>
  );
}
