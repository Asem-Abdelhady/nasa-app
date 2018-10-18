import React, { Component } from 'react';
import { View, ImageBackground, Text, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { Button } from 'native-base';

// import style
import styles from '../style/MapScreenStyle';

export default class MapScreen extends Component {

    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../img/nasa2.png')} style={{flex: 1, paddingTop: 100}}>

                    {/* The map view */}
                    <MapView
                        initialRegion={this.state.region}
                        style={{flex: 5}}
                    />

                    {/* The buttons */}
                    <View style={styles.buttonContainer}>

                        {/* The report button */}
                        <Button style={styles.button} primary large onPress={() => Alert.alert('Hello World')}>
                            <Text style={styles.buttonText}>Report</Text >
                        </Button>

                        {/* The instructions button */}
                        <Button style={[styles.button, { backgroundColor: '#ff9800' }]} primary large onPress={() => this.props.navigation.navigate('Instruction')}>
                            <Text style={styles.buttonText}>Instructions</Text>
                        </Button>

                    </View>

                </ImageBackground>
            </View>
        );
    }
}