import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../components/layout/Screen";
import Header from "../../components/layout/Header";
import TransactionListItem from "../../components/wallet/TransactionListItem";
import { mockTransactions } from "../../data/mockData";

export default function AllTransactionsScreen() {
  const navigation = useNavigation();

  return (
    <Screen>
      <Header title="All Transactions" />
      <FlatList
        data={mockTransactions}
        keyExtractor={(t) => t.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TransactionListItem tx={item} onPress={() => navigation.navigate("TransactionDetails", { tx: item })} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </Screen>
  );
}
