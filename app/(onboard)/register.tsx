import React from "react";
import { Text } from "../../components/Themed";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { primaryColor } from "../../constants/Colors";

export default function Register() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [universityName, setUniversityName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={{ marginTop: -256 }}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, marginLeft: 6 }}>Register</Text>
      </View>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{ fontSize: 16 }}>First Name</Text>
            <TextInput
              style={[styles.input, styles.rowInput]}
              secureTextEntry={true}
              placeholder="First Name"
              value={firstName}
              onChangeText={(e) => setFirstName(e)}
              keyboardType="default"
              placeholderTextColor="#bfbfbf"
              textContentType="password"
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>Last Name</Text>
            <TextInput
              style={[styles.input, styles.rowInput]}
              secureTextEntry={true}
              placeholder="Last Name"
              value={lastName}
              onChangeText={(e) => setLastName(e)}
              keyboardType="default"
              placeholderTextColor="#bfbfbf"
              textContentType="password"
            />
          </View>
        </View>
        <Text style={{ fontSize: 16 }}>University Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Harvard University"
              value={universityName}
              onChangeText={(e) => setUniversityName(e)}
          keyboardType="email-address"
          placeholderTextColor="#bfbfbf"
        />
        <Text style={{ fontSize: 16 }}>University Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@harvard.edu"
              value={emailAddress}
              onChangeText={(e) => setEmailAddress(e)}
          keyboardType="email-address"
          placeholderTextColor="#bfbfbf"
        />
        <Text style={{ fontSize: 16 }}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Choose a secure password"
              value={password}
              onChangeText={(e) => setPassword(e)}
          keyboardType="default"
          placeholderTextColor="#bfbfbf"
          textContentType="password"
        />
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity onPress={() => router.navigate("/login")}>
            <Text style={{ fontSize: 15, color: primaryColor }}>Have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)")}>
            <Text style={{ fontSize: 18, textAlign: "center" }}>Register</Text>
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowInput: {
    width: 340/2 - 20,
    fontSize: 18,
  },
  input: {
    color: "#fff",
    height: 60,
    width: 340,
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
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
