import React, { useContext } from 'react'
import { MdLogout } from 'react-icons/md'
import AuthContext from '../../contexts/AuthContext'
import useLanguage from '../../hooks/useLanguage'

export default function ButtonLogout() {
  const { auth } = useContext(AuthContext)
  const Lang = useLanguage('app')

  const handleLogout = () => {
    if (confirm(Lang.msg.confirm)) {
      localStorage.removeItem('accessToken')
      window.location = '/'
    }
  }

  return (
    <>
    {
      auth ? (
        <button
          type="button"
          title="Logout"
          className="button-logout"
          onClick={handleLogout}
        >
          <MdLogout />
        </button>
      ) : ''
    }
    </>
  )
}
