import React from 'react'
import { ScrollView, Text, Image, View, TextInput, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import NumericalSlider from '../Components/NumericalSlider'
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
      weight: 0,
      height: 0,
      length: 0,
      breeds: {},
      genders: {},
      weightState: 0,
      heightState: 0,
      lengthState: 0
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
        weight: parseInt(petData.weight),
        height: parseInt(petData.height),
        length: parseInt(petData.length)
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

  updateName (newName) {
    this.setState({
      name: newName
    })
  }

  weightClick () {
    this.setState({
      weightState: 1
    })
  }

  updateWeight (newWeight) {
    this.setState({
      weight: newWeight,
      weightState: 0
    })
  }

  heightClick () {
    this.setState({
      heightState: 1
    })
  }

  updateHeight (newHeight) {
    this.setState({
      height: newHeight,
      heightState: 0
    })
  }

  lengthClick () {
    this.setState({
      lengthState: 1
    })
  }

  updateLength (event) {
    this.setState({
      length: event,
      lengthState: 0
    })
  }

  updateCat () {
    console.log('Updated Cat Info')

    // var postObj = {
    //   'name': this.state.name,
    //   'animalTypeID': '1',
    //   'breed': this.state.breed,
    //   'gender': this.state.gender,
    //   'dateOfBirth': this.state.dob,
    //   'weight': this.state.weight,
    //   'height': this.state.height,
    //   'length': this.state.length,
    //   'declawed': 'false',
    //   'outdoor': 'false',
    //   'fixed': 'false'
    // }

    // db.post('/pet/update', postObj)
    // .then((response) => window.alert(JSON.stringify(response.data)))

    //waiting on Database team
  }

  render () {
    var curBreed = ''
    var curGender = ''

    if (this.state.breeds != null) {
      for (var i = 0; i < this.state.breeds.length; i++) {
        if (parseInt(this.state.breeds[i].id) === this.state.breed) {
          curBreed = this.state.breeds[i].name
        }
      }
    }

    if (this.state.genders != null) {
      for (var j = 0; j < this.state.genders.length; j++) {
        if (parseInt(this.state.genders[j].id) === this.state.gender) {
          curGender = this.state.genders[j].name
        }
      }
    }

    // I know this looks like crap but it works and I think it might actually be the correct way.

    var weight
    if (this.state.weightState === 0) {
      weight = (
        <TouchableOpacity onPress={this.weightClick.bind(this)}>
          <Text style={styles.infoText} >{this.state.weight} lbs</Text>
        </TouchableOpacity>
      )
    } else {
      weight = (
        <NumericalSlider minimumValue={1} maximumValue={50} step={1} initialValue={this.state.weight} onClick={this.updateWeight.bind(this)} units='lbs' />
      )
    }

    var height
    if (this.state.heightState === 0) {
      height = (
        <TouchableOpacity onPress={this.heightClick.bind(this)}>
          <Text style={styles.infoText} >{this.state.height} cm</Text>
        </TouchableOpacity>
      )
    } else {
      height = (
        <NumericalSlider minimumValue={1} maximumValue={50} step={1} initialValue={this.state.height} onClick={this.updateHeight.bind(this)} units='cm' />
      )
    }

    var length
    if (this.state.lengthState === 0) {
      length = (
        <TouchableOpacity onPress={this.lengthClick.bind(this)}>
          <Text style={styles.infoText} >{this.state.length} cm</Text>
        </TouchableOpacity>
      )
    } else {
      length = (
        <NumericalSlider minimumValue={1} maximumValue={120} step={1} initialValue={this.state.length} onClick={this.updateLength.bind(this)} units='cm' />
      )
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

              <Text style={styles.infoTitleText}>Weight</Text>
              {weight}

              <Text style={styles.infoTitleText}>Height</Text>
              {height}

              <Text style={styles.infoTitleText}>Length</Text>
              {length}

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
