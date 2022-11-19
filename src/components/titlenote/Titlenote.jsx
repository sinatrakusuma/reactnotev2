import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Titlenote({ id, title }) {
  return (
    <h3 className="Card_Record__title">
      <Link
        to={`/records/${id}`}
        title={title}
      >
        { title }
      </Link>
    </h3>
  )
}

Titlenote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Titlenote
