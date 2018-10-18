import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';

export default class InstructionScreen extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../img/instruction.png')} style={{flex: 1}}></ImageBackground>
            </View>
        );
    }
}