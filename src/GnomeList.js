import React from 'react'
import PropTypes from 'prop-types'
import './GnomeList.css'
import Avatar from './shared/Avatar'

const GnomeList = ({ gnomes, onClick }) =>
  <ul className="gnome-list">
    {gnomes.map(gnome =>
      <li key={gnome.id} onClick={onClick.bind(null, gnome)}>
        <div>
          <Avatar
            src={gnome.thumbnail}
            alt="Gnome Thumbnail" />
        </div>
        <div>{gnome.name}</div>
      </li>
    )}
  </ul>

GnomeList.propTypes = {
  gnomes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default GnomeList