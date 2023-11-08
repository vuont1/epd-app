import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import offeneScreen from './vaccination/OffeneScreen'; // Import your AktuellScreen component
import abgeschlosseneScreen from './vaccination/AbgeschlosseneScreen'; // Import your HistorieScreen component
import styles from './Styles';

const Tab = createBottomTabNavigator();

const VaccinationScreen = () => {
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
        name="Offene"
        component={offeneScreen}
        options={{
          tabBarLabel: 'Offene',
        }}
      />
      <Tab.Screen
        name="Abgeschlossene"
        component={abgeschlosseneScreen}
        options={{
          tabBarLabel: 'Abgeschlossene',
        }}
      />
    </Tab.Navigator>
  );
};

export default VaccinationScreen;
