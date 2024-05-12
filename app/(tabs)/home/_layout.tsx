import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, View, Text } from "../../../components/Themed";
import { TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={{ marginTop: 50, marginBottom: 12}}>
      <TouchableOpacity onPress={() => console.log("pressed")}><Text>Back</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

export default function HomeNavigator() {
  return (
    <Stack screenOptions={{ headerTitle: "", headerStyle: {backgroundColor: 'transparent'} }}>
      <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
