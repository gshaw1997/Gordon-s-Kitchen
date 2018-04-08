import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textWrapper: {
    flex: 0.75,
    paddingVertical: 20
  },
  title: {
    textAlign: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    width: '60%',
    borderRadius: 5,
    marginBottom: 15
  },
  buttonWrapper: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    zIndex: 2
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF'
  },
  buttonEasy: {
    backgroundColor: '#78E08F'
  },
  buttonMedium: {
    backgroundColor: '#F2C94C'
  },
  buttonIntermediate: {
    backgroundColor: '#FA983A'
  },
  buttonExpert: {
    backgroundColor: '#EB2F06'
  }
});
