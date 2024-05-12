import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { SafeAreaView, Title } from "../../components/Themed";

export default function StorePage() {
  return <SafeAreaView style={styles.container}>
    <Title>Store</Title>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
