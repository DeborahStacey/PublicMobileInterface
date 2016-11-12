import React from 'react'
import { ScrollView, Text, Image, View, TextInput } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import DropDown from '../Components/DropDown'
import { Actions as NavigationActions } from 'react-native-router-flux'
import {create} from 'apisauce'
import Button from 'react-native-button'

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
            <Text style={styles.infoTitleText}>First Name</Text>
            <Text style={styles.infoText}>        Lob</Text>
            <Text style={styles.infoTitleText}>Last Name</Text>
            <Text style={styles.infoText}>        Riddle</Text>
            <Text style={styles.infoTitleText}>Email</Text>
            <Text style={styles.infoText}>        LobRiddle@Gmail.com</Text>
            <Text style={styles.infoTitleText}>Address</Text>
            <Text style={styles.infoText}>        45-375 Lottle Dr</Text>
            <Text style={styles.infoTitleText}>Cat Owner?</Text>
            <Text style={styles.infoText}>        Yes</Text>

            <Button style={{textAlign: 'left', fontSize: 20, color: 'green', paddingLeft: 10}} styleDisabled={{color: 'red'}} onPress={NavigationActions.catList}>
                      View Cats
            </Button>
            <Button style={{textAlign: 'left', fontSize: 20, color: 'green', paddingLeft: 10, paddingBottom: 45}} styleDisabled={{color: 'red'}} onPress={() => this._handlePress()}>
                      View Cat Groups
            </Button>


            <RoundedButton onPress={() => this._handlePress()}>
            Edit
            </RoundedButton>
        </ScrollView>
      </View>
    )
  }
}
