import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'

function ListRecord({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note) => <Card key={note.id} note={note} />)}
    </section>
  )
}

ListRecord.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired
}

export default ListRecord
