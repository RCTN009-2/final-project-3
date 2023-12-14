import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Hotels from "../components/Hotels";
import hotelsData from "../assets/data/data";
import DetailHotels from "../components/DetailHotels";
import { useRoute } from "@react-navigation/native";

export default function HotelsDetailScreen() {
  const route = useRoute();
  const data = route.params;

  return (
    <View style={{ backgroundColor: "white" }}>
      <DetailHotels hotels={data} />
    </View>
  );
}

const styles = StyleSheet.create({});
