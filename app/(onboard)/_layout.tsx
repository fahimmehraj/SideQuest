import React from "react";
import { Text } from "../../components/Themed";
import { SafeAreaView, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { primaryColor } from "../../constants/Colors";
import { Slot, Stack } from "expo-router";

export default function OnboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Image
          style={styles.image}
          source={require("../../assets/images/brand/logo.png")}
          resizeMode="cover"
          resizeMethod="scale"
        />
        {/* <View style={{ alignSelf: "stretch"}}>
          <TouchableOpacity style={styles.btn}>
        <Text style={{ fontSize: 24, textAlign: "center" }}>Start Questing</Text>
          </TouchableOpacity>
        </View> */}
        <Slot />
      </View>
    </SafeAreaView>
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
    alignItems: "center"
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
  }
});
