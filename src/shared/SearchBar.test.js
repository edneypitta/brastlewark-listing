import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('renders without crashing', () => {
    const component = shallow(<SearchBar value="" onChange={jest.fn()} />)
    expect(component).toMatchSnapshot()
  })

  it('calls onChange function provided', () => {
    const onChange = jest.fn()
    const component = shallow(<SearchBar value="" onChange={onChange} />)
    
    component.find('input').simulate('change')

    expect(onChange).toHaveBeenCalled()
  })
})
