import React from 'react'
import PropTypes from 'prop-types'

import SCContainer from './style'

import {
  containerType,
  directionType,
  justifyType,
  alignContentType,
  alignItemType,
  wrapType,
  defaultValue,
} from './proptypes'

const Container = ({ children, ...props }) => (
  <SCContainer {...props}>{children}</SCContainer>
)

Container.propTypes = {
  children: PropTypes.node,
  direction: directionType,
  justify: justifyType,
  wrap: wrapType,
  alignContent: alignContentType,
  alignItem: alignItemType,
  hidden: PropTypes.bool,
  xs: containerType,
  sm: containerType,
  md: containerType,
  lg: containerType,
  xl: containerType,
}

Container.defaultProps = {
  children: '',
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  ...defaultValue,
}

export default Container
