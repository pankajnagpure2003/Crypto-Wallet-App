import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "./BottomTabBar";

import AllTransactionsScreen from "../screens/Wallet/AllTransactionsScreen";
import WalletOverviewScreen from "../screens/Wallet/WalletOverviewScreen";
import AllAssetsScreen from "../screens/Wallet/AllAssetsScreen";

const Tab = createBottomTabNavigator();

/**
 * Bottom tab shell shown once the user is authenticated. Wallet is the
 * home/center tab; Transactions and Portfolio are quick-access shortcuts.
 */
export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="Transactions" component={AllTransactionsScreen} />
      <Tab.Screen name="Wallet" component={WalletOverviewScreen} />
      <Tab.Screen name="Portfolio" component={AllAssetsScreen} />
    </Tab.Navigator>
  );
}
