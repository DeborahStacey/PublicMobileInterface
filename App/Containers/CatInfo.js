import React from 'react'
import { ScrollView, Text, Image, View, TextInput } from 'react-native'
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

  updateName(event){
    this.setState({
      name: event
    })
  }

  updateWeight(event){
    this.setState({
      weight: event
    })
  }

  updateHeight(event){
    this.setState({
      height: event
    })
  }

  updateLength(event){
    this.setState({
      length: event
    })
  }

  updateCat(){
    //run database call here
    //alert("Updated Cat Info")
    console.log("Updated Cat Info")
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
              <TextInput onBlur={this.updateCat.bind(this)} onChangeText={this.updateName.bind(this)} value={this.state.name} placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.infoTitleText}>Breed</Text>
              <Text style={styles.infoText}>{curBreed}</Text>

              <Text style={styles.infoTitleText}>Gender</Text>
              <Text style={styles.infoText}>{curGender}</Text>

              <Text style={styles.infoTitleText}>Weight (lbs)</Text>              
              <TextInput onBlur={this.updateCat.bind(this)} onChangeText={this.updateWeight.bind(this)} value={this.state.weight} placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.infoTitleText}>Height (cm)</Text>
              <TextInput onBlur={this.updateCat.bind(this)} onChangeText={this.updateHeight.bind(this)} value={this.state.height} placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.infoTitleText}>Length (cm)</Text>
              <TextInput onBlur={this.updateCat.bind(this)} onChangeText={this.updateLength.bind(this)} value={this.state.length} placeholderTextColor='white' style={styles.sectionInput} />

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
