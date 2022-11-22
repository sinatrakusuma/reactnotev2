import React from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function Loading() {
  const Lang = useLanguage('app')

  return (
    <p className='loading-indicator'>{ Lang.msg.loading }</p>
  )
}