import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ReminderScreen = ({ route }) => {
  const { medication } = route.params; // Retrieve the passed medication object

  // State to manage the display of day selection
  const [showDays, setShowDays] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const [chosenDate, setChosenDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [chosenEndDate, setChosenEndDate] = useState(new Date());
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

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
          <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.datePickerText}>Datum Anfang: {chosenDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowEndDatePicker(true)}>
          <Text style={styles.datePickerText}>Datum Ende: {chosenEndDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        <Modal // It's a built-in modal which pops up with the spinner
          visible={showDatePicker}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowDatePicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                value={chosenDate}
                mode="date"
                display="spinner" 
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setChosenDate(selectedDate);
                  }
                }}
                style={styles.datePicker} // Customize the picker's style
              />
            </View>
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setShowDatePicker(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          visible={showEndDatePicker}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowEndDatePicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                value={chosenEndDate}
                mode="date"
                display="spinner" // For Android, use spinner display
                onChange={(event, selectedDate) => {
                  setShowEndDatePicker(false);
                  if (selectedDate) {
                    setChosenEndDate(selectedDate);
                  }
                }}
                style={styles.datePicker} // Customize the picker's style
              />
            </View>
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setShowEndDatePicker(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
    marginBottom: 15,
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
  // ... existing styles ...
  datePickerButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#33ABA5',
    borderRadius: 5,
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeModalButton: {
    padding: 15,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  closeModalText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  datePickerContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  datePicker: {
    width: '80%', // Adjust width as needed
    height: 300, // Adjust height as needed
    backgroundColor: 'white',
  },
});

export default ReminderScreen;
