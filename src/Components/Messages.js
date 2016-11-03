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
  View
} from 'react-native';

export default class Messages extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
      var state = this.props.type;
        return (
            <View>
                <Text style={styles[this.props.type]}>{this.props.content}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  sended: {
    backgroundColor: '#eee',
    color: '#333'
  },
  received: {
    backgroundColor: '#333',
    color: '#eee'
  },
});

AppRegistry.registerComponent('Messages', () => Messages);
