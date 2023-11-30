import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather, Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";

const Header = () => {
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const searchPlaces = (place) => {
    if (!route.params || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    if (route.params && selectedDates) {
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place,
      });
    }
  };

  return (
    <View>
      <View>
        <View style={styles.search}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            style={{ color: "black", fontSize: 16 }}
            placeholder=" Where you want to go?"
          />
        </View>

        {/* Selected Dates */}
        <View style={styles.search}>
          <Feather name="calendar" size={24} color="black" />
          <DatePicker
            style={styles.inputDate}
            selectedBgColor="skyblue"
            onConfirm={(startDate, endDate) =>
              setSelectedDates({ startDate, endDate })
            }
            allowFontScaling={true}
            placeholder={"Select Your Dates"}
            mode={"range"}
          />
        </View>

        {/* Rooms and Guests */}
        <View
          style={styles.search}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Ionicons name="person-outline" size={24} color="black" />
          <TextInput
            placeholderTextColor="red"
            placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
          />
        </View>

        {/* Search Button */}
        <View
          onPress={() => searchPlaces(route?.params.input)}
          style={styles.buttonSearch}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "white",
            }}
          >
            Search
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  search: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 16,
    marginTop: 10,
    width: 300,
    padding: 6,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  inputDate: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    borderWidth: 0,
    color: "black",
    fontSize: 15,
    alignItems: "flex-start",
    headerStyle: {
      backgroundColor: "#003580",
    },
    contentText: {
      fontSize: 15,
      color: "black",
    },
  },
  inputRoom: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    color: "black",
    fontSize: 16,
    borderWidth: 0,
  },
  buttonSearch: {
    marginTop: 10,
    height: 40,
    padding: 10,
    backgroundColor: "skyblue",
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    justifyContent: "center",
    borderRadius: 50,
  },
});
