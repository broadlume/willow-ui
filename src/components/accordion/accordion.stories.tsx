import type { Meta, StoryObj } from '@storybook/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

type StoryAccordionProps = {
  variant?: 'borderless' | 'bordered' | 'separated';
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  caretAlign?: 'left' | 'right';
  showCaret?: boolean;
  defaultValue?: string;
};

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Components/Accordion',
  argTypes: {
    variant: {
      control: 'radio',
      options: ['borderless', 'bordered', 'separated'],
    },
  },
};

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
    <Accordion {...args} className="w-full">
      <AccordionItem value="item-1" variant={args.variant}>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant={args.variant}>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant={args.variant}>
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
    <Accordion {...args} className="w-full">
      <AccordionItem value="item-1" variant={args.variant}>
        <AccordionTrigger>What are the specifications?</AccordionTrigger>
        <AccordionContent>
          Our product adheres to the highest industry standards.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" variant={args.variant}>
        <AccordionTrigger>Are there customizable options?</AccordionTrigger>
        <AccordionContent>
          Absolutely. The product comes with a variety of customizable options.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" variant={args.variant}>
        <AccordionTrigger>What about the product's appearance?</AccordionTrigger>
        <AccordionContent>
          Our design team ensures a sleek & modern look.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/** Variants */
export const Borderless: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'borderless',
  },
  render: Demo.render,
};

export const Bordered: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'bordered',
  },
  render: Demo.render,
};

export const Separated: Story = {
  args: {
    type: 'single',
    collapsible: true,
    variant: 'separated',
  },
  render: Demo.render,
};