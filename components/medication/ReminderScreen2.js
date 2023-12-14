import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

const ReminderScreen2 = ({ navigation, route }) => {
  const { data } = route.params;
  // Einheit
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState();
  // Menge
  const [quantity, setQuantity] = useState('');
  // Hinweis
  const [showNoteDropdown, setShowNoteDropdown] = useState(false);
  const [selectedNote, setSelectedNote] = useState();
  // Disable button if not filled completely
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    console.log('Received data:', data);
    console.log('Received selectedDays:', data.selectedDays);

    if (selectedUnit && quantity && selectedNote) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [selectedUnit, quantity, selectedNote]);

  const dropdownItems = ['Kapsel', 'Injektion', 'Pille', 'Tablette', 'Tropfen', 'Stück'];

  const noteDropdownItems = [
    'Ereigniszeitpunkt',
    '10 min vorher',
    '15 Minuten vorher',
    '30 min vorher',
    '1 Stunde vorher',
    '1 Tag vorher',
    '2 Tage vorher',
  ];

  const handleContinue = async () => {
    // Create a JSON object with the required data
    const reminderData = {
      data,
      selectedUnit,
      quantity,
      selectedNote,
    };

    console.log(reminderData)

     // Show success message for 3 seconds
     Toast.show({
      type: 'success',
      text1: 'Erinnerung erstellt!',
      visibilityTime: 3000, 
      autoHide: true,
    });

    // Navigate back to the "Medication" screen and pass the reminderData
    navigation.navigate('Medication', { reminderData });
  };  

  const handleUnitDropdownSelect = (value) => {
    setSelectedUnit(value);
    setShowDropdown(false);
  };

  const handleNoteDropdownSelect = (value) => {
    setSelectedNote(value);
    setShowNoteDropdown(false);
  };

  const handleQuantityChange = (text) => {
    if (/^\d+$/.test(text)) {
      setQuantity(text);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.stepText}>Schritt 2 von 2</Text>
        <Text style={styles.title}>Einnahmen bestimmen</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Einheit</Text>
        <TouchableOpacity onPress={() => setShowDropdown(true)} style={styles.dropdown}>
          <Text style={styles.dropdownText}>{selectedUnit}</Text>
          <Ionicons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Menge</Text>
        <TextInput
          value={quantity}
          onChangeText={handleQuantityChange}
          placeholder="Anzahl in Zahl"
          style={styles.textInput}
          keyboardType="numeric"
        />
      </View>
      <Modal
        visible={showDropdown}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDropdown(false)}
      >
        <View style={styles.modalContainer}>
          {dropdownItems.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.dropdownItem}
              onPress={() => handleUnitDropdownSelect(item)}
            >
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <View style={styles.row}>
        <Text style={styles.label}>Hinweis</Text>
        <TouchableOpacity onPress={() => setShowNoteDropdown(true)} style={styles.dropdown}>
          <Text style={styles.dropdownText}>{selectedNote}</Text>
          <Ionicons name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={showNoteDropdown}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowNoteDropdown(false)}
      >
        <View style={styles.modalContainer}>
          {noteDropdownItems.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.dropdownItem}
              onPress={() => handleNoteDropdownSelect(item)}
            >
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={[styles.bottomButton, styles.cancelButton]}
          onPress={() => navigation.navigate('Reminder', { medication: data.medication })}
        >
          <Text style={styles.buttonText}>Abbrechen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            styles.continueButton,
            isButtonDisabled && { opacity: 0.5 }, // Reduce opacity when disabled
          ]}
          onPress={() => handleContinue()}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Abschliessen</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
    fontSize: 18,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '50%', 
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownItem: {
    backgroundColor: '#fff',
    width: '80%',
    marginBottom: 10,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownItemText: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '50%', 
    fontSize: 18,
  },
   // BottomButton
   bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    width: '80%',
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

export default ReminderScreen2;
