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

export default class MainPage extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  }

  signUpClick() {
    var nav = this.props.navigator
    nav.replace({
      title: 'Sign-Up Page'
    })
  }

  loginClick() {
    var nav = this.props.navigator
    nav.replace({
      title: 'Login Page'
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.layerOne}>
        <Text style={styles.welcome}>
          Welcome to WellCat!
        </Text>
        <TouchableNativeFeedback
                onPress={this.loginClick.bind(this)}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 75, height: 25, backgroundColor: 'grey', margin: 2}}>
              <Text style={{textAlign: 'center'}}>Login</Text>
            </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
              onPress={this.signUpClick.bind(this)}
              background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 75, height: 25, backgroundColor: 'grey', margin: 2}}>
              <Text style={{textAlign: 'center'}}>Sign-Up</Text>
            </View>
        </TouchableNativeFeedback>
      </View>

      <Text style={styles.newsHeading}>Cat News</Text>

      <View style={styles.messageBox}>
        <View>
          <Text style={styles.messageBoxTitleText}>Article 3 | Oct 9th, 2016</Text>
        </View>
        <View>
          <Text style={styles.messageBoxBodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis sed ipsum luctus congue eget quis augue.</Text>
        </View>
      </View>

      <View style={styles.messageBox}>
        <View>
          <Text style={styles.messageBoxTitleText}>Article 2 | Oct 8th, 2016</Text>
        </View>
        <View>
          <Text style={styles.messageBoxBodyText}>Sed tincidunt sodales mi ac pulvinar. Nunc ut pretium enim.</Text>
        </View>
      </View>

      <View style={styles.messageBox}>
        <View>
          <Text style={styles.messageBoxTitleText}>Article 1 | Oct 7th, 2016</Text>
        </View>
        <View>
          <Text style={styles.messageBoxBodyText}>Pellentesque sed convallis ante. Phasellus vitae tristique ligula. Nunc volutpat suscipit accumsan.</Text>
        </View>
      </View>


    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    paddingBottom:20,
  },
  layerOne: {
    flex: 0,
    flexDirection: 'row',
    margin: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 5,
  },
  newsHeading: {
    fontSize: 26,
    textAlign: 'right',
    color: '#333333',
    margin: 15,
    marginBottom:10
  },
  messageBox:{
    backgroundColor:'grey',
    paddingTop:10,
    paddingBottom:20,
  },
  messageBoxTitleText:{
    fontWeight:'bold',
    color:'#fff',
    textAlign:'left',
    fontSize:18,
    marginBottom:10,
    margin: 15,
  },
  messageBoxBodyText:{
    color:'#fff',
    fontSize:16,
    margin: 15,
  }

});
