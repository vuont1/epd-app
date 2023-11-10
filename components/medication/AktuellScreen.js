import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';



const AktuellScreen = () => {
  // Dummy data for medications
  const medicationsData = [
    {
      id: '1',
      date: '2023-11-10 to 2023-11-15',
      image: require('../../assets/medi-pictures/a.avif'),
      name: 'Medication 1',
      dosage: '2 pills',
      number: '30', // New property
    },
    {
      id: '2',
      date: '2023-11-12 to 2023-11-18',
      image: 'https://example.com/medication2.jpg',
      name: 'Medication 2',
      dosage: '1 pill',
      number: '30', // New property
    },
    // Add more dummy data as needed
  ];

  //  <Image source={{ uri: item.image }} style={styles.medicationImage} />
  const renderItem = ({ item }) => (
    <View style={styles.medicationItem}>
      <Image source={item.image} style={styles.medicationImage} />
      <View style={styles.medicationDetails}>
        <View style={styles.medicationInfo}>
          <Text style={styles.medicationName}>{item.name}</Text>
          <Text>{`Date from ${item.date}`}</Text>
          <Text>{`Dosis: ${item.dosage}`}</Text>
          <Text>{`Number: ${item.number}`}</Text>
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

const styles = StyleSheet.create({
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  medicationImage: {
    width: 70, // Set the desired width
    height: 70, // Set the desired height
    marginRight: 10,
    borderRadius: 10, // Make it a bit square with rounded corners
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    paddingVertical: 10, // Adjust the padding to increase the height
  },
  reminderButton: {
    backgroundColor: '#33ABA5', // Set the Reminder button color
    padding: 5,
  },
  infoButton: {
    backgroundColor: '#99D5D2', // Set the Info button color
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AktuellScreen;
