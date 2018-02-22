import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../stories');

  require('../stories/container/container');
  require('../stories/grid/grid');
}

configure(loadStories, module);
