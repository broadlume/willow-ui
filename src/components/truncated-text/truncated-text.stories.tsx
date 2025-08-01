import type { Meta, StoryObj } from '@storybook/react';
import { TruncatedText } from './truncated-text';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@src/index';
import { useState } from 'react';
import { cn } from '@src/lib/utils';

const meta: Meta<typeof TruncatedText> = {
  component: TruncatedText,
  title: 'Components/Truncated Text',
};

export default meta;

type Story = StoryObj<typeof TruncatedText>;

export const Default: Story = {
  render: (_) => (
    <div className='tw-reset ~flex ~w-[300px] ~flex-col ~gap-2 ~rounded-xs ~border-2 ~p-2'>
      <TruncatedText>This is a short text.</TruncatedText>
      <TruncatedText>
        This is a longer text that will be truncated.
      </TruncatedText>
    </div>
  ),
};

const ResizableStory = (_) => {
  const [isFirstTruncated, setIsFirstTruncated] = useState(false);
  const [isSecondTruncated, setIsSecondTruncated] = useState(false);

  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='~min-h-[200px] ~w-full ~rounded-lg ~border'
    >
      <ResizablePanel defaultSize={25}>
        <div
          className={cn(
            '~flex ~h-full ~items-center ~justify-center ~p-6',
            isFirstTruncated && '~rounded-l-lg ~border ~border-destructive'
          )}
        >
          <TruncatedText onTruncation={setIsFirstTruncated}>
            This is a longer text that may be truncated.
          </TruncatedText>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div
          className={cn(
            '~flex ~h-full ~items-center ~justify-center ~p-6',
            isSecondTruncated && '~rounded-r-lg ~border ~border-destructive'
          )}
        >
          <TruncatedText onTruncation={setIsSecondTruncated}>
            This is a longer text that may be truncated.
          </TruncatedText>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export const TruncationDetection: Story = {
  render: ResizableStory,
};
