import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

import styles from '../Styles';
import vaccinationData from '../../data/FinishedVaccinationData';

const AbgeschlosseneScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [extraData, setExtraData] = useState(null);

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
      <Text style={styles.medicationName}>{item.name}</Text>
      <Text style={styles.largeText}>Letze Impfung: {item.nextAppointment}</Text>
      <Text style={styles.largeText}>Immunität gewährleistet bis: {item.immunState}</Text>

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
     // Implement your logic for the "Info" button press
     console.log(`Show info for ${item.immunState}`);
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

export default AbgeschlosseneScreen;
