import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MyComponent from './MyComponent';

export default class Exercice04 extends Component {
  render() {
    return (
        <View>
            <Text style={styles.header}>Hello World !</Text>
            <MyComponent headerText="Test" contentText="Je test le composant"/>
            <MyComponent />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    paddingTop:30,
    paddingBottom:20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
