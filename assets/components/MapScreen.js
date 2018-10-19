import React, { Component } from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { Button, Toast } from 'native-base';
import Expo from 'expo';
import axios from 'axios';

// import style
import styles from '../style/MapScreenStyle';

// global variable
var i = 0;

export default class MapScreen extends Component {

    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        content: null
    }

    componentWillMount = () => {
        this.getLocationAsync().then(location => {
            let { coords } = location;
            this.setState({
                region: {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                },
                content: [
                    <Marker
                        coordinate={coords}
                        title='Your location'
                        key={++i}
                    />]
            });
        });
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={require('../img/nasa2.png')} style={{flex: 1, paddingTop: 100}}>

                    {/* The map view */}
                    <MapView
                        region={this.state.region}
                        style={{flex: 5}}
                    >

                        {this.state.content}

                    </MapView>

                    {/* The buttons */}
                    <View style={styles.buttonContainer}>

                        {/* The report button */}
                        <Button style={styles.button} primary large onPress={this.onReport}>
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

    // functions
    getLocationAsync = async () => {
        const { Location, Permissions } = Expo;
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            return Location.getCurrentPositionAsync({});
        } else {
            throw new Error('Location permission not granted');
        }
    }

    onReport = () => {
        axios.post('https://nasa-fire-detector.herokuapp.com/router/report', {
            x: this.state.region.longitude,
            y: this.state.region.latitude
        }).then(res => {
            if (res.status === 200) {
                console.log('Report was sent successfully');
                Toast.show({
                    text: 'The report was successfully sent'
                });
                this.setState({
                    content: [...this.state.content,
                        <Image
                            source={require('../img/icon.png')}
                            style={{height: 20, width: 20}}
                            key={++i}
                        />
                    ]
                });
            } else {
                Toast.show({
                    text: 'The report was not sent'
                });
            }
        }).catch(err => {
            console.error(err);
        });
    }
}