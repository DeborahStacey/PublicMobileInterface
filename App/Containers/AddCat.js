import React from 'react'
import { ScrollView, Text, View, TextInput, Alert } from 'react-native'
import RoundedButton from '../Components/RoundedButton'
import DropDown from '../Components/DropDown'
import { Colors } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import {create} from 'apisauce'

// Styles
import styles from './Styles/PresentationScreenStyle'

const db = create({
  baseURL: 'https://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})

export default class AddCat extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      breed: 0,
      gender: 0,
      dob: '2016-01-01',
      weight: '',
      height: '',
      length: '',
      breeds: {},
      genders: {}
    }
  }

  componentWillMount () {
    // creating a var for this inside of the promisses
    var that = this

    // The 1 here is to indicate cat for the animal type
    db.get('/animal/1/breeds')
    .then(function (response) {
      var array = response.data.breeds
      var optionsObj = {
        'items': array
      }
      that.setState({
        breeds: optionsObj
      })
    })
    .catch((error) => window.alert(error))

    // getting the vaild animal genders
    db.get('/animal/genders')
    .then(function (response) {
      var array = response.data.genders
      var optionsObj = {
        'items': array
      }
      that.setState({
        genders: optionsObj
      })
    })
    .catch((error) => window.alert(error))
  }

  registerCat () {
    var postObj = {
      'name': this.state.name,
      'animalTypeID': 1,
      'breed': parseInt(this.state.breed),
      'gender': parseInt(this.state.gender),
      'dateOfBirth': this.state.dob,
      'weight': parseFloat(this.state.weight),
      'height': parseFloat(this.state.height),
      'length': parseFloat(this.state.length),
      'declawed': 'false',
      'outdoor': 'false',
      'fixed': 'false'
    }

    var alertSuccess = this.state.name + ' has been added to your cats!'
    var alertFailure = this.state.name + ' was not created. Please check the info and try again.'

    db.post('/pet/create', postObj)
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

  updateName (event) {
    this.setState({
      name: event
    })
  }

  updateBreed (event) {
    this.setState({
      breed: event
    })
  }

  updateGender (event) {
    this.setState({
      gender: event
    })
  }

  updateDateOfBirth (event) {
    this.setState({
      dob: event
    })
  }

  updateWeight (event) {
    this.setState({
      weight: event
    })
  }

  updateHeight (event) {
    this.setState({
      height: event
    })
  }

  updateLength (event) {
    this.setState({
      length: event
    })
  }

  focusNextField = (nextField) => {
    this.refs[nextField].focus()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>

              <Text style={styles.sectionText}>Name</Text>
              <TextInput onChangeText={this.updateName.bind(this)} returnKeyType='next' placeholder='Enter your cat&apos;s name' placeholderTextColor={Colors.placeholderText} style={styles.sectionInput} />

              <Text style={styles.sectionText}>Breed</Text>
              <DropDown options={this.state.breeds} onValueChange={this.updateBreed.bind(this)} selectedValue={this.state.breed} />

              <Text style={styles.sectionText}>Gender</Text>
              <DropDown options={this.state.genders} onValueChange={this.updateGender.bind(this)} selectedValue={this.state.gender} />

              <Text style={styles.sectionText}>Weight(lbs)</Text>
              <TextInput ref='1' keyboardType='numeric' onSubmitEditing={() => this.focusNextField('2')} returnKeyType='next' onChangeText={this.updateWeight.bind(this)} placeholder='Enter your cat&apos;s weight (lbs)' placeholderTextColor={Colors.placeholderText} style={styles.sectionInput} />

              <Text style={styles.sectionText}>Height(cm)</Text>
              <TextInput ref='2' keyboardType='numeric' onSubmitEditing={() => this.focusNextField('3')} returnKeyType='next' onChangeText={this.updateHeight.bind(this)} placeholder='Enter your cat&apos;s height (cm)' placeholderTextColor={Colors.placeholderText} style={styles.sectionInput} />

              <Text style={styles.sectionText}>Length(cm)</Text>
              <TextInput ref='3' keyboardType='numeric' onSubmitEditing={this.registerCat.bind(this)} returnKeyType='done' onChangeText={this.updateLength.bind(this)} placeholder='Enter your cat&apos;s length (cm)' placeholderTextColor={Colors.placeholderText} style={styles.sectionInput} />

            </View>
          </View>

          <RoundedButton onPress={this.registerCat.bind(this)}>
            Register
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}
