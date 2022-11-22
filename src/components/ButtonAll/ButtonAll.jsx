import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Execution from '../Execution/Execution'
import useLanguage from '../../hooks/useLanguage'

function ButtonAll({ savefunction }) {
  const Lang = useLanguage('app')
  const Navigation = useNavigate()

  return (
    <Execution page="new-add-record">
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
          onClick={() => savefunction()}
        >
        <CheckCircleIcon />
        </button>
      </>
    </Execution>
  )
}

ButtonAll.propTypes = {
  savefunction: PropTypes.func.isRequired
}

export default ButtonAll
