import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import {create} from 'apisauce'
import { Actions as NavigationActions } from 'react-native-router-flux'

//  Styles
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
    this.setState({
      pnumber: newPhone
    })
  }

  updateStreet (newStreet) {
    this.setState({
      street: newStreet
    })
  }

  updateUnit (newUnit) {
    this.setState({
      unit: newUnit
    })
  }

  updateCity (newCity) {
    this.setState({
      city: newCity
    })
  }

  updatePostal (newPostal) {
    this.setState({
      postal: newPostal
    })
  }

  updatePassword (pass) {
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
            <Image source={Images.accountInfoLogo} style={styles.profileImage} />
          </View>
          <Text style={styles.infoTitleText}>First Name</Text>
          <Text style={styles.infoText}>{this.state.fname}</Text>
          <Text style={styles.infoTitleText}>Last Name</Text>
          <Text style={styles.infoText}>{this.state.lname}</Text>
          <Text style={styles.infoTitleText}>Phone</Text>
          <Text style={styles.infoText}>{this.state.pnumber}</Text>
          <Text style={styles.infoTitleText}>Address</Text>
          <Text style={styles.infoText}>{this.state.street}</Text>
          <Text style={styles.infoText}>{this.state.unit}</Text>
          <Text style={styles.infoText}>{this.state.city}</Text>
          <Text style={styles.infoTitleText}>Postal</Text>
          <Text style={styles.infoText}>{this.state.postal}</Text>

          <RoundedButton onPress={NavigationActions.updateAccountInfo}>
            Edit
          </RoundedButton>
        </ScrollView>
      </View>
    )
  }
}
