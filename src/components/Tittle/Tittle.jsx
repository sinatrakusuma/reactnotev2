import React from 'react'
import { Link } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'
import Navbar from '../Navbar/Navbar'

export default function Tittle() {
  const Lang = useLanguage('app')

  return (
    <header>
      <h1>
        <Link to="/">{Lang.title}</Link>
      </h1>
      <Navbar />
    </header>
  )
}
