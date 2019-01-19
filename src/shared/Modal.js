import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const Modal = props => {
  if (!props.show) {
    return null
  }

  return (
    <div className="backdrop">
      <div className="modal">
        {props.children}
        <div className="footer">
          <button onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
}

export default Modal