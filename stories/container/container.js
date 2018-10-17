import React from 'react'
import { storiesOf, action } from '@storybook/react'

import styled from 'styled-components'
import { Container } from '../../src'

const Item = styled.div`
  border: 1px solid black;
  padding: 10px;
`
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper sollicitudin sapien. Mauris a feugiat lorem, ut auctor dui. In vitae efficitur lectus. Maecenas sed diam nunc. Donec in mauris eget purus iaculis consectetur. Etiam porttitor ornare nunc, sed blandit purus consectetur posuere. Duis ut dui ut elit mattis dictum et sit amet tellus.'

storiesOf('Container', module)
  .addWithInfo('Default', () => (
    <Container style={{ marginTop: 50 }}>{lorem}</Container>
  ))
  .addWithInfo('Container with props', () => (
    <Container
      className="testClass"
      blabla="COUCOU"
      style={{ fontWeight: 'bold', marginTop: 50 }}
    >
      {lorem}
    </Container>
  ))
  .addWithInfo('container with childs', () => (
    <Container style={{ marginTop: 50 }}>
      <Item>Test 01</Item>
      <Item>Test 02</Item>
      <Item>Test 03</Item>
    </Container>
  ))
