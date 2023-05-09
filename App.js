import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ProfileScreen from "./src/Screens/ProfileScreen";
import ForgetScreen from "./src/Screens/ForgetScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import Navigator from "./src/Screens/Navigator";

export default function App() {
  return (
    <SafeAreaView>
      <Navigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
});
