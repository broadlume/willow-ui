import { Editor } from '@tiptap/react';
import AIContentDialog from '@components/shared/ai-content-dialog';

interface AIContentProps {
  editor: Editor;
  closeDialog: () => void;
  hostname: string;
  authToken?: string;
}

const AIContent = ({
  editor,
  closeDialog,
  hostname,
  authToken,
}: AIContentProps) => {
  const { from, to } = editor.state.selection;

  const getSelectedText = () => {
    return editor.state.doc.textBetween(from, to, ' ') || '';
  };

  const insertContent = (content: string) => {
    if (from && to) {
      // Replace the selected content with the generated content
      editor
        .chain()
        .focus()
        .deleteRange({ from, to })
        .insertContent(content)
        .run();
    } else {
      // If no selection, insert at the current cursor position
      editor.chain().focus().insertContent(content).run();
    }
  };

  return (
    <AIContentDialog
      getSelectedText={getSelectedText}
      insertContent={insertContent}
      closeDialog={closeDialog}
      hostname={hostname}
      authToken={authToken}
      parseAsMarkdown={true}
    />
  );
};

export default AIContent;
