import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Quarks/Typography',
  tags: ['autodocs'],
  argTypes: {
    input: {
      control: { type: 'text' },
      description: 'Text to display',
    },
    color: {
      control: { type: 'text' },
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tags: Story = {
  args: {
    input: 'Lorem ipsum & all that jazz',
  },
  parameters: {
    docs: {
      description: {
        story: 'All typography defaults for HTML tags.',
      },
    },
  },
  render: ({ input, color }) => {
    const style = color && { style: { color } };

    return (
      <div className='tw-reset ~grid ~grid-cols-[auto_1fr] ~items-baseline ~gap-[10px]'>
        <p {...style}>h1</p>
        <h1 {...style}>{input}</h1>
        <p {...style}>h2</p>
        <h2 {...style}>{input}</h2>
        <p {...style}>h3</p>
        <h3 {...style}>{input}</h3>
        <p {...style}>h4</p>
        <h4 {...style}>{input}</h4>
        <p {...style}>h5</p>
        <h5 {...style}>{input}</h5>
        <p {...style}>h6</p>
        <h6 {...style}>{input}</h6>
        <p {...style}>p</p>
        <p {...style}>{input}</p>
        <p {...style}>a</p>
        <a
          className='~mr-auto'
          onClick={(e) => e.preventDefault()}
          href='#'
          {...style}
        >
          {input}
        </a>
      </div>
    );
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All typography defaults for different classnames.',
      },
    },
  },
  args: {
    input:
      'Quis suspendisse laoreet adipiscing vitae. Id viverra sollicitudin enim neque, lobortis ac mauris non vestibulum.',
  },
  render: ({ input, color }) => {
    const style = color && { style: { color } };

    return (
      <div className='tw-reset ~grid ~grid-cols-[auto_1fr] ~items-baseline ~gap-[10px]'>
        <p {...style}>Body (Large)</p>
        <p className='body-large' {...style}>
          {input}
        </p>
        <p {...style}>Body (Medium)</p>
        <p className='body-medium' {...style}>
          {input}
        </p>
        <p {...style}>Body (Small)</p>
        <p className='body-small' {...style}>
          {input}
        </p>
        <p {...style}>Body (X-Small)</p>
        <p className='body-x-small' {...style}>
          {input}
        </p>
        <p {...style}>Caption 1</p>
        <p className='caption-1' {...style}>
          {input}
        </p>
        <p {...style}>Caption 2</p>
        <p className='caption-2' {...style}>
          {input}
        </p>
      </div>
    );
  },
};
