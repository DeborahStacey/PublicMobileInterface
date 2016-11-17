import 'react-native'
import React from 'react'
import DrawerContent from '../DrawerContent'
import renderer from 'react-test-renderer'

jest.mock('react-native-router-flux', () => {
  return {
    Actions: {
      presentationScreen: () => {},
      accountInfo: () => {},
      catList: () => {}
    }
  }
})

it('renders correctly', () => {
  const tree = renderer.create(
    <DrawerContent />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
