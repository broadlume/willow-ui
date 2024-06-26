import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { ColorPickerInput } from "./color-picker-input";

const meta: Meta = {
    component: ColorPickerInput,
    title: 'Components/ColorPickerInput',
};

export default meta;
type Story = StoryObj<typeof ColorPickerInput>;

export const Demo: Story = {
    render: _ => {
        const [color, setColor] = useState('#d2e8ba')
        return (<ColorPickerInput color={color} name="color-picker-demo" setColor={setColor} key='color-picker' />)
    }
}
