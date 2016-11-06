// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Messages extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.messages}>
              <View style={styles[this.props.type]}>
                <Text>{this.props.content}</Text>
              </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  messages: {
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // marginTop: 5,
    // marginBottom: 5,
    // borderRadius: 10,
    flexDirection:'row',
    borderColor:'black',
    borderWidth:1,
    flexWrap: 'wrap',
  },
  sended: {
    width: width / 1.25,
    backgroundColor:'blue',
    alignItems:'flex-start',
    justifyContent:'center',
    padding: 5,
    position: 'relative',
    marginLeft: 0,
    left: 0,
  },
  received: {
    flex:1,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor: 'ghostwhite',
    // color: 'deepskyblue',
    padding: 5,
  },
});

AppRegistry.registerComponent('Messages', () => Messages);
