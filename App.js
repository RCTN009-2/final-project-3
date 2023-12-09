import { StyleSheet, Text, View } from "react-native";

import Router from "./Router";

export default function App() {
  return <Router />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "5px",
  },
});
