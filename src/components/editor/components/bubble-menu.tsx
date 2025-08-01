import { useState, useRef } from 'react';
import { Editor, BubbleMenu as TipTapBubbleMenu } from '@tiptap/react';
import clsx from 'clsx';
import isURL from 'validator/lib/isURL';

// Icons
import { FaBold, FaItalic, FaLink } from "react-icons/fa";
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
    const inputRef = useRef<HTMLInputElement>(null);

    const applyLink = () => {
        if (url) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        } else {
            editor.chain().focus().unsetLink().run();
        }
        setShowLinkInput(false);
        setUrl('');
    };

    const isApplyDisabled = !url || !isURL(url);

    return (
        <TipTapBubbleMenu
            editor={editor}
            className={clsx(
                'rounded-md border border-gray-300 bg-white p-2 shadow-lg'
            )}
            tippyOptions={{
                placement: 'bottom',
                duration: 150,
                interactive: true,
                animation: 'fade',
                onHidden: (instance) => {
                    setUrl('');
                    setShowLinkInput(false);
                }
            }}
        >
            <div onMouseDown={e => e.preventDefault()} className="flex gap-4">
                <MenuLink
                    title={<FaBold className={clsx('text-black', { 'text-white': darkMode })} size={14} />}
                    eventHandler={() => editor.chain().focus().toggleBold().run()}
                />
                <MenuLink
                    title={<FaItalic className={clsx('text-black', { 'text-white': darkMode })} size={14} />}
                    eventHandler={() => editor.chain().focus().toggleItalic().run()}
                />
                <MenuLink
                    title={<MdFormatUnderlined className={clsx('text-black', { 'text-white': darkMode })} size={16} />}
                    eventHandler={() => editor.chain().focus().toggleUnderline().run()}
                />
                <MenuLink
                    title={<MdStrikethroughS className={clsx('text-black', { 'text-white': darkMode })} size={16} />}
                    eventHandler={() => editor.chain().focus().toggleStrike().run()}
                />
                <div>
                    <Popover open={showLinkInput}>
                        <PopoverTrigger>
                            <MenuLink
                                title={<FaLink className={clsx('text-black', { 'text-white': darkMode })} size={14} />}
                                eventHandler={() => {
                                    setShowLinkInput(true)
                                    inputRef.current?.focus();
                                }}
                            />
                        </PopoverTrigger>
                        <PopoverContent side='bottom'>
                            <div>
                                <Input
                                    ref={inputRef}
                                    type="text"
                                    placeholder='https://'
                                    value={url}
                                    onChange={e => setUrl(e.target.value)}
                                    className="border border-gray-300 rounded-sm p-1 w-48"
                                    onKeyDown={e => {
                                        if (e.key === 'Enter' && !isApplyDisabled) {
                                            e.preventDefault();
                                            applyLink();
                                        } else if (e.key === 'Escape') {
                                            setShowLinkInput(false);
                                            setUrl('');
                                        }
                                    }}
                                    autoFocus
                                />
                                <div className="flex justify-end gap-2 mt-2">
                                    <Button
                                        className="hover:no-underline"
                                        onClick={() => {
                                            setShowLinkInput(false);
                                            setUrl('');
                                        }}
                                        variant={'link'}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        className="hover:no-underline"
                                        onClick={applyLink}
                                        variant={'link'}
                                        disabled={isApplyDisabled}
                                    >
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </TipTapBubbleMenu>
    );
};
