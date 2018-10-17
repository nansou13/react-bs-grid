import React from 'react'
import { storiesOf, action } from '@storybook/react'

import styled from 'styled-components'
import { Container } from '../../src'

const Item = styled.div`
  border: 1px solid black;
  padding: 10px;
`
storiesOf('Wrap', module)
  .addWithInfo('Row - nowrap', () => (
    <Container style={{ marginTop: 50 }} wrap="nowrap">
      {Array(...Array(30)).map((_, id) => (
        <Item key={id}>{`test ${id}`}</Item>
      ))}
    </Container>
  ))
  .addWithInfo('Row - wrap', () => (
    <Container style={{ marginTop: 50 }} wrap="wrap">
      {Array(...Array(30)).map((_, id) => (
        <Item key={id}>{`test ${id}`}</Item>
      ))}
    </Container>
  ))
  .addWithInfo('Row - wrap-reverse', () => (
    <Container style={{ marginTop: 50 }} wrap="wrap-reverse">
      {Array(...Array(30)).map((_, id) => (
        <Item key={id}>{`test ${id}`}</Item>
      ))}
    </Container>
  ))
