import React from 'react'
import { storiesOf, action } from '@storybook/react'

import styled from 'styled-components'
import { Container, Col } from '../../src'

const Item = styled(Col)`
  border: 1px solid black;
  padding: 10px;
`

storiesOf('Direction', module)
  .addWithInfo('Default - Row', () => (
    <Container style={{ marginTop: 50 }}>
      <Item xs={{ direction: 'row' }}>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Row reverse', () => (
    <Container direction="row-reverse" style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Col', () => (
    <Container direction="column" style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
  .addWithInfo('Col reverse', () => (
    <Container direction="column-reverse" style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
