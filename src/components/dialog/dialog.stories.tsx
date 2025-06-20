import type { Meta, StoryObj } from '@storybook/react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button, Input, Label } from '@src/index';

// Let's put a description here because Storybook is buggy
/** A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. */
const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Components/Dialog',
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (_) => (
    <Dialog>
      <DialogTrigger>Click me!</DialogTrigger>
      <DialogContent className='sm:~max-w-[425px]' showCloseIcon={true}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='~grid ~gap-4 ~py-4'>
          <div className='~grid ~grid-cols-4 ~items-center ~gap-4'>
            <Label htmlFor='name' className='~text-right'>
              Name
            </Label>
            <Input
              id='name'
              defaultValue='Scott Hetrick'
              className='~col-span-3'
            />
          </div>
          <div className='~grid ~grid-cols-4 ~items-center ~gap-4'>
            <Label htmlFor='username' className='~text-right'>
              Username
            </Label>
            <Input
              id='username'
              defaultValue='@dreadhalor'
              className='~col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomTrigger: Story = {
  render: (_) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:~max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='~grid ~gap-4 ~py-4'>
          <div className='~grid ~grid-cols-4 ~items-center ~gap-4'>
            <Label htmlFor='name' className='~text-right'>
              Name
            </Label>
            <Input
              id='name'
              defaultValue='Scott Hetrick'
              className='~col-span-3'
            />
          </div>
          <div className='~grid ~grid-cols-4 ~items-center ~gap-4'>
            <Label htmlFor='username' className='~text-right'>
              Username
            </Label>
            <Input
              id='username'
              defaultValue='@dreadhalor'
              className='~col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
