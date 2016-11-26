'use strict'

import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  catCard: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: Colors.mainText
  },
  sharedCatCard: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: Colors.sharedCatColor
  },
  innerContents: {
    flexDirection: 'row'
  },
  textContents: {
    flex: 80,
    overflow: 'hidden'
  },
  name: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 30
  },
  catPicture: {
    marginRight: 10,
    width: 80,
    height: 90,
    flex: 12
  },
  owner: {
    color: 'white',
    paddingLeft: 10
  },
  outter: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  }
})
