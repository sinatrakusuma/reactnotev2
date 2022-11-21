import React from 'react'
import PropTypes from 'prop-types'
import { extractContent } from '../../utils'

function CardBody({ body }) {
  return (
    <p className="Card-Record__body">
      { extractContent(body) }
    </p>
  )
}

CardBody.propTypes = {
  body: PropTypes.string.isRequired
}

export default CardBody
