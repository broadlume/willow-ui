import { useCallback, useState } from 'react';
import Editor, { Theme, EditorProps } from '@monaco-editor/react';

interface CodeEditorProps {
    code?: string,
    onChange?: (code: string) => void,
    language?: string,
    theme?: Theme,
    height?: string,
    width?: string,
    options?: EditorProps['options'],
}

/**
 * A React functional component for a customizable code editor.
 *
 * @component
 * @param {CodeEditorProps} props - The properties for the CodeEditor component.
 * @param {string} props.code - The initial code to display in the editor. Defaults to `// code here...` if not provided.
 * @param {(code: string) => void} [props.onChange] - Callback function triggered when the code changes.
 * @param {string} [props.language] - The programming language for syntax highlighting. Defaults to 'typescript'.
 * @param {string} [props.theme] - The theme for the editor. Defaults to 'vs-dark'.
 * @param {string} [props.height] - The height of the editor. Defaults to '90vh'.
 * @param {string} [props.width] - The width of the editor. Defaults to '100%'.
 * @param {EditorProps['options']} [props.options] - Additional configuration options for the editor.
 *
 * @returns {JSX.Element} The rendered code editor component.
 *
 * @example
 * ```tsx
 * <CodeEditor
 *   code="// Example code"
 *   onChange={(updatedCode) => console.log(updatedCode)}
 *   language="javascript"
 *   theme="light"
 *   height="500px"
 *   width="100%"
 *   options={{ fontSize: 16 }}
 * />
 * ```
 */
const CodeEditor: React.FC<CodeEditorProps> = ({
    code: passedCode = '// code here...',
    onChange: passedOnChange,
    language = 'typescript',
    theme = 'vs-dark',
    height = '90vh',
    width = '100%',
    options
}: CodeEditorProps) => {
    const [code, setCode] = useState<string>(passedCode);

    const defaultOptions: EditorProps['options'] = {
        fontSize: 14,
        fontFamily: 'JetBrains Mono',
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
    }

    const onChange = useCallback((value: string | undefined) => {
        const updatedCode = value ?? '';
        setCode(updatedCode);
        passedOnChange?.(updatedCode);
    }, [passedOnChange]);

    return <Editor
        options={defaultOptions}
        height={height}
        width={width}
        language={language}
        theme={theme}
        defaultValue={code}
        onChange={onChange}
    />;
}

export { CodeEditor };
