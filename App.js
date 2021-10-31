import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './screens/AuthSreen'
import Header from './components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Authentication"/>
      <AuthScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
});
