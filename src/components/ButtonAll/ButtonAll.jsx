import React from 'react'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import PageAction from '../Execution/Execution'
import useLanguage from '../../hooks/useLanguage'

function ButtonAll({ handleSave }) {
  const Lang = useLanguage('app')
  const navigate = useNavigate()

  return (
    <PageAction page="add-new-page">
      <>
        <button
          className="Button"
          type="button"
          title={Lang.cancel}
          onClick={() => navigate('/')}
        >
          <HiX />
        </button>
        <button
          className="Button"
          type="button"
          title={Lang.add}
          onClick={() => handleSave()}
        >
          <HiCheck />
        </button>
      </>
    </PageAction>
  )
}

ButtonAll.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default ButtonAll
