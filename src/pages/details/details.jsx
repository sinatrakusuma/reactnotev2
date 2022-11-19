import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import parser from 'html-react-parser'
import { HiArrowLeft } from 'react-icons/hi'
import Pagenotfound from '../../components/pagenotfound/Pagenotfound'
import { RecordDate } from '../../data/index.js'
import ButtonAll from '../../components/button_all/ButtonAll'
import {
  archiveRecord, recordDell, getRecord, unarchiveRecord
} from '../../data'

function IdRecord() {
  const [record, setNote] = useState({})
  const { id } = useParams()
  const navgator = useNavigate()

  const editFunction = () => {
    navgator(`/records/${id}/edit`)
  }

  const archiveFunction = () => {
    if (record.archived) {
      unarchiveRecord(id)
      navgator('/archives')
    } else {
      archiveRecord(id)
      navgator('/')
    }
  }

  const deleteFunction = () => {
    recordDell(id)
    navgator('/')
  }

  useEffect(() => {
    const showNote = getRecord(id)
    if (showNote) {
      setNote(showNote)
    }
  }, [])

  return (
    <section className="whole-page">
      { 'id' in record ? (
        <>
          <Link
            to="/"
            title="Back"
          >
            <HiArrowLeft />
            {' '}
            Back
          </Link>
          <h3 className="whole-page__title">
            { record.title }
          </h3>
          <p className="whole-page__createdAt">
            {RecordDate(record.createdAt)}
          </p>
          <div className="whole-page__body">
            { parser(record.body) }
          </div>
        </>
      ) : (
        <Pagenotfound />
      )}
      <ButtonAll
        archived={record.archived || false}
        editFunction={editFunction}
        archiveFunction={archiveFunction}
        deleteFunction={deleteFunction}
      />
    </section>
  )
}

export default IdRecord