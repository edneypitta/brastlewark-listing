import React from 'react'
import { shallow } from 'enzyme'
import Modal from './Modal'

describe('Modal', () => {
  it('renders nothing if show is false', () => {
    const component = shallow(<Modal show={false} />)
    expect(component).toMatchSnapshot()
  })

  it('renders if show is true', () => {
    const component = shallow(<Modal show={true} />)
    expect(component).toMatchSnapshot()
  })
})
