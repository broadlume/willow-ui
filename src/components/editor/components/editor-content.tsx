import { Editor, EditorContent as TiptapEditorContent } from '@tiptap/react';
import clsx from 'clsx';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';

import { Textarea } from '@components/textarea/textarea';

export const EditorContent: React.FC<{
    editor: Editor;
    className?: string;
    darkMode?: boolean;
    markdownMode?: boolean;
    content?: string;
    setContent?: (value: string) => void;
}> = ({ editor, className, darkMode, markdownMode, content, setContent }) => {
    return (
        <>
            {editor && (
                <div>
                    {
                        markdownMode ? (
                            <Textarea value={
                                prettier.format(content!, {
                                    parser: 'html',
                                    plugins: [parserHtml],
                                })
                            } onChange={(e) => setContent!(e.target.value)} className={
                                clsx(
                                    'w-full min-h-[20rem] border-gray-300 outline-hidden rounded-none rounded-bl-lg rounded-br-lg',
                                    {
                                        'dark:bg-gray-800 dark:text-gray-200': darkMode,
                                        'dark:border-gray-600': darkMode,
                                    }
                                )
                            }>
                                {content}
                            </Textarea>
                        ) : (
                            <TiptapEditorContent
                                editor={editor}
                                content={content}
                                className={
                                    clsx(
                                        'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl [&>div]:min-h-[20rem] [&>div]:max-h-[40rem] [&>div]:overflow-scroll [&>div]:outline-transparent [&>div]:border-none rounded-bl-lg rounded-br-lg border-[1px] border-solid border-gray-300 p-2 max-w-full',
                                        {
                                            'bg-gray-800 text-gray-200': darkMode,
                                            'border-[1px] border-gray-600': darkMode,
                                        },
                                        className
                                    )
                                }
                            />
                        )
                    }
                </div>
            )}
        </>
    );
}