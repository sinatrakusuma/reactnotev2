import React from 'react'
import PlusOneIcon from '@mui/icons-material/PlusOne';
import { useNavigate } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'
import PageAction from '../Execution/Execution'

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
