import React from 'react'
import { storiesOf, action } from '@storybook/react'

storiesOf('Container', module)
  .addWithInfo('default', () => <div onPress={ action('pressed') }>Container</div>)
  .addWithInfo('primary', () => (
    <div onPress={ action('pressed') } type="primary">
      Primary
    </div>
  ))
