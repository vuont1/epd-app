
// Dummy JSON data
const medicationsData = [
    {
      id: '1',
      dateFrom: '01.01.2020',
      dateTill: '01.03.2021',
      image: require('../assets/medi-pictures/penicillin.jpeg'),
      name: 'PENICILLIN Grünenthal 1 Mega',
      unit: 'Tabletten',
      dosage: '1-0-0-0, pro Tag',
      pieces: '30',
      description: 'Indikation: Systemische und/oder lokale Infektionen, die durch Benzylpenicillin-empfindliche Erreger verursacht sind, insbesondere solche durch Streptokokken, Pneumokokken, Gonokokken, Meningokokken und Spirochäten\n\nKontraindikation: Wegen der Gefahr eines anaphylaktischen Schocks darf Penicillin «Grünenthal» bei Patienten mit erwiesener Penicillin-Überempfindlichkeit nicht angewendet werden. Bei einer Überempfindlichkeit gegen andere Beta-Laktam-Antibiotika (z.B. Cephalosporine, Carbapeneme) ausgenommen Monobactame (Aztreonam), kann eine Kreuzallergie bestehen.',
    },
    {
      id: '2',
      dateFrom: '12.11.2021',
      dateTill: '02.03.2022',
      image: require('../assets/medi-pictures/neocitran.jpeg'),
      name: 'NEOCITRAN Grippe Erkältung\nPlv Erw',
      unit: 'Beutel',
      dosage: 'max 3x Täglich',
      pieces: '12',
      description: 'Indikation: Zur kurzfristigen, symptomatischen Behandlung von Grippe und Erkältungssymptomen bei Erwachsenen.\n\nKontraindikation: Überempfindlichkeit gegenüber einem der Wirkstoffe: Paracetamol (und verwandten Substanzen z.B. Propacetamol), Pheniramin, Phenylephrin, Ascorbinsäure oder einem der Hilfsstoffe gemäss Zusammensetzung, schwere Leberfunktionsstörungen (Leberzirrhose und Aszites) / akute Hepatitis oder dekompensierte, aktive Lebererkrankung, hereditäre konstitutionelle Hyperbilirubinämie (Morbus Meulengracht), gleichzeitige oder nicht länger als 2 Wochen zurückliegende Behandlung mit MAO-Hemmern, epileptische Patienten, Kinder unter 14 Jahren.',
    },
    {
      id: '3',
      dateFrom: '05.06.2020',
      dateTill: '15.07.2021',
      image: require('../assets/medi-pictures/acido.jpeg'),
      name: 'ACIDO-X Filmtabl 20 mg',
      unit: 'Tabletten',
      dosage: '1 Tabl. tgl. 1h vor dem Essen',
      pieces: '7',
      description: 'Indikation: Zur kurzzeitigen Behandlung von Refluxsymptomen (z.B. Magenbrennen, saures Aufstossen) bei Erwachsenen.\n\nKontraindikation: Acido-X darf nicht angewendet werden bei bekannter Überempfindlichkeit gegen den Wirkstoff, substituierte Benzimidazole oder einen der Inhaltsstoffe von Acido-X.',
    },
    // Add more dummy data as needed
  ];
  
// <Image source={{ uri: item.image }} style={styles.medicationImage} /> (ID 2)
//     image: 'https://example.com/medication2.jpg',

  export default medicationsData;
  