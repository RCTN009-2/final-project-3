import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Hotel() {
  const [hotels, sethotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://hotels4.p.rapidapi.com/v2/get-meta-data",
        headers: {
          "X-RapidAPI-Key":
            "3a746368a1mshfacaae32f858a18p1b686ajsn824229774faf",
          "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        sethotels(response.data); // Assuming response.data is an array of hotels
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Hotel</Text>
      {/* Use the products state here to display hotel information */}
    </View>
  );
}

const styles = StyleSheet.create({});
