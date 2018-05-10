import {
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native';


const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flames: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  topBar: {
    width: '100%',
    height: 45,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  profileButton: {
    width: 45,
    height: 45
  },
  title: {
    textAlign: 'center',
    fontFamily: 'gloria-hallelujah',
    fontSize: 20
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
    zIndex: 2,
    position: 'absolute',
    bottom: 50
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFF',
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