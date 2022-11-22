import { useNavigate } from 'react-router-dom'
import React from 'react'
import PlusOneIcon from '@mui/icons-material/PlusOne';
import Execution from '../Execution/Execution'
import useLanguage from '../../hooks/useLanguage'

function ButtonAdd() {
  const Lang = useLanguage('app')
  const Navigation = useNavigate()

  return (
    <Execution page="homepage">
      <button
        className="Button"
        type="button"
        title={Lang.add}
        onClick={() => Navigation('/notes/new')}
      >
        <PlusOneIcon />
      </button>
    </Execution>
  )
}
export default ButtonAdd
