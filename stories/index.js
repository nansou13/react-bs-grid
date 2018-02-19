import React from 'react';
import { storiesOf, linkTo } from '@storybook/react';
import Welcome from './Welcome';


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));
