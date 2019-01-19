import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const component = shallow(<SearchBar value="" onChange={jest.fn()} />)
    expect(component).toMatchSnapshot()
  })
})
