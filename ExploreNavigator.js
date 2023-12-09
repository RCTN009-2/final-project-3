import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SearchResultsScreen from "./src/screens/SearchResultScreen";
import SearchResultTabNavigator from "./SearchResultTabNavigator";

const Stack = createStackNavigator();

const ExploreNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={"SearchResults"}
        component={SearchResultTabNavigator}
        options={{
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
