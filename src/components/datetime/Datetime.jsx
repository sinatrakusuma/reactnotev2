import React from 'react'
import PropTypes from 'prop-types'
import { RecordDate } from '../../data'

function Datetime({ Times }) {
  return (
    <p className="RecordDate">
      { RecordDate(Times) }
    </p>
  )
}

Datetime.propTypes = {
  Times: PropTypes.string.isRequired
}

export default Datetime
