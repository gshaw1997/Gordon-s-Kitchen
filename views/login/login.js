import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './login.styles';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Image
            resizeMode="contain"
            style={styles.gordon}
            source={require('../../assets/images/gordon.png')}
          />
          <Text style={[styles.defaultText]}>Gordon's Kitchen</Text>
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
