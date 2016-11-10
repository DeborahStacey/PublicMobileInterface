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
    color: 'white',
    flexGrow: 95
  },
  item: {
    color: 'white'
  },
  hackPadding: {
    flexGrow: 5,
    paddingTop: 13
  }
})
