import React from 'react'
import PlusOneIcon from '@mui/icons-material/PlusOne';
import Execution from '../execution/Execution'
import { useNavigate } from 'react-router-dom'

function Button_Fix() {
  const navgator = useNavigate()

  return (
    <Execution page="home">
      <button
        className="button"
        type="button"
        title="Add"
        onClick={() => navgator('/records/new')}
      >
        <PlusOneIcon />
      </button>
    </Execution>
  )
}

export default Button_Fix