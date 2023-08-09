import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import Logo from '../src/assets/willow-ui-logo.svg'; // must use relative path for svgs

const theme = create({
  base: 'light',
  brandTitle: 'Willow Design System',
  brandImage: Logo,
  brandTarget: '_self',
});

addons.setConfig({ theme });
