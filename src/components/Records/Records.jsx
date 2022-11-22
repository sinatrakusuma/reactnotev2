import React from 'react'
import PropTypes from 'prop-types'
import { extractContent } from '../../utils'

function Records({ body }) {
  return (
    <p className="item-records__body">
      { extractContent(body) }
    </p>
  )
}

Records.propTypes = {
  body: PropTypes.string.isRequired
}

export default Records
