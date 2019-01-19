import React from 'react'
import PropTypes from 'prop-types'
import './GnomeDetails.css'
import Avatar from './shared/Avatar'

const GnomeDetails = ({
  gnome: {
    thumbnail,
    name,
    age,
    weight,
    height,
    hair_color,
    professions = [],
    friends = [] } }) =>
  <div className="gnome-details">
    <div className="header">
      <div>
        <Avatar
          src={thumbnail}
          alt="Gnome Thumbnail" />
      </div>
      <div>{name}</div>
    </div>
    <div className="info">
      <ul>
        <li><span>Age: </span>{age}</li>
        <li><span>Weight: </span>{weight}</li>
        <li><span>Height: </span>{height}</li>
        <li><span>Hair Color: </span>{hair_color}</li>
        <li><span>Professions: </span>{professions.join(', ')}</li>
        <li><span>Friends: </span>{friends.join(', ')}</li>
      </ul>
    </div>
  </div>

GnomeDetails.propTypes = {
  gnome: PropTypes.object.isRequired
}

export default GnomeDetails