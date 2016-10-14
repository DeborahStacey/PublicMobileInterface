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
import SignUp from './components/signup';
import MainPage from './components/MainPage';

class WellCat extends Component {

  render() {
    return(
      <MainPage />
    );
  }
}



AppRegistry.registerComponent('WellCat', () => WellCat);
