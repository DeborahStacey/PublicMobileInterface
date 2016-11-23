'use strict'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  dropStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 99,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey'
  },
  contents: {
    color: 'black',
    flexGrow: 95
  },
  contentsIOS: {
    flexGrow: 95
  },
  item: {
    color: 'black'
  },
  hackPadding: {
    flexGrow: 5,
    paddingTop: 13
  }
})
