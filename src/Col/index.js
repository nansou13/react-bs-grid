import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const SCCol = styled.div`
  order: ${({ order }) => order};
  align-self: ${({ alignSelf }) => alignSelf};
  flex: ${({ flex }) => flex};
  display: ${({ hidden }) => hidden && 'none'};

  ${props =>
    props.xs &&
    css`
      @media (max-width: 575px) {
        order: ${({ xs }) => xs.order};
        align-self: ${({ xs }) => xs.alignSelf};
        flex: ${({ xs }) => xs.flex};
        display: ${({ xs }) => xs.hidden && 'none'};
      }
    `};

  ${props =>
    props.sm &&
    css`
      @media (min-width: 576px) {
        flex-direction: ${({ sm }) => sm.direction};
        justify-content: ${({ sm }) => sm.justify};
        align-items: ${({ sm }) => sm.alignItem};
        align-content: ${({ sm }) => sm.alignContent};
        flex-wrap: ${({ sm }) => sm.wrap};
      }
    `};

  ${props =>
    props.md &&
    css`
      @media (min-width: 768px) {
        flex-direction: ${({ md }) => md.direction};
        justify-content: ${({ md }) => md.justify};
        align-items: ${({ md }) => md.alignItem};
        align-content: ${({ md }) => md.alignContent};
        flex-wrap: ${({ md }) => md.wrap};
      }
    `};

  ${props =>
    props.lg &&
    css`
      @media (min-width: 992px) {
        flex-direction: ${({ lg }) => lg.direction};
        justify-content: ${({ lg }) => lg.justify};
        align-items: ${({ lg }) => lg.alignItem};
        align-content: ${({ lg }) => lg.alignContent};
        flex-wrap: ${({ lg }) => lg.wrap};
      }
    `};

  ${props =>
    props.xl &&
    css`
      @media (min-width: 1200px) {
        flex-direction: ${({ xl }) => xl.direction};
        justify-content: ${({ xl }) => xl.justify};
        align-items: ${({ xl }) => xl.alignItem};
        align-content: ${({ xl }) => xl.alignContent};
        flex-wrap: ${({ xl }) => xl.wrap};
      }
    `};
`

const Col = ({ children, ...props }) => <SCCol {...props}>{children}</SCCol>

const colType = PropTypes.shape({
  order: PropTypes.number,
  alignSelf: PropTypes.oneOf(['flex-start', 'flex-end', 'stretch', 'center']),
  flex: PropTypes.number,
  hidden: PropTypes.bool,
})

Col.propTypes = {

  order: PropTypes.number,
  alignSelf: PropTypes.oneOf(['flex-start', 'flex-end', 'stretch', 'center']),
  flex: PropTypes.number,
  hidden: PropTypes.bool,
  xs: colType,
  sm: colType,
  md: colType,
  lg: colType,
  xl: colType,
}

Col.defaultProps = {
  order: null,
  alignSelf: null,
  flex: null,
  hidden: false,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,

}

export default Col
