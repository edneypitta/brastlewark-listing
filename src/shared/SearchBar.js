import React from 'react'
import PropTypes from 'prop-types'
import './SearchBar.css'

const SearchBar = ({ value, onChange }) => 
  <div className="wrapper">
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={onChange}/>
  </div>

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
  value: ''
}

export default SearchBar