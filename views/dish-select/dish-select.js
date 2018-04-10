import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { styles } from './dish-select.styles';

export default class DishSelectScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={require('../../assets/images/dish-select-bg.png')}
      >
        <Text style={styles.title}>Choose a dish</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={[styles.button, styles.button]}>
            <Text style={styles.buttonText}>Greek Pizza</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.disabled]}>
            <Text style={styles.buttonText}>Unlocked at Level 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.disabled]}>
            <Text style={styles.buttonText}>Unlocked at Level 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.disabled]}>
            <Text style={styles.buttonText}>Unlocked at Level 3</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            resizeMode="contain"
            style={styles.backButtonImage}
            source={require('../../assets/images/back-button.png')}
          />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
