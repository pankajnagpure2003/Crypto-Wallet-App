import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppDrawer from "./AppDrawer";

import EnterPinScreen from "../screens/Auth/EnterPinScreen";
import KycIntroScreen from "../screens/KYC/KycIntroScreen";
import KycDocumentScreen from "../screens/KYC/KycDocumentScreen";
import AssetDetailScreen from "../screens/Wallet/AssetDetailScreen";
import AllAssetsScreen from "../screens/Wallet/AllAssetsScreen";
import AllTransactionsScreen from "../screens/Wallet/AllTransactionsScreen";
import TransactionDetailsScreen from "../screens/Transaction/TransactionDetailsScreen";
import DepositScreen from "../screens/Deposit/DepositScreen";
import WithdrawAmountScreen from "../screens/Withdraw/WithdrawAmountScreen";
import WithdrawConfirmScreen from "../screens/Withdraw/WithdrawConfirmScreen";
import WithdrawSuccessScreen from "../screens/Withdraw/WithdrawSuccessScreen";
import SendAmountScreen from "../screens/Send/SendAmountScreen";
import SendMessageScreen from "../screens/Send/SendMessageScreen";
import SendSuccessScreen from "../screens/Send/SendSuccessScreen";
import ExchangeScreen from "../screens/Exchange/ExchangeScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import PersonalInformationScreen from "../screens/Profile/PersonalInformationScreen";
import PhoneVerificationScreen from "../screens/Profile/PhoneVerificationScreen";

const Stack = createNativeStackNavigator();

/**
 * Post-authentication flow: the drawer + tab shell as the root screen,
 * with every secondary flow (KYC, deposit, withdraw, send, exchange,
 * transaction details, profile) pushed on top as stack screens so they
 * get native slide/back-swipe behavior from anywhere in the app.
 */
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AppDrawer} />
      <Stack.Screen name="EnterPin" component={EnterPinScreen} />

      <Stack.Screen name="KycIntro" component={KycIntroScreen} />
      <Stack.Screen name="KycDocument" component={KycDocumentScreen} />

      <Stack.Screen name="AssetDetail" component={AssetDetailScreen} />
      <Stack.Screen name="AllAssets" component={AllAssetsScreen} />
      <Stack.Screen name="AllTransactions" component={AllTransactionsScreen} />
      <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />

      <Stack.Screen name="Deposit" component={DepositScreen} options={{ presentation: "modal" }} />

      <Stack.Screen name="WithdrawAmount" component={WithdrawAmountScreen} />
      <Stack.Screen name="WithdrawConfirm" component={WithdrawConfirmScreen} />
      <Stack.Screen name="WithdrawSuccess" component={WithdrawSuccessScreen} />

      <Stack.Screen name="SendAmount" component={SendAmountScreen} />
      <Stack.Screen name="SendMessage" component={SendMessageScreen} />
      <Stack.Screen name="SendSuccess" component={SendSuccessScreen} />

      <Stack.Screen name="Exchange" component={ExchangeScreen} />

      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformationScreen} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
    </Stack.Navigator>
  );
}
