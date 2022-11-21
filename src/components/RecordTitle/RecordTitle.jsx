import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CardTitle({ id, title }) {
  return (
    <h3 className="Card-Record__title">
      <Link
        to={`/notes/${id}`}
        title={title}
      >
        { title }
      </Link>
    </h3>
  )
}

CardTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default CardTitle
