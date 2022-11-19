import React, { useEffect, useState } from 'react'
import Button_Fix from '../../components/button_fix/Button_fix'
import Empty from '../../components/empty/Empty'
import Listnote from '../../components/listnote/Listnote'
import { recordActive } from '../../data'

export default function IndexPage() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  const SearchRecord = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if (search !== '') {
      setNotes(
        recordActive()
          .filter((record) => record.title.toLowerCase().includes(search.toLowerCase()))
      )
    } else {
      setNotes(recordActive())
    }
  }, [search])
  return (
    <section className="homepage">
      <h2>search active record</h2>
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
