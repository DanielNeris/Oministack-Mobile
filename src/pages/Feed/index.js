import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import camera from '../../assets/camera.png';

export default class Feed extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('New')}>
                <Image style={{ marginRight: 20 }} source={camera} />
            </TouchableOpacity>
        ),
    });

    render() {
        return (
            <View></View>
        )
    }
}
