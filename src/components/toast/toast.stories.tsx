import { Meta } from '@storybook/react';
import { Toast, ToastProps } from './toast';
import { Toaster } from './toaster';
import { useToast } from './use-toast';
import { Button } from '@components/button/button';

const meta: Meta = {
  component: Toast,
  title: 'Components/Toast',
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['default', 'warning', 'success', 'destructive'],
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type ToastDemoProps = {
  title: string;
  description: string;
};
const ToastDemo = ({
  title,
  description,
  variant,
}: ToastDemoProps & ToastProps) => {
  const { toast } = useToast();

  return (
    <Button onClick={() => toast({ title, description, variant })}>
      Add to Calendar
    </Button>
  );
};

/** A basic toast. */
export const Demo = {
  args: {
    title: 'Scheduled: Catch up',
    description: 'Monday, 2:00 PM - 2:30 PM',
  },
  render: ToastDemo,
};
