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
  TouchableHighlight
} from 'react-native';
import { createStore } from 'redux';







class Fil_Rouge extends Component {
    constructor(props) {
      super(props);
      this.store = createStore(this.counter);
    }

    counter(state = 0, action) {
      switch(action.type) {
        case 'INCREMENT':
          return state + 1;
        break;
        case 'DECREMENT':
          return state - 1;
        break;
        default:
          return state;
        break
      }
    }

    decrement() {
        this.store.dispatch({type: 'DECREMENT'});
    }

    increment() {
        this.store.subscribe( () => {
            console.log("Store change", this.store.getState().toString());
        });
        this.store.dispatch({type: 'INCREMENT'});
    }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.decrement()}>
            <Text>-1</Text>
        </TouchableHighlight>
        <Text>{this.store.getState()}</Text>
        <TouchableHighlight onPress={() => this.increment()}>
            <Text>+1</Text>
        </TouchableHighlight>
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
});

AppRegistry.registerComponent('Fil_Rouge', () => Fil_Rouge);
