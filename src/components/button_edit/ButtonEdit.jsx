import React from 'react'
import PropTypes from 'prop-types'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Execution from '../execution/Execution'

function ButtonEdit({ saveFunction }) {
  return (
    <Execution page="whole-page">
      <button
        className="button"
        type="button"
        title="Save"
        onClick={() => saveFunction()}
      >
        <CheckCircleIcon />
      </button>
    </Execution>
  )
}

ButtonEdit.propTypes = {
  saveFunction: PropTypes.func.isRequired
}

export default ButtonEdit
