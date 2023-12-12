import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import WishlistScreen from "./src/screens/WishlistScreen";
import Settings from "./src/screens/SettingsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ExploreNavigator from "./ExploreNavigator";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarLabel: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome name="search" size={24} color="black" />
            ) : (
              <AntDesign name="search1" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarLabel: "Wishlist",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="heart" size={24} color="black" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person-sharp" size={24} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome5 name="cog" size={24} color="black" />
            ) : (
              <MaterialIcons name="settings" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
