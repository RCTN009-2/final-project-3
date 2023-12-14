import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { useSelector } from "react-redux";
import React from "react";
import Back from "../components/Back";
import CardSmall from "../components/CardSmall";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigate = useNavigation();
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const bookData = useSelector((state) => state.booking.data);
  const wishlist = useSelector((state) => state.wish.data);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  const namaLengkap = `${profileData.name}`;
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Back onPress={() => navigate.goBack()}>Profile</Back>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 8,
        }}
      >
        <Image
          source={require("../assets/img/profile.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
          resizeMode="cover"
        />
        <View style={{ marginLeft: 16 }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#1E3A8A",
              fontSize: 18,
              marginBottom: 2,
            }}
          >
            {namaLengkap}
          </Text>
          <Text style={{ fontSize: 12, color: "#718096" }}>
            {profileData.email}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 16,
          borderWidth: 2,
          borderColor: "#718096",
          borderRadius: 8,
          marginBottom: 6,
        }}
      >
        <View style={{ alignItems: "center", flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 2 }}>Bookings</Text>
          <Text style={{ fontSize: 12, color: "#718096" }}>
            {bookData.length}
          </Text>
        </View>
        <View style={{ alignItems: "center", flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 2 }}>Reviews</Text>
          <Text style={{ fontSize: 12, color: "#718096" }}>27</Text>
        </View>
        <View style={{ alignItems: "center", flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 2 }}>Favorites</Text>
          <Text style={{ fontSize: 12, color: "#718096" }}>
            {wishlist.length}
          </Text>
        </View>
      </View>

      <ScrollView>
        {bookData &&
          bookData.map((item) => <Pressable key={item.id} item={item} />)}
      </ScrollView>
    </View>
  );
};

export default Profile;
