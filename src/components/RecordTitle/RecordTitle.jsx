import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function RecordTitle({ id, title }) {
  return (
    <h3 className="item-records__title">
      <Link
        to={`/notes/${id}`}
        title={title}
      >
        { title }
      </Link>
    </h3>
  )
}

RecordTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default RecordTitle
