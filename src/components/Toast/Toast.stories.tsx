import { Meta } from '@storybook/react';
import { Toast, ToastProps } from './Toast';
import { useToast } from '@src/hooks/useToast';
import { Button } from '@src/components/Button/Button';
import { Toaster } from '@src/providers/Toaster';

const meta: Meta = {
  component: Toast,
  tags: ['autodocs'],
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
        options: ['default', 'destructive'],
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

export const Demo = {
  args: {
    title: 'Scheduled: Catch up',
    description: 'Monday, 2:00 PM - 2:30 PM',
  },

  parameters: {
    docs: {
      description: {
        story: 'A basic toast.',
      },
    },
  },
  render: ToastDemo,
};
