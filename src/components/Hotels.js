import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import data from "../assets/data/data";

export default function Hotels(props) {
  const data = props.hotels;

  const navigation = useNavigation();
  const goToDetailHotels = () => {
    navigation.navigate("HotelsDetail", data);
    console.log(data);
  };

  return (
    <Pressable onPress={goToDetailHotels} style={styles.container}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: data.image,
        }}
      />
      {/* bed & bedroom */}
      <Text style={styles.bedroom}>
        {data.bed} bed {data.bedroom} bedroom
      </Text>

      {/* Type & description */}
      <Text style={styles.description} numberOfLines={2}>
        {data.title}
      </Text>

      {/* Price */}
      <Text style={styles.price}>Rp {data.price}</Text>

      {/* Total Price */}
      <Text style={styles.type}>{data.type}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 30,
    borderRadius: 15,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    color: "grey",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  type: {
    color: "grey",
    textDecorationLine: "underline",
  },
});
