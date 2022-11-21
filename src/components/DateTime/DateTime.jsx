import React from 'react'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../../utils'

function CardTimestamp({ timestamp }) {
  return (
    <p className="Card-Record__createdAt">
      { showFormattedDate(timestamp) }
    </p>
  )
}

CardTimestamp.propTypes = {
  timestamp: PropTypes.string.isRequired
}

export default CardTimestamp
