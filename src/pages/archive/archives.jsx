import React, { useEffect, useState } from 'react'
import Button_Fix from '../../components/button_fix/Button_fix'
import Empty from '../../components/empty/Empty'
import Listnote from '../../components/listnote/Listnote'
import { recordArchived } from '../../data'

function archive() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  const SearchRecord = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search !== '') {
      setNotes(
        recordArchived()
          .filter((record) => record.title.toLowerCase().includes(search.toLowerCase()))
      )
    } else {
      setNotes(recordArchived())
    }
  }, [search])
  return (
    <section className="homepage">
      <h2>archived record</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder="find notes..."
          value={search}
          onChange={SearchRecord}
        />
      </section>
      {notes.length > 0 && <Listnote notes={notes} />}
      {notes.length === 0 && <Empty />}
      <Button_Fix />
      
    </section>
  )
}

export default archive