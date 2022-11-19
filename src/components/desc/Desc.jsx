import React from 'react'
import PropTypes from 'prop-types'
import { RecordArticle } from '../../data'

function Desc({ body }) {
  return (
    <p className="Description">
      { RecordArticle(body) }
    </p>
  )
}

Desc.propTypes = {
  body: PropTypes.string.isRequired
}

export default Desc
