import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import searchResult from "../assets/data/search";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DestinationSearchScreen() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState();
  const [filteredData, setFilteredData] = useState();

  const handleSearch = (text) => {
    setInputText(text);

    // Filtering search results based on input text
    const filtered = searchResult.filter((item) =>
      item.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderDestinationItem = ({ item }) => (
    <Pressable style={styles.row} onPress={() => navigation.navigate("Guest")}>
      <View style={styles.icon}>
        <FontAwesome name="map-marker" size={22} color="black" />
      </View>
      <Text style={styles.location}>{item.description}</Text>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      {/* input components */}

      <TextInput
        style={styles.textInput}
        placeholder="where you want to go?"
        value={inputText}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredData}
        renderItem={renderDestinationItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
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
