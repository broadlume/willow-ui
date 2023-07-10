import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import CombinationMark from '../src/assets/onyx-combination-mark.svg';

const theme = create({
  base: 'light',
  brandTitle: 'Onyx Design System',
  brandImage: CombinationMark,
  brandTarget: '_self',
});

addons.setConfig({ theme });
