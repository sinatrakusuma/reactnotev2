import React from 'react'
import PropTypes from 'prop-types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Execution from '../execution/Execution'
import { useNavigate } from 'react-router-dom'

function Button_nav({ saveFunction }) {
  const navgator = useNavigate()
  return (
    <Execution page="Add_Record">
      <>
        <button
          className="button"
          type="button"
          title="Back"
          onClick={() => navgator('/')}
        >
          <CancelIcon />
        </button>
        <button
          className="button"
          type="button"
          title="Add"
          onClick={() => saveFunction()}
        >
          <CheckCircleIcon />
        </button>
      </>
    </Execution>
  )
}

Button_nav.propTypes = {
  saveFunction: PropTypes.func.isRequired
}

export default Button_nav
