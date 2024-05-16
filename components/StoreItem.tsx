import React from "react";
import { Text } from "./Themed";
import { TouchableOpacity, View, StyleSheet } from "react-native";

export default function StoreItem({ title }: { title: string }) {
  const backgroundColor = "rgba(255, 255, 255, 0.1)";

  return (
        <TouchableOpacity>
        <View style={[styles.card, { backgroundColor}]}>
        <Text style={styles.title}>{title}</Text>
        </View>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
  },
});
