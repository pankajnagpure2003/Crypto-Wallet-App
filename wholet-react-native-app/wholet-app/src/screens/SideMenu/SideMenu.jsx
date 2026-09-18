import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import Avatar from "../../components/ui/Avatar";
import StatusPill from "../../components/ui/StatusPill";
import { useAuth } from "../../context/AuthContext";

const MENU_ITEMS = [
  { icon: "home", label: "Wallet", route: "MainTabs" },
  { icon: "plus-circle", label: "Deposit", route: "Deposit" },
  { icon: "arrow-up-circle", label: "Withdraw", route: "WithdrawAmount" },
  { icon: "send", label: "Send", route: "SendAmount" },
  { icon: "repeat", label: "Exchange", route: "Exchange" },
  { icon: "user", label: "Profile", route: "Profile" },
];

const KYC_LABEL = {
  verified: { text: "Verified", status: "confirmed" },
  pending: { text: "In progress", status: "pending" },
  rejected: { text: "Rejected", status: "rejected" },
  unverified: { text: "Verify your profile", status: "pending" },
};

/**
 * Drawer content — mirrors "Side Menu/*" states (User verified / KYC in
 * progress / KYC rejected / Verify your profile) via the user's kycStatus.
 */
export default function SideMenu({ navigation }) {
  const { user, logout } = useAuth();
  const kyc = KYC_LABEL[user.kycStatus] || KYC_LABEL.unverified;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DrawerContentScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="px-6 pt-4 pb-6">
          <Avatar name={user.fullName} size={64} />
          <Text className="text-sublime text-midnight mt-3">{user.fullName}</Text>
          <Pressable
            onPress={() => navigation.navigate("KycIntro")}
            className="mt-2 self-start"
          >
            <StatusPill status={kyc.status} label={kyc.text} />
          </Pressable>
        </View>

        <View className="px-4">
          {MENU_ITEMS.map((item) => (
            <Pressable
              key={item.label}
              onPress={() => navigation.navigate(item.route)}
              className="flex-row items-center px-3 py-3.5 rounded-xl active:bg-surface"
            >
              <Feather name={item.icon} size={20} color="#3D4C63" />
              <Text className="text-paragraph text-graydark ml-4">{item.label}</Text>
            </Pressable>
          ))}
        </View>

        <View className="flex-1" />

        <Pressable onPress={logout} className="flex-row items-center px-7 py-4">
          <Feather name="log-out" size={20} color="#B5BBC9" />
          <Text className="text-paragraph text-gray ml-4">Sign out</Text>
        </Pressable>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
