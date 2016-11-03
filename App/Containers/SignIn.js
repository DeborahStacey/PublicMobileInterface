import React from 'react'
import { ScrollView, Text, Image, View, TextInput } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import {create} from 'apisauce'

// Styles
import styles from './Styles/PresentationScreenStyle'

const db = create({
  baseURL: 'http://cat.ddns.net/Backend/api.php',
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

  signInUser () {
    if (this.state.email === '' || this.state.password === '') {
      window.alert('not all of the fields have been filled out please enter all data!')
      return
    }

    var postObj = {
      'email': this.state.email,
      'password': this.state.password
    }
    db.post('/user/login', postObj).then((response) => window.alert(JSON.stringify(response.data)))
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

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>

              <Text style={styles.sectionText}>Email</Text>
              <TextInput onChangeText={this.updateEmail.bind(this)} placeholder='Enter your email' placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.sectionText}>Password</Text>
              <TextInput onChangeText={this.updatePassword.bind(this)} placeholder='Enter your password' placeholderTextColor='white' style={styles.sectionInput} />

            </View>
          </View>

          <RoundedButton onPress={this.signInUser.bind(this)}>
            Sign In
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}
