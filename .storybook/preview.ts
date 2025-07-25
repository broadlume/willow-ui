import type { Preview } from '@storybook/react';
import '@src/index.css';
import '@src/assets/typekit.css';

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
        order: ['Introduction', 'Quarks', 'Components'],
      },
    },
  },
};

export default preview;
