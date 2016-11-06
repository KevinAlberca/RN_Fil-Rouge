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
  Dimensions,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
var {height, width} = Dimensions.get('window');

export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'Useless Placeholder'
        };
    }

    render () {
      return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={styles.keasv} getTextInputRefs={() => { return [this._textInputRef];}}>
                <TextInput style={styles.textInput} placeholder={'Send a text message'} ref={(r) => { this._notesTI = r; }} returnKeyType={'go'}/>
            </KeyboardAwareScrollView>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#F5FCFF',
    position: 'absolute',
    bottom: 0,
  },

  keasv: {
    flex: 1,
    backgroundColor: '#4890ff',
    paddingTop: 20
  },
  textInput: {
    height: 47,
    margin: 20,
    paddingLeft: 10,
    fontSize: 17,
    lineHeight: 43,
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 4
  },
});

AppRegistry.registerComponent('MessageInput', () => MessageInput);
