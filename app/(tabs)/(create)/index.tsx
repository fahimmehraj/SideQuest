import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView, Title, View, Text } from "../../../components/Themed";
import { primaryColor } from "../../../constants/Colors";
import { trpc } from "../../../utils/trpc";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";

export default function CreateScreeen() {
  const { userId } = useAuth();
  const questCreator = trpc.questCreate.useMutation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pay, setPay] = useState("");
  const [experienceRequired, setExperienceRequired] = useState("1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = () => {
    const input = {
      name,
      description,
      pay,
      experienceRequired: +experienceRequired!,
      location: "Brooklyn, NY",
      phoneNumber,
      requesterId: userId!,
    };
    console.log(input)
    questCreator.mutate(input, { onError: (err) => console.log(err), onSuccess: (data) => router.navigate(`/(home)/gigs/${data.id}`) });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <Title style={styles.h2}>Create Quest</Title>
          <View>
            <View>
              <Text style={{ fontSize: 16 }}>Quest Title</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Transport Lab Materials"
                value={name}
                onChangeText={(e) => setName(e)}
                keyboardType="default"
                placeholderTextColor="#bfbfbf"
              />
            </View>
            <View>
              <Text style={{ fontSize: 16 }}>Quest Description</Text>
              <TextInput
                style={[styles.input, styles.description]}
                placeholder="I need your help to..."
                value={description}
                onChangeText={(e) => setDescription(e)}
                keyboardType="default"
                placeholderTextColor="#bfbfbf"
                multiline={true}
              />
            </View>
            <Text style={{ fontSize: 16 }}>Phone Number (for contact)</Text>
            <TextInput
              style={styles.input}
              placeholder="123-456-7890"
              value={phoneNumber}
              onChangeText={(e) => setPhoneNumber(e)}
              keyboardType="email-address"
              placeholderTextColor="#bfbfbf"
            />
            <Text style={{ fontSize: 16 }}>Pay Offer (in dollars)</Text>
            <TextInput
              style={styles.input}
              placeholder="9.99"
              value={pay}
              onChangeText={(e) => setPay(e)}
              keyboardType="numeric"
              placeholderTextColor="#bfbfbf"
            />
            <Text style={{ fontSize: 16 }}>Desired Experience</Text>
            <TextInput
              style={styles.input}
              placeholder="1"
              value={experienceRequired}
              onChangeText={(e) => setExperienceRequired(e)}
              keyboardType="numeric"
              placeholderTextColor="#bfbfbf"
            />
            <View style={{ alignSelf: "flex-end" }}>
              <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={{ fontSize: 18, textAlign: "center" }}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  h2: {
    fontSize: 52,
  },
  signOutBtn: {
    marginTop: 8,
    alignSelf: "flex-end",
  },
  balanceContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 15,
  },
  barDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonRow: {
    marginTop: 14,
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  subheading: {
    fontSize: 20,
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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    fontSize: 18,
    fontFamily: "ProximaNova-Regular",
  },
  description: {
    height: 400,
    textAlignVertical: "top",
    fontSize: 16,
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
