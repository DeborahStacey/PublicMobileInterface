import React from 'react'
import { ScrollView, Text, Image, View, TextInput } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import DropDown from '../Components/DropDown'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import {create} from 'apisauce'

// Styles
import styles from './Styles/PresentationScreenStyle'

const db = create({
  baseURL: 'http://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})

export default class AccountInfo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      age: 0,
      gender: 0,
      dob: '',
      Address: ''
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
            <View style={styles.centered}>
              <Image source={require('../Images/PogChamp.png')} style={styles.profileImage} />
            </View>
        </ScrollView>
      </View>
    )
  }
}
