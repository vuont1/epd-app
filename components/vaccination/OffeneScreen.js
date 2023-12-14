import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

import styles from '../Styles';
import vaccinationData from '../../data/VaccinationData';

const OffeneScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [extraData, setExtraData] = useState(null);

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
      <Text style={styles.medicationName}>{item.name}</Text>
      <Text style={styles.largeText}>Nächster Termin: {item.nextAppointment}</Text>
      <Text style={styles.largeText}>Dosis: {item.currentDose} von {item.totalDoses}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.infoButton]}
          onPress={() => handleInfoPress(item)}>
          <Text style={styles.buttonText}>Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleInfoPress = (item) => {
     console.log(`Show info for ${item.name}`);
     // Generate dummy data for the pop-up
     const dummyExtraData = {
       id: '1',
       name: item.name,
       info: item.info,
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
        data={vaccinationData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

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
                <Text style={styles.largeText}>{extraData.info}</Text>
                <Button title="Close" onPress={closeModal} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OffeneScreen;
