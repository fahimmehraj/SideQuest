import React from "react";
import { Text } from "../../components/Themed";
import { SafeAreaView, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { primaryColor } from "../../constants/Colors";
import { Slot, router } from "expo-router";

export default function CallToAction() {
  return (
    <View style={{ alignSelf: "stretch" }}>
      <TouchableOpacity style={styles.btn} onPress={() => router.navigate("/register")}>
        <Text style={{ fontSize: 24, textAlign: "center" }}>Start Questing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#170124",
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    height: 250,
    marginBottom: 300,
    width: "100%",
    borderRadius: 16,
  },
  btn: {
    backgroundColor: primaryColor,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: "center",
  },
});
