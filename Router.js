import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  createStackNavigator,
} from "@react-navigation/native-stack";
import DestinationSearchScreen from "./src/screens/DestinationSearchScreen";
import GuestsScreen from "./src/screens/GuestScreen";
import LoginForm from "./src/screens/loginForm";
import { Provider } from "react-redux";
import HomeTabNavigator from "./HomeTabNavigator";
import { store } from "./src/app/store";
import { useDispatch } from "react-redux";
import Hotels from "./src/components/Hotels";
import DetailHotels from "./src/components/DetailHotels";
import HotelsDetailScreen from "./src/screens/HotelsDetailScreen";
import WishlistScreen from "./src/screens/WishlistScreen";
import Booking from "./src/screens/Booking";

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={"Login"}
            component={LoginForm}
            options={{
              headerShown: false,
            }}
          />
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
            name={"Wishlist"}
            component={WishlistScreen}
            options={{
              title: "Your Wishlist",
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
              headerShown: true,
            }}
          />
          <Stack.Screen
            name={"Booking"}
            component={Booking}
            options={{
              title: "Booking",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
