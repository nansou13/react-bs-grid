import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'

import { PROPS_BS, DEVICE_SIZES } from '../Utils'

const Col = ({ children, className, ...props }) => {
  const classes = []
  DEVICE_SIZES.forEach(size => {
    PROPS_BS.forEach(values => {
      const [propSuffix, modifier] = values

      const propName = `${size}${propSuffix}`
      const propValue = props[propName]

      switch (propSuffix) {
        case 'Hidden':
          if (props[`${size}Hidden`]) {
            classes.push(`hidden-${size}`)
          }
          break
        default:
          if (propValue != null) {
            classes.push(`col-${size}${modifier}-${propValue}`)
          }
      }
    })
  })

  return <div className={ClassNames(classes, className)}>{children}</div>
}

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsHidden: PropTypes.bool,
  smHidden: PropTypes.bool,
  mdHidden: PropTypes.bool,
  lgHidden: PropTypes.bool,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
}

export default Col
