'use strict'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  catCardMale: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'blue'
  },
  catCardFemale: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: '#ac00e0'
  },
  catCardOther: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'green'
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
    paddingTop: 5
  }
})
