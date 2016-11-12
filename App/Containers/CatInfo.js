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
      catInfoData: null
    }
  }

  componentWillMount () {
    // creating a var for this inside of the promisses
    var that = this

    // The 1 here is to indicate cat for the animal type
    db.get('/pet/view/'+ this.props.data)
    .then(function (response) {
      var array = response.data
      that.setState({
        catInfoData: array
      })
    })
    .catch((error) => window.alert(error))
  }

  openOwner () {
    alert("not yet implemented")
  }

  render () {

    var catInfoData = this.state.catInfoData
    var catInfo = []
    if (catInfoData != null) {
      alert(catInfoData)
      for (var i = 0; i < catInfoData.length; i++) {
        catInfo.push(catInfoData[i])
      }
    }
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
              <Text style={styles.infoText}>{catInfo[0]}</Text>

              <Text style={styles.infoTitleText}>Breed</Text>
              <Text style={styles.infoText}>{catInfo[1]}</Text>

              <Text style={styles.infoTitleText}>Gender</Text>
              <Text style={styles.infoText}>{catInfo[2]}</Text>

              <Text style={styles.infoTitleText}>Weight</Text>
              <Text style={styles.infoText}>{catInfo[3]}</Text>

              <Text style={styles.infoTitleText}>Height</Text>
              <Text style={styles.infoText}>{catInfo[4]}</Text>

              <Text style={styles.infoTitleText}>Length</Text>
              <Text style={styles.infoText}>{catInfo[5]}</Text>

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
