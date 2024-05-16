import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useColorScheme, Text } from "react-native";
import { Redirect, Stack } from "expo-router";
import "react-native-reanimated";
import { ClerkProvider } from "@clerk/clerk-expo";
import RootComponent from "../components/RootComponent";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(onboard)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "ProximaNova-Regular": require("../assets/fonts/ProximaNova-Regular.otf"),
    "ProximaNova-Black": require("../assets/fonts/ProximaNova-Black.otf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const clerk_key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!clerk_key) {
    return <Text style={{ color: "red" }}>No clerk key for auth</Text>;
  }

  return (
    <>
      <ClerkProvider publishableKey={clerk_key}>
        <RootComponent />
      </ClerkProvider>
    </>
  );
}
