import 'react-native'
import React from 'react'
import AccountInfo from '../AccountInfo'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <AccountInfo />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
