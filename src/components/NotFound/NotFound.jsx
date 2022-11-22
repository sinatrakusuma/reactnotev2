import React from 'react'
import useLanguage from '../../hooks/useLanguage'

function NotFound() {
  const Lang = useLanguage('app')

  return (
    <>
    <div className="container">
      <div className="err">
      <h2>404</h2>
      </div>
      <div className="err-msg">
      <p>{ Lang.pageNotFound }</p>
      </div>
    </div>
    </>
  )
}
export default NotFound