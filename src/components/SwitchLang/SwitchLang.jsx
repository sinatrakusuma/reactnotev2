import React, { useContext } from 'react'
import TranslateIcon from '@mui/icons-material/Translate';
import LocaleContext from '../../contexts/LocaleContext'

export default function SwitchLang() {
  const { locale, toggleLocale } = useContext(LocaleContext)

  return (
    <button
      type="button"
      title={locale === 'id' ? 'Indonesia' : 'English'}
      className="toggle-locale"
      onClick={toggleLocale}
    >
      <TranslateIcon/>
    </button>
  )
}
