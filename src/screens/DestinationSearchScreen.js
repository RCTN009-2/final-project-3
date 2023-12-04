import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import searchResult from "../assets/data/search";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DestinationSearchScreen() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState();

  return (
    <View style={styles.container}>
      {/* input components */}
      <TextInput
        style={styles.textInput}
        placeholder="where you want to go?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destination */}
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate("Guest")}
          >
            <View style={styles.icon}>
              <FontAwesome name="map-marker" size={22} color="black" />
            </View>
            <Text style={styles.location}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  icon: {
    backgroundColor: "#e7e7e7",
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
    marginBottom: 3,
  },
  locationText: {},
});
