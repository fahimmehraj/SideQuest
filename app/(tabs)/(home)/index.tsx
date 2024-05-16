import { ActivityIndicator, FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { SafeAreaView, Text, Title } from "../../../components/Themed";
import VisualQuestCard from "../../../components/VisualQuestCard";
import BasicQuestCard from "../../../components/BasicQuestCard";
import React from "react";
import Colors, { primaryColor } from "../../../constants/Colors";
import { trpc } from "../../../utils/trpc";

const sample_data = [
  {
    title: "Mow Lawn to Checkerboard Pattern",
    thumbnailUrl: require("../../../assets/images/mowing-lawn.jpg"),
    price: "$24.99",
  },
  {
    title: "Walk my Beautiful Dogs",
    thumbnailUrl: require("../../../assets/images/dog-leash.webp"),
    price: "$44.99",
  },
];

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

export default function TabOneScreen() {
  const questListQuery = trpc.questList.useQuery();

  if (questListQuery.status != "success") {
    return <ActivityIndicator size="large" color={primaryColor} />;
  }

  const questList = questListQuery.data;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <Title>Quests</Title>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.subheading}>For you</Text>
              <FlatList
                data={sample_data}
                renderItem={(gig) => <VisualQuestCard style={styles.card} {...gig.item} />}
                horizontal
              />
            </View>
            <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={styles.subheading}>Near you</Text>
              <TouchableOpacity>
                <Text style={styles.link}>See all</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        data={questList}
        renderItem={(quest) => (
          <BasicQuestCard
            id={quest.item.id}
            distance={0.1}
            location={quest.item.location}
            price={`\$${quest.item.pay}`}
            title={quest.item.name}
          />
        )}
        contentContainerStyle={styles.main_container}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    padding: 25,
  },
  separator: {
    marginBottom: 30,
    height: 1,
    width: "80%",
  },
  subheading: {
    fontSize: 20,
    lineHeight: 24,
  },
  card: {
    marginRight: 15,
  },
  link: {
    fontSize: 18,
    color: primaryColor,
  },
});
