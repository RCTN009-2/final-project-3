import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  createStackNavigator,
} from "@react-navigation/native-stack";
import DestinationSearchScreen from "./src/screens/DestinationSearchScreen";
import GuestsScreen from "./src/screens/GuestScreen";

import HomeTabNavigator from "./HomeTabNavigator";
import Hotels from "./src/components/Hotels";
import DetailHotels from "./src/components/DetailHotels";
import HotelsDetailScreen from "./src/screens/HotelsDetailScreen";

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination",
          }}
        />

        <Stack.Screen
          name={"Guest"}
          component={GuestsScreen}
          options={{
            title: "How many people?",
          }}
        />

        <Stack.Screen
          name={"HotelsDetail"}
          component={HotelsDetailScreen}
          options={{
            title: "Hotel Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
