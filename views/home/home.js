import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './home.styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { height: 0 }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>A+ Games</Text>
      </View>
    );
  }
}
