import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from './home.styles';
import { AuthService } from '../login/auth.service';

export default class HomeScreen extends React.Component {
  authService = new AuthService();
   constructor(props) {
     super(props);
     this.state = {
       user: null
     }
     
   }
  async componentDidMount(){
    try{
      const user = await this.authService.getUser();
      this.setState({user})
    }catch(e){
      console.log(e)
    }
  }
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={require('../../assets/images/kitchen-bg.jpg')}
      >
        <Image
          resizeMode="cover"
          style={styles.flames}
          source={require('../../assets/images/flames.png')}
        />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Welcome to the Kitchen</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DishSelect', { level: 'easy', user: this.state.user })
            }
            style={[styles.button, styles.buttonEasy]}
          >
            <Text style={styles.buttonText}>EASY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DishSelect', { level: 'medium', user: this.state.user })
            }
            style={[styles.button, styles.buttonMedium]}
          >
            <Text style={styles.buttonText}>MEDIUM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DishSelect', {
                level: 'intermediate'
              })
            }
            style={[styles.button, styles.buttonIntermediate]}
          >
            <Text style={styles.buttonText}>INTERMEDIATE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DishSelect', { level: 'expert', user: this.state.user })
            }
            style={[styles.button, styles.buttonExpert]}
          >
            <Text style={styles.buttonText}>EXPERT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
