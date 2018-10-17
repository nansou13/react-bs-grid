import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../stories');

  require('../stories/container/container');
  require('../stories/container/direction');
  require('../stories/container/justify');
  require('../stories/container/align');
  require('../stories/container/wrap');
  require('../stories/container/alignContent');
  // require('../stories/grid/grid');
}

configure(loadStories, module);
