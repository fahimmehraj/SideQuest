import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme, Image, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView, Title, Text, View } from "../../../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import Elevated from "../../../../components/Elevated";
import { primaryColor } from "../../../../constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import { trpc } from "../../../../utils/trpc";
import { useAuth } from "@clerk/clerk-expo";

export default function QuestScreen() {
  const { userId } = useAuth();
  const theme = useColorScheme() ?? "light";
  const textColor = theme == "light" ? "rgba(0, 0, 0, 0.55)" : "rgba(255, 255, 255, 0.6)";
  const backgroundColor = theme == "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.1)";
  const { gig } = useLocalSearchParams();

  const quest = trpc.questById.useQuery(+gig!);
  const acceptQuest = trpc.acceptQuest.useMutation();

  if (quest.status != "success" || quest.data == null) {
    return <ActivityIndicator size="large" color={primaryColor} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.h2}>Quest Info</Title>
        <Text style={styles.subheading}>{quest.data.name}</Text>
        <Image
          style={styles.image}
          source={require("../../../../assets/images/mowing-lawn.jpg")}
          resizeMode="cover"
          resizeMethod="scale"
        />
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="location-sharp" size={18} color={textColor} />
            <Text
              style={{ fontSize: 18, marginLeft: 8 }}
              darkColor="rgba(255, 255, 255, 0.6)"
              lightColor="rgba(0, 0, 0, 0.55)">
              {quest.data.location}
            </Text>
          </View>
          <Text
            style={{ fontSize: 18, marginLeft: 8 }}
            darkColor="rgba(255, 255, 255, 0.6)"
            lightColor="rgba(0, 0, 0, 0.55)">
            Level Required: <Text style={{ color: "#5fe497" }}>{quest.data.experienceRequired}</Text>
          </Text>
        </View>
        <Text style={styles.h4}>Description</Text>
        <Text style={{ marginVertical: 16 }}>{quest.data.description}</Text>
        {userId == quest.data.requesterId && (
          <View>
            <Text style={{ marginTop: 24, fontSize: 18 }}>Quest Status:</Text>
            {quest.data.worker == null ? (
              <Text style={{ fontSize: 16 }}>Nobody has accepted your gig yet!</Text>
            ) : (
              <View>
                <Text
                  style={{
                    fontSize: 16,
                  }}>{`${quest.data.worker.firstName} ${quest.data.worker.lastName} has accepted your gig and will be in contact soon!`}</Text>
                <TouchableOpacity>
                  <Text style={{ color: primaryColor, fontSize: 18 }}>Mark as completed</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </ScrollView>
      {userId != quest.data.requesterId && (
        <TouchableOpacity onPress={() => acceptQuest.mutate({ userId: userId!, questId: +gig! })}>
          <Elevated style={styles.button}>
            <Text style={{ fontSize: 20 }}>Apply</Text>
            <Text style={{ fontSize: 20 }}>$9.99</Text>
          </Elevated>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 24,
    margin: 8,
    backgroundColor: primaryColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h2: {
    fontSize: 48,
    marginTop: -4,
  },
  subheading: {
    fontSize: 26,
    marginTop: -20,
  },
  h4: {
    fontSize: 22,
    marginVertical: 16,
  },
  image: {
    height: 250,
    marginVertical: 14,
    width: "100%",
    borderRadius: 16,
  },
});
