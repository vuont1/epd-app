
// Dummy JSON data
const medicationsData = [
    {
      id: '1',
      dateFrom: '01.01.2023',
      dateTill: '01.02.2023',
      image: require('../assets/medi-pictures/a.avif'),
      name: 'Some Medicine',
      unit: 'Tablet',
      dosage: '1-0-1',
      pieces: '20',
      description: 'Some description about the medicine.',
    },
    {
      id: '2',
      dateFrom: '12.11.2023',
      dateTill: '02.03.2024',
      image: require('../assets/medi-pictures/a.avif'),
      name: 'DAFALGAN Tabl 500 mg',
      unit: 'Tabletten',
      dosage: '1-0-0-1',
      pieces: '30',
      description: 'Indikation: Leichte bis mässig starke Schmerzen, Fieber\n\nKontraindikation: Schwere Leberfunktionsstörungen (Leberzirrhosis und Aszites)/akute Hepatitis oder dekompensierte, aktive Lebererkrankung.',
    },
    {
      id: '3',
      dateFrom: '05.06.2023',
      dateTill: '15.07.2023',
      image: require('../assets/medi-pictures/a.avif'),
      name: 'HYTRIN BPH Starterpackung\nTabl 7x1mg 7x2mg',
      unit: 'Tabletten',
      dosage: '0-1-0-1\npro Woche (Mo, Mi, Fr)',
      pieces: '14',
      description: 'Indikation: Symptomatische Behandlung von Miktionsbeschwerden bei der benignen Prostatahyperplasie (BPH).',
    },
    // Add more dummy data as needed
  ];
  
// <Image source={{ uri: item.image }} style={styles.medicationImage} /> (ID 2)
//     image: 'https://example.com/medication2.jpg',

  export default medicationsData;
  