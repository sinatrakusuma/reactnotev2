import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PageAction from '../Execution/Execution'
import useLanguage from '../../hooks/useLanguage'

function ButtonAll({ handleSave }) {
  const Lang = useLanguage('app')
  const Navigation = useNavigate()

  return (
    <PageAction page="add-new-page">
      <>
        <button
          className="Button"
          type="button"
          title={Lang.cancel}
          onClick={() => Navigation('/')}
        >
        <CancelIcon />
        </button>
        <button
          className="Button"
          type="button"
          title={Lang.add}
          onClick={() => handleSave()}
        >
        <CheckCircleIcon />
        </button>
      </>
    </PageAction>
  )
}

ButtonAll.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default ButtonAll
