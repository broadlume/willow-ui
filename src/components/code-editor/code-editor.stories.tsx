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

        return (
            <CodeEditor
                onChange={onChange}
                language='liquid'
                theme='vs-dark'
                asyncTokenSuggestions={async (query) => {
                    return fetch(`https://dummyjson.com/users/search?q=${query}`)
                        .then(res => res.json())
                        .then((data) => {
                            console.log(data.users);
                            return data.users.map((user: any) => user.firstName);
                        });
                }}
            />
        );
    },
};
