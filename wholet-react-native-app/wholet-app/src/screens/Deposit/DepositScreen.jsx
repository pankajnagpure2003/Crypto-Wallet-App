import React, { useState } from "react";
import { View, Text, ScrollView, Pressable, Alert, Share } from "react-native";
import { Feather } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import CoinIcon from "../../components/wallet/CoinIcon";
import { mockAssets } from "../../data/mockData";

// Demo deposit addresses (mock — not real wallet addresses)
const ADDRESSES = {
  BTC: "3M8w2knJKsr3jqMatYiyuraxVvZAmuZ",
  ETH: "0x0b06d4JH48e5DK3jm4a3af69BnVO51c12i8",
  LTC: "LcW2knJKsr3jqMatYiyuraxVvZAmuZ88",
};

/**
 * Mirrors the "Deposit Coins" modal (Deposit.jpg): coin selector tabs,
 * QR code, address string with copy/share actions.
 */
export default function DepositScreen({ navigation, route }) {
  const [symbol, setSymbol] = useState(route?.params?.symbol || "BTC");
  const address = ADDRESSES[symbol] || ADDRESSES.BTC;

  const handleCopy = () => {
    Alert.alert("Copied", "Address copied to clipboard.");
  };

  const handleShare = () => {
    Share.share({ message: address }).catch(() => {});
  };

  return (
    <Screen>
      <Header title="" />
      <Text className="text-h3 text-midnight text-center mb-6">Deposit Coins</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-8"
        contentContainerStyle={{ gap: 10 }}
      >
        {mockAssets.map((a) => {
          const active = a.symbol === symbol;
          return (
            <Pressable
              key={a.symbol}
              onPress={() => setSymbol(a.symbol)}
              className={`flex-row items-center px-4 py-2.5 rounded-full ${
                active ? "bg-white border border-primary" : "bg-white border border-border"
              }`}
            >
              <CoinIcon symbol={a.symbol} size={22} />
              <Text className={`ml-2 text-link ${active ? "text-midnight" : "text-gray"}`}>
                {a.symbol}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View className="items-center">
        <View className="bg-white p-4 rounded-2xl border border-border mb-6">
          <QRCode value={address} size={200} color="#0D1F3C" backgroundColor="#FFFFFF" />
        </View>

        <Text className="text-paragraph text-midnight text-center px-4 mb-8">{address}</Text>

        <View className="flex-row items-center" style={{ gap: 24 }}>
          <Pressable onPress={handleCopy} className="flex-row items-center">
            <Feather name="copy" size={18} color="#347AF0" />
            <Text className="text-link text-primary ml-2">Copy</Text>
          </Pressable>
          <View className="w-px h-5 bg-border" />
          <Pressable onPress={handleShare} className="flex-row items-center">
            <Feather name="share" size={18} color="#347AF0" />
            <Text className="text-link text-primary ml-2">Share</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}
