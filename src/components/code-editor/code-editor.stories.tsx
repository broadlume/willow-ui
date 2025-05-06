import { Meta, StoryObj } from '@storybook/react';

import { CodeEditor } from './code-editor';

const meta: Meta = {
    component: CodeEditor,
    title: 'Components/Code Editor',
};

export default meta;
type Story = StoryObj<typeof CodeEditor>;

export const Demo: Story = {
    render: (_) => {
        const onChange = (code: string) => {
            console.log(code);
        };
        return <CodeEditor onChange={onChange} language='html' theme='light' />;
    },
};

export const DemoWithSuggestions: Story = {
    render: (_) => {
        const onChange = (code: string) => {
            console.log(code);
        };
        return <CodeEditor onChange={onChange} tokenSuggestions={['apple', 'banana', 'carrot', 'drum sticks', 'e']} />;
    },
};
    