import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './components/HomeScreen';
import MedicationScreen from './components/MedicationScreen';
import VaccinationScreen from './components/VaccinationScreen';

const Stack = createStackNavigator({
  Home: HomeScreen,
  Medikation: MedicationScreen,
  Impfung: VaccinationScreen,
});

const AppContainer = createAppContainer(Stack);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppContainer />
    </>
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
