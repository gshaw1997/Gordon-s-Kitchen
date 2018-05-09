import {
  StyleSheet
} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#e84118',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerTopSmall: {
    flex: .4
  },
  gordon: {
    height: '70%',
    width: '70%'
  },
  containerBottom: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'space-evenly'
  },
  defaultText: {
    color: '#FFF',
    fontFamily: 'caesar-dressing',
    fontSize: 45
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  textLight: {
    color: '#828282'
  },
  errorMsg: {
    color: '#e84118'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '75%',
    borderRadius: 5,
    marginVertical: 15
  },
  facebook: {
    backgroundColor: '#3B5998'
  },
  phone: {
    backgroundColor: '#079992'
  },
  company: {
    position: 'absolute',
    bottom: 10,
    fontFamily: 'gloria-hallelujah'
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
  },
  backText: {
    fontSize: 18,
    fontFamily: 'gloria-hallelujah'
  },
  textInputWrapper: {
    borderWidth: 2,
    borderColor: '#acb4b9',
    width: '75%',
    marginBottom: 10,
    paddingTop: 2.5,
    paddingBottom: 2.5,
    paddingLeft: 10,
    borderRadius: 2
  },
  textInput: {
    height: 40,
    width: '100%',
    borderBottomWidth: 0,
    borderBottomColor: 'green'
  }
});