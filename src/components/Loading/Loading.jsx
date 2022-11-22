import React from 'react'
import useLanguage from '../../hooks/useLanguage'

function Loading() {
  const Lang = useLanguage('app')

  return (
    <p className='loading-indicator'>{ Lang.msg.loading }</p>
  )
}
export default Loading