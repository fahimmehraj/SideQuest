import React from "react";
import { FlatList, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, SafeAreaView, Title } from "../../components/Themed";
import EditScreenInfo from "../../components/EditScreenInfo";
import EXPBar from "../../components/EXPBar";
import BasicQuestCard from "../../components/BasicQuestCard";
import Elevated from "../../components/Elevated";

const sample_data_2 = [
  {
    title: "Deliver Small Package",
    price: "$9.99",
    distance: 0.1,
    location: "Queens, NY",
  },
  {
    title: "Play with special needs child",
    price: "$14.99",
    distance: 0.3,
    location: "Queens, NY",
  },
  {
    title: "Teach my son fractions",
    price: "$19.99",
    distance: 1.3,
    location: "Bronx, NY",
  },
];

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Title>Account</Title>
        <View style={styles.balanceContainer}>
          <Text style={{ fontSize: 18 }}>Total Balance</Text>
          <Text style={{ fontSize: 48, fontFamily: "monospace", fontWeight: "bold" }}>$10,000</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity>
              <Elevated style={styles.button}>
                <Text style={{fontSize: 16}}>Add Cash</Text>
              </Elevated>
            </TouchableOpacity>
            <TouchableOpacity>
              <Elevated style={styles.button}>
                <Text style={{fontSize: 16}}>Cash Out</Text>
              </Elevated>
            </TouchableOpacity>
          </View>
        </View>
        <EXPBar />
        <View style={styles.barDetails}>
          <Text style={{ fontSize: 28 }}>Lvl 3</Text>
          <Text style={{ fontSize: 20 }}>280/400</Text>
        </View>
        <Text style={styles.subheading}>Recent Gigs</Text>
        <FlatList
          data={sample_data_2}
          renderItem={(gig) => <BasicQuestCard {...gig.item} />}
          contentContainerStyle={{}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  balanceContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 15,
  },
  barDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonRow: {
    marginTop: 14,
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  subheading: {
    fontSize: 20,
  },
});
