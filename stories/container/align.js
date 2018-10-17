import React from 'react'
import { storiesOf, action } from '@storybook/react'
import styled from 'styled-components'
import { Container, Col } from '../../src'

const Item = styled(Col)`
  border: 1px solid black;
  padding: 10px;
`

storiesOf('Align', module)
  .addWithInfo('Row - flex-start', () => (
    <Container alignItem="flex-start" style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Row - flex-end', () => (
    <Container alignItem="flex-end" style={{ marginTop: 50, height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Row - stretch', () => (
    <Container alignItem="stretch" style={{ marginTop: 50, height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Row - center', () => (
    <Container alignItem="center" style={{ marginTop: 50, height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))

  .addWithInfo('Column - flex-start (default)', () => (
    <Container
      direction="column"
      alignItem="flex-start"
      style={{ height: 500 }}
    >
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Column - flex-end', () => (
    <Container direction="column" alignItem="flex-end" style={{ height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Column - stretch', () => (
    <Container direction="column" alignItem="stretch" style={{ height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Column - center', () => (
    <Container direction="column" alignItem="center" style={{ height: 500 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('responsive - center', () => (
    <Container
      justify="center"
      xs={{ hidden: true }}
      sm={{ direction: 'column' }}
      lg={{ direction: 'row' }}
    >
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
