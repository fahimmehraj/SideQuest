import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { SafeAreaView, Title, View } from "../../components/Themed";

export default function StorePage() {
  return <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
    <Title>Store</Title>
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
