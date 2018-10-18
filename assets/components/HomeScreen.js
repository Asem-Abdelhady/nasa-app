import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, TouchableHighlight, Alert } from 'react-native';

// import style
import styles from '../style/HomeScreenStyle';
import { H1, Button } from 'native-base';

export default class HomeScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <ImageBackground style={{flex: 1}} source={require('../img/nasa.png')}>

                    {/* Button container */}
                    <View style={[styles.flex1, styles.topView, {flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'flex-end'}]}>
                        <Button large primary style={styles.button}><Text style={{color: 'white'}}>Log In</Text></Button>
                        <Button large primary style={[styles.button, {backgroundColor: '#ff9800'}]}><Text style={{color: 'white'}}>Register</Text></Button>
                    </View>

                    {/* The big fire button */}
                    <View style={[styles.flex1, {flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 30}]}>
                        
                        {/* The fire button */}
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Map')} underlayColor='transparent'>
                            <Image source={require('../img/icon.png')} style={styles.img} />
                        </TouchableHighlight>
                        <Text style={styles.startText}>START</Text>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}