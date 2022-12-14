import React from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function EmptyRecord() {
  const Lang = useLanguage('note')

  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">{ Lang.empty }</p>
    </section>
  )
}
