import type { Meta, StoryObj } from '@storybook/react';
import { useLayoutEffect, useRef, useState } from 'react';
import { Card, CardContent, Separator } from '@src/index';
import { colorPalette, themeColors } from '@/tailwind.config';

const meta = {
  title: 'Quarks/Colors',
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ColorCard = (
  variableName: string,
  dictionary: Record<string, string>,
  isBaseColor = false
) => {
  const colorRef = useRef<HTMLDivElement>(null);

  const [computedColor, setComputedColor] = useState('');
  const [matchedColor, setMatchedColor] = useState('');
  const [textColor, setTextColor] = useState('black');

  useLayoutEffect(() => {
    if (colorRef.current) {
      const _computedColor = window.getComputedStyle(
        colorRef.current
      ).backgroundColor;
      const rgb = _computedColor.match(/(\d+), (\d+), (\d+)/);

      if (rgb) {
        const [r, g, b] = rgb.slice(1, 4).map(Number);
        // calculate the luminance of the background color
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

        // choose either white or black text color based on the luminance
        const textColor = luminance > 0.5 ? 'black' : 'white';

        if (isBaseColor) dictionary[_computedColor] = variableName;
        else if (dictionary[_computedColor])
          setMatchedColor(dictionary[_computedColor]);

        setComputedColor(_computedColor);
        setTextColor(textColor);
      }
    }
  }, [variableName, dictionary, isBaseColor]);

  return (
    <Card
      ref={colorRef}
      key={variableName}
      className='~m-[10px]'
      style={{ backgroundColor: `hsl(var(--${variableName}))` }}
    >
      <CardContent className='~p-6'>
        <p style={{ color: textColor }}>{variableName}</p>
        <p style={{ color: textColor }}>
          {(matchedColor && `--${matchedColor}`) || computedColor}
        </p>
      </CardContent>
    </Card>
  );
};
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

const ColorPaletteDemoComponent = (_) => {
  const colorPaletteFlattened = flattenColorConfig(colorPalette);
  const themeColorsFlattened = flattenColorConfig(themeColors);
  const calculatedColors = useRef<Record<string, string>>({});

  return (
    <div className='tw-reset ~flex ~flex-col ~gap-4'>
      <p className='body-large'>
        Note: All colors are defined in index.scss with HSL values, so RGB
        conversion may not be 100% accurate.
      </p>
      <Separator />
      <p className='body-large'>Palette</p>
      <div className='~flex ~flex-wrap'>
        {Object.entries(colorPaletteFlattened).map(([name]) => {
          return ColorCard(name, calculatedColors.current, true);
        })}
      </div>
      <Separator />
      <p className='body-large'>Theme Colors</p>
      <div className='~flex ~flex-wrap'>
        {Object.entries(themeColorsFlattened).map(([name]) => {
          return ColorCard(name, calculatedColors.current);
        })}
      </div>
    </div>
  );
};

export const Palette: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All design system theme colors.',
      },
    },
  },
  render: ColorPaletteDemoComponent,
};
