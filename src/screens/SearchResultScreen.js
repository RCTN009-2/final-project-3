import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Hotels from "../components/Hotels";
import data from "../assets/data/data";

export default function SearchResultScreen(props) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Hotels hotels={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
