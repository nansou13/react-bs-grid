import styled, { css } from 'styled-components'

const SCContainer = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.alignItem};
  align-content: ${props => props.alignContent};
  flex-wrap: ${props => props.wrap};

  ${props =>
    props.xs &&
    css`
      @media (max-width: 575px) {
        flex-direction: ${({ xs }) => xs.direction};
        justify-content: ${({ xs }) => xs.justify};
        align-items: ${({ xs }) => xs.alignItem};
        align-content: ${({ xs }) => xs.alignContent};
        flex-wrap: ${({ xs }) => xs.wrap};
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
        display: ${({ sm }) => sm.hidden && 'none'};
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
        display: ${({ md }) => md.hidden && 'none'};
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
        display: ${({ lg }) => lg.hidden && 'none'};
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
        display: ${({ xl }) => xl.hidden && 'none'};
      }
    `};
`
export default SCContainer
