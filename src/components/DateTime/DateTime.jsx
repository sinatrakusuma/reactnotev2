import React from 'react'
import PropTypes from 'prop-types'
import { formatDatetime } from '../../utils'

function DateTime({ timestamp }) {
  return (
    <p className="item-records__createdAt">
      { formatDatetime(timestamp) }
    </p>
  )
}

DateTime.propTypes = {
  timestamp: PropTypes.string.isRequired
}

export default DateTime
