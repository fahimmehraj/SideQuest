import React from "react";
import { PropsWithChildren } from "react";
import { useColorScheme, View as DefaultView } from "react-native";
import { ViewProps } from "./Themed";

const Elevated: React.FC<PropsWithChildren<ViewProps>> = ({ children, ...props }) => {
  const { style, ...otherProps } = props;
  const theme = useColorScheme() ?? "light";
  const backgroundColor = theme == "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.1)";

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps}>{children}</DefaultView>;
};

export default Elevated;
