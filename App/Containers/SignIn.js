import React from 'react'
import { ScrollView, Text, Image, View, TextInput } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import {create} from 'apisauce'

// Styles
import styles from './Styles/PresentationScreenStyle'

const db = create({
  baseURL: 'https://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})

export default class SignIn extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  login (data) {
    if (data.success === true) {
      NavigationActions.presentationScreen()
    } else {
      window.alert('Incorrect Email Address or Password')
    }
  }

  signInUser () {
    if (this.state.email === '' || this.state.password === '') {
      window.alert('not all of the fields have been filled out please enter all data!')
      return
    }

    var postObj = {
      'email': this.state.email,
      'password': this.state.password
    }
    db.post('/user/login', postObj).then((response) => this.login(response.data))
  }

  updateEmail (event) {
    this.setState({
      email: event
    })
  }

  updatePassword (event) {
    this.setState({
      password: event
    })
  }

  focusNextField = (nextField) => {
    this.refs[nextField].focus()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Welcome to WellCat!
            </Text>
          </View>

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>
              <Text style={styles.sectionText}>Email</Text>
              <TextInput ref='1' onSubmitEditing={() => this.focusNextField('2')} returnKeyType='next' onChangeText={this.updateEmail.bind(this)} placeholder='Enter your email' placeholderTextColor='white' style={styles.sectionInput} keyboardType='email-address' />
              <Text style={styles.sectionText}>Password</Text>
              <TextInput ref='2' onSubmitEditing={this.signInUser.bind(this)} returnKeyType='done' onChangeText={this.updatePassword.bind(this)} placeholder='Enter your password' placeholderTextColor='white' style={styles.sectionInput} secureTextEntry />
            </View>
          </View>

          <RoundedButton onPress={this.signInUser.bind(this)}>
            Sign In
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.signUp}>
            Sign Up
          </RoundedButton>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              News Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis sed ipsum luctus congue eget quis augue.
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
