import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic tabs.',
      },
    },
  },
  render: (_) => (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        Make changes to your account here.
      </TabsContent>
      <TabsContent value='password'>Change your password here.</TabsContent>
    </Tabs>
  ),
};
