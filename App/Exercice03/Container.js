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
  ListView
} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Exercice03 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            apiUrl: 'https://api.jcdecaux.com/vls/v1/stations?',
            apiKey: 'mySecretApiKey',
            contractName: 'Paris',
            dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
             }),
        };

        this.urlToFetch = this.state.apiUrl + "contract=" + this.state.contractName + "&apiKey=" + this.state.apiKey;
        this._getMoviesFromApiAsync();

    }

    _getMoviesFromApiAsync() {
      return fetch(this.urlToFetch)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseJson)
            });
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader={() => <Text style={styles.header}>Liste de Velib</Text>}
                    renderRow={(rowData) => <Text>{rowData.name}</Text>}
                />
                <Text>Text</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
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

  header: {
      textAlign: 'center',
      color: 'deepskyblue',
      fontSize: 25
  }
});

AppRegistry.registerComponent('Exercice03', () => Exercice03);
