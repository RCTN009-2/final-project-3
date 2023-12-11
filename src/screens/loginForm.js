import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../redux/accSlice";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigate = useNavigation();
  const isLogin = useSelector((state) => state.acc.isLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginClick = () => {
    dispatch(checkLogin({ email, password }));
  };

  useEffect(() => {
    if (isLogin) {
      navigate.navigate("Home");
    }
  }, [isLogin]);

  return (
    <ScrollView>
      <StatusBar />
      <View style={{ alignItems: "center", marginBottom: 8 }}>
        <Image
          source={require("../assets/icons/logo_icon.png")}
          style={{ width: 80, height: 60, marginTop: 48, marginBottom: 6 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: "#1F1E2E",
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          Log in
        </Text>
        <Text style={{ fontWeight: "100", color: "#657797", fontSize: 12 }}>
          Welcome back!
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          borderWidth: 2,
          borderColor: "#1F1E2E",
          borderRadius: 20,
          padding: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Text style={{ color: "#1F1E2E", fontSize: 12, marginBottom: 5 }}>
          Email
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#1F1E2E",
            marginBottom: 12,
          }}
        >
          <Image
            source={require("../assets/icons/user.png")}
            style={{ width: 20, height: 20, marginTop: 5, marginRight: 5 }}
          />
          <TextInput
            autoCompleteType="email"
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Email"
            style={{ marginTop: 6, flex: 1 }}
          />
        </View>
        <Text style={{ color: "#1F1E2E", fontSize: 12, marginBottom: 5 }}>
          Password
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#1F1E2E",
            marginBottom: 12,
          }}
        >
          <Image
            source={require("../assets/icons/key.png")}
            style={{ width: 20, height: 20, marginTop: 5, marginRight: 5 }}
          />
          <TextInput
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCorrect={false}
            value={password}
            placeholder="Enter Password"
            style={{ marginTop: 6, flex: 1 }}
          />
        </View>
        <TouchableOpacity onPress={loginClick}>
          <View
            style={{
              backgroundColor: "#6E6BE8",
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
