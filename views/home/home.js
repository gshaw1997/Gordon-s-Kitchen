import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './home.styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { height: 0 }
  };
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={require('../../assets/images/kitchen-bg.jpg')}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Welcome to the Kitchen</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.button, styles.buttonEasy]}>
            <Text style={styles.buttonText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonMedium]}>
            <Text style={styles.buttonText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonIntermediate]}>
            <Text style={styles.buttonText}>Intermediate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonExpert]}>
            <Text style={styles.buttonText}>Expert</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
