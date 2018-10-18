import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';

export default class InstructionScreen extends Component {
    render () {
        return (
            <View style={{flex: 1}}>
                <ImageBackground style={{flex: 1}} source={require('../img/instruction.jpg')}></ImageBackground>
            </View>
        );
    }
}