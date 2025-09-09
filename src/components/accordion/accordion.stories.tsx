import type { Meta, StoryObj } from '@storybook/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const meta = {
  component: Accordion,
  title: 'Components/Accordion',
  argTypes: {
    variant: {
      control: 'radio',
      options: ['borderless', 'bordered', 'separated'],
      description: 'The visual style variant',
      table: {
        defaultValue: { summary: 'borderless' },
      },
    },
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Allow single or multiple panels open',
      table: {
        defaultValue: { summary: 'single' },
      },
    },
    collapsible: {
      control: 'boolean',
      description: 'Allow all panels to be closed',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

/** A basic accordion (single panel). */
export const Demo: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'borderless',
  },
  render: (args) => (
    <Accordion {...args} className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/** Multiple panels can be open at the same time. */
export const Multiple: Story = {
  args: {
    type: 'multiple',
    variant: 'borderless',
  },
  render: (args) => (
    <Accordion {...args} className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>What are the specifications?</AccordionTrigger>
        <AccordionContent>
          Our product adheres to the highest industry standards.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Are there customizable options?</AccordionTrigger>
        <AccordionContent>
          Absolutely. The product comes with a variety of customizable options.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>
          What about the product's appearance?
        </AccordionTrigger>
        <AccordionContent>
          Our design team ensures a sleek & modern look.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/** Variants: borderless */
export const Borderless: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'borderless',
  },
  render: Demo.render,
};

/** Variants: bordered */
export const Bordered: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'bordered',
  },
  render: Demo.render,
};

/** Variants: separated */
export const Separated: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'separated',
  },
  render: Demo.render,
};

/** Caret alignment examples */
export const CaretAlignment: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'separated',
  },
  render: (args) => (
    <div className='space-y-8'>
      <Accordion {...args} className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger caretAlign='left'>
            Left-aligned caret
          </AccordionTrigger>
          <AccordionContent>
            The caret icon appears on the left side of the trigger.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion {...args} className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger caretAlign='right'>
            Right-aligned caret (default)
          </AccordionTrigger>
          <AccordionContent>
            The caret icon appears on the right side of the trigger.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion {...args} className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger caretOnly caretAlign='left'>
            Caret-only mode with left alignment
          </AccordionTrigger>
          <AccordionContent>
            In caret-only mode, the caret is separated from the trigger text.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion {...args} className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger noCaret>No caret icon</AccordionTrigger>
          <AccordionContent>
            The caret icon can be hidden completely.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

/** Status-based styling examples */
export const StatusStyling: Story = {
  args: {
    type: 'multiple',
    variant: 'separated',
  },
  render: (args) => (
    <Accordion {...args} className='w-full space-y-4'>
      <AccordionItem value='item-1'>
        <AccordionTrigger status='error'>Error Message</AccordionTrigger>
        <AccordionContent>
          The system encountered an error while processing your request. Please
          check your configuration settings and try again.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-2'>
        <AccordionTrigger status='warning'>Warning Notice</AccordionTrigger>
        <AccordionContent>
          Your current settings may impact system performance. Consider
          optimizing your configuration for better results.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-3'>
        <AccordionTrigger status='success'>Success Status</AccordionTrigger>
        <AccordionContent>
          All changes have been saved and applied. Your system is now up to date
          with the latest configurations.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-4'>
        <AccordionTrigger status='info'>Information</AccordionTrigger>
        <AccordionContent>
          A new version of the software is available. Please review the changes
          and update at your convenience.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-5'>
        <AccordionTrigger status='default'>Default Style</AccordionTrigger>
        <AccordionContent>
          This is how the accordion looks with the default status.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
