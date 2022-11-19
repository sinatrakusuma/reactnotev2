import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card/Card'

function Listnote({ notes }) {
  return (
    <section className="record-list">
      {notes.map((record) => <Card key={record.id} record={record} />)}
    </section>
  )
}

Listnote.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired
}

export default Listnote
