import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              WellCat!
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.catList}>
            My Cats
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.addCat}>
            Add Cat
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.accountInfo}>
            Account Info
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}
