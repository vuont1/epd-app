import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; 

const ReminderScreen = ({ navigation, route }) => {
  const { medication } = route.params; // Retrieve the passed medication object
  console.log('Received medication:', medication);

  // Bestimmte Tage
  const [selectedDays, setSelectedDays] = useState([]);
  const [showDays, setShowDays] = useState(false);
  // Datum Anfang
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  // Datum Ende
  const [chosenEndDate, setChosenEndDate] = useState(new Date());
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  // Alle x-Tage
  const [selectedInterval, setSelectedInterval] = useState(); 
  const [showIntervalPicker, setShowIntervalPicker] = useState(false); 
  // Bestimmte Tage
  const [selectedDaysInterval, setSelectedDaysInterval] = useState(); 
  const [showDaysPicker, setShowDaysPicker] = useState(false); 
  // Täglich Uhrzeit
  const [chosenTime, setChosenTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  const toggleShowDays = () => {
    setShowDays(!showDays);
  };

  const handleContinue = () => {
    const dataToSend = {
      selectedDays,
      chosenDate: chosenDate.toISOString(),
      chosenEndDate: chosenEndDate.toISOString(),
      selectedInterval,
      selectedDaysInterval,
      chosenTime: chosenTime.toISOString(),
      medication
    };

    navigation.navigate('Reminder2', { data: dataToSend });
  };

  const handleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      // Remove it again
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      // Select it
      setSelectedDays([...selectedDays, day]);

      // Reset the others
      setShowIntervalPicker(false);
      setSelectedInterval(false);
      setShowDaysPicker(false);
      setSelectedDaysInterval(false);
      setChosenTime(new Date());
      setShowTimePicker(false);
    }
  };

  // Start date cant be set in the future
  const handleStartDateChange = (chosenDate) => {
    if (chosenDate > chosenEndDate) {
      setChosenDate(chosenEndDate);
    } else {
      setChosenDate(chosenDate);
    }
  };


  // End date cant be set in the past
  const handleEndDateChange = (selectedEndDate) => {
    if (selectedEndDate < chosenDate) {
      setChosenEndDate(chosenDate)
    } else {
      setChosenEndDate(selectedEndDate);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.stepText}>Schritt 1 von 2</Text>
        <Text style={styles.title}>Abstände Einnahmen</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
          <Text style={styles.buttonText}>Täglich Uhrzeit: {chosenTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
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
        <TouchableOpacity style={styles.button} onPress={() => setShowIntervalPicker(true)}>
          <Text style={styles.buttonText}>Alle x-Tage: {selectedInterval}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowDaysPicker(true)}>
          <Text style={styles.buttonText}>Alle x-Stunden: {selectedDaysInterval}</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.datePickerText}>Datum Anfang: {chosenDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowEndDatePicker(true)}>
          <Text style={styles.datePickerText}>Datum Ende: {chosenEndDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={[styles.bottomButton, styles.cancelButton]} onPress={() =>  navigation.navigate('Medication')}>
            <Text style={styles.buttonText}>Abbrechen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottomButton, styles.continueButton]}
            onPress={() => handleContinue()}>
            <Text style={styles.buttonText}>Weiter</Text>
          </TouchableOpacity>
        </View>

        <Modal // Spinner Display for Datum Anfang
          visible={showDatePicker}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                value={chosenDate}
                mode="date"
                display="spinner" 
                onChange={(event, selectedDate) => {
                  if (selectedDate) {
                    handleStartDateChange(selectedDate);
                  }
                }}
                style={styles.datePicker} 
              />
            </View>
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setShowDatePicker(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal // Spinner Display for Datum Ende
          visible={showEndDatePicker}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                value={chosenEndDate}
                mode="date"
                display="spinner" // For Android, use spinner display
                onChange={(event, selectedDate) => {
                  if (selectedDate) {
                    handleEndDateChange(selectedDate); // Call the function to handle end date change
                  }
                }}
                style={styles.datePicker} 
              />
            </View>
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setShowEndDatePicker(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal // Spinner Display for Alle x-Tage
          visible={showIntervalPicker}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowIntervalPicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.datePickerContainer}>
              <Picker
                selectedValue={selectedInterval}
                onValueChange={(itemValue) => {
                  setSelectedInterval(itemValue);

                  // Reset the others
                  setShowDays(false)
                  setSelectedDays([]);
                  setSelectedDaysInterval(false);
                  setChosenTime(new Date());
                  setShowTimePicker(false);
                }}
                style={styles.datePicker}
              >
                {Array.from({ length: 100 }, (_, index) => {
                  const value = index + 1;
                  return <Picker.Item key={value.toString()} label={`${value}`} value={value} />;
                })}
              </Picker>
            </View>
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setShowIntervalPicker(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal // Spinner Display for Alle x-Stunden
          visible={showDaysPicker}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowDaysPicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.datePickerContainer}>
              <Picker
                selectedValue={selectedDaysInterval}
                onValueChange={(itemValue) => {
                  setSelectedDaysInterval(itemValue);

                  // Reset the others
                  setShowDays(false)
                  setSelectedDays([]);
                  setSelectedInterval(false);
                  setShowIntervalPicker(false);
                  setChosenTime(new Date());
                  setShowTimePicker(false);
                }}
                style={styles.datePicker}
              >
                {Array.from({ length: 24 }, (_, index) => {
                  const value = index * 0.5 + 0.5; // Increment by 0.5 starting from 0.5
                  const formattedValue = value % 1 === 0 ? value.toFixed(0) : value.toFixed(1); // value.toFixed(0) = string to no decimal places
                  return <Picker.Item key={formattedValue.toString()} label={`${formattedValue}`} value={formattedValue} />;
                })}
              </Picker>
            </View>
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setShowDaysPicker(false)}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal // Spinner Display for Täglich Uhrzeit
          visible={showTimePicker}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setShowTimePicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                value={chosenTime}
                mode="time" // Set mode to time for clock display
                display="spinner"
                is24Hour={true} // Set 24-hour format
                onChange={(event, selectedTime) => {
                  if (selectedTime) {
                    setChosenTime(selectedTime);

                    // Reset the others
                    setShowDays(false);
                    setSelectedDays([]);
                    setShowIntervalPicker(false);
                    setSelectedInterval(false);
                    setShowDaysPicker(false);
                    setSelectedDaysInterval(false);
                  }
                }}
                style={styles.datePicker}
              />
            </View>
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setShowTimePicker(false)}>
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
  // BottomButton
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  bottomButton: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    marginRight: 10,
  },
  continueButton: {
    backgroundColor: 'green',
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ReminderScreen;
