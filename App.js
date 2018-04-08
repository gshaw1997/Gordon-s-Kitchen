import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

// VIEWS
import LoginScreen from './views/login/login';
import HomeScreen from './views/home/home';

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: { height: 0 },
      headerLeft: null
    }
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
