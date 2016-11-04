import 'react-native'
import React from 'react'
import AddCat from '../AddCat'
import renderer from 'react-test-renderer'

jest.mock('Picker', () => 'Picker')

it('renders correctly', () => {
  const tree = renderer.create(
    <AddCat />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
