import React from 'react'
import PropTypes from 'prop-types'
import CardTitle from '../RecordTitle/RecordTitle'
import CardTimestamp from '../DateTime/DateTime'
import CardBody from '../Records/Records'

function Card({ note }) {
  return (
    <article className="Card-Record">
      <CardTitle
        id={note.id}
        title={note.title}
      />
      <CardTimestamp
        timestamp={note.createdAt}
      />
      <CardBody
        body={note.body}
      />
    </article>
  )
}

Card.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default Card
