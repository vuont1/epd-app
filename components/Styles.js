import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#33ABA5',
  },
  activeTabLabel: {
    color: '#CCEAE9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inactiveTabLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  medicationImage: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 10,
  },
  medicationInfo: {
    flex: 1,
  },
  medicationName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  largeText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  reminderButton: {
    backgroundColor: '#33ABA5',
    padding: 5,
  },
  infoButton: {
    backgroundColor: '#99D5D2',
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});


export default styles;
