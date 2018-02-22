import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

const Container = ({ children, className, fluid }) => (
  <div
    className={ClassNames(
      {
        'container-fluid': fluid,
        container: !fluid,
      },
      className
    )}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  fluid: PropTypes.bool,
}

export default Container
