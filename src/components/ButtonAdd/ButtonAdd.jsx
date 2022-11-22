import { useNavigate } from 'react-router-dom'
import React from 'react'
import PlusOneIcon from '@mui/icons-material/PlusOne';
import PageAction from '../Execution/Execution'
import useLanguage from '../../hooks/useLanguage'

export default function HomePageAction() {
  const text = useLanguage('app')
  const navigate = useNavigate()

  return (
    <PageAction page="homepage">
      <button
        className="Button"
        type="button"
        title={text.add}
        onClick={() => navigate('/notes/new')}
      >
        <PlusOneIcon />
      </button>
    </PageAction>
  )
}
