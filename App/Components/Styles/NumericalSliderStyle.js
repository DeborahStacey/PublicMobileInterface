'use strict'

import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  sliderStyle: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  },
  innerContents: {
    flexDirection: 'row'
  },
  slider: {
    flex: 80,
    paddingLeft: 10
  },
  button: {
    flex: 20,
    paddingRight: 10
  },
  sliderValue: {
    color: Colors.mainText
  }
})
