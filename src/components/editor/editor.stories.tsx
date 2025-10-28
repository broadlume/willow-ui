import { Meta, StoryObj } from '@storybook/react';

import { Editor } from './editor';
import { useCallback } from 'react';

const meta: Meta = {
  component: Editor,
  title: 'Components/Editor',
};

export default meta;
type Story = StoryObj<typeof Editor>;

const EditorComponent = () => {
  const fetchUsersFromApi = useCallback(async (query: string) => {
    const users = [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Smith' },
      { id: '3', name: 'Peter Jones' },
    ];
    await new Promise((resolve) => setTimeout(resolve, 300));
    return users
      .filter((user) => user.name.toLowerCase().includes(query.toLowerCase()))
      .map((user) => ({ label: user.name, value: user.id }));
  }, []);

  return (
    <Editor
      onChange={(html) => console.log('Content changed:', html)}
      onBlur={(html) => console.log('Content blurred:', html)}
      autocompleteFetchOptions={fetchUsersFromApi}
      hostname='https://api.cms.my.dev.broadlume.com'
    />
  );
};

export const Demo: Story = {
  render: () => <EditorComponent />,
};
