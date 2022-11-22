import React from 'react'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import useTheme from '../../hooks/useTheme'

export default function SwitchTheme() {
  const [theme, changeTheme] = useTheme()

  return (
    <button
      type="button"
      className="toggle-theme"
      onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {
        theme === 'dark' ? <ToggleOnIcon/> : <ToggleOffIcon/>
      }
    </button>
  )
}

