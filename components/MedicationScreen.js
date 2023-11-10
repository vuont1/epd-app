import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-elements'; // Import the SearchBar component
import { StyleSheet, View } from 'react-native';

// Import your AktuellScreen and HistorieScreen components
import AktuellScreen from './medication/AktuellScreen';
import HistorieScreen from './medication/HistorieScreen';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabContainer: {
    // Add any styles for the tab container if needed
  },
  inactiveTabLabel: {
    // Add any styles for the inactive tab label if needed
  },
  activeTabLabel: {
    // Add any styles for the active tab label if needed
  },
  searchContainer: {
    // Add any additional styles for the search container if needed
  },
  searchBarContainer: {
    backgroundColor: 'white', // Set the background color to white
    height: 50, // Set the desired height
    borderRadius: 40, // Set border radius for a rounded appearance
  },
  searchInputContainer: {
    backgroundColor: 'white', // Set the background color to white
    height: 30, // Set the desired height
  },
  searchInput: {
    // Add any additional styles for the search input if needed
  },
});

const MedicationScreen = () => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarStyle: styles.tabContainer,
        tabBarLabelStyle: styles.inactiveTabLabel,
        activeTintColor: styles.activeTabLabel.color,
        inactiveTintColor: styles.inactiveTabLabel.color,
        indicatorStyle: { backgroundColor: styles.activeTabLabel.color },
        header: () => (
          <View style={styles.searchContainer}>
            <SearchBar
              placeholder="Search"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              containerStyle={styles.searchBarContainer}
              inputContainerStyle={styles.searchInputContainer}
              inputStyle={styles.searchInput}
              onCancel={() => setSearchText('')} // Clear search text on cancel
              onCancelButtonPress={() => setSearchText('')} // Clear search text on cancel button press
              onClear={() => setSearchText('')} // Clear search text on clear button press
              onSubmitEditing={() => {
                // Implement your search logic here using searchText
                console.log('Search submitted: ', searchText);
              }}
            />
          </View>
        ),
      })}
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
