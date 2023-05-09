import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartScreen from "./src/Screens/CartScreen";
import PickUpScreen from "./src/Screens/PickUpScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <PickUpScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
