import React from 'react'
import useLanguage from '../../hooks/useLanguage'

export default function EmptyRecord() {
  const text = useLanguage('note')

  return (
    <section className="record-list-empty">
      <p className="record-list__empty">{ text.empty }</p>
    </section>
  )
}
