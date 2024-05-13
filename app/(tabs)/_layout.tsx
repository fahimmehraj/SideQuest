import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React from "react";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: Colors[colorScheme ?? "light"].background },
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="compass" size={28} color={color} style={{ marginBottom: -3 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Ionicons name="search" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(account)"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          title: "Store",
          tabBarIcon: ({ color }) => <Ionicons name="cart" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
