import React from 'react'
import { shallow } from 'enzyme'
import Avatar from './Avatar'

describe('Avatar', () => {
  it('renders without crashing', () => {
    const component = shallow(<Avatar src="" alt="" />)
    expect(component).toMatchSnapshot()
  })
})
