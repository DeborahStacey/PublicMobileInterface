import React from 'react'
import { ScrollView, Text, Image, View, TextInput, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import NumericalSlider from '../Components/NumericalSlider'
import {create} from 'apisauce'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

const db = create({
  baseURL: 'https://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})


export default class AccountInfo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      fname: '',
      lname: '',
      pnumber: '',
      street: '',
      city: '',
      unit: '',
      locID: '',
      postal: '',
      password: ''
    }
  }

  componentWillMount () {
    var that = this
    db.get('/user/view')
    .then(function (response) {
      var userData = response.data.userinfo
      that.setState({
        email: userData.email,
        fname: userData.firstname,
        lname: userData.lastname,
        pnumber: userData.phonenumber,
        street: userData.street,
        city: userData.city,
        unit: userData.unit,
        locID: parseInt(userData.locationid),
        postal: userData.postalcode
      })
    })
    .catch((error) => window.alert(error))
  }

  updatePhone (newPhone) {
    this.state.pnumber = newPhone
    //this.updateAccount()
    this.setState({
      pnumber: newPhone
    })
  }

  updateStreet (newStreet) {
    this.state.street = newStreet
    //this.updateAccount()
    this.setState({
      street: newStreet
    })
  }

  updateUnit (newUnit) {
    this.state.unit = newUnit
    //this.updateAccount()
    this.setState({
      unit: newUnit
    })
  }

  updateCity (newCity) {
    this.state.city = newCity
    //this.updateAccount()
    this.setState({
      city: newCity
    })
  }

  updatePostal (newPostal) {
    this.state.postal = newPostal
    //this.updateAccount()
    this.setState({
      postal: newPostal
    })
  }

  updatePassword (pass) {
    this.state.password = pass
    this.setState({
      password: pass
    })
  }


   updateAccount (password) {
    var postObj = {
      'password': password,
      'phoneNumber': this.state.pnumber,
      'address': {
        'street': this.state.street,
        'unit': this.state.unit,
        'city': this.state.city,
        'postalCode': this.state.postal,
        'locationID': this.state.locID
      }
    }
    db.put('/user/update', postObj)
    .then((response) => window.alert(JSON.stringify(response.data)))
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={require('../Images/PogChamp.png')} style={styles.profileImage} />
          </View>
          <Text style={styles.infoTitleText}>First Name</Text>
          <Text style={styles.infoText}>        {this.state.fname}</Text>
          <Text style={styles.infoTitleText}>Last Name</Text>
          <Text style={styles.infoText}>        {this.state.lname}</Text>
          <Text style={styles.infoTitleText}>Phone</Text>
          <TextInput onChangeText={this.updatePhone.bind(this)} value={this.state.pnumber} placeholder="Phone" placeholderTextColor='grey' style={styles.sectionInput} />
          <Text style={styles.infoTitleText}>Address</Text>
          <TextInput onChangeText={this.updateStreet.bind(this)} value={this.state.street} placeholder="Street" placeholderTextColor='grey' style={styles.sectionInput} />
          <TextInput onChangeText={this.updateUnit.bind(this)} value={this.state.unit} placeholder="Unit" placeholderTextColor='grey' style={styles.sectionInput} />
          <TextInput onChangeText={this.updateCity.bind(this)} value={this.state.city} placeholder="City" placeholderTextColor='grey' style={styles.sectionInput} />
          <Text style={styles.infoTitleText}>Postal</Text>
          <TextInput onChangeText={this.updatePostal.bind(this)} value={this.state.postal} placeholder="Postal Code" placeholderTextColor='grey' style={styles.sectionInput} />

          <RoundedButton onPress={() => this.updateAccount(this.state.password)}>
            Update
          </RoundedButton>
          <TextInput onChangeText={this.updatePassword.bind(this)} value={this.state.password} placeholder="password" placeholderTextColor='grey' style={styles.sectionInput} />
        </ScrollView>
      </View>
    )
  }
}
