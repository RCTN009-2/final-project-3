import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Back from "../components/Back";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { bookAdded } from "../redux/bookingSlice";

const Booking = ({ route }) => {
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  const searchData = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const addBooking = () => {
    const newObject = { ...route.params.item, ...searchData };
    dispatch(bookAdded(newObject));
    navigate.navigate("Profile");
  };
  const navigate = useNavigation();

  return (
    <View>
      <Back onPress={() => navigate.goBack()}>Book Your Hotel</Back>
      <View style={styles.container}>
        <View className="mb-6">
          <Text className="text-xs mb-2">Name</Text>
          <TextInput
            editable={false}
            className=" text-slate-500 mb-4 border-b border-slate-200 py-2"
          >
            {profileData.name}
          </TextInput>
          <Text className="text-xs">Email</Text>
          <TextInput
            editable={false}
            className=" text-slate-500 mb-4 border-b border-slate-200 py-2"
          >
            {profileData.email}
          </TextInput>
          <Text className="text-xs">No Handphone</Text>
          <TextInput
            editable={false}
            className=" text-slate-500 mb-4 border-b border-slate-200 py-2"
          >
            {profileData.noHp}
          </TextInput>
        </View>
        <View className="mb-6">
          <Text className="text-xs mb-2">Detail Book</Text>
          <TextInput
            editable={false}
            className=" text-slate-500 mb-4 border-b border-slate-200 py-2"
          >
            1 Days, {route.params.bed} Bedrooms{" "}
            {/* {parseInt(searchData.adults)} Guest */}
          </TextInput>
          <Text className="text-xs">Total</Text>
          <TextInput
            editable={false}
            className=" text-slate-500 mb-4 border-b border-slate-200 py-2"
          >
            Rp {route.params.price}
          </TextInput>
        </View>
      </View>
      <Pressable onPress={() => addBooking()} style={styles.button}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Checkout
        </Text>
      </Pressable>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  button: {
    marginHorizontal: 20,
    backgroundColor: "skyblue",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
