
const medicationsData = [
    {
      id: '1',
      date: '2023-11-10 to 2023-11-15',
      image: require('../assets/medi-pictures/a.avif'),
      name: 'Medication 1',
      dosage: '2 pills',
      number: '30',
      description: 'This is some additional information for the medication.',
    },
    {
      id: '2',
      date: '2023-11-12 to 2023-11-18',
      image: 'https://example.com/medication2.jpg',
      name: 'Dafalgan 2',
      dosage: '1 pill',
      number: '30',
      description: 'Dafalgan is a brand name for a medication that contains the active ingredient paracetamol, also known as acetaminophen. Paracetamol is a widely used analgesic (pain reliever) and antipyretic (fever reducer). It is commonly prescribed to alleviate mild to moderate pain and reduce fever.',
    },
    // Add more dummy data as needed
  ];
  
// <Image source={{ uri: item.image }} style={styles.medicationImage} /> (ID 2)

  export default medicationsData;
  