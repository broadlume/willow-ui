import { useCallback, useState, useRef, useEffect } from 'react';

import {
  FaSun,
  FaMoon,
  FaQuestionCircle,
  FaBrush,
  FaCopy,
} from 'react-icons/fa';

import Editor, { Theme, EditorProps, Monaco } from '@monaco-editor/react';
import * as emmetMonaco from 'emmet-monaco-es';
import * as prettier from 'prettier/standalone';
import * as prettierParserHtml from 'prettier/parser-html';
import * as prettierParserBabel from 'prettier/parser-babel';
import * as prettierParserCss from 'prettier/parser-postcss';

import { Button } from '@components/button';

interface CodeEditorProps {
  code?: string;
  onChange?: (code: string) => void;
  language?: string;
  theme?: Theme;
  height?: string;
  width?: string;
  options?: EditorProps['options'];
  asyncTokenSuggestions?: (query: string) => Promise<string[]>;
    enableTokenSuggestion?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code: passedCode = '',
  onChange: passedOnChange,
  language: passedLanguage = 'html',
  theme: passedTheme = 'vs-dark',
  height = '90vh',
  width = '100%',
  options,
  asyncTokenSuggestions,
    enableTokenSuggestion = true
}: CodeEditorProps) => {
  const [code, setCode] = useState<string>(passedCode);
  const [theme, setTheme] = useState<Theme>(passedTheme);
  const [showHelper, setShowHelper] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [suggestionPage, setSuggestionPage] = useState(1);
  const editorRef = useRef<any>(null);

  const defaultOptions: EditorProps['options'] = {
    fontSize: 16,
    fontFamily: 'monospace',
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

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;

    emmetMonaco.emmetCSS(monaco);
    emmetMonaco.emmetHTML(monaco);
    emmetMonaco.emmetJSX(monaco);

    ['html', 'liquid', 'javascript'].forEach((language) => {
            if(!enableTokenSuggestion) return;
      monaco.languages.registerCompletionItemProvider(language, {
        triggerCharacters: ['{'],
        // @ts-expect-error fix this
        provideCompletionItems: async (model, position) => {
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
        },
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

    const suggestWidget = editorDomNode.ownerDocument.querySelector(
      '.monaco-editor .suggest-widget .tree'
    );
    if (!suggestWidget) return;

    const onScroll = (e: any) => {
      if (
        suggestWidget.scrollTop + suggestWidget.clientHeight >=
        suggestWidget.scrollHeight
      ) {
        console.log('Scrolled to bottom, fetch more suggestions');
      }
    };

    suggestWidget.addEventListener('scroll', onScroll);
    return () => suggestWidget.removeEventListener('scroll', onScroll);
  }, [editorRef.current, suggestionPage]);

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

  const onChange = useCallback(
    (value: string | undefined) => {
      const updatedCode = value ?? '';
      setCode(updatedCode);
      passedOnChange?.(updatedCode);
    },
    [passedOnChange]
  );

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'vs-dark' ? 'light' : 'vs-dark'));
  const toggleHelper = () => setShowHelper((prev) => !prev);

  const copyCode = () => {
    if (!editorRef.current) return;
    const currentCode = editorRef.current.getValue();
    navigator.clipboard
      .writeText(currentCode)
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
    <div className='border border-gray-300 rounded-lg shadow-md overflow-hidden'>
      <div className='flex justify-between items-center py-2 px-6 bg-gray-100 border-b border-gray-300'>
        <p className='font-medium'>
          <b>Type: </b>
          <span className='capitalize text-indigo-600'>{passedLanguage}</span>
        </p>

        {statusMessage && (
          <div className='text-green-600 text-sm px-3 py-1'>
            {statusMessage}
          </div>
        )}

        <div className='flex gap-2 items-center'>
          <Button
            type='button'
            variant='ghost'
            title='Format Code'
            onClick={formatCode}
          >
            <FaBrush
              fontSize={18}
              className='hover:text-indigo-500 transition'
            />
          </Button>
          <Button
            type='button'
            variant='ghost'
            title='Toggle Theme'
            onClick={toggleTheme}
          >
            {theme === 'vs-dark' ? (
              <FaSun
                fontSize={18}
                className='hover:text-yellow-500 transition'
              />
            ) : (
              <FaMoon
                fontSize={18}
                className='hover:text-gray-700 transition'
              />
            )}
          </Button>
          <Button
            type='button'
            variant='ghost'
            title='Copy Code'
            onClick={copyCode}
          >
            <FaCopy
              fontSize={18}
              className='hover:text-green-500 transition'
            />
          </Button>
          <Button
            type='button'
            variant='ghost'
            title='Toggle Help'
            onClick={toggleHelper}
          >
            <FaQuestionCircle
              fontSize={18}
              className='hover:text-blue-500 transition'
            />
          </Button>
        </div>
      </div>

            {showHelper && (
                <div className="px-6 py-4 bg-white rounded-md text-sm">
                    <h3 className="font-semibold mb-3 text-gray-800 text-lg">⚙️ Editor Shortcuts & Tips</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-3 bg-gray-50 rounded-lg shadow-xs">
                            <span className='flex items-center mb-1 font-medium'><FaSun className='mr-2' /> / <FaMoon className='ml-2' /> Theme Toggle</span>
                            <p className="text-gray-600">Switch between dark and light modes.</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg shadow-xs">
                            <span className='flex items-center mb-1 font-medium'><FaBrush className='mr-2' /> Format Code</span>
                            <p className="text-gray-600">Auto-format code with Prettier.</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg shadow-xs">
                            <span className='flex items-center mb-1 font-medium'><FaCopy className='mr-2' /> Copy Code</span>
                            <p className="text-gray-600">Copy the editor content to clipboard.</p>
                        </div>
                        {enableTokenSuggestion &&
                            <div className="p-3 bg-gray-50 rounded-lg shadow-xs">
                                <span className='font-medium'>Tokens: <code>&#123;&#123;</code></span>
                                <p className="text-gray-600">Trigger suggestions like <code>&#123;&#123;user</code></p>
                            </div>
                        }
                        <div className="p-3 bg-gray-50 rounded-lg shadow-xs">
                            <span className='font-medium'>Shortcut</span>
                            <p className="text-gray-600"><kbd>Ctrl</kbd> + <kbd>Space</kbd> to trigger suggestions manually</p>
                        </div>
                    </div>
                </div>
            )}

      <Editor
        options={defaultOptions}
        height={height}
        width={width}
        language={passedLanguage}
        theme={theme}
        defaultValue={code}
        onChange={onChange}
        onMount={handleEditorDidMount}
        className='rounded-b-lg p-0'
      />
    </div>
  );
};

export { CodeEditor };
