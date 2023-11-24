import React from 'react';
import { View, Text } from 'react-native';

const ReminderScreen = ({ route }) => {
  const { medication } = route.params; // Retrieve the passed medication object

  // Now you can use the medication object in this screen
  console.log('Received medication:', medication);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the Reminder Page</Text>
      {/* Add any content or functionality for the Reminder Page */}
    </View>
  );
};

export default ReminderScreen; // Fixed the component export name
