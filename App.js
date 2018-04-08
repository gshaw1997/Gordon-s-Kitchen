import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Image
            resizeMode="contain"
            style={styles.gordon}
            source={require('./assets/images/gordon.png')}
          />
          <Text style={[styles.defaultText]}>Gordon'ss Kitchen</Text>
        </View>
        <View style={styles.containerBottom}>
          <View>
            <Text style={styles.textLight}>Sign up or login with</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={[styles.button, styles.facebook]}>
              <Text style={[styles.defaultText, styles.buttonText]}>
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.phone]}>
              <Text style={[styles.defaultText, styles.buttonText]}>
                Mobile Phone
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.company, styles.textLight]}>A+ Games</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerTop: {
    flex: 1.5,
    backgroundColor: '#e84118',
    justifyContent: 'center',
    alignItems: 'center'
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
    color: '#FFF'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  textLight: {
    color: '#828282'
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
    bottom: 10
  }
});
