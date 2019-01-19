import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'

const Avatar = props =>
  <img {...props} />

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Avatar