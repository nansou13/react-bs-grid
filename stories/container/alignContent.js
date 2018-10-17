import React from 'react'
import { storiesOf, action } from '@storybook/react'

import styled from 'styled-components'
import { Container } from '../../src'

const Item = styled.div`
  border: 1px solid black;
  padding: 10px;
`

storiesOf('AlignContent', module)
  .addWithInfo('Row - flex-start', () => (
    <Container
      style={{ marginTop: 50, height: 500 }}
      wrap="wrap"
      alignContent="flex-start"
    >
      {Array(...Array(30)).map((_, id) => (
        <Item key={id}>{`test ${id}`}</Item>
      ))}
    </Container>
  ))
  .addWithInfo('Row - flex-end', () => (
    <Container
      style={{ marginTop: 50, height: 500 }}
      wrap="wrap"
      alignContent="flex-end"
    >
      {Array(...Array(30)).map((_, id) => (
        <Item key={id}>{`test ${id}`}</Item>
      ))}
    </Container>
  ))
  .addWithInfo('Row - space-between', () => (
    <Container
      style={{ marginTop: 50, height: 500 }}
      wrap="wrap"
      alignContent="space-between"
    >
      {Array(...Array(30)).map((_, id) => (
        <Item key={id}>{`test ${id}`}</Item>
      ))}
    </Container>
  ))
  .addWithInfo('Row - space-around', () => (
    <Container
      style={{ marginTop: 50, height: 500 }}
      wrap="wrap"
      alignContent="space-around"
    >
      {Array(...Array(30)).map((_, id) => (
        <Item key={id}>{`test ${id}`}</Item>
      ))}
    </Container>
  ))
  .addWithInfo('Row - center', () => (
    <Container
      style={{ marginTop: 50, height: 500 }}
      wrap="wrap"
      alignContent="center"
    >
      {Array(...Array(30)).map((_, id) => (
        <Item key={id}>{`test ${id}`}</Item>
      ))}
    </Container>
  ))
