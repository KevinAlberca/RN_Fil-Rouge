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
  Dimensions,
  TouchableOpacity
} from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Fil_Rouge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flex: new Animated.Value(0.5),
            flex2: new Animated.Value(0.5)
        };
        this._onPressFirstView = this._onPressFirstView.bind(this);
        this._onPressSecondView = this._onPressSecondView.bind(this);
    }

    _onPressFirstView() {
        Animated.timing(
            this.state.flex,
            {toValue: 0.1}
        ).start();
    }

    _onPressSecondView() {
        Animated.timing(
            this.state.flex2,
            {toValue: 0.1}
        ).start();
    }

    render() {
        return (
          <View style={styles.container}>
              <Animated.View style={[styles.firstView, {flex: this.state.flex}]}>
                    <TouchableOpacity onPress={this._onPressFirstView}>
                        <Text style={styles.button}>Resize me!</Text>
                    </TouchableOpacity>
              </Animated.View>
              <Animated.View style={[styles.secondView, {flex: this.state.flex2}]}>
                  <TouchableOpacity onPress={this._onPressSecondView}>
                      <Text style={styles.button}>Resize me!</Text>
                  </TouchableOpacity>
              </Animated.View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  firstView: {
      width: width,
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

AppRegistry.registerComponent('Fil_Rouge', () => Fil_Rouge);
