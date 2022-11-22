import React, { useEffect, useState } from 'react'
import parser from 'html-react-parser'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import { formatDatetime } from '../../utils'
import {
  archiveNote, deleteNote, getNote, unarchiveNote
} from '../../utils/network-data'
import ButtonArchive from '../../components/ButtonArchive/ButtonArchive'
import NotFound from '../../components/NotFound/NotFound'
import Loading from '../../components/Loading/Loading'
import useLanguage from '../../hooks/useLanguage'

export default function NotesIdPages() {
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState({})
  const { id } = useParams()
  const textApp = useLanguage('app')
  const textNote = useLanguage('notesId')
  const Navigation = useNavigate()

  const handleArchive = () => {
    if (confirm(textApp.msg.confirm)) {
      let methods = null
      let navigateTo = '/'
      if (note.archived) {
        methods = unarchiveNote(id)
        navigateTo = '/archives'
      } else {
        methods = archiveNote(id)
      }
      methods
        .then((res) => {
          if (!res.error) {
            Navigation(navigateTo)
          }
        })
        .catch(() => {
          alert(textApp.msg.error)
        })
    }
  }

  const handleDelete = () => {
    if (confirm(textApp.msg.confirm)) {
      deleteNote(id).then(res => {
        if (!res.error) {
          Navigation('/')
        }
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
    }
  }

  useEffect(() => {
    /**
     * show notes
     */
    getNote(id)
      .then((res) => {
        if (!res.error) {
          setNote(res.data)
        } else {
          alert(textNote.notFound)
        }
        setLoading(false)
      })
      .catch(() => {
        alert(textApp.msg.error)
      })
  }, [])

  return (
    <section className="record-detail">
      { ('id' in note && !loading) ? (
        <>
          <Link
            to="/"
            title={textApp.back}
          >
            <HiArrowLeft />
            {' '}
            { textApp.back }
          </Link>
          <h3 className="record-detail__title">
            { note.title }
          </h3>
          <p className="record-detail__createdAt">
            {formatDatetime(note.createdAt)}
          </p>
          <div className="record-detail__body">
            { parser(note.body) }
          </div>
          <ButtonArchive
            archived={note.archived || false}
            handleArchive={handleArchive}
            handleDelete={handleDelete}
          />
        </>
      ) : ''}
      {(!('id' in note) && !loading) ? <NotFound /> : ''}
      {loading ? <Loading /> : ''}
    </section>
  )
}
