import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./MainTabs";
import SideMenu from "../screens/SideMenu/SideMenu";

const Drawer = createDrawerNavigator();

/**
 * Wraps the bottom-tab shell with the slide-out Side Menu
 * (mirrors "Side Menu/*" screens, opened via the hamburger icon).
 */
export default function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: "82%" } }}
      drawerContent={(props) => <SideMenu {...props} />}
    >
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
}
