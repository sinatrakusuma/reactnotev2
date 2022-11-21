import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import useLanguage from '../../hooks/useLanguage'
import SwitchLang from '../SwitchLang/SwitchLang'
import ButtonLogout from '../ButtonLogout/ButtonLogout'
import SwitchTheme from '../SwitchTheme/SwitchTheme'

export default function Navbar() {
  const { auth } = useContext(AuthContext)
  const { pathname } = useLocation()
  const text = useLanguage('app')

  return (
    <>
      {
        auth ? (
          <nav className="navgator">
            <ul>
              <li>
                {
                  pathname !== '/archives' ? (
                    <Link
                      to="/archives"
                      title={text.nav.archives}
                    >
                      {text.nav.archives}
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      title={text.nav.archives}
                    >
                      {text.nav.home}
                    </Link>
                  )
                }
              </li>
            </ul>
          </nav>
        ) : ''
      }
      <SwitchLang />
      <SwitchTheme />
      <ButtonLogout />
    </>
  )
}
