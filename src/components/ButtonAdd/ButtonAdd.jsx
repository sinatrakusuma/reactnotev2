import { useNavigate } from 'react-router-dom'
import React from 'react'
import PlusOneIcon from '@mui/icons-material/PlusOne';
import PageAction from '../Execution/Execution'
import useLanguage from '../../hooks/useLanguage'

export default function ButtonAdd() {
  const Lang = useLanguage('app')
  const Navigation = useNavigate()

  return (
    <PageAction page="homepage">
      <button
        className="Button"
        type="button"
        title={Lang.add}
        onClick={() => Navigation('/notes/new')}
      >
        <PlusOneIcon />
      </button>
    </PageAction>
  )
}
