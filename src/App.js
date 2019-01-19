import React, { Component } from 'react'
import './App.css'
import Modal from './shared/Modal'
import SearchBar from './shared/SearchBar'
import GnomeList from './GnomeList'
import GnomeDetails from './GnomeDetails'

const gnomesUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

const sortByName = gnomes => gnomes.sort((a, b) => a.name.localeCompare(b.name))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: { isOpen: false },
      gnomes: []
    }
  }

  handleSearchTextChange = ({ target: { value: searchText } }) =>
    this.setState({ searchText })

  toggleModal = gnome =>
    this.setState({
      modal: {
        isOpen: !this.state.modal.isOpen,
        gnome
      }
    })

  getFilteredGnomes = () =>
    this.state.gnomes
      .filter(
        gnome => !this.state.searchText ||
          gnome.name.toLowerCase().includes(this.state.searchText.toLowerCase()))

  componentDidMount() {
    fetch(gnomesUrl)
      .then(response => response.json())
      .then(data => data.Brastlewark)
      .then(sortByName)
      .then(gnomes => this.setState({ gnomes }))
  }

  render() {
    const { searchText, modal } = this.state

    return (
      <div className="App">
        <header>
          <h1>Brastlewark Gnomes</h1>
        </header>
        <main>
          <SearchBar
            value={searchText}
            onChange={this.handleSearchTextChange} />
          <GnomeList
            gnomes={this.getFilteredGnomes()}
            onClick={this.toggleModal} />
          <Modal
            show={modal.isOpen}
            onClose={this.toggleModal.bind(this, null)}>
            {modal.isOpen &&
              <GnomeDetails gnome={modal.gnome} />}
          </Modal>
        </main>
        <footer>
          Made with ♥ by Edney Pitta
        </footer>
      </div>
    )
  }
}

export default App
