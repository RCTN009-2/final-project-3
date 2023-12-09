import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import hotelsData from "../assets/data/data";

export default function DetailHotels({ hotels }) {
  const [wishlist, setWishlist] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      const wishlistData = await AsyncStorage.getItem("wishlist");
      if (wishlistData !== null) {
        const parsedWishlist = JSON.parse(wishlistData);
        setWishlist(parsedWishlist);
        checkInWishlist(parsedWishlist);
      }
    } catch (error) {
      console.error("Error loading wishlist", error);
    }
  };

  const checkInWishlist = (wishlistData) => {
    const found = wishlistData.some((item) => item.id === hotels.id);
    setIsInWishlist(found);
  };

  const addToWishlist = async () => {
    try {
      const updatedWishlist = [...wishlist, hotels];
      await AsyncStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
      setIsInWishlist(true);
      alert("Hotel added to wishlist!");
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
  };

  const removeFromWishlist = async () => {
    try {
      const updatedWishlist = wishlist.filter((item) => item.id !== hotels.id);
      await AsyncStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
      setIsInWishlist(false);
      alert("Hotel removed from wishlist!");
    } catch (error) {
      console.error("Error removing from wishlist", error);
    }
  };

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist();
    } else {
      addToWishlist();
    }
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {/* image */}

          <Image
            style={styles.image}
            source={{
              uri: hotels?.image,
            }}
          />
          {/* bed & bedroom */}
          <Text style={styles.bedroom}>
            {hotels.bed} bed {hotels.bedroom} bedroom
          </Text>

          {/* Type & description */}
          <Text style={styles.description} numberOfLines={2}>
            {hotels.title}
          </Text>

          {/* Price */}
          <Text style={styles.price}>Rp {hotels.price}</Text>

          {/* Total Price */}
          <Text style={styles.type}>{hotels.type} </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Description</Text>
          <Text style={styles.longdescription}>{hotels.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.bookButton}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Book Now
          </Text>
        </Pressable>
        <Pressable style={styles.iconContainer}>
          <AntDesign
            name={isInWishlist ? "heart" : "hearto"}
            size={24}
            color="black"
            onPress={handleWishlistClick}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingBottom: 40,
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
  },
  type: {
    marginBottom: 10,
    color: "grey",
    textDecorationLine: "underline",
  },
  longdescription: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    marginTop: 5,
  },

  buttonContainer: {
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    flexDirection: "row", // Mengatur agar elemen sejajar secara horizontal
    alignItems: "center", // Mengatur agar elemen vertikal sejajar di tengah
    justifyContent: "space-between",
  },

  bookButton: {
    flex: 9,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
  iconContainer: {
    flex: 1,
    padding: 10,
  },
});
