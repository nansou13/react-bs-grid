import React from 'react'
import { storiesOf, action } from '@storybook/react'

import styled from 'styled-components'
import { Container } from '../../src'

const Item = styled.div`
  border: 1px solid black;
  padding: 10px;
`
storiesOf('Justify', module)
  .addWithInfo('Row - flex-start (default)', () => (
    <Container style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Row - flex-end', () => (
    <Container justify="flex-end" style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Row - space-between', () => (
    <Container justify="space-between" style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Row - space-around', () => (
    <Container justify="space-around" style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Row - center', () => (
    <Container justify="center" style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))

  .addWithInfo('Column - flex-start (default)', () => (
    <Container direction="column" style={{ height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Column - flex-end', () => (
    <Container direction="column" justify="flex-end" style={{ height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Column - space-between', () => (
    <Container
      direction="column"
      justify="space-between"
      style={{ height: 500 }}
    >
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Column - space-around', () => (
    <Container
      direction="column"
      justify="space-around"
      style={{ height: 500 }}
    >
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Column - center', () => (
    <Container direction="column" justify="center" style={{ height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
