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
   TouchableNativeFeedback,
   Navigator
} from 'react-native';
import SignUp from './components/signup';
import MainPage from './components/MainPage';


class WellCat extends Component {

  renderScene( route, navigator ) {
    pageTitle = route.title;

    if (pageTitle === 'Main Page') {
      return(
        <MainPage navigator={navigator} title="Main Page" />
      )
    }
    if(pageTitle === 'Sign-Up Page') {
      return(
        <SignUp navigator={navigator} title="Sign-Up Page" />
      )
    }

  }

  render() {
    return(
      <Navigator
        initialRoute={{title: "Main Page", index: 0}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}



AppRegistry.registerComponent('WellCat', () => WellCat);
