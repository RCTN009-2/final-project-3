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
import data from "../assets/data/data";
import { useNavigation } from "@react-navigation/native";
import TopDestination from "../components/TopDestination";
import city from "../assets/data/search.json";
import destination from "../assets/data/destination.json";
import PopularDestinations from "../components/PopularDestination";

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
          <Text style={styles.title}>Find your perfect place to stay</Text>

          {/* button */}
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("SearchResults")}
          >
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </ImageBackground>
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            margin: 10,
          }}
        >
          Top Destination
        </Text>
        <TopDestination destinationData={city} />
      </View>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            margin: 10,
          }}
        >
          Popular Destination
        </Text>
        <PopularDestinations destinationData={destination} />
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
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    width: "80%",
    marginLeft: 25,
    marginTop: 80,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    width: 120,
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
