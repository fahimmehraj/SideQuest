/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView, SafeAreaView as DefaultSafeAreaView, TextStyle, ViewStyle } from 'react-native';

import Colors, { primaryColor } from '../constants/Colors';
import React from 'react';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color, fontFamily: "ProximaNova-Regular" }, style]} {...otherProps} />;
}

export function SafeAreaView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ThemedView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[style, { backgroundColor }]} {...otherProps} />;
}

export function Title(props: TextProps) {
  const { style, ...otherProps } = props;
  const titleStyle: TextStyle = {
    marginTop: 16,
    marginBottom: -16,
    fontSize: 58,
    fontFamily: "ProximaNova-Black",
  };
  const underlineStyle: ViewStyle = {
    borderColor: primaryColor,
    borderBottomWidth: 6,
    alignSelf: "flex-start",
    marginBottom: 30,
  }

  return <ThemedView style={underlineStyle}>
    <Text style={[titleStyle, style]} {...otherProps}/>
    </ThemedView>
}

export { ThemedView as View };
