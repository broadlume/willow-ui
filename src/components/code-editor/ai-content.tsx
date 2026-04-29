import type * as monaco from 'monaco-editor';
import AIContentDialog from '@components/shared/ai-content-dialog';

interface AIContentProps {
  editor: monaco.editor.IStandaloneCodeEditor | null;
  closeDialog: () => void;
  hostname: string;
  authToken?: string;
  systemPrompt?: string;
}

const AIContent = ({
  editor,
  closeDialog,
  hostname,
  authToken,
  systemPrompt,
}: AIContentProps) => {
  const getSelectedText = () => {
    if (!editor) return '';
    return (
      editor.getModel()?.getValueInRange(
        editor.getSelection() || {
          startLineNumber: 0,
          startColumn: 0,
          endLineNumber: 0,
          endColumn: 0,
        }
      ) || ''
    );
  };

  const insertContent = (content: string) => {
    if (!editor) return;

    const selection = editor.getSelection();
    if (selection) {
      // Replace the selected content with the generated content
      editor.executeEdits('', [
        {
          range: selection,
          text: content,
        },
      ]);
    } else {
      // If no selection, insert at the current cursor position
      const position = editor.getPosition();
      if (position) {
        editor.executeEdits('', [
          {
            range: {
              startLineNumber: position.lineNumber,
              startColumn: position.column,
              endLineNumber: position.lineNumber,
              endColumn: position.column,
            },
            text: content,
          },
        ]);
      }
    }
  };

  return (
    <AIContentDialog
      getSelectedText={getSelectedText}
      insertContent={insertContent}
      closeDialog={closeDialog}
      hostname={hostname}
      authToken={authToken}
      parseAsMarkdown={false}
      systemPrompt={systemPrompt}
    />
  );
};

export default AIContent;
