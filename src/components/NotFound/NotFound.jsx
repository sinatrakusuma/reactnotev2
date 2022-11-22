import React from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function NotFound() {
  const Lang = useLanguage('app')

  return (
    <>
      <h2>404</h2>
      <p>{ Lang.pageNotFound }</p>
    </>
  )
}
