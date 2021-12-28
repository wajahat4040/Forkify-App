import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  description: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
