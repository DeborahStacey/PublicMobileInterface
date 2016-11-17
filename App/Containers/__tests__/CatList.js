import 'react-native'
import React from 'react'
import CatList from '../CatList'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <CatList />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
