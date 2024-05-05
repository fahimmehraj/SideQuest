import React from 'react';
import { ViewStyle, View as DefaultView } from 'react-native';
import { ThemedView, View } from './Themed';
import { LinearGradient } from 'expo-linear-gradient';

interface EXPBarProps {
  progress?: number;
  gradientColors?: string[];
  backgroundColor?: string;
  barHeight?: number;
  borderRadius?: number;
}

const EXPBar: React.FC<EXPBarProps> = ({
  progress = 55,
  gradientColors = ['#adfe8b', '#249884'],
  barHeight = 26,
  borderRadius = 10,
}) => {
  const containerStyle: ViewStyle = {
    padding: 3,
    borderRadius: borderRadius,
    height: barHeight,
    overflow: 'hidden', // Ensure children (the filled part) don't overflow
  };

  const filledStyle: ViewStyle = {
    borderRadius: borderRadius,
    height: '100%',
    width: `${progress}%`, // Progress is a percentage of the bar
  };

  return (
    <ThemedView style={containerStyle} darkColor='#191a19' lightColor='#dedede'>
      <LinearGradient colors={gradientColors} style={filledStyle} start={[0, 0]} end={[1, 0]}>
      <DefaultView style={filledStyle} />
      </LinearGradient>
    </ThemedView>
  );
};

export default EXPBar;
