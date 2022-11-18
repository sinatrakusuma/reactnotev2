import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Editor } from 'react-draft-wysiwyg'
import { HiArrowLeft } from 'react-icons/hi'
import draft from 'draftjs-to-html'
import { recordEdit, getRecord } from '../../data'
import NotesIdEditPageAction from '../../components/button_edit/ButtonEdit'
import Pagenotfound from '../../components/pagenotfound/Pagenotfound'
import {
  ContentState, convertFromHTML, convertToRaw, EditorState
} from 'draft-js'

export default function RecordEdit() {
  const [form, setForm] = useState({
    id: '',
    archived: false,
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('<b><i><u>Write A Description</u></i></b>')
      )
    )
  })
  const { id } = useParams()
  const navgator = useNavigate()

  const handleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }

  const onEditorStateChange = (body) => {
    setForm((data) => ({ ...data, body }))
  }

  const saveFunction = () => {
    const { title } = form
    const body = draft(convertToRaw(form.body.getCurrentContent()))
    recordEdit({ id, title, body })
    navgator(`/records/${id}`)
  }

  useEffect(() => {
    const showNote = getRecord(id)
    if (showNote) {
      const { title, archived, body } = showNote
      setForm({
        id,
        title,
        archived,
        body: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(body)
          )
        )
      })
    }
  }, [])

  return (
    <section className="edit-page">
      { form.id !== '' ? (
        <>
          <Link
            to="/"
            title="Back"
          >
            <HiArrowLeft />
            {' '}
            Back
          </Link>
          <div className="edit-page__input">
            <input
              className="edit-page__input__title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
            />
            <Editor
              editorState={form.body}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
        </>
      ) : (
        <Pagenotfound />
      )}

      <NotesIdEditPageAction
        saveFunction={saveFunction}
      />
    </section>
  )
}
