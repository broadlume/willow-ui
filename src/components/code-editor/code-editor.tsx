import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import Editor, { EditorProps, Monaco, Theme } from '@monaco-editor/react';
import * as emmetMonaco from 'emmet-monaco-es';
import type * as monaco from 'monaco-editor';
import * as prettierParserBabel from 'prettier/parser-babel';
import * as prettierParserHtml from 'prettier/parser-html';
import * as prettierParserCss from 'prettier/parser-postcss';
import * as prettier from 'prettier/standalone';

import { Button } from '@components/button';
import { Popover, PopoverContent, PopoverTrigger } from '@components/popover/popover';

// icons
import { HiClipboardDocumentCheck, HiCodeBracketSquare, HiEllipsisVertical, HiMiniMoon, HiMiniSun, HiPaintBrush } from 'react-icons/hi2';
import { ReactComponent as AIIcon } from './ai-icon.svg';

interface CodeEditorProps {
    code?: string,
    onChange?: (code: string) => void,
    language?: string,
    theme?: Theme,
    height?: string,
    width?: string,
    options?: EditorProps['options'],
    asyncTokenSuggestions?: (query: string) => Promise<string[]>;
    enableTokenSuggestion?: boolean,
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    code: passedCode = '',
    onChange: passedOnChange,
    language = 'html',
    theme: passedTheme = 'vs-dark',
    height = '90vh',
    width = '100%',
    options,
    asyncTokenSuggestions,
    enableTokenSuggestion = true
}: CodeEditorProps) => {
    const [code, setCode] = useState<string>(passedCode);
    const [theme, setTheme] = useState<Theme>(passedTheme);
    const [statusMessage, setStatusMessage] = useState('');
    const [suggestionPage, setSuggestionPage] = useState(1);
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    const defaultOptions: EditorProps['options'] = {
        fontSize: 14,
        fontFamily: 'Fira Code',
        lineNumbersMinChars: 3,
        minimap: { enabled: true },
        scrollbar: {
            alwaysConsumeMouseWheel: false,
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
        },
        autoClosingBrackets: 'always',
        autoClosingQuotes: 'always',
        ...options,
    };

    const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
        editorRef.current = editor;

        emmetMonaco.emmetCSS(monaco);
        emmetMonaco.emmetHTML(monaco);
        emmetMonaco.emmetJSX(monaco);

        ['html', 'liquid', 'javascript'].forEach((language) => {
            if (!enableTokenSuggestion) return;
            monaco.languages.registerCompletionItemProvider(language, {
                triggerCharacters: ['{'],
                provideCompletionItems: async (model, position, _context, _token) => {
                    const textBeforeCursor = model.getValueInRange({
                        startLineNumber: position.lineNumber,
                        startColumn: 1,
                        endLineNumber: position.lineNumber,
                        endColumn: position.column,
                    });

                    const match = textBeforeCursor.match(/{{(\w*)$/);
                    if (!match || !asyncTokenSuggestions) {
                        return { suggestions: [] };
                    }

                    const query = match[1];
                    let tokenResults: string[] = [];
                    try {
                        tokenResults = await asyncTokenSuggestions(query);
                    } catch (err) {
                        console.error('Failed to fetch async token suggestions:', err);
                    }

                    const suggestions = tokenResults.map((token) => ({
                        label: token,
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: `${token}`,
                        detail: `Insert ${token} token`,
                    }));

                    return { suggestions };
                }
            });
        });

        editor.onDidChangeModelContent(() => {
            const position = editor.getPosition();
            const model = editor.getModel();
            if (!position || !model) return;

            const textBeforeCursor = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
            });

            if (textBeforeCursor.endsWith('{{')) {
                editor.trigger('keyboard', 'editor.action.triggerSuggest', {});
            }
        });
    };

    useEffect(() => {
        if (!editorRef.current) return;
        const editorDomNode = editorRef.current.getDomNode?.();
        if (!editorDomNode) return;

        const suggestWidget = editorDomNode.ownerDocument.querySelector('.monaco-editor .suggest-widget .tree');
        if (!suggestWidget) return;

        const onScroll = (_e: Event) => {
            if (suggestWidget.scrollTop + suggestWidget.clientHeight >= suggestWidget.scrollHeight) {
                console.log('Scrolled to bottom, fetch more suggestions');
            }
        };

        suggestWidget.addEventListener('scroll', onScroll);
        return () => suggestWidget.removeEventListener('scroll', onScroll);
    }, [suggestionPage]);

    const formatCode = () => {
        if (!editorRef.current) return;

        const currentCode = editorRef.current.getValue();
        let formattedCode = currentCode;

        try {
            formattedCode = prettier.format(currentCode, {
                parser: getPrettierParser(language),
                plugins: [prettierParserHtml, prettierParserCss, prettierParserBabel],
            });
        } catch (error) {
            console.error('Error formatting code:', error);
        }

        editorRef.current.setValue(formattedCode);
    };

    const getPrettierParser = (lang: string) => {
        switch (lang) {
            case 'html':
            case 'liquid':
                return 'html';
            case 'css':
                return 'css';
            case 'javascript':
            case 'json':
                return 'babel';
            default:
                return 'babel';
        }
    };

    const onChange = useCallback((value: string | undefined) => {
        const updatedCode = value ?? '';
        setCode(updatedCode);
        passedOnChange?.(updatedCode);
    }, [passedOnChange]);

    const toggleTheme = () => setTheme((prev) => (prev === 'vs-dark' ? 'light' : 'vs-dark'));

    const copyCode = () => {
        if (!editorRef.current) return;
        const currentCode = editorRef.current.getValue();
        navigator.clipboard.writeText(currentCode)
            .then(() => {
                setStatusMessage('Code copied to clipboard!');
                setTimeout(() => setStatusMessage(''), 2000);
            })
            .catch((err) => {
                setStatusMessage('Failed to copy code.');
                setTimeout(() => setStatusMessage(''), 2000);
                console.error(err);
            });
    };

    return (
        <div className={
            clsx(
                '~w-full ~h-[440px] ~border ~rounded-lg ~overflow-hidden ~flex ~flex-col',
                {
                    '~bg-white ~border-[#CCCCCC]': theme === 'light',
                    '~bg-[#1A1A1A] ~border-[#333333]': theme === 'vs-dark',
                },
            )
        }>
            {/* Header Bar */}
            <div className={
                clsx(
                    '~border-b ~px-2.5 ~py-2 ~flex ~justify-between ~items-center ~h-[40px]',
                    {
                        '~bg-white ~border-[#CCCCCC]': theme === 'light',
                        '~bg-[#1A1A1A] ~border-[#333333]': theme === 'vs-dark',
                    },
                )
            }>
                {/* Label */}
                <div className='~text-xs ~capitalize ~flex ~items-center ~gap-1'>
                    <HiCodeBracketSquare size={14} className='~text-[#6038E8]' />
                    <span className={
                        clsx(
                            {
                                '~text-[#1A1A1A]': theme === 'light',
                                '~text-white': theme === 'vs-dark',
                            }
                        )
                    }>{language}</span>
                </div>

                {/* Toolbar */}
                <div className='~flex ~items-center ~gap-4 ~relative'>
                    {/* AI Icon */}
                    <div className='~flex ~items-center ~gap-1 ~cursor-pointer'>
                        <AIIcon />
                        <span className='~text-sm ~font-normal ~text-[#6038E8]'>Ai</span>
                    </div>

                    {/* Theme Toggle */}
                    <Button
                        type="button" variant='link'
                        className={
                            clsx(
                                {
                                    '~text-[#1A1A1A]': theme === 'light',
                                    '~text-white': theme === 'vs-dark',
                                }
                            )
                        }
                        onClick={() => {
                            toggleTheme();
                        }}
                    >
                        {theme === 'vs-dark' ? <HiMiniSun size={16} /> : <HiMiniMoon size={16} />}
                    </Button>

                    {/* More Options Menu */}
                    <Popover>
                        <PopoverTrigger
                            className={
                                clsx(
                                    {
                                        '~text-[#1A1A1A]': theme === 'light',
                                        '~text-white': theme === 'vs-dark',
                                    }
                                )
                            }
                        >
                            <HiEllipsisVertical size={24} />
                        </PopoverTrigger>
                        <PopoverContent className='~flex ~flex-col ~gap-2 ~p-2'>
                            <Button
                                type="button" 
                                variant='link'
                                className='hover:~no-underline ~text-[#1A1A1A] ~gap-2'
                                onClick={() => formatCode()}
                            >
                                <HiPaintBrush />
                                Format
                            </Button>
                            <Button
                                type="button" 
                                variant='link'
                                className='hover:~no-underline ~text-[#1A1A1A] ~gap-2'
                                onClick={() => copyCode()}
                            >
                                <HiClipboardDocumentCheck />
                                Copy
                            </Button>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {/* Content Area */}
            <div className='~flex-1 ~relative ~overflow-hidden'>
                {statusMessage && (
                    <div className="~absolute ~top-2 ~right-2 ~z-10 ~bg-green-600 ~text-white ~text-xs ~px-3 ~py-1 ~rounded">
                        {statusMessage}
                    </div>
                )}
                <Editor
                    options={{
                        ...defaultOptions,
                        lineNumbers: 'on',
                        lineNumbersMinChars: 3,
                        selectOnLineNumbers: true,
                        glyphMargin: false,
                        folding: true,
                        lineDecorationsWidth: 10,
                        lineHeight: 22,
                    }}
                    height={height}
                    width={width}
                    language={language}
                    theme={theme}
                    defaultValue={code}
                    onChange={onChange}
                    onMount={handleEditorDidMount}
                />
            </div>
        </div>
    );
};

export { CodeEditor };
