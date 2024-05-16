import React from "react";
import { ActivityIndicator, FlatList, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, SafeAreaView, Title } from "../../../components/Themed";
import EditScreenInfo from "../../../components/EditScreenInfo";
import EXPBar from "../../../components/EXPBar";
import BasicQuestCard from "../../../components/BasicQuestCard";
import Elevated from "../../../components/Elevated";
import { primaryColor } from "../../../constants/Colors";
import { useAuth } from "@clerk/clerk-expo";
import { trpc } from "../../../utils/trpc";

const sample_data_2 = [
  {
    title: "TA for Intro to CS at CCNY",
    price: "$21.99",
    distance: 0.1,
    location: "Brooklyn, NY",
  },
  {
    title: "Walk some dogs",
    price: "$14.99",
    distance: 0.3,
    location: "Queens, NY",
  },
];

export default function AccountScreen() {
  const { isLoaded, signOut, userId } = useAuth();
  const hostedQuestsListQuery = trpc.hostedQuestsList.useQuery(userId!);
  const workedQuestsListQuery = trpc.workedQuestsList.useQuery(userId!);

  if (workedQuestsListQuery.status != 'success' || hostedQuestsListQuery.status != 'success') {
    return <ActivityIndicator size="large" color={primaryColor} />;
  }

  const acceptedQuests = workedQuestsListQuery.data;
  const hostedQuests = hostedQuestsListQuery.data; 

  const onPressSignOut = () => {
    if (!isLoaded) {
      return;
    }
    return signOut()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.signOutBtn} onPress={() => onPressSignOut()}>
          <Text style={{ fontSize: 16, color: primaryColor }}>Sign Out</Text>
        </TouchableOpacity>
        <ScrollView>
          <Title style={{ marginTop: 0 }}>Account</Title>
          <View style={styles.balanceContainer}>
            <Text style={{ fontSize: 18 }}>Total Balance</Text>
            <Text style={{ fontSize: 48, fontFamily: "monospace", fontWeight: "bold" }}>$10,000</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity>
                <Elevated style={styles.button}>
                  <Text style={{ fontSize: 16 }}>Add Cash</Text>
                </Elevated>
              </TouchableOpacity>
              <TouchableOpacity>
                <Elevated style={styles.button}>
                  <Text style={{ fontSize: 16 }}>Cash Out</Text>
                </Elevated>
              </TouchableOpacity>
            </View>
          </View>
          <EXPBar />
          <View style={styles.barDetails}>
            <Text style={{ fontSize: 28 }}>Lvl 3</Text>
            <Text style={{ fontSize: 20 }}>280/400</Text>
          </View>
          <Text style={styles.subheading}>Your accepted quests</Text>
          <FlatList
            data={acceptedQuests}
            scrollEnabled={false}
        renderItem={(quest) => (
          <BasicQuestCard
            id={quest.item.id}
            distance={0.1}
            location={quest.item.location}
            price={`\$${quest.item.pay}`}
            title={quest.item.name}
          />
        )}
            contentContainerStyle={{}}
          />
          <Text style={styles.subheading}>Your created quests</Text>
          <FlatList
            data={hostedQuests}
            scrollEnabled={false}
        renderItem={(quest) => (
          <BasicQuestCard
            id={quest.item.id}
            distance={0.1}
            location={quest.item.location}
            price={`\$${quest.item.pay}`}
            title={quest.item.name}
          />
        )}
            contentContainerStyle={{}}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  signOutBtn: {
    marginTop: 8,
    alignSelf: "flex-end",
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
