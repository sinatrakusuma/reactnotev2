import React from 'react'
import PropTypes from 'prop-types'

function Execution({ page, children }) {
  return (
    <div className={`${page}__execution`}>
      { children }
    </div>
  )
}

Execution.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Execution
