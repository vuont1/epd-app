import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VaccinationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Impfung Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    marginBottom: 20,
    marginTop: 20,
  },
});

export default VaccinationScreen;
