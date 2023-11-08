import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

import AktuelleScreen from './medication/AktuellScreen'; // Import your AktuellScreen component
import HistorieScreen from './medication/HistorieScreen'; // Import your HistorieScreen component

const Tab = createBottomTabNavigator();

const MedicationScreen = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: styles.inactiveTabLabel,
          activeTintColor: styles.activeTabLabel.color,
          inactiveTintColor: styles.inactiveTabLabel.color,
          style: styles.tabBar,
          indicatorStyle: styles.tabIndicator,
        }}
      >
        <Tab.Screen name="Aktuelle" component={AktuelleScreen} />
        <Tab.Screen name="Historie" component={HistorieScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background color for the tab container
  },
  tabBar: {
    backgroundColor: 'white', // Background color for the tab bar
  },
  activeTabLabel: {
    color: '#66C0BC', // Color for the active tab label
    fontSize: 16,
  },
  inactiveTabLabel: {
    color: 'black', // Color for the inactive tab label
    fontSize: 16,
  },
  tabIndicator: {
    backgroundColor: '#99D5D2', // Color for the tab indicator
  },
});

export default MedicationScreen;
