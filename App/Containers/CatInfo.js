import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import {create} from 'apisauce'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

// const db = create({
//   baseURL: 'https://cat.ddns.net/Backend/api.php',
//   headers: {'Content-Type': 'application/json'}
// })

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

  componentWillMount () {
    var that = this

    db.get('/pet/view/' + this.props.data)
    .then(function (response) {
      var petData = response.data.pet
      that.setState({
        name: petData.name,
        breed: petData.breed,
        gender: petData.gender,
        dob: petData.dateofbirth,
        weight: petData.weight,
        height: petData.height,
        length: petData.length
      })
    })
    .catch((error) => window.alert(error))


    db.get('/animal/1/breeds')
    .then(function (response) {
      var breedsData = response.data.breeds
      that.setState({
        breeds: breedsData
      })
      console.log(breedsData)
    })
    .catch((error) => window.alert(error))


    db.get('/animal/genders')
    .then(function (response) {
      var gendersData = response.data.genders
      that.setState({
        genders: gendersData
      })
      console.log(gendersData[1])
    })
    .catch((error) => window.alert(error))
  }

  render () {
    var curBreed = "";
    var curGender = "";

    if (this.state.breeds != null) {
      for (var i = 0; i < this.state.breeds.length; i++) {
        if(parseInt(this.state.breeds[i].id) == this.state.breed){
          curBreed = this.state.breeds[i].name;
        }
      }
    }

    if (this.state.genders != null) {
      for (var i = 0; i < this.state.genders.length; i++) {
        if(parseInt(this.state.genders[i].id) == this.state.gender){
          curGender = this.state.genders[i].name;
        }
      }
    }


    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>

              <View style={styles.centered}>
                <Image source={require('../Images/datCat.png')} style={styles.profileImage} />
              </View>

              <Text style={styles.infoTitleText}>Name</Text>
              <Text style={styles.infoText}>{this.state.name}</Text>

              <Text style={styles.infoTitleText}>Breed</Text>
              <Text style={styles.infoText}>{curBreed}</Text>

              <Text style={styles.infoTitleText}>Gender</Text>
              <Text style={styles.infoText}>{curGender}</Text>

              <Text style={styles.infoTitleText}>Weight</Text>
              <Text style={styles.infoText}>{this.state.weight} lbs</Text>

              <Text style={styles.infoTitleText}>Height</Text>
              <Text style={styles.infoText}>{this.state.height} cm</Text>

              <Text style={styles.infoTitleText}>Length</Text>
              <Text style={styles.infoText}>{this.state.length} cm</Text>

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
