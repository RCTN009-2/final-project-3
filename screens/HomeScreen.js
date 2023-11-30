import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../components/Header";
import Hotel from "../components/Hotel";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Hoteloka",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "Bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "skyblue",
        height: 100,
      },
      headerRight: () => {
        <FontAwesome
          name="map-o"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />;
      },
    });
  }, []);

  return (
    <View>
      <Header />
      <Hotel />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
