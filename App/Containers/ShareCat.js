import React from 'react'
import { ScrollView, Text, Image, View, TextInput, Alert } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import DropDown from '../Components/DropDown'
import { Actions as NavigationActions } from 'react-native-router-flux'
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
      access: 0
    }
  }

  updateShareToEmail (event) {
    this.setState({
      email: event
    })
  }

  updateLevel (event) {
    this.setState({
      access: event
    })
  }

  shareCat () {
    var postObj = {
      'email': this.state.email,
      'petID': parseInt(this.props.id),
      'access': this.state.access
    }

    var alertSuccess = this.props.name + ' has been shared with ' + this.state.email
    var alertFailure = this.props.name + ' was not shared. Please check the info and try again.'

    db.post('/pet/accessibility', postObj)
    .then(function (response) {
      if (response.data.success) {
        Alert.alert(
          'Success',
          alertSuccess,
          [
            {text: 'OK'}
          ]
        )
        NavigationActions.pop()
      } else {
        Alert.alert(
          'Failure',
          alertFailure,
          [
            {text: 'OK'}
          ]
        )
      }
    })
  }

  render () {
    var accessLevels = {
      items: [
        { id: 'read', name: 'Read' },
        { id: 'write', name: 'Write' }
      ]
    }
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>

              <View style={styles.centered}>
                <Image source={Images.datCat} style={styles.profileImage} />
              </View>

              <Text style={styles.infoTitleText}>Share With User</Text>
              <TextInput onChangeText={this.updateShareToEmail.bind(this)} value={this.state.email} placeholder='Email of user' placeholderTextColor='#787A7F' style={styles.sectionInput} />

              <Text style={styles.infoTitleText}>Cat Name</Text>
              <Text style={styles.infoText}>{this.props.name}</Text>

              <Text style={styles.infoTitleText}>Access Level</Text>
              <DropDown options={accessLevels} onValueChange={this.updateLevel.bind(this)} selectedValue={this.state.access} />

              <RoundedButton onPress={this.shareCat.bind(this)}>
                Share
              </RoundedButton>

            </View>
          </View>

        </ScrollView>
      </View>
    )
  }
}
