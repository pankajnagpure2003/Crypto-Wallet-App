import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen";
import CheckEmailScreen from "../screens/Auth/CheckEmailScreen";
import NewPasswordScreen from "../screens/Auth/NewPasswordScreen";
import CreatePinScreen from "../screens/Auth/CreatePinScreen";
import ConfirmPinScreen from "../screens/Auth/ConfirmPinScreen";

const Stack = createNativeStackNavigator();

/**
 * Pre-authentication flow: onboarding carousel -> welcome -> login/signup
 * -> PIN setup. Rendered by RootNavigator while isAuthenticated is false.
 */
export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="CheckEmail" component={CheckEmailScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="CreatePin" component={CreatePinScreen} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPinScreen} />
    </Stack.Navigator>
  );
}
