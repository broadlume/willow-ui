import type { Preview } from '@storybook/react';
import '../src/index.scss';
import '../src/assets/typekit.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Quarks', 'Atoms'],
      },
    },
  },
};

export default preview;
