import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GuestScreen() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();
  return (
    <View style={{ justifyContent: "space-between", height: "100%" }}>
      <View>
        <View style={styles.row}>
          <View>
            {/* Titles */}
            <Text style={{ fontWeight: "bold" }}>Adults</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
          </View>
          {/* buttons */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "lightgrey" }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "lightgrey" }}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Children */}
        <View style={styles.row}>
          <View>
            {/* Titles */}
            <Text style={{ fontWeight: "bold" }}>Children</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
          </View>
          {/* buttons */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "lightgrey" }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {children}
            </Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "lightgrey" }}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Infants */}
        <View style={styles.row}>
          <View>
            {/* Titles */}
            <Text style={{ fontWeight: "bold" }}>Infants</Text>
            <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
          </View>
          {/* buttons */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "lightgrey" }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {infants}
            </Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "lightgrey" }}>+</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate()}
            style={{
              marginBottom: 20,
              backgroundColor: "skyblue",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              marginHorizontal: 20,
              borderRadius: 10,
            }}
          >
            <Text>Search</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    marginHorizontal: 20,
  },
});
