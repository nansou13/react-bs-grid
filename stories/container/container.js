import React from 'react'
import { storiesOf, action } from '@storybook/react'

import { Container } from '../../src'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper sollicitudin sapien. Mauris a feugiat lorem, ut auctor dui. In vitae efficitur lectus. Maecenas sed diam nunc. Donec in mauris eget purus iaculis consectetur. Etiam porttitor ornare nunc, sed blandit purus consectetur posuere. Duis ut dui ut elit mattis dictum et sit amet tellus.'

storiesOf('Container', module)
  .addWithInfo('Default', () => <Container>{lorem}</Container>)
  .addWithInfo('Container with class', () => (
    <Container className="testClass">{lorem}</Container>
  ))
  .addWithInfo('Fluid container', () => <Container fluid>{lorem}</Container>)
