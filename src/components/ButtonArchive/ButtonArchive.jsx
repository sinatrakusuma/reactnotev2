import React from 'react'
import PropTypes from 'prop-types'
import { HiOutlineTrash } from 'react-icons/hi'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import PageAction from '../Execution/Execution'
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
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button
          className="Button"
          type="button"
          title={Lang.delete}
          onClick={() => handleDelete()}
        >
          <HiOutlineTrash />
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
