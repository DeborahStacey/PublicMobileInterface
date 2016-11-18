import React from 'react'
import { View, Text, Slider } from 'react-native'
import styles from './Styles/NumericalSliderStyle'
import Button from 'react-native-button'

export default class NumericalSlider extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      sliderValue: 0
    }
  }

  componentDidMount () {
    this.setState({
      sliderValue: this.props.initialValue
    })
  }

  buttonClick () {
    this.props.onClick(this.state.sliderValue)
  }

  updateSlider (event) {
    this.setState({
      sliderValue: event
    })
  }

  render () {
    return (
      <View style={styles.sliderStyle}>
        <Text style={styles.sliderValue}>{this.state.sliderValue} {this.props.units}</Text>
        <View style={styles.innerContents}>
          <Slider style={styles.slider} minimumValue={this.props.minimumValue} maximumValue={this.props.maximumValue} step={this.props.step} value={this.props.initialValue} onValueChange={this.updateSlider.bind(this)} />
          <Button style={styles.button} onPress={this.buttonClick.bind(this)} >
            Save
          </Button>
        </View>
      </View>
    )
  }
}

// Options should be an object with name and value inside of it
// ex {"name": x, "value": y}
NumericalSlider.propTypes = {
  minimumValue: React.PropTypes.number.isRequired,
  maximumValue: React.PropTypes.number.isRequired,
  step: React.PropTypes.number.isRequired,
  initialValue: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
  units: React.PropTypes.string
}
