
// Dummy JSON data
const medicationsData = [
    {
      id: '1',
      dateFrom: '01.01.2023',
      dateTill: '01.02.2024',
      image: require('../assets/medi-pictures/coveram.jpeg'),
      name: 'COVERAM plus Filmtabl\n5/5/1.25mg',
      unit: 'Tabletten',
      dosage: '1-0-0-0, pro Tag',
      pieces: '30',
      description: 'Indikation: Hypertonie\n\nKontraindikation: Dialysepatienten. Patienten mit unbehandelter, dekompensierter Herzinsuffizienz. Schwere Niereninsuffizienz (Kreatinin-Clearance < 30 ml/min).',
    },
    {
      id: '2',
      dateFrom: '12.11.2023',
      dateTill: '02.03.2024',
      image: require('../assets/medi-pictures/dafalgan.jpeg'),
      name: 'DAFALGAN Tabl 500 mg',
      unit: 'Tabletten',
      dosage: '1-2 Tabl. max',
      pieces: '16',
      description: 'Indikation: Leichte bis mässig starke Schmerzen, Fieber\n\nKontraindikation: Schwere Leberfunktionsstörungen (Leberzirrhosis und Aszites)/akute Hepatitis oder dekompensierte, aktive Lebererkrankung.',
    },
    {
      id: '3',
      dateFrom: '05.06.2023',
      dateTill: '15.07.2024',
      image: require('../assets/medi-pictures/hytrin.jpeg'),
      name: 'HYTRIN BPH Starterpackung\nTabl 7x1mg 7x2mg',
      unit: 'Tabletten',
      dosage: '1-0-0-1, pro Tag',
      pieces: '14',
      description: 'Indikation: Symptomatische Behandlung von Miktionsbeschwerden bei der benignen Prostatahyperplasie (BPH).\n\nKontraindikation: Idiopathische orthostatische Hypotonie. Miktionssynkopen in der Anamnese. Gleichzeitige Anwendung anderer Alpha-Rezeptorenblocker. Bekannte Empfindlichkeit gegenüber anderen Alpha-Adrenozeptorantagonisten. Überempfindlichkeit gegenüber dem Wirkstoff oder einem der Hilfsstoffe.',
    },
    {
      id: '4',
      dateFrom: '05.06.2023',
      dateTill: '15.07.2024',
      image: require('../assets/medi-pictures/humalog.jpeg'),
      name: 'HUMALOG Injektion Löslich\n100 IE/ml f Pen',
      unit: 'Patronen x 3ml',
      dosage: '100 IE/ml, \n15 min vor oder nach dem Essen',
      pieces: '15',
      description: 'Indikation: Zur Behandlung von Erwachsenen und Kindern mit insulinpflichtigem Diabetes mellitus. Humalog ist ebenfalls angezeigt bei der Ersteinstellung des Diabetes mellitus.\n\nKontraindikation: Hypoglykämie. Insulinom. Unter keinen Umständen sollten Humalog 100 I.E./ml Mix 25 oder Humalog 100 I.E./ml Mix 50 oder Humalog 200 I.E./ml KwikPen intravenös verabreicht werden. Überempfindlichkeit gegenüber Insulin oder anderen Bestandteilen von Humalog.',
    },
    // Add more dummy data as needed
  ];
  
// <Image source={{ uri: item.image }} style={styles.medicationImage} /> (ID 2)
//     image: 'https://example.com/medication2.jpg',

  export default medicationsData;
  