import { useAuth } from "@clerk/clerk-expo";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Redirect, Stack } from "expo-router";
import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { trpc } from "../utils/trpc";
import { httpBatchLink } from "@trpc/client";

export default function RootComponent() {
  const colorScheme = useColorScheme();
  const { isSignedIn, getToken } = useAuth();
  console.log("signed in: ", isSignedIn)
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'https://glorious-man-humorous.ngrok-free.app/trpc',
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              authorization: await getToken() ?? "",
            };
          },
        }),
      ],
    }),
  );

  return (
    <>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(onboard)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
      {!isSignedIn ? <Redirect href="/(onboard)" /> : <Redirect href="/(home)" />}
    </>
  );
}
