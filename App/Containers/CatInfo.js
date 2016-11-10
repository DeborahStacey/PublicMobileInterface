import React from 'react'
import { ScrollView, Text, Image, View, TextInput } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import DropDown from '../Components/DropDown'
import {create} from 'apisauce'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

const db = create({
  baseURL: 'https://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})

export default class CatInfo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      breed: 0,
      gender: 0,
      dob: '',
      weight: '',
      height: '',
      length: '',
      breeds: {},
      genders: {}
    }
  }

  openOwner () {
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

              <Text style={styles.infoTitleText}>Name</Text>
              <Text style={styles.infoText}>Fluffy</Text>

              <Text style={styles.infoTitleText}>Breed</Text>
              <Text style={styles.infoText}>Maine Coon</Text>

              <Text style={styles.infoTitleText}>Gender</Text>
              <Text style={styles.infoText}>Male</Text>

              <Text style={styles.infoTitleText}>Weight</Text>
              <Text style={styles.infoText}>15 lbs</Text>

              <Text style={styles.infoTitleText}>Height</Text>
              <Text style={styles.infoText}>20 cm</Text>

              <Text style={styles.infoTitleText}>Length</Text>
              <Text style={styles.infoText}>50 cm</Text>

            </View>
          </View>

          <RoundedButton onPress={NavigationActions.accountInfo}>
            View Owner
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}
