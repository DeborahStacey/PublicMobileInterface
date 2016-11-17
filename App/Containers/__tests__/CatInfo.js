import 'react-native'
import React from 'react'
import CatInfo from '../CatInfo'
import renderer from 'react-test-renderer'

jest.mock('react-native-router-flux', () => {
  return {
    Actions: {
      addCat: () => {},
      accountInfo: () => {},
      catInfo: () => {},
      catList: () => {}
    }
  }
})

it('renders correctly', () => {
  const tree = renderer.create(
    <CatInfo />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
