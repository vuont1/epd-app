import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

import styles from '../Styles';
import medicationsData from '../../data/MedicationsData';  // Import the data

const HistorieScreen = () => {

  const renderItem = ({ item }) => (
    <View style={styles.medicationItem}>
      <Image source={item.image} style={styles.medicationImage} />
      <View style={styles.medicationDetails}>
        <View style={styles.medicationInfo}>
          <Text style={styles.medicationName}>{item.name}</Text>
          <Text style={styles.largeText}>{`Date from ${item.date}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.infoButton]}
            onPress={() => handleInfoPress(item)}
          >
            <Text style={styles.buttonText}>More Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  // Removed the handleReminderPress function

  const handleInfoPress = (medication) => {
    // Implement your logic for the "Info" button press
    console.log(`Show info for ${medication.name}`);
  };

  return (
    <View>
      <FlatList
        data={medicationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HistorieScreen;
