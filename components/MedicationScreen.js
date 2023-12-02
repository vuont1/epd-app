import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import AktuellScreen from './medication/AktuellScreen'; 
import HistorieScreen from './medication/HistorieScreen'; 
import styles from './Styles';

const Tab = createBottomTabNavigator();

const MedicationScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabContainer,
        tabBarLabelStyle: styles.inactiveTabLabel,
        activeTintColor: styles.activeTabLabel.color,
        inactiveTintColor: styles.inactiveTabLabel.color,
        indicatorStyle: { backgroundColor: styles.activeTabLabel.color },
      }}
    >
      <Tab.Screen
        name="Aktuell"
        component={AktuellScreen}
        options={{
          tabBarLabel: 'Aktuell',
        }}
      />
      <Tab.Screen
        name="Historie"
        component={HistorieScreen}
        options={{
          tabBarLabel: 'Historie',
        }}
      />
    </Tab.Navigator>
  );
};

export default MedicationScreen;