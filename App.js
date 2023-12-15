import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import MedicationScreen from './components/MedicationScreen';
import VaccinationScreen from './components/VaccinationScreen';
import HomeScreen from './components/HomeScreen';
import ReminderScreen from './components/medication/ReminderScreen';
import ReminderScreen2 from './components/medication/ReminderScreen2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'EPD-App',
            headerStyle: {
              backgroundColor: '#00968F', // Header background color
            },
            headerTitleStyle: {
              color: 'white', // Text color
            },
          }}
        />
        <Stack.Screen
          name="Medication"
          component={MedicationScreen}
          options={{
            headerTitle: 'EPD-App',
            headerStyle: {
              backgroundColor: '#00968F', // Header background color
            },
            headerTitleStyle: {
              color: 'white', // Text color
            },
          }}
        />
        <Stack.Screen
          name="Vaccination"
          component={VaccinationScreen}
          options={{
            headerTitle: 'EPD-App',
            headerStyle: {
              backgroundColor: '#00968F', // Header background color
            },
            headerTitleStyle: {
              color: 'white', // Text color
            },
          }}
        />
        <Stack.Screen
          name="Reminder"
          component={ReminderScreen}
          options={{
            headerTitle: 'EPD-App',
            headerStyle: {
              backgroundColor: '#00968F', // Header background color
            },
            headerTitleStyle: {
              color: 'white', // Text color
            },
          }}
        />
        <Stack.Screen
          name="Reminder2"
          component={ReminderScreen2}
          options={{
            headerTitle: 'EPD-App',
            headerStyle: {
              backgroundColor: '#00968F', // Header background color
            },
            headerTitleStyle: {
              color: 'white', // Text color
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
