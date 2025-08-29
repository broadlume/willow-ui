import { useState, useRef, useEffect } from 'react';
import { Editor, BubbleMenu as TipTapBubbleMenu } from '@tiptap/react';
import clsx from 'clsx';
import isURL from 'validator/lib/isURL';

// Icons
import { FaBold, FaItalic } from "react-icons/fa";
import { HiMiniLink, HiMiniPencil, HiMiniTrash } from 'react-icons/hi2';
import { MdFormatUnderlined, MdStrikethroughS } from 'react-icons/md';

import { MenuLink } from './menu-link';
import { Input } from '@components/input/input';
import { Button } from '@components/button';
import { Popover, PopoverContent, PopoverTrigger } from '@components/popover/popover';

interface BubbleMenuProps {
    editor: Editor;
    darkMode?: boolean;
}

export const BubbleMenu = ({ editor, darkMode }: BubbleMenuProps) => {
    const [showLinkInput, setShowLinkInput] = useState(false);
    const [url, setUrl] = useState('');
    const [isEditingLink, setIsEditingLink] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Check if current selection has a link
    const isLinkActive = editor.isActive('link');
    const linkAttributes = editor.getAttributes('link');
    const currentLinkHref = linkAttributes.href || '';

    // Update URL state when link becomes active or when editing existing link
    useEffect(() => {
        if (isLinkActive && currentLinkHref && !isEditingLink) {
            setUrl(currentLinkHref);
        } else if (!isLinkActive && !isEditingLink) {
            setUrl('');
        }
    }, [isLinkActive, currentLinkHref, isEditingLink]);

    const applyLink = () => {
        if (url) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        } else {
            editor.chain().focus().unsetLink().run();
        }
        setShowLinkInput(false);
        setIsEditingLink(false);
        setUrl('');
        // Refocus the editor after applying the link
        setTimeout(() => {
            editor.commands.focus();
        }, 10);
    };

    const removeLink = () => {
        editor.chain().focus().unsetLink().run();
        setShowLinkInput(false);
        setIsEditingLink(false);
        setUrl('');
        // Refocus the editor after removing the link
        setTimeout(() => {
            editor.commands.focus();
        }, 10);
    };

    const startEditingLink = () => {
        setUrl(currentLinkHref);
        setIsEditingLink(true);
        setShowLinkInput(true);
        // Focus input after a brief delay to ensure it's rendered
        setTimeout(() => {
            inputRef.current?.focus();
        }, 10);
    };

    const cancelLinkEditing = () => {
        setShowLinkInput(false);
        setIsEditingLink(false);
        setUrl(isLinkActive ? currentLinkHref : '');
        // Refocus the editor after closing the popover
        setTimeout(() => {
            editor.commands.focus();
        }, 10);
    };

    const isApplyDisabled = !url || !isURL(url);

    return (
        <TipTapBubbleMenu
            editor={editor}
            className={clsx(
                '~rounded-md ~border ~border-gray-300 ~bg-white ~p-2 ~shadow-lg ~z-[99999]'
            )}
            tippyOptions={{
                placement: 'bottom',
                duration: 150,
                interactive: true,
                animation: 'fade',
                zIndex: 99999,
                hideOnClick: false,
                onHidden: (instance) => {
                    if (!isEditingLink) {
                        setUrl(isLinkActive ? currentLinkHref : '');
                        setShowLinkInput(false);
                    }
                }
            }}
        >
            <div 
                className="~flex ~gap-4"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                        e.stopPropagation();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className="~p-1 ~rounded hover:~bg-gray-100 ~cursor-pointer"
                >
                    <FaBold className={clsx('~text-black', { '~text-white': darkMode })} size={14} />
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                        e.stopPropagation();
                        editor.chain().focus().toggleItalic().run();
                    }}
                    className="~p-1 ~rounded hover:~bg-gray-100 ~cursor-pointer"
                >
                    <FaItalic className={clsx('~text-black', { '~text-white': darkMode })} size={14} />
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                        e.stopPropagation();
                        editor.chain().focus().toggleUnderline().run();
                    }}
                    className="~p-1 ~rounded hover:~bg-gray-100 ~cursor-pointer"
                >
                    <MdFormatUnderlined className={clsx('~text-black', { '~text-white': darkMode })} size={16} />
                </button>
                <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={(e) => {
                        e.stopPropagation();
                        editor.chain().focus().toggleStrike().run();
                    }}
                    className="~p-1 ~rounded hover:~bg-gray-100 ~cursor-pointer"
                >
                    <MdStrikethroughS className={clsx('~text-black', { '~text-white': darkMode })} size={16} />
                </button>
                
                {/* Link Section - Show different UI based on link state */}
                {isLinkActive && !showLinkInput ? (
                    // Show edit/delete options when a link is selected
                    <>
                        <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={(e) => {
                                e.stopPropagation();
                                startEditingLink();
                            }}
                            className="~p-1 ~rounded hover:~bg-gray-100 ~cursor-pointer"
                        >
                            <HiMiniPencil className={clsx('~text-blue-600', { '~text-blue-400': darkMode })} size={14} />
                        </button>
                        <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={(e) => {
                                e.stopPropagation();
                                removeLink();
                            }}
                            className="~p-1 ~rounded hover:~bg-gray-100 ~cursor-pointer"
                        >
                            <HiMiniTrash className={clsx('~text-red-600', { '~text-red-400': darkMode })} size={14} />
                        </button>
                    </>
                ) : (
                    // Show link creation/editing interface
                    <div>
                        <Popover open={showLinkInput} onOpenChange={setShowLinkInput}>
                            <PopoverTrigger asChild>
                                <button
                                    type="button"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (!isLinkActive) {
                                            setShowLinkInput(true);
                                            setTimeout(() => {
                                                inputRef.current?.focus();
                                            }, 100);
                                        } else {
                                            startEditingLink();
                                        }
                                    }}
                                    className="~p-1 ~rounded hover:~bg-gray-100 ~cursor-pointer"
                                >
                                    <HiMiniLink className={clsx('~text-black', { '~text-white': darkMode, '~text-blue-600': isLinkActive && !darkMode, '~text-blue-400': isLinkActive && darkMode })} size={14} />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent 
                                side='bottom'
                                align="center"
                                sideOffset={5}
                                className="~z-[99999] ~bg-white ~border ~border-gray-300 ~shadow-lg ~fixed"
                                onOpenAutoFocus={(e) => {
                                    e.preventDefault();
                                    setTimeout(() => {
                                        inputRef.current?.focus();
                                    }, 10);
                                }}
                                avoidCollisions={true}
                                collisionPadding={20}
                            >
                                <div>
                                    <Input
                                        ref={inputRef}
                                        type="text"
                                        placeholder='https://'
                                        value={url}
                                        onChange={e => setUrl(e.target.value)}
                                        className="~border ~border-gray-300 ~rounded ~p-1 ~w-48"
                                        onKeyDown={e => {
                                            if (e.key === 'Enter' && !isApplyDisabled) {
                                                e.preventDefault();
                                                applyLink();
                                            } else if (e.key === 'Escape') {
                                                cancelLinkEditing();
                                            }
                                        }}
                                        autoFocus
                                    />
                                    <div className="~flex ~justify-between ~gap-2 ~mt-2">
                                        <div className="~flex ~gap-2">
                                            <Button
                                                className="hover:~no-underline"
                                                onClick={cancelLinkEditing}
                                                variant={'link'}
                                                size="sm"
                                            >
                                                Cancel
                                            </Button>
                                            {isLinkActive && (
                                                <Button
                                                    className="hover:~no-underline ~ml-2 ~text-red-600"
                                                    onClick={removeLink}
                                                    variant={'link'}
                                                    size="sm"
                                                >
                                                    Remove Link
                                                </Button>
                                            )}
                                        </div>
                                        <Button
                                            className="hover:~no-underline"
                                            onClick={applyLink}
                                            variant={'link'}
                                            disabled={isApplyDisabled}
                                            size="sm"
                                        >
                                            {isEditingLink ? 'Update' : 'Apply'}
                                        </Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                )}
            </div>
        </TipTapBubbleMenu>
    );
};
