import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

const Row = ({ children, className }) => (
  <div className={ClassNames('row', className)}>{children}</div>
)

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
}

export default Row
