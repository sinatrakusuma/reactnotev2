import React from 'react';
import PropTypes from 'prop-types';
import Delete from '@mui/icons-material/DeleteForever';
import Archive from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import Edit from '@mui/icons-material/ModeEdit';
import Execution from '../execution/Execution';

function ButtonAll({
  archived, editFunction,archiveFunction, deleteFunction
}) {
  
  return (
    <Execution page="whole-page">
      <>
        <button
          className="button"
          type="button"
          title={archived ? 'recordEditArchive' : 'recordEdit'}
          onClick={() => editFunction()}
        >
          <Edit />
        </button>
        <button
          className="button"
          type="button"
          title={archived ? 'UnarchiveRecord' : 'archiveRecord'}
          onClick={() =>archiveFunction()}
        >
          {archived ? <UnarchiveIcon /> : <Archive />}
        </button>
        <button
          className="button"
          type="button"
          title="Delete"
          onClick={() => deleteFunction()}
        >
          <Delete />
        </button>
      </>
    </Execution>
  )
}

ButtonAll.propTypes = {
  archived: PropTypes.bool.isRequired,
  editFunction: PropTypes.func.isRequired,
 archiveFunction: PropTypes.func.isRequired,
  deleteFunction: PropTypes.func.isRequired
}

export default ButtonAll
