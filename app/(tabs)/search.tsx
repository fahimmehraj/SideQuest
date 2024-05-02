import { StyleSheet, View } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, SafeAreaView } from '../../components/Themed';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
