import { Editor, EditorContent as TiptapEditorContent } from '@tiptap/react';
import clsx from 'clsx';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import { useState, useEffect, useRef } from 'react';
import { HtmlValidate } from 'html-validate';

import { Textarea } from '@components/textarea/textarea';
import { Button } from '@components/button';
import { HiMiniPaintBrush, HiExclamationTriangle } from 'react-icons/hi2';

export const EditorContent: React.FC<{
    editor: Editor;
    className?: string;
    darkMode?: boolean;
    markdownMode?: boolean;
    content?: string;
    setContent?: (value: string) => void;
    onToggleMode?: () => void;
    onValidationErrors?: (errors: { line: number; column?: number; error: string; content: string; severity?: string }[]) => void;
}> = ({ editor, className, darkMode, markdownMode, content, setContent, onToggleMode, onValidationErrors }) => {
    const [htmlContent, setHtmlContent] = useState<string>('');
    const [isFormatted, setIsFormatted] = useState<boolean>(false);
    const [htmlErrors, setHtmlErrors] = useState<{ line: number; column?: number; error: string; content: string; severity?: string }[]>([]);
    const [showErrors, setShowErrors] = useState<boolean>(false);
    const [errorsDismissed, setErrorsDismissed] = useState<boolean>(false);
    const [isValidating, setIsValidating] = useState<boolean>(false);
    const previousMarkdownMode = useRef<boolean>(false);
    const isUpdatingFromEditor = useRef<boolean>(false);
    const validationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Initialize HTML validator with minimal, reliable configuration
    const htmlValidator = new HtmlValidate({
        rules: {
            // Only use well-established, standard rules
            "void-content": "error",  // Void elements shouldn't have content
            "no-dup-attr": "error",   // No duplicate attributes
            "no-dup-id": "error",     // No duplicate IDs
            "close-order": "error",   // Tags must be closed in correct order

            // Disable document-level rules for HTML fragments
            "doctype-html": "off",
            "no-missing-doctype": "off",
            "html-valid-lang": "off",

            // Allow flexibility for rich text content
            "no-inline-style": "off",
            "no-unknown-elements": "off",
        }
    });

    // Enhanced HTML validation using html-validate
    const validateHtml = async (html: string): Promise<{ line: number; column: number; error: string; content: string; severity: string }[]> => {
        const errors: { line: number; column: number; error: string; content: string; severity: string }[] = [];

        if (!html.trim()) {
            return errors; // Empty content is valid
        }

        try {
            // Wrap the HTML fragment to make it valid for validation
            const wrappedHtml = `<div>${html}</div>`;

            // Validate using html-validate
            const result = await htmlValidator.validateString(wrappedHtml);

            if (!result.valid) {
                result.results.forEach(fileResult => {
                    fileResult.messages.forEach(message => {
                        // Adjust line numbers to account for wrapper div
                        const line = Math.max(1, (message.line || 1) - 1);
                        const column = message.column || 1;

                        // Get the actual line content for context
                        const lines = html.split('\n');
                        const lineContent = lines[line - 1] || '';

                        errors.push({
                            line,
                            column,
                            error: `${message.message} (${message.ruleId})`,
                            content: lineContent,
                            severity: message.severity === 2 ? 'error' : 'warning'
                        });
                    });
                });
            }
        } catch (error: unknown) {
            // Fallback to basic validation if html-validate fails
            const errorMessage = error instanceof Error ? error.message : 'HTML validation failed';
            errors.push({
                line: 1,
                column: 1,
                error: `Validation error: ${errorMessage}`,
                content: html.split('\n')[0] || '',
                severity: 'error'
            });
        }

        return errors;
    };

    // Update HTML content when switching to HTML mode
    useEffect(() => {
        // Only update HTML content when we switch to markdown mode
        const justSwitchedToMarkdown = markdownMode && !previousMarkdownMode.current;

        if (justSwitchedToMarkdown && content) {
            try {
                const formatted = prettier.format(content, {
                    parser: 'html',
                    plugins: [parserHtml],
                    printWidth: 80,
                    tabWidth: 2,
                });
                setHtmlContent(formatted);
                setIsFormatted(true);
            } catch (error) {
                // If formatting fails, use raw content
                setHtmlContent(content);
                setIsFormatted(false);
            }
        }

        previousMarkdownMode.current = markdownMode ?? false;
    }, [markdownMode, content]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (validationTimeoutRef.current) {
                clearTimeout(validationTimeoutRef.current);
            }
        };
    }, []);

    // Handle HTML content changes (no validation during typing)
    const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setHtmlContent(newValue);

        // Mark that we're updating from the textarea to prevent recursion
        isUpdatingFromEditor.current = true;

        // Clear any existing validation timeout
        if (validationTimeoutRef.current) {
            clearTimeout(validationTimeoutRef.current);
        }

        // Update the parent component's content state immediately
        if (setContent) {
            setContent(newValue);
        }

        // Reset dismissed state when user types - allow errors to show again
        if (errorsDismissed) {
            setErrorsDismissed(false);
        }

        // Clear errors while typing to avoid distractions
        if (showErrors) {
            setShowErrors(false);
        }
    };

    // Handle validation on blur (focus out)
    const handleHtmlBlur = async () => {
        if (!htmlContent.trim()) {
            return; // Don't validate empty content
        }

        setIsValidating(true);
        try {
            const errors = await validateHtml(htmlContent);
            setHtmlErrors(errors);
            
            // Show errors only if they haven't been dismissed and there are errors
            setShowErrors(errors.length > 0 && !errorsDismissed);

            // Notify parent component of validation errors
            if (onValidationErrors) {
                onValidationErrors(errors);
            }
        } catch (error) {
            console.warn('HTML validation failed:', error);
            // Clear errors if validation fails
            setHtmlErrors([]);
            setShowErrors(false);
            if (onValidationErrors) {
                onValidationErrors([]);
            }
        } finally {
            setIsValidating(false);
        }
    };

    // Optional: Debounced validation for better UX (triggered after user stops typing)
    const triggerDebouncedValidation = () => {
        if (validationTimeoutRef.current) {
            clearTimeout(validationTimeoutRef.current);
        }

        validationTimeoutRef.current = setTimeout(async () => {
            if (htmlContent.trim()) {
                setIsValidating(true);
                try {
                    const errors = await validateHtml(htmlContent);
                    setHtmlErrors(errors);
                    // Only show errors on blur, not during debounced validation
                    if (onValidationErrors) {
                        onValidationErrors(errors);
                    }
                } catch (error) {
                    console.warn('Debounced HTML validation failed:', error);
                } finally {
                    setIsValidating(false);
                }
            }
        }, 1500); // Validate 1.5 seconds after user stops typing
    };

    // Handle format button click
    const formatHtml = () => {
        try {
            const formatted = prettier.format(htmlContent, {
                parser: 'html',
                plugins: [parserHtml],
                printWidth: 80,
                tabWidth: 2,
            });
            setHtmlContent(formatted);
            setIsFormatted(true);

            if (setContent) {
                setContent(formatted);
            }
        } catch (error) {
            console.warn('Failed to format HTML:', error);
        }
    };

    // Handle mode toggle with error checking
    const handleToggleToEditor = () => {
        if (htmlErrors.length > 0) {
            // Don't allow toggle if there are errors - show errors if dismissed
            if (errorsDismissed) {
                setShowErrors(true);
                setErrorsDismissed(false);
            }
            return;
        }

        if (onToggleMode) {
            onToggleMode();
        }
    };

    return (
        <>
            {editor && (
                <div>
                    {
                        markdownMode ? (
                            <div className="~relative">
                                <Textarea
                                    value={htmlContent}
                                    onChange={handleHtmlChange}
                                    onBlur={handleHtmlBlur}
                                    className={
                                        clsx(
                                            '~w-full ~min-h-[20rem] ~border-gray-300 ~outline-none focus-visible:~ring-0 ~rounded-lg ~rounded-t-none ~border-t-0 ~font-mono ~text-sm ~resize-y',
                                            {
                                                'dark:~bg-gray-800 dark:~text-gray-200': darkMode,
                                                'dark:~border-gray-600': darkMode,
                                                '~border-yellow-400': isValidating,
                                                '~border-red-400': showErrors && htmlErrors.length > 0,
                                            }
                                        )
                                    }
                                    placeholder="Enter HTML content..."
                                    spellCheck={false}
                                />

                                {/* Validation Status Indicator */}
                                {isValidating && (
                                    <div className="~absolute ~top-2 ~left-2 ~bg-yellow-100 ~border ~border-yellow-300 ~rounded ~px-2 ~py-1 ~text-xs ~text-yellow-700">
                                        🔍 Validating HTML...
                                    </div>
                                )}

                                {/* HTML Validation Errors */}
                                {showErrors && htmlErrors.length > 0 && (
                                    <div className="~absolute ~top-2 ~right-2 ~bg-red-100 ~border ~border-red-300 ~rounded-lg ~p-3 ~max-w-md ~shadow-lg ~max-h-96 ~overflow-y-auto">
                                        <div className="~flex ~items-start ~space-x-2">
                                            <HiExclamationTriangle className="~text-red-500 ~mt-0.5 ~flex-shrink-0" />
                                            <div className="~flex-1">
                                                <h4 className="~text-sm ~font-medium ~text-red-800 ~mb-2">
                                                    HTML Validation Issues ({htmlErrors.length})
                                                </h4>
                                                <div className="~max-h-32 ~overflow-y-auto ~mb-3 ~space-y-2">
                                                    {htmlErrors.slice(0, 5).map((error, index) => (
                                                        <div key={index} className={clsx(
                                                            "~text-xs ~p-2 ~rounded ~border-l-2",
                                                            {
                                                                "~bg-red-50 ~border-red-400 ~text-red-700": error.severity === 'error' || !error.severity,
                                                                "~bg-yellow-50 ~border-yellow-400 ~text-yellow-700": error.severity === 'warning'
                                                            }
                                                        )}>
                                                            <div className="~font-medium ~mb-1">
                                                                {error.severity === 'warning' ? '⚠️' : '❌'} Line {error.line}
                                                                {error.column && error.column > 1 && `, Column ${error.column}`}
                                                            </div>
                                                            <div className="~mb-1">{error.error}</div>
                                                            {error.content && (
                                                                <div className="~font-mono ~text-xs ~bg-gray-100 ~p-1 ~rounded ~border ~truncate">
                                                                    {error.content.length > 50 ? error.content.substring(0, 50) + '...' : error.content}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                    {htmlErrors.length > 5 && (
                                                        <div className="~text-xs ~text-red-600 ~text-center ~py-1">
                                                            +{htmlErrors.length - 5} more issue{htmlErrors.length - 5 !== 1 ? 's' : ''}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="~flex ~flex-col ~space-y-2">
                                                    <div className="~text-xs ~text-red-700 ~bg-red-50 ~p-2 ~rounded ~border">
                                                        Fix the above errors to switch back to visual editor
                                                    </div>
                                                    <Button
                                                        onClick={() => {
                                                            setShowErrors(false);
                                                            setErrorsDismissed(true);
                                                        }}
                                                        type="button"
                                                        variant="ghost"
                                                        size="sm"
                                                        className="~text-xs ~py-1 ~px-2 ~text-red-600"
                                                    >
                                                        Dismiss
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Show Errors Button (when errors are dismissed) */}
                                {errorsDismissed && htmlErrors.length > 0 && (
                                    <div className="~absolute ~top-2 ~right-2">
                                        <Button
                                            onClick={() => {
                                                setShowErrors(true);
                                                setErrorsDismissed(false);
                                            }}
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="~text-xs ~py-1 ~px-2 ~bg-red-50 ~border-red-300 ~text-red-700 hover:~bg-red-100"
                                        >
                                            ⚠️ Show {htmlErrors.length} Error{htmlErrors.length !== 1 ? 's' : ''}
                                        </Button>
                                    </div>
                                )}

                                {/* Format HTML Button */}
                                {!isFormatted && htmlContent && !showErrors && !isValidating && !errorsDismissed && (
                                    <div className="~absolute ~bottom-2 ~right-2 ~flex ~space-x-2">
                                        <Button
                                            onClick={formatHtml}
                                            type="button"
                                            variant='outline'
                                            size="sm"
                                            className='~text-xs ~py-1 ~px-2 ~bg-blue-50 ~border-blue-300 ~text-blue-700 hover:~bg-blue-100'
                                        >
                                            <HiMiniPaintBrush className='~mr-1' size={12} /> Format
                                        </Button>
                                        <Button
                                            onClick={handleHtmlBlur}
                                            type="button"
                                            variant='outline'
                                            size="sm"
                                            className='~text-xs ~py-1 ~px-2 ~bg-green-50 ~border-green-300 ~text-green-700 hover:~bg-green-100'
                                        >
                                            ✓ Check HTML
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <TiptapEditorContent
                                editor={editor}
                                content={content}
                                className={
                                    clsx(
                                        '~prose ~prose-sm sm:~prose-base lg:~prose-lg xl:~prose-2xl [&>div]:~min-h-[20rem] [&>div]:~max-h-[40rem] [&>div]:~overflow-scroll [&>div]:~outline-transparent [&>div]:~border-none ~rounded-bl-lg ~rounded-br-lg ~border-[1px] ~border-solid ~border-gray-300 ~p-2 ~max-w-full',
                                        {
                                            '~bg-gray-800 ~text-gray-200': darkMode,
                                            '~border-[1px] ~border-gray-600': darkMode,
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