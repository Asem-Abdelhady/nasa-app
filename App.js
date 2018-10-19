import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import { Root } from 'native-base';

// importing screens
import HomeScreen from './assets/components/HomeScreen';
import MapScreen from './assets/components/MapScreen';
import InstructionScreen from './assets/components/InstructionScreen';

// navigation settings
const RootStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  Instruction: { screen: InstructionScreen }
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

// exporting the main application
export default class App extends Component{

  componentWillMount = async () => {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render () {
    return (
      <Root>

        {/* The top nav bar */}
        <View style={{height: StatusBar.currentHeight, backgroundColor: '#303f9f'}}></View>

        {/* The main content */}
        <RootStack />

      </Root>
    );
  }
}