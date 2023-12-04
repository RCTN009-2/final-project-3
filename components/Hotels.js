import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import data from "../assets/data/data";

export default function Hotels(props) {
  const data = props.hotels;
  return (
    <View style={styles.container}>
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
        {data.type}. {data.title}
      </Text>

      {/* Price */}
      <Text style={styles.price}>${data.newPrice}</Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>${data.totalPrice} Total</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
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
  totalPrice: {
    color: "grey",
    textDecorationLine: "underline",
  },
});
