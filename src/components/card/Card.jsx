import React from 'react'
import PropTypes from 'prop-types'
import Titlenote from '../titlenote/Titlenote'
import Datetime from '../datetime/Datetime'
import Desc from '../desc/Desc'

function Card({ record }) {
  return (
    <article className="Card_note">
      <Titlenote
        id={record.id}
        title={record.title}
      />
      <Datetime
        Times={record.createdAt}
      />
      <Desc
        body={record.body}
      />
    </article>
  )
}

Card.propTypes = {
  record: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default Card
