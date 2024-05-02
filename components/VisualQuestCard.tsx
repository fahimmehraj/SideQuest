import React from "react";
import { Text, ViewProps } from "./Themed";
import { StyleSheet, Image, View, useColorScheme, TouchableOpacity } from "react-native";

type Props = ViewProps & {
  title: string;
  thumbnailUrl: any;
  price: string;
};

const VisualQuestCard: React.FC<Props> = ({ title, thumbnailUrl, price, ...rest }) => {
  const theme = useColorScheme() ?? "light";
  const backgroundColor = theme == "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";

  return (
    <TouchableOpacity {...rest}>
      <View style={[styles.card, { backgroundColor }]}>
        <Image style={styles.image} source={thumbnailUrl} resizeMode="contain" resizeMethod="scale" />
        <View style={{ padding: 20 }}>
          <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 10,
    width: 250,
    height: 400,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    maxWidth: 150,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    alignItems: "flex-end",
  },
  price: {
    fontSize: 20,
    textAlign: "right",
    color: "#03fcf4",
  },
  image: {
    height: 250,
    width: "auto",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default VisualQuestCard;
