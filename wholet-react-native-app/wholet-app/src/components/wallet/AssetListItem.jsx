import React from "react";
import { View, Text, Pressable } from "react-native";
import CoinIcon from "./CoinIcon";
import { getCoin } from "../../theme/coins";

/**
 * Single row in the Assets list on the Wallet Overview screen.
 */
export default function AssetListItem({ asset, onPress }) {
  const coin = getCoin(asset.symbol);
  const positive = asset.changePct >= 0;

  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center py-3 border-b border-border active:opacity-70"
    >
      <CoinIcon symbol={asset.symbol} />
      <View className="flex-1 ml-3">
        <Text className="text-paragraph text-midnight font-semibold">
          {coin.name} ({asset.symbol})
        </Text>
        <Text className="text-fineprint text-gray mt-0.5">
          {asset.amount} {asset.symbol}
        </Text>
      </View>
      <View className="items-end">
        <Text className="text-paragraph text-midnight font-semibold">
          ${asset.valueUsd}
        </Text>
        <Text className={`text-fineprint mt-0.5 ${positive ? "text-success" : "text-danger"}`}>
          {positive ? "+" : ""}
          {asset.changePct}%
        </Text>
      </View>
    </Pressable>
  );
}
