import React, { Component, PropTypes } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableHighlight,
   TouchableNativeFeedback
} from 'react-native';

export default class Login extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  }

  backToMain(){
    var nav = this.props.navigator
    nav.replace({
      title: 'Main Page'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login
        </Text>

        <View style={styles.messageBox}>
          <View style={styles.messageBoxContents}>
            <Text>Email</Text>
            <TextInput placeholder="Enter your email" />
          </View>
        </View>
        <View style={styles.messageBox}>
          <View style={styles.messageBoxContents}>
            <Text>Password</Text>
            <TextInput placeholder="Enter your password" />
          </View>
        </View>


        <TouchableNativeFeedback
              onPress={this.backToMain.bind(this)}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 75, height: 25, backgroundColor: 'grey', margin: 2}}>
              <Text style={{textAlign: 'center'}}>Login</Text>
            </View>
        </TouchableNativeFeedback>

    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom:20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 5,
  },
  messageBox:{
    backgroundColor:'grey',
    paddingTop:10,
    paddingBottom:20,
  },
  messageBoxContents:{
    padding: 10,
    width: 200
  },
});
