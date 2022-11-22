import React from 'react'
import useLanguage from '../../hooks/useLanguage'

function EmptyRecord() {
  const Lang = useLanguage('note')

  return (
    <section className="list-record-empty">
      <p className="record-list__empty">{ Lang.empty }</p>
    </section>
  )
}
export default EmptyRecord