import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import { bgHeader } from "../assets/img";
import Hotels from "../components/Hotels";
import data from "../assets/data/data";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <ImageBackground source={bgHeader} style={styles.image}>
          {/* search bar */}
          <Pressable
            style={styles.search}
            onPress={() => navigation.navigate("Destination Search")}
          >
            <AntDesign name="search1" size={22} color="red" />
            <Text style={styles.buttonText}>Where you want to go?</Text>
          </Pressable>

          {/* title */}
          <Text style={styles.title}>Go Near</Text>

          {/* button */}
          <Pressable style={styles.button} onPress={() => console.warn(data)}>
            <Text style={styles.buttonText}>Explore Nearby Stays</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    marginTop: 40,
    width: "85%",
    padding: 15,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
    top: 10,
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContents: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25,
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    width: 200,
    marginTop: 25,
    marginLeft: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
