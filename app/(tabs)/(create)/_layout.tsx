import { Stack } from "expo-router";
import React from "react";

export default function HomeNavigator() {
  return (
    <Stack screenOptions={{ headerTitle: "", headerStyle: {backgroundColor: 'transparent'} }}>
      <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  );
}
