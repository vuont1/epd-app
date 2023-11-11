import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

import styles from '../Styles';
import medicationsData from '../../data/MedicationsData';  // Import the data

const AktuellScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [extraData, setExtraData] = useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.medicationItem}>
      <Image source={item.image} style={styles.medicationImage} />
      <View style={styles.medicationDetails}>
        <View style={styles.medicationInfo}>
          <Text style={styles.medicationName}>{item.name}</Text>
          <Text style={styles.largeText}>{`Date from ${item.date}`}</Text>
          <Text style={styles.largeText}>{`Dosis: ${item.dosage}`}</Text>
          <Text style={styles.largeText}>{`Number: ${item.number}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.reminderButton]}
            onPress={() => handleReminderPress(item)}
          >
            <Text style={styles.buttonText}>Reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.infoButton]}
            onPress={() => handleInfoPress(item)}
          >
            <Text style={styles.buttonText}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const handleReminderPress = (medication) => {
    // Implement your logic for the "Reminder" button press
    console.log(`Set reminder for ${medication.name}`);
  };

  const handleInfoPress = (medication) => {
    // Implement your logic for the "Info" button press
    console.log(`Show info for ${medication.name}`);
    // Generate dummy data for the pop-up
    const dummyExtraData = {
      id: '1',
      name: medication.name,
      description: medication.description,
    };
    setExtraData(dummyExtraData);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setExtraData(null);
  };

  return (
    <View>
      <FlatList
        data={medicationsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Modal for showing extra information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {extraData && (
              <>
                <Text style={styles.modalTitle}>{extraData.name}</Text>
                <Text style={styles.largeText}>{extraData.description}</Text>
                <Button title="Close" onPress={closeModal} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AktuellScreen;


