import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const ReminderScreen = ({ route }) => {
  const { medication } = route.params; // Retrieve the passed medication object

  // State to manage the display of day selection
  const [showDays, setShowDays] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleShowDays = () => {
    setShowDays(!showDays);
  };

  const handleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      // Remove it again
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      // Select it
      setSelectedDays([...selectedDays, day]);
    }
  };

  // Now you can use the medication object in this screen
  console.log('Received medication:', medication);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.stepText}>Schritt 1 von 2</Text>
        <Text style={styles.title}>Abstände Einnahmen</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Täglich</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleShowDays}>
            <Text style={styles.buttonText}>Bestimmte Tage</Text>
          </TouchableOpacity>
        </View>
        {showDays && (
          <View style={styles.daySelection}>
            <TouchableOpacity
              style={[styles.dayButton, selectedDays.includes('Mo') && styles.selectedDay]}
              onPress={() => handleDaySelection('Mo')}
            >
              <Text style={styles.dayButtonText}>Mo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dayButton, selectedDays.includes('Di') && styles.selectedDay]}
              onPress={() => handleDaySelection('Di')}
            >
              <Text style={styles.dayButtonText}>Di</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dayButton, selectedDays.includes('Mi') && styles.selectedDay]}
              onPress={() => handleDaySelection('Mi')}
            >
              <Text style={styles.dayButtonText}>Mi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dayButton, selectedDays.includes('Do') && styles.selectedDay]}
              onPress={() => handleDaySelection('Do')}
            >
              <Text style={styles.dayButtonText}>Do</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dayButton, selectedDays.includes('Fr') && styles.selectedDay]}
              onPress={() => handleDaySelection('Fr')}
            >
              <Text style={styles.dayButtonText}>Fr</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dayButton, selectedDays.includes('Sa') && styles.selectedDay]}
              onPress={() => handleDaySelection('Sa')}
            >
              <Text style={styles.dayButtonText}>Sa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dayButton, selectedDays.includes('So') && styles.selectedDay]}
              onPress={() => handleDaySelection('So')}
            >
              <Text style={styles.dayButtonText}>So</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Alle x-Tage</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Alle x-Stunden</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  stepText: {
    fontSize: 16,
    color: 'darkgrey',
    marginBottom: 10,
    textAlign: 'center', // Center the text
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#33ABA5',
    padding: 15,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Increased font size for button text
  },
   // New styles for day selection
   daySelection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dayButton: {
    backgroundColor: '#CCEAE9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#33ABA5', // Style for selected day
  },
  dayButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReminderScreen;
