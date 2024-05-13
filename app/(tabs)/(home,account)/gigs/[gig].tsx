import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme, Image, ScrollView } from "react-native";
import { SafeAreaView, Title, Text, View } from "../../../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import Elevated from "../../../../components/Elevated";
import { primaryColor } from "../../../../constants/Colors";
import { router } from "expo-router";

export default function QuestScreen() {
  const theme = useColorScheme() ?? "light";
  const textColor = theme == "light" ? "rgba(0, 0, 0, 0.55)" : "rgba(255, 255, 255, 0.6)";
  const backgroundColor = theme == "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.1)";

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.h2}>Quest Info</Title>
        <Text style={styles.subheading}>Small Package Delivery</Text>
        <Image
          style={styles.image}
          source={require("../../../../assets/images/mowing-lawn.jpg")}
          resizeMode="cover"
          resizeMethod="scale"
        />
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location-sharp" size={18} color={textColor} />
          <Text
            style={{ fontSize: 18, marginLeft: 8 }}
            darkColor="rgba(255, 255, 255, 0.6)"
            lightColor="rgba(0, 0, 0, 0.55)">
            Queens, NY
          </Text>
        </View>
          <Text
            style={{ fontSize: 18, marginLeft: 8 }}
            darkColor="rgba(255, 255, 255, 0.6)"
            lightColor="rgba(0, 0, 0, 0.55)">
            Level Required: <Text style={{ color: "#5fe497" }}>2</Text>
          </Text>
        </View>
        <Text style={styles.h4}>Description</Text>
        <Text>
          Got a knack for zipping around town and making deliveries? We've got a quick gig that might be right up your
          alley! We're in need of a Package Delivery Specialist for a one-time deal. We're all about getting stuff done,
          and that's where you come in.
        </Text>
        <Text style={{ marginVertical: 16 }}>
          You don't need a ton of experience for this gig—just a valid driver's license, a clean driving record, and the
          ability to lift and carry packages without breaking a sweat. Oh, and a friendly attitude wouldn't hurt either.
          You'll be making a quick stop at our place to pick up the packages, then hitting the road to spread some
          delivery joy.
        </Text>
      </ScrollView>
        <TouchableOpacity onPress={() => router.back()}>
          <Elevated style={styles.button}>
            <Text style={{ fontSize: 20 }}>Apply</Text>
            <Text style={{ fontSize: 20 }}>$9.99</Text>
          </Elevated>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
    margin: 8,
    backgroundColor: primaryColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h2: {
    fontSize: 48,
    marginTop: -4,
  },
  subheading: {
    fontSize: 26,
    marginTop: -20,
  },
  h4: {
    fontSize: 22,
    marginVertical: 16,
  },
  image: {
    height: 250,
    marginVertical: 14,
    width: "100%",
    borderRadius: 16,
  },
});
