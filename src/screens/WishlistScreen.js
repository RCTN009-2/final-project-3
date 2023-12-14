import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Hotels from "../components/Hotels";
import Back from "../components/Back";
export default function WishlistScreen() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const existingWishlist = await AsyncStorage.getItem("wishlist");
        if (existingWishlist) {
          const parsedWishlist = JSON.parse(existingWishlist);
          setWishlist(parsedWishlist);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };
    fetchWishlist();
  }, [wishlist]);

  return (
    <View>
      <Back onPress={() => navigate.goBack()}>Wishlist</Back>
      <FlatList
        style={styles.container}
        data={wishlist}
        renderItem={({ item }) => <Hotels hotels={item} />}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
