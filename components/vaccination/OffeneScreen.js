import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from '../Styles';
import vaccinationData from '../../data/VaccinationData';

const OffeneScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
      <Text style={styles.medicationName}>Name: {item.name}</Text>
      <Text style={styles.largeText}>Nächster Termin: {item.nextAppointment}</Text>
      <Text style={styles.largeText}>Dosis: {item.currentDose} von {item.totalDoses}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.reminderButton]}
          onPress={() => handleInfoPress(item)}>
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleInfoPress = (item) => {
    // Handle the press on the info button (e.g., show more information)
    console.log('Info button pressed for', item.name, 'Info:', item.info);
  };

  return (
    <View>
      <FlatList
        data={vaccinationData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default OffeneScreen;
