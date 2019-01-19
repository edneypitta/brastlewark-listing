import React from 'react'
import { mount, shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    const component = mount(<App />)
    expect(component).toMatchSnapshot()
  })

  describe('getFilteredGnomes', () => {
    it('filters gnomes by searchText ignoring case', () => {
      const component = shallow(<App />)
      component.instance().setState({
        gnomes: [{ name: 'gnome 1' }, { name: 'gnome 2' }],
        searchText: 'GNOME 1'
      })

      const gnomes = component.instance().getFilteredGnomes()
      expect(gnomes).toHaveLength(1)
    })
  })

  it('renders GnomeDetails if modal is open', () => {
    const component = shallow(<App />)
    component.instance().setState({
      modal: {
        isOpen: true,
        gnome: {}
      }
    })

    expect(component.find('GnomeDetails')).toHaveLength(1)
  })
})
