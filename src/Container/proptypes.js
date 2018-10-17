import PropTypes from 'prop-types'

export const directionType = PropTypes.oneOf([
  'row',
  'row-reverse',
  'column',
  'column-reverse',
])

export const justifyType = PropTypes.oneOf([
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'center',
])

export const wrapType = PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse'])
export const alignContentType = PropTypes.oneOf([
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'stretch',
  'center',
])
export const alignItemType = PropTypes.oneOf([
  'flex-start',
  'flex-end',
  'stretch',
  'center',
])

export const containerType = PropTypes.shape({
  direction: directionType,
  justify: justifyType,
  wrap: wrapType,
  alignContent: alignContentType,
  alignItem: alignItemType,
  hidden: PropTypes.bool,
})

export const defaultValue = {
  direction: 'row',
  justify: 'flex-start',
  alignItem: 'stretch',
  wrap: 'nowrap',
  alignContent: 'stretch',
  hidden: false,
}
