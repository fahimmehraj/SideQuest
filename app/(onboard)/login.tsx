import React from "react";
import { Text } from "../../components/Themed";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Elevated from "../../components/Elevated";
import { router } from "expo-router";
import { primaryColor } from "../../constants/Colors";

export default function Login() {
  return (
    <View style={{ marginTop: -256 }}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, marginLeft: 6 }}>Log in</Text>
      </View>
      <View>
        <Text style={{ fontSize: 16 }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          keyboardType="email-address"
          placeholderTextColor="#fff"
        />
        <Text style={{ fontSize: 16 }}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Choose a secure password"
          keyboardType="default"
          placeholderTextColor="#fff"
          textContentType="password"
        />
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity onPress={() => router.navigate("/register")}>
          <Text style={{ fontSize: 15, color: primaryColor }}>Don't have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => router.navigate("/(tabs)")}>
            <Text style={{ fontSize: 18, textAlign: "center" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  input: {
    color: "#fff",
    height: 60,
    width: 340,
    borderWidth: 1,
    padding: 12,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 10,
    backgroundColor: "#2b1c36",
    fontSize: 18,
    fontFamily: "ProximaNova-Regular",
  },
  btn: {
    alignSelf: "flex-end",
    backgroundColor: primaryColor,
    paddingHorizontal: 28,
    paddingVertical: 12,
    marginVertical: 8,
    borderRadius: 16,
    alignItems: "center",
  },
});
