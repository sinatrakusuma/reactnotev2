import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const { pathname } = useLocation()
  return (
    <nav className="navgator">
      <ul>
        <li>
          {pathname !== '/archives'
            ? <Link to="/archives" title="Archives">Archive</Link>
            : <Link to="/" title="Home">Note</Link>}

        </li>
      </ul>
    </nav>
  )
}

export default Navbar