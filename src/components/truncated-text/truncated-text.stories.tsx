import type { Meta, StoryObj } from '@storybook/react';
import { TruncatedText } from './truncated-text';

const meta: Meta<typeof TruncatedText> = {
  component: TruncatedText,
  title: 'Components/Truncated Text',
};

export default meta;

type Story = StoryObj<typeof TruncatedText>;

export const Default: Story = {
  render: (_) => (
    <div className='tw-reset ~flex ~w-[300px] ~flex-col ~gap-2 ~rounded-sm ~border-2 ~p-2'>
      <TruncatedText text='This is a short text.' />
      <TruncatedText text='This is a long text that will be truncated.' />
    </div>
  ),
};
