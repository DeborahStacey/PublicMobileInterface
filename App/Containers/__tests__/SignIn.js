import 'react-native'
import React from 'react'
import SignIn from '../SignIn'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <SignIn />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
