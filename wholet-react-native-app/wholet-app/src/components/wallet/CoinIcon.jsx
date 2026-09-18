import React from "react";
import { View, Text } from "react-native";
import { getCoin } from "../../theme/coins";

/**
 * Coin badge - colored circle + letter, standing in for the kit's
 * per-coin iconography (icon/coin/*.png) without redistributing
 * third-party cryptocurrency logo artwork.
 */
export default function CoinIcon({ symbol, size = 40 }) {
  const coin = getCoin(symbol);
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: coin.color,
      }}
      className="items-center justify-center"
    >
      <Text style={{ fontSize: size * 0.4 }} className="text-white font-bold">
        {coin.letter}
      </Text>
    </View>
  );
}
