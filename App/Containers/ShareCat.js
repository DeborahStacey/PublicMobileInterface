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
  baseURL: 'https://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})

export default class ShareCat extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      breed: 0,
      gender: 0,
      dob: '2016-01-01',
      weight: '',
      height: '',
      length: '',
      breeds: {},
      genders: {}
    }
  }

  componentWillMount () {
    var that = this
  }

  updateShareToEmail (newEmail) {
    this.setState({
      email: newEmail
    })
  }

  render () {
  	return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>

              <View style={styles.centered}>
                <Image source={require('../Images/datCat.png')} style={styles.profileImage} />
              </View>

              <Text style={styles.infoTitleText}>Share with (Email)</Text>
              <TextInput onChangeText={this.updateShareToEmail.bind(this)} value={this.state.email} placeholder='email' placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.infoTitleText}>Cat Name</Text>
              <Text style={styles.infoText}>Fluffle</Text>

              <Text style={styles.infoTitleText}>Access Level</Text>
              <Text style={styles.infoText}>Read or Write</Text>

            </View>
          </View>

        </ScrollView>
      </View>
    )
  }
}