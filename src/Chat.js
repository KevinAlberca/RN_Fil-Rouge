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
  TouchableHighlight,
  ListView,
} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class Chat extends Component {
  constructor(props){

    super(props);
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      text: null,
      messages: [],
      dataSource: ds.cloneWithRows({}),
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(m) => <View style={mStyle.messages}><View style={mStyle[m.type]}><Text>{m.message}</Text></View></View>}
            renderHeader={() => <View style={mStyle.header}><Text style={{textAlign: 'center'}}>Our Messages !</Text></View>}
            enableEmptySections
          />
        <View style={inputStyle.container}>
          <TextInput
            ref="messageInput"
                style={inputStyle.textInput}
                placeholder={'Send a text message'}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
            <TouchableHighlight onPress={() => {
                if(this.state.text != null) {
                  this.state.messages.push({
                    message: this.state.text,
                    type: 'sended'
                  })
                  this.setState({dataSource: ds.cloneWithRows(this.state.messages)})
                  this.setState({text: null})
                }

              }
            }
              style={inputStyle.button}
            >
                <Text style={inputStyle.submit}>Submit</Text>
            </TouchableHighlight>
        </View>
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
});

const inputStyle = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#F5FCFF',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  textInput: {
    flex: 5,
    height: 47,
    paddingLeft: 10,
    fontSize: 17,
    borderWidth: 0,
    borderRadius: 4,
  },
  button: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  submit: {
    textAlign: 'center',
  }
});

const mStyle = StyleSheet.create({
  header: {
    width: width,
    flex: 1,
    backgroundColor: 'deepskyblue',
    paddingTop:20,
    paddingBottom: 5
  },
  messages: {
    width:width,
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    flexDirection:'row',
  },
  sended: {
    width:width,
    flex: 1,
    marginLeft: 70,
    marginRight: 5,
    backgroundColor:'deepskyblue',
    padding: 5,
    borderRadius: 10,
  },
  received: {
    width:width,
    flex: 1,
    marginLeft: 5,
    marginRight: 70,
    backgroundColor: 'ghostwhite',
    padding: 5,
    borderRadius: 10,
  },
});
