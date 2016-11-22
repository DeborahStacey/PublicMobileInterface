import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, Alert } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { create } from 'apisauce'

const db = create({
  baseURL: 'https://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  handleSignOut = () => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Sign Out',
          onPress: () => {
            db.post('/user/logout').then((response) => {
              if (response.ok) {
                NavigationActions.signIn()
                this.toggleDrawer()
                Alert.alert('Signed out successfully')
              } else {
                Alert.alert('An error has occurred')
              }
            })
          }
        },
        {
          text: 'Cancel'
        }
      ]
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Home' onPress={NavigationActions.presentationScreen} />
        <DrawerButton text='Account' onPress={NavigationActions.accountInfo} />
        <DrawerButton text='Cats' onPress={NavigationActions.catList} />
        <DrawerButton text='Sign Out' onPress={this.handleSignOut} />
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
