import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import draft from 'draftjs-to-html'
import Button_nav from '../../components/button_nav/Button_nav'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { recordAdd } from '../../data'
import {
  ContentState, convertFromHTML, EditorState, convertToRaw
} from 'draft-js'

export default function addNew() {
  const navgator = useNavigate()

  const [form, setForm] = useState({
    title: '',
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML('<i>Write A Description</i>')
      )
    )
  })

  const handleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }

  const onEditorStateChange = (body) => {
    setForm((data) => ({ ...data, body }))
  }

  const saveFunction = () => {
    const { title } = form
    const body = draft(convertToRaw(form.body.getCurrentContent()))
    recordAdd({ title, body })
    navgator('/')
  }

  return (
    <section className="Add_Record">
      <div className="Add_Record__input">
        <input
          className="Add_Record__input__title"
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
      <Button_nav
        saveFunction={saveFunction}
      />
    </section>

  )
}
