import React, { useEffect, useState } from 'react'
import ButtonAdd from '../components/ButtonAdd/ButtonAdd'
import Loading from '../components/Loading/Loading'
import EmptyRecord from '../components/EmptyRecord/EmptyRecord'
import ListRecord from '../components/ListRecord/ListRecord'
import useInput from '../hooks/useInput'
import useLanguage from '../hooks/useLanguage'
import { getArchivedNotes } from '../utils/network-data'
import { appPage } from '../utils/content'

export default function ArchivesPage() {
  const [dataNotes, setDataNotes] = useState([]) // all notes from api
  const [initNotes, setInitNotes] = useState(false) // flag sudah ambil notes dari api
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([]) // filtered notes
  const [search, setSearch] = useInput('')
  const [locale] = useState('id')
  const text = useLanguage('archive')
  const textNote = useLanguage('note')
  
  /**
   * Inisialisasi data notes dari api
   */
  const initNotesFromApi = () => {
    getArchivedNotes()
      .then((res) => {
        if (!res.error) {
          setDataNotes(res.data)
          setNotes(res.data)
          setInitNotes(true)
          setLoading(false)
        }
      })
      .catch(() => {
        alert(appPage[locale].msg.error)
      })
  }

  useEffect(() => {
    if (!initNotes) {
      initNotesFromApi()
    }

    /**
     * Jika sudah init notes
     * filter dari memory local
     */
    if (initNotes) {
      let tempDataNotes = [...dataNotes]
      if (search !== '') {
        tempDataNotes = tempDataNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      }
      setNotes(tempDataNotes)
    }
  }, [search])
  return (
    <section className="homepage">
      <h2>{ text.header }</h2>
      <section className="search-bar">
        <input
          type="text"
          placeholder={textNote.searchPlaceholder}
          value={search}
          onChange={setSearch}
        />
      </section>
      {(notes.length > 0 && !loading) ? <ListRecord notes={notes} /> : ''}
      {(notes.length === 0 && !loading) ? <EmptyRecord /> : ''}
      {loading ? <Loading /> : ''}
      <ButtonAdd />
    </section>
  )
}
