import React from 'react'
import PropTypes from 'prop-types'
import Archive from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import PageAction from '../Execution/Execution'
import Delete from '@mui/icons-material/DeleteForever';
import useLanguage from '../../hooks/useLanguage'

function ButtonArchive({
  archived, handleArchive, handleDelete
}) {
  const Lang = useLanguage('app')

  return (
    <PageAction page="detail-page">
      <>
        <button
          className="Button"
          type="button"
          title={archived ? Lang.active : Lang.archive}
          onClick={() => handleArchive()}
        >
          {archived ? <UnarchiveIcon /> : <Archive />}
        </button>
        <button
          className="Button"
          type="button"
          title={Lang.delete}
          onClick={() => handleDelete()}
        >
             <Delete />
        </button>
      </>
    </PageAction>
  )
}

ButtonArchive.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default ButtonArchive
