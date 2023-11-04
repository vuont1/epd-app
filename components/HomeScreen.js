import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleMedicationPress = () => {
    navigation.navigate('Medication');
  };

  const handleVaccinationPress = () => {
    navigation.navigate('Vaccination');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>EPD App von der Post Sanela</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#CCEAE9', // Set the background color
  },
  topContainer: {
    backgroundColor: '#66C0BC', // Set the top part color
    height: '20%', // Adjust the height as needed
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bigText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00968F',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#33ABA5',
    width: '80%',
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
