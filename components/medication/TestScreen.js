import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Modal, Button } from 'react-native';

// Styles
const styles = {
  // Your styles here
};

// Dummy JSON data (replace this with your actual data fetching logic)
const dummyData = {
  Medicaments: [
    {
      Id: '3670',
      IdType: 4,
      Pos: [
        {
          DtFrom: '2023-11-15',
          D: [1.0, 1.0, 1.0, 0.0],
        },
      ],
      Unit: 'Stk',
      TkgRsn: 'Schmerzen/Entzündung',
      Roa: 'PO',
    },
    {
      Id: '1373457',
      IdType: 4,
      Pos: [
        {
          DtFrom: '2023-11-15',
          D: [1.0, 0.0, 1.0, 0.0],
        },
      ],
      Unit: 'Stk',
      TkgRsn: 'Infektion',
      Roa: 'PO',
    },
    // Add more Medicaments as needed
  ],
};

const TestScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [extraData, setExtraData] = useState(null);
  const [medicamentsData, setMedicamentsData] = useState([]);

  useEffect(() => {
    // Simulating fetching JSON data asynchronously (replace with actual fetch logic)
    setTimeout(() => {
      setMedicamentsData(dummyData.Medicaments);
    }, 1000); // Simulating a delay of 1 second
  }, []);

  const handleInfoPress = (medicament) => {
    // Handle the logic for displaying more info about the medicament
    console.log(`Show info for ${medicament.Id}`);
    // Simulating fetching more info about the medicament
    const dummyExtraData = {
      id: medicament.Id,
      reason: medicament.TkgRsn,
      route: medicament.Roa,
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
        data={medicamentsData}
        keyExtractor={(item) => item.Id}
        renderItem={({ item }) => (
          <View style={styles.medicationItem}>
            <Text>{`Medicament ID: ${item.Id}`}</Text>
            <Text>{`Reason: ${item.TkgRsn}`}</Text>
            <Text>{`Route: ${item.Roa}`}</Text>
            <Text>{`Unit: ${item.Unit}`}</Text>
            {item.Pos && item.Pos.length > 0 && (
              <View>
                <Text>{`Date From: ${item.Pos[0].DtFrom}`}</Text>
                <Text>D values:</Text>
                <FlatList
                  data={item.Pos[0].D}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item: value, index }) => (
                    <Text key={index}>{`Value ${index + 1}: ${value}`}</Text>
                  )}
                />
              </View>
            )}
            <Button title="Info" onPress={() => handleInfoPress(item)} />
          </View>
        )}
      />

      {/* Modal remains the same */}
    </View>
  );
};

export default TestScreen;
