import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResultScreen from "./src/screens/SearchResultScreen";
import Wishlist from "./src/screens/WishlistScreen";
import TopDestinations from "./src/components/TopDestination";

export default function SearchResultTabNavigator() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "skyblue",
      }}
    >
      <Tab.Screen name={"List"} component={SearchResultScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
