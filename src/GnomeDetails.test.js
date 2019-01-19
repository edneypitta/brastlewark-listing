import React from 'react'
import { shallow } from 'enzyme'
import GnomeDetails from './GnomeDetails'

describe('GnomeDetails', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <GnomeDetails
        gnome={{ name: 'gnome 1' }} />)
        
    expect(component).toMatchSnapshot()
  })
})
