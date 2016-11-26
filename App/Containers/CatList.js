import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CatCard from '../Components/CatCard'
import { Actions as NavigationActions } from 'react-native-router-flux'
import {create} from 'apisauce'

// Styles
import styles from './Styles/PresentationScreenStyle'

const db = create({
  baseURL: 'https://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})

export default class CatList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      catsData: null
    }
  }

  componentWillMount () {
    // creating a var for this inside of the promisses
    var that = this

    // The 1 here is to indicate cat for the animal type
    db.get('/pet/pets')
    .then(function (response) {
      var array = response.data

      if (array.message !== 'No pets found') {
        that.setState({
          catsData: array
        })
      }
    })
    .catch((error) => window.alert(error))
  }

  cardClicked (event) {
    NavigationActions.catInfo(event)
  }

  render () {
    var catsData = this.state.catsData
    var catCards = []

    if (catsData != null) {
      for (var i = 0; i < catsData.personal.length; i++) {
        catCards.push(<CatCard basicCatInfo={catsData.personal[i]} onClick={this.cardClicked.bind(this)} shared={false} key={i} />)
      }
      for (var j = 0; j < catsData.shared.length; j++) {
        catCards.push(<CatCard basicCatInfo={catsData.shared[j]} onClick={this.cardClicked.bind(this)} shared key={'s' + j} />)
      }
    } else {
      return (
        <View style={styles.mainContainer}>
          <ScrollView style={styles.container}>

            <View style={styles.messageBox}>
              <View style={styles.messageBoxContents}>

                <Text style={styles.sectionText}>You don't have any cats yet!</Text>

              </View>
            </View>

          </ScrollView>
        </View>
      )
    }

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>

              <Text style={styles.sectionText}>My Cats</Text>
              {catCards}

            </View>
          </View>

        </ScrollView>
      </View>
    )
  }
}
