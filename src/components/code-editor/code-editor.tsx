import { useCallback, useState } from 'react';
import Editor, { Theme, EditorProps } from '@monaco-editor/react';

interface CodeEditorProps {
    code?: string,
    onChange?: (code: string) => void,
    language?: string,
    theme?: Theme,
    height?: string,
    options?: EditorProps['options'],
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
    const [code, setCode] = useState<string>(props.code ?? '// code here...');

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
        ...props.options,
    }

    const onChange = useCallback((value: string | undefined) => {
        setCode(value ?? '');
        props.onChange?.(value ?? '');
    }, [props]);

    return <Editor height={
        props.height ?? '90vh'
    } width='100%' options={defaultOptions} language={props.language ?? 'typescript'
    } defaultLanguage="typescript" defaultValue={code} onChange={onChange} theme={
        props.theme ?? 'vs-dark'
    } />;
}

export { CodeEditor };
