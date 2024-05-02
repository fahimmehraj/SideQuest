import React from "react";
import { StyleSheet, TouchableOpacity, View, useColorScheme } from "react-native";
import { Text } from "./Themed";

type Props = {
  title: string;
  price: string;
  distance: number;
  location: string;
};

const BasicQuestCard: React.FC<Props> = ({ title, price, distance, location }) => {
  const theme = useColorScheme() ?? "light";
  const backgroundColor = theme == "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";

  return (
      <TouchableOpacity style={[styles.card, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text>{distance} miles away</Text>
          <Text>{location}</Text>
        </View>
        <Text>{price}</Text>
      </TouchableOpacity>
  );
};

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

export default BasicQuestCard;
