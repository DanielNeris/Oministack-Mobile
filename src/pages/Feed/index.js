import React, { Component } from 'react'
import api from '../../services/api';

import { Text, View, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

import camera from '../../assets/camera.png';

export default class Feed extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('New')}>
                <Image style={{ marginRight: 20 }} source={camera} />
            </TouchableOpacity>
        ),
    });

    constructor(props) {
        super(props);

        this.state = {
            feed: [],
        };
    }

    componentDidMount() {
        //this.resgisterToSocket();
        this.loadFeed();
    }

    loadFeed = async () => {
        try {
            const response = await api.get('posts');
            console.log(response);
            this.setState({ feed: response.data });

        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { feed } = this.state;
        return (
            <View style={style.container}>
                <FlatList
                    data={feed}
                    keyExtractor={post => post._id}
                    renderItem={({ item }) => (
                        <View style={style.feedItem}>
                            <View style={style.feedItemHeader}>
                                <View style={style.userInfo}>
                                    <Text style={style.userInfo}></Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({

});