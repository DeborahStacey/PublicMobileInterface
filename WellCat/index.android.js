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
   TextInput,
   TouchableHighlight,
   TouchableNativeFeedback
} from 'react-native';

class WellCat extends Component {

  constructor(props) {
      super(props);
      this.state = {text: ''};
    }

    render() {

      return (
      <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to WellCat!
              </Text>
          <TextInput
            style={{height: 40, width:150}}
            placeholder="Username"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width:150}}
            placeholder="Password"
            onChangeText={(text) => this.setState({text})}
          />

          <TouchableNativeFeedback
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 150, height: 50, backgroundColor: 'grey'}}>
              <Text style={{textAlign: 'center'}}>Submit</Text>
            </View>
          </TouchableNativeFeedback>


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

AppRegistry.registerComponent('WellCat', () => WellCat);
