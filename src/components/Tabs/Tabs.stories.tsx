import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@src/index';
import SidebarItem from '@src/dhq/SidebarItem';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Components/Tabs',
  tags: ['autodocs'],
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic tabs header.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills'],
    },
  },

  render: (args) => (
    <Tabs defaultValue='contacts' {...args}>
      <TabsList className='~grid ~grid-cols-4'>
        <TabsTrigger value='leads'>Leads</TabsTrigger>
        <TabsTrigger value='contacts'>Contacts</TabsTrigger>
        <TabsTrigger value='stores'>Stores</TabsTrigger>
        <TabsTrigger value='reviews'>Reviews</TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};

export const WithContent: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic tabs, with associated content.',
      },
    },
  },
  render: (args) => (
    <Tabs defaultValue='account' className='~w-[400px]' {...args}>
      <TabsList className='~grid ~grid-cols-2'>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className='~space-y-2'>
            <div className='~space-y-1'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' defaultValue='Scott Hetrick' />
            </div>
            <div className='~space-y-1'>
              <Label htmlFor='username'>Username</Label>
              <Input id='username' defaultValue='@dreadhalor' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className='~space-y-2'>
            <div className='~space-y-1'>
              <Label htmlFor='current'>Current password</Label>
              <Input id='current' type='password' />
            </div>
            <div className='~space-y-1'>
              <Label htmlFor='new'>New password</Label>
              <Input id='new' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic tabs, with associated content.',
      },
    },
  },
  render: (args) => (
    <Tabs
      orientation='vertical'
      defaultValue='account'
      className='~flex ~flex-row ~gap-2'
      {...args}
    >
      <TabsList className='~flex ~h-full ~w-[200px] ~min-w-[200px] ~max-w-[200px] ~flex-col'>
        <TabsTrigger value='account' className='~w-full ~p-0'>
          <SidebarItem>Account?</SidebarItem>
        </TabsTrigger>
        <TabsTrigger value='password' className='~w-full ~p-0'>
          <SidebarItem>Password</SidebarItem>
        </TabsTrigger>
        <TabsTrigger value='password2' className='~w-full ~p-0'>
          <SidebarItem>dsdfdee</SidebarItem>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className='~space-y-2'>
            <div className='~space-y-1'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' defaultValue='Scott Hetrick' />
            </div>
            <div className='~space-y-1'>
              <Label htmlFor='username'>Username</Label>
              <Input id='username' defaultValue='@dreadhalor' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='password'>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className='~space-y-2'>
            <div className='~space-y-1'>
              <Label htmlFor='current'>Current password</Label>
              <Input id='current' type='password' />
            </div>
            <div className='~space-y-1'>
              <Label htmlFor='new'>New password</Label>
              <Input id='new' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value='password2'>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your afewaw out.</CardDescription>
          </CardHeader>
          <CardContent className='~space-y-2'>
            <div className='~space-y-1'>
              <Label htmlFor='current'>Current eee</Label>
              <Input id='current' type='password' />
            </div>
            <div className='~space-y-1'>
              <Label htmlFor='new'>dd ssad</Label>
              <Input id='new' type='password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};
