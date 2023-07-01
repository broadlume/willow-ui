import type { Meta, StoryObj } from '@storybook/react';
import config from '@/tailwind.config';
const colors = config.theme.extend.colors;

const meta = {
  title: 'Quarks/Colors',
  tags: ['autodocs'],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const mapColorString = (name: string, color: string) => (
  <div key={name} className='m-[10px]'>
    <div
      className='h-[100px] w-[100px] rounded-[20px]'
      style={{
        backgroundColor: color,
      }}
    ></div>
    <p>{name}</p>
    <p>{color}</p>
  </div>
);
const flattenColorConfig = (
  obj?: Record<string, string | Record<string, string>>
) => {
  const flattened: Record<string, string> = {};
  if (!obj) return flattened;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      flattened[key] = value;
    } else {
      for (const [shade, color] of Object.entries(value)) {
        if (shade === 'DEFAULT') flattened[key] = color;
        else flattened[`${key}-${shade}`] = color;
      }
    }
  }
  return flattened;
};

export const Palette: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All design system theme colors.',
      },
    },
  },
  render: () => {
    const flattened = flattenColorConfig(colors);
    return (
      <div className='flex flex-wrap'>
        {Object.entries(flattened).map(([name, value]) => {
          return mapColorString(name, value);
        })}
      </div>
    );
  },
};
