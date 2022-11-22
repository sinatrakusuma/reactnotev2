import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../../utils'

function DateTime({ timestamp }) {
  return (
    <p className="note-item__createdAt">
      { showFormattedDate(timestamp) }
    </p>
  )
}

DateTime.propTypes = {
  timestamp: PropTypes.string.isRequired
}

export default DateTime
