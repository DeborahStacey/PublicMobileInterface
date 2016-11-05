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

export default class SignUp extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      fName: '',
      lName: '',
      email: '',
      password: '',
      address: ''
    }
  }

  registerUser () {
    if (this.state.email === '' || this.state.password === '' || this.state.fName === '' || this.state.lName === '' || this.state.address === '') {
      window.alert('not all of the fields have been filled out please enter all data!')
      return
    }

    var postObj = {
      'email': this.state.email,
      'password': this.state.password,
      'firstName': this.state.fName,
      'lastName': this.state.lName,
      'address': {
        'street': this.state.address,
        'unit': ' ',
        'city': ' ',
        'postalCode': ' ',
        'locationID': 13
      }
    }

    db.post('/user/register', postObj)
    .then((response) => window.alert(JSON.stringify(response.data)))
  }

  updateFName (event) {
    this.setState({
      fName: event
    })
  }

  updateLName (event) {
    this.setState({
      lName: event
    })
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

  updateAddress (event) {
    this.setState({
      address: event
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

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>

              <Text style={styles.sectionText}>First Name</Text>
              <TextInput ref="1" onSubmitEditing={() => this.focusNextField('2')} returnKeyType="next" onChangeText={this.updateFName.bind(this)} placeholder='Enter your first name' placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.sectionText}>Last Name</Text>
              <TextInput ref="2" onSubmitEditing={() => this.focusNextField('3')} returnKeyType="next" onChangeText={this.updateLName.bind(this)} placeholder='Enter your last name' placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.sectionText}>Email</Text>
              <TextInput ref="3" onSubmitEditing={() => this.focusNextField('4')} returnKeyType="next" onChangeText={this.updateEmail.bind(this)} placeholder='Enter your email' placeholderTextColor='white' style={styles.sectionInput} keyboardType="email-address" />

              <Text style={styles.sectionText}>Password</Text>
              <TextInput ref="4" onSubmitEditing={() => this.focusNextField('5')} returnKeyType="next" onChangeText={this.updatePassword.bind(this)} placeholder='Enter your password' placeholderTextColor='white' style={styles.sectionInput} secureTextEntry={true} />

              <Text style={styles.sectionText}>Address</Text>
              <TextInput ref="5" onSubmitEditing={this.registerUser.bind(this)} returnKeyType="done" onChangeText={this.updateAddress.bind(this)} placeholder='Enter your address' placeholderTextColor='white' style={styles.sectionInput}  />

            </View>
          </View>

          <RoundedButton onPress={this.registerUser.bind(this)}>
            Register
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}
