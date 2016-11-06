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
  TextInput
} from 'react-native';



import Messages from './Components/Messages';
import MessageInput from './Components/MessageInput';

export default class Chat extends Component {
  constructor(props){
    super(props);

  }

  _scrollToInput (reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.refs.scroll.scrollToFocusedInput(reactNode)
  }

  render() {
    return (
      <View style={styles.container}>
          <Messages type="received" content="Salut, ca va ?" />
          <Messages type="sended" content="Hey, ca fait longtemps ! Ca va bien et toi ?" />
          <Messages type="received" content="..." />
          <MessageInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textinput: {
      backgroundColor: 'red'
  }
});
