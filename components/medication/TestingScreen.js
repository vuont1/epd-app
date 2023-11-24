import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

import styles from '../Styles';
import medicationsData from '../../data/MedicationsData';  // Import the data


export default function Testing({ navigation }) {
  const handleMedicationPress = () => {
    navigation.navigate('Medication');
  };

  const handleVaccinationPress = () => {
    navigation.navigate('Reminder');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Home Bereich</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleMedicationPress}>
          <Text style={styles.buttonText}>Medikation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleVaccinationPress}>
          <Text style={styles.buttonText}>Impfung</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

