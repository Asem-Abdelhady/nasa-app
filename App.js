import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

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
  initialRouteName: 'Map',
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
      <View style={{flex: 1, flexDirection: 'column'}}>

        {/* The top nav bar */}
        <View style={{height: StatusBar.currentHeight, backgroundColor: '#303f9f'}}></View>

        {/* The main content */}
        <RootStack />

      </View>
    );
  }
}