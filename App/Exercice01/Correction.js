/**
 * Created by AwH on 10/13/16.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Dimensions
} from 'react-native';

var width = Dimensions.get('window').width; //full width


export default class Exercice01C extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: new Animated.Value(0.5)
        };
    }


    cycleAnimation() {
        Animated.sequence([
            Animated.timing(this.state.height, {
                toValue: 5,
                duration: 2000
            }),
            Animated.timing(this.state.height, {
                toValue: 0,
                duration: 2000
            })
        ]).start(event => {
            if (event.finished) {
                this.cycleAnimation();
            }
        });
    }

    componentDidMount() {
        this.cycleAnimation();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={StyleSheet.flatten([styles.firstView, {flex: this.state.height}])}>
                    <Text>View 1</Text>
                </Animated.View>
                <Animated.View style={StyleSheet.flatten([styles.secondView, {flex: 1}])}>
                    <Text>View 2</Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstView: {
        width: width,
        flex:0.5,
        backgroundColor: '#333',
        marginTop: 20,
        alignItems: 'center'
    },
    secondView: {
        width: width,
        flex:0.5,
        backgroundColor: '#DDD',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'deepskyblue',
        width:100
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('Exercice01C', () => Exercice01C);
