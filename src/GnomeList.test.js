import React from 'react'
import { shallow } from 'enzyme'
import GnomeList from './GnomeList'

describe('GnomeList', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <GnomeList
        gnomes={[{ name: 'gnome 1' }, { name: 'gnome 2' }]}
        onClick={jest.fn()} />)
    expect(component).toMatchSnapshot()
  })

  it('calls onClick function provided', () => {
    const onClick = jest.fn()
    const gnome = { name: 'gnome 1' }
    const component = shallow(
      <GnomeList
        gnomes={[gnome]}
        onClick={onClick} />)

    component.find('li').simulate('click')

    expect(onClick).toHaveBeenCalledWith(gnome)
  })
})
