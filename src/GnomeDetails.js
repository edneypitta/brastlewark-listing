import React from 'react'
import PropTypes from 'prop-types'
import './GnomeDetails.css'
import Avatar from './shared/Avatar'

const GnomeDetails = ({ gnome: { professions = [], friends = [], ...gnome } }) =>
  <div className="gnome-details">
    <div className="header">
      <div>
        <Avatar
          src={gnome.thumbnail}
          alt="Gnome Thumbnail" />
      </div>
      <div>{gnome.name}</div>
    </div>
    <div className="info">
      <ul>
        <li><span>Age: </span>{gnome.age}</li>
        <li><span>Weight: </span>{gnome.weight}</li>
        <li><span>Height: </span>{gnome.height}</li>
        <li><span>Hair Color: </span>{gnome.hair_color}</li>
        <li><span>Professions: </span>{professions.join(', ')}</li>
        <li><span>Friends: </span>{friends.join(', ')}</li>
      </ul>
    </div>
  </div>

GnomeDetails.propTypes = {
  gnome: PropTypes.object.isRequired
}

export default GnomeDetails