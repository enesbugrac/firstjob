import React from 'react';
import { StyleSheet, Platform, StatusBar, Button, SafeAreaView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './components/navigation/navigator';
import { Feather } from '@expo/vector-icons'; 
export default function App({navigator}) {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: 'transparent' }} >
      <View style={{ flex: 1, backgroundColor: 'transparent' }} >
      <Feather as={Button} onPress={() => navigator.openDrawer()} height={14}  name="menu" size={24} color="black" />
      <Navigator/>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
