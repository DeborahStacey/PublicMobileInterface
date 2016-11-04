import React from 'react'
import { ScrollView, Text, Image, View, TextInput, Modal } from 'react-native'
import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import DropDown from '../Components/DropDown'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import {create} from 'apisauce'
import Calendar from 'react-native-calendar-datepicker'
import Moment from 'moment'

// Styles
import styles from './Styles/PresentationScreenStyle'

const db = create({
  baseURL: 'http://cat.ddns.net/Backend/api.php',
  headers: {'Content-Type': 'application/json'}
})

export default class AddCat extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      breed: 0,
      gender: 0,
      dob: 'Not yet set...',
      selectedDate: Moment().now,
      weight: '',
      height: '',
      length: '',
      breeds: {},
      genders: {},
      modalVisible: false
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
      'breed': this.state.breed,
      'gender': this.state.gender,
      'dateOfBirth': this.state.dob,
      'weight': this.state.weight,
      'height': this.state.height,
      'length': this.state.length
    }

    db.post('/pet/create', postObj)
    .then((response) => window.alert(JSON.stringify(response.data)))
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
    var formattedDate = Moment(event).format('YYYY-MM-DD')
    this.setState({
      dob: formattedDate,
      selectedDate: event,
      modalVisible: false
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

  setModalVisible (visible) {
    this.setState({
      modalVisible: visible
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>

          <View style={styles.messageBox}>
            <View style={styles.messageBoxContents}>

              <Text style={styles.sectionText}>Name</Text>
              <TextInput onChangeText={this.updateName.bind(this)} placeholder='Enter your cats name' placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.sectionText}>Breed</Text>
              <DropDown options={this.state.breeds} onValueChange={this.updateBreed.bind(this)} selectedValue={this.state.breed} />

              <Text style={styles.sectionText}>Gender</Text>
              <DropDown options={this.state.genders} onValueChange={this.updateGender.bind(this)} selectedValue={this.state.gender} />

              <Modal animationType='none' transparent={false} visible={this.state.modalVisible} onRequestClose={() => this.setModalVisible(false)}>
                <Calendar
                  startStage='year'
                  onChange={this.updateDateOfBirth.bind(this)}
                  selected={this.state.selectedDate}
                  // We use Moment.js to give the minimum and maximum dates.
                  minDate={Moment().subtract(25, 'years')}
                  maxDate={Moment().add(1, 'month').startOf('day')}
                />
              </Modal>

              <Text style={styles.sectionText}>Date of Birth</Text>
              <RoundedButton onPress={this.setModalVisible.bind(this, true)}>
                {this.state.dob}
              </RoundedButton>

              <Text style={styles.sectionText}>Weight</Text>
              <TextInput onChangeText={this.updateWeight.bind(this)} placeholder='Enter your cats weight' placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.sectionText}>Height</Text>
              <TextInput onChangeText={this.updateHeight.bind(this)} placeholder='Enter your cats height' placeholderTextColor='white' style={styles.sectionInput} />

              <Text style={styles.sectionText}>Length</Text>
              <TextInput onChangeText={this.updateLength.bind(this)} placeholder='Enter your cats length' placeholderTextColor='white' style={styles.sectionInput} />

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
