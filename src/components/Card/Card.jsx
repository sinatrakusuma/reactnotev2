import React from 'react'
import PropTypes from 'prop-types'
import RecordTitle from '../RecordTitle/RecordTitle'
import DateTime from '../DateTime/DateTime'
import Records from '../Records/Records'

function Card({ note }) {
  return (
    <article className="item-records">
      <RecordTitle
        id={note.id}
        title={note.title}
      />
      <DateTime
        timestamp={note.createdAt}
      />
      <Records
        body={note.body}
      />
    </article>
  )
}

Card.propTypes = {
  note: PropTypes.oneOfType([PropTypes.object]).isRequired
}

export default Card
