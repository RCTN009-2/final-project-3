import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TopDestinations({ destinationData }) {
  const navigation = useNavigation();

  // Mengurutkan data berdasarkan rank
  const sortedDestinations = destinationData
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 5);

  const goToDestinationDetail = (city) => {
    navigation.navigate("SearchResults", { city });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {sortedDestinations.map((destination) => (
        <Pressable
          key={destination.id}
          style={styles.destinationContainer}
          onPress={() => goToDestinationDetail(destination.city)}
        >
          <Image style={styles.image} source={{ uri: destination.image }} />
          <Text style={styles.destinationName}>{destination.destination}</Text>
          <Text style={styles.cityName}>{destination.city}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  destinationContainer: {
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    margin: 15,
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  destinationName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
    marginLeft: 20,
  },
  cityName: {
    fontSize: 18,
    color: "grey",
    marginLeft: 21,
    marginBottom: 10,
  },
});
