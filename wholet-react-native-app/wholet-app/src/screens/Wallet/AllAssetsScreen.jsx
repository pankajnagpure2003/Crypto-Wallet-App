import React from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import AssetListItem from "../../components/wallet/AssetListItem";
import { mockAssets } from "../../data/mockData";

export default function AllAssetsScreen() {
  const navigation = useNavigation();

  return (
    <Screen>
      <Header title="All Assets" />
      <FlatList
        data={mockAssets}
        keyExtractor={(a) => a.symbol}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AssetListItem asset={item} onPress={() => navigation.navigate("AssetDetail", { asset: item })} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </Screen>
  );
}
