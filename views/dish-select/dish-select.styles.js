/*
 *This si the stylesheet for the dish-select view
 */
import {
  StyleSheet
} from 'react-native';

const backButtonSize = 75;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    color: '#FFF',
    fontSize: 55,
    fontFamily: 'kalam-bold',
    textAlign: 'center'
  },
  paddedWrapper: {
    paddingLeft: 10,
    paddingRight: 10
  },
  comingSoon: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 30
  },
  buttonWrapper: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 75,
    width: '75%',
    borderRadius: 5,
    marginBottom: 30,
    backgroundColor: '#3C6382'
  },
  disabled: {
    opacity: 0.8
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'gaegu',
    fontSize: 30
  },
  backButton: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    width: backButtonSize,
    height: backButtonSize
  },
  backButtonImage: {
    height: backButtonSize,
    width: backButtonSize
  }
});