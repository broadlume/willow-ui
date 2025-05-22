import { useCallback, useState, useRef } from 'react';

import { FaSun, FaMoon, FaQuestionCircle, FaBrush, FaCopy } from 'react-icons/fa';

import Editor, { Theme, EditorProps, Monaco } from '@monaco-editor/react';
import * as emmetMonaco from 'emmet-monaco-es';
import * as prettier from 'prettier/standalone';
import * as prettierParserHtml from 'prettier/parser-html';
import * as prettierParserBabel from 'prettier/parser-babel';
import * as prettierParserCss from 'prettier/parser-postcss';

import { Button } from '@components/button';

interface CodeEditorProps {
    code?: string,
    onChange?: (code: string) => void,
    language?: string,
    theme?: Theme,
    height?: string,
    width?: string,
    options?: EditorProps['options'],
    tokenSuggestions?: string[],
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    code: passedCode = '',
    onChange: passedOnChange,
    language: passedLanguage = 'html',
    theme: passedTheme = 'vs-dark',
    height = '90vh',
    width = '100%',
    options,
    tokenSuggestions = [],
}: CodeEditorProps) => {
    const [code, setCode] = useState<string>(passedCode);
    const [theme, setTheme] = useState<Theme>(passedTheme);
    const [showHelper, setShowHelper] = useState<boolean>(false);
    const [statusMessage, setStatusMessage] = useState('');
    const editorRef = useRef<any>(null);

    const defaultOptions: EditorProps['options'] = {
        fontSize: 16,
        fontFamily: 'monospace',
        lineNumbersMinChars: 3,
        minimap: {
            enabled: true,
        },
        scrollbar: {
            alwaysConsumeMouseWheel: false,
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
        },
        
        ...options,
    };

    const handleEditorDidMount = (editor: any, monaco: Monaco) => {
        editorRef.current = editor;

        // Enable Emmet support for all languages
        emmetMonaco.emmetCSS(monaco);
        emmetMonaco.emmetHTML(monaco);
        emmetMonaco.emmetJSX(monaco);

        // List of languages to register the completion provider for
        const supportedLanguages = ['html', 'liquid', 'javascript'];

        supportedLanguages.forEach((language) => {
            monaco.languages.registerCompletionItemProvider(language, {
                triggerCharacters: ['@'], // Trigger suggestions when '@' is typed
                provideCompletionItems: (model, position) => {
                    const textBeforeCursor = model.getValueInRange({
                        startLineNumber: position.lineNumber,
                        startColumn: 1,
                        endLineNumber: position.lineNumber,
                        endColumn: position.column,
                    });

                    // Check if the user is typing '@@'
                    if (!textBeforeCursor.endsWith('@@')) {
                        return { suggestions: [] };
                    }
                    const suggestions = tokenSuggestions.map((token) => ({
                        label: token,
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: `${token}@@`,
                        detail: `Insert ${token} token`,
                    }));

                    return { suggestions };
                },
            });
        });

        // Manually trigger suggestions when '@@' is typed
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

            if (textBeforeCursor.endsWith('@@')) {
                editor.trigger('keyboard', 'editor.action.triggerSuggest', {});
            }
        });
    };

    const formatCode = () => {
        if (!editorRef.current) return;

        const currentCode = editorRef.current.getValue();
        let formattedCode = currentCode;

        try {
            formattedCode = prettier.format(currentCode, {
                parser: getPrettierParser(passedLanguage),
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

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'vs-dark' ? 'light' : 'vs-dark'));
    };

    const toggleHelper = () => {
        setShowHelper((prev) => !prev);
    };

    const copyCode = () => {
        if (editorRef.current) {
            const currentCode = editorRef.current.getValue();
            navigator.clipboard.writeText(currentCode).then(() => {
                setStatusMessage('Code copied to clipboard!');
                setTimeout(() => setStatusMessage(''), 2000);
            }).catch((err) => {
                setStatusMessage('Failed to copy code.');
                setTimeout(() => setStatusMessage(''), 2000);
                console.error('Failed to copy code:', err);
            });
        }
    };

    return (
        <div className='~border ~border-gray-300 ~rounded-lg ~shadow-md ~overflow-hidden'>
            {/* Menu Bar */}
            <div className='~flex ~justify-between ~items-center ~py-2 ~px-8 ~bg-gray-100'>
                <p><b>Type: </b><span className="~capitalize">{passedLanguage}</span></p>
                <div className="~flex ~justify-end ~gap-4">
                    <Button type="button" variant='ghost' onClick={formatCode}>
                        <FaBrush fontSize={18} />
                    </Button> 
                    <Button type="button" variant='ghost' onClick={toggleTheme}>
                        {theme === 'vs-dark' ? <FaSun fontSize={18} /> : <FaMoon fontSize={18} />}
                    </Button>
                    <Button type="button" variant='ghost' onClick={copyCode}>
                        <FaCopy fontSize={18} />
                    </Button>
                    <Button type="button" variant='ghost' onClick={toggleHelper}>
                        <FaQuestionCircle fontSize={18} />
                    </Button>
                </div>
            </div>

            {statusMessage && <div className="~text-green-500 ~mb-2 ~px-4 ~py-1 ~text-right">{statusMessage}</div>}

            {/* Helper Menu */}
            {showHelper && (
                <div className="~p-4 ~bg-gray-200 ~rounded-md ~shadow-md ~mt-2">
                    <h3 className="~font-bold ~mb-2">Code Editor Help</h3>
                    <ul className="~list-disc ~pl-5">
                        <li><span className='~flex ~items-center'><FaSun /> / <FaMoon />: Toggle between dark and light mode.</span></li>
                        <li><span className='~flex ~items-center'><FaBrush />: Format the code using Prettier.</span></li>
                        <li><span className='~flex ~items-center'><FaCopy />: Copy the current code to the clipboard.</span></li>
                        <li><strong>Font Size:</strong> Adjust the font size using the input box.</li>
                        <li><strong>Token Suggestions:</strong> Type `@@` to see the Tokens suggestions.</li>
                        <li><strong>Shortcuts:</strong> Use <code>Ctrl+Space</code> to trigger suggestions manually.</li>
                    </ul>
                </div>
            )}

            {/* Code Editor */}
            <Editor
                options={defaultOptions}
                height={height}
                width={width}
                language={passedLanguage}
                theme={theme}
                defaultValue={code}
                onChange={onChange}
                onMount={handleEditorDidMount}
                className='~rounded-b-lg ~p-0'
            />
        </div>
    );
};

export { CodeEditor };
