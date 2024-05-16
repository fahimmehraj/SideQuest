import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { SafeAreaView, Title, View } from "../../components/Themed";
import StoreItem from "../../components/StoreItem";

export default function StorePage() {
  return <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
    <Title>Store</Title>
    <StoreItem title="Redeem meal plan voucher" />
    <StoreItem title="Redeem course credit" />
    <StoreItem title="Redeem meal plan voucher" />
    <StoreItem title="Redeem course credit" />
    <StoreItem title="Redeem meal plan voucher" />
    <StoreItem title="Redeem course credit" />
    </View>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
