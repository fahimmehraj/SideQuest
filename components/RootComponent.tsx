import { useAuth } from "@clerk/clerk-expo";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Redirect, Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export default function RootComponent() {
  const colorScheme = useColorScheme();
  const { isSignedIn } = useAuth();
  console.log("signed in: ", isSignedIn)

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(onboard)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
      {!isSignedIn ? <Redirect href="/(onboard)" /> : <Redirect href="/(home)" />}
    </>
  );
}
