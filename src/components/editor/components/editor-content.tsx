import { Editor, EditorContent as TiptapEditorContent } from '@tiptap/react';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { Textarea } from '@components/textarea/textarea';
import { BubbleMenu } from './bubble-menu';

interface EditorContentProps {
    editor: Editor;
    className?: string;
    darkMode?: boolean;
    markdownMode?: boolean;
    content?: string;
    setContent?: (value: string) => void;
}

// HTML Textarea Editor Component
const HTMLTextareaEditor: React.FC<{
    htmlContent: string;
    darkMode?: boolean;
    onHtmlChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ htmlContent, darkMode, onHtmlChange }) => (
    <div className="relative">
        <Textarea
            value={htmlContent}
            onChange={onHtmlChange}
            className={clsx(
                'w-full min-h-[20rem] border-gray-300 outline-hidden focus-visible:ring-0 rounded-lg rounded-t-none border-t-0 font-mono text-sm resize-y',
                {
                    'dark:bg-gray-800 dark:text-gray-200': darkMode,
                    'dark:border-gray-600': darkMode,
                }
            )}
            placeholder="Enter HTML content..."
            spellCheck={false}
        />
    </div>
);

// Visual Editor Component
const VisualEditor: React.FC<{
    editor: Editor;
    content?: string;
    darkMode?: boolean;
    className?: string;
}> = ({ editor, content, darkMode, className }) => (
    <div className="relative">
        {/* BubbleMenu for this specific editor instance */}
        <BubbleMenu editor={editor} />
        
        <TiptapEditorContent
            editor={editor}
            content={content}
            className={clsx(
                'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl [&>div]:min-h-[20rem] [&>div]:max-h-[40rem] [&>div]:overflow-scroll [&>div]:scrollbar-hide [&>div]:outline-transparent [&>div]:border-none rounded-bl-lg rounded-br-lg border-[1px] border-solid border-gray-300 p-2 max-w-full',
                {
                    'bg-gray-800 text-gray-200': darkMode,
                    'border-[1px] border-gray-600': darkMode,
                },
                className
            )}
        />
    </div>
);

// Main EditorContent Component
export const EditorContent: React.FC<EditorContentProps> = ({ 
    editor, 
    className, 
    darkMode, 
    markdownMode, 
    content, 
    setContent
}) => {
    const [htmlContent, setHtmlContent] = useState<string>('');
    const previousMarkdownMode = useRef<boolean>(false);

    // Update HTML content when switching to HTML mode
    useEffect(() => {
        // Only update HTML content when we switch to markdown mode
        const justSwitchedToMarkdown = markdownMode && !previousMarkdownMode.current;

        if (justSwitchedToMarkdown && content) {
            setHtmlContent(content);
        }

        // When switching back to visual mode, ensure editor is properly focused
        const justSwitchedToVisual = !markdownMode && previousMarkdownMode.current;
        if (justSwitchedToVisual && editor) {
            // Small delay to ensure the visual editor is rendered before focusing
            setTimeout(() => {
                if (editor && !editor.isDestroyed) {
                    editor.commands.focus();
                }
            }, 100);
        }

        previousMarkdownMode.current = markdownMode ?? false;
    }, [markdownMode, content, editor]);

    // Handle HTML content changes
    const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setHtmlContent(newValue);

        // Update the parent component's content state immediately
        if (setContent) {
            setContent(newValue);
        }
    };

    return (
        <>
            {editor && (
                <div>
                    {markdownMode ? (
                        <HTMLTextareaEditor
                            htmlContent={htmlContent}
                            darkMode={darkMode}
                            onHtmlChange={handleHtmlChange}
                        />
                    ) : (
                        <VisualEditor
                            editor={editor}
                            content={content}
                            darkMode={darkMode}
                            className={className}
                        />
                    )}
                </div>
            )}
        </>
    );
};
