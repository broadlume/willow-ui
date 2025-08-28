// src/components/menu/menu-items.tsx (Updated)

import React from 'react';
import { Editor } from '@tiptap/react';
import clsx from 'clsx';
import isURL from 'validator/lib/isURL';

// Icons (keep existing imports)
import {
    MdFormatListBulleted,
    MdFormatColorText,
    MdFormatUnderlined,
    MdFormatItalic,
    MdFormatBold,
    MdStrikethroughS,
    MdFormatAlignLeft,
    MdFormatAlignRight,
    MdFormatAlignCenter,
    MdFormatIndentDecrease,
    MdFormatIndentIncrease,
} from 'react-icons/md';
import {
    IoExpandOutline,
    IoImageOutline,
    IoVideocamOutline,
} from 'react-icons/io5';
import { LuRedo2, LuUndo2 } from 'react-icons/lu';
import { TbLineHeight } from 'react-icons/tb';
import { FaTextSlash, FaLink, FaCode } from 'react-icons/fa6';
import { AiOutlineTable } from 'react-icons/ai';
import { ReactComponent as AIIcon } from './ai-icon.svg';

// Components (keep existing imports)
import { ColorPickerInput } from '@components/color-picker-input/color-picker-input';
import { Button } from '@components/button';
import { Input } from '@components/input/input';

import AIContent from './ai-content';
import { MenuLink } from './menu-link';
import { SelectionTypeMenuItemContent } from './selection-menu-item';
import { DialogMenuItem } from './dialog-menu-item';
import { PopoverMenuItemContent } from './popover-menu-item';

// Import the new Tooltip wrapper component
import { MenuItemWithTooltip } from './menu-item-with-tooltip';

export interface MenuItemRenderProps {
    editor: Editor;
    darkMode: boolean;
    toggleDarkMode?: () => void;
    setShowEditorInDialog?: (show: boolean) => void;
    showEditorInDialog?: boolean;
    toggleRawHtml?: () => void;
    setL2MenuType?: (type: L2MenuType) => void;
    // Add any other props needed by specific menu items
    fontColor?: string; // For the color picker
    setFontColor?: (color: string) => void;
    l2Link?: string;
    setL2Link?: (link: string) => void;
    l2EmbedLink?: string;
    setL2EmbedLink?: (link: string) => void;
    l2Image?: string;
    setL2Image?: (image: string) => void;
    expandedMenu?: boolean; // For More button to hide sub-menus
    setExpandedMenu?: (expanded: boolean) => void;
    expandedMenuL2?: boolean; // For More button to hide sub-menus
    setExpandedMenuL2?: (expanded: boolean) => void;
    hasValidationErrors?: boolean; // For visual indication of validation errors
}

type L2MenuType = 'video' | 'embed' | 'link' | 'image';

const TextStyleItems = [
    { value: 'normal', label: 'Normal' },
    { value: 'h1', label: 'Heading 1', className: '~text-2xl' },
    { value: 'h2', label: 'Heading 2', className: '~text-xl' },
    { value: 'h3', label: 'Heading 3', className: '~text-lg' },
    { value: 'h4', label: 'Heading 4', className: '~text-base' },
    { value: 'h5', label: 'Heading 5', className: '~text-sm' },
    { value: 'h6', label: 'Heading 6', className: '~text-xs' },
];

const TextStyleOnSelection = (editor: Editor, value: string) => {
    switch (value) {
        case 'normal':
            editor.chain().focus().setParagraph().run();
            break;
        case 'h1':
            editor.chain().focus().setHeading({ level: 1 }).run();
            break;
        case 'h2':
            editor.chain().focus().setHeading({ level: 2 }).run();
            break;
        case 'h3':
            editor.chain().focus().setHeading({ level: 3 }).run();
            break;
        case 'h4':
            editor.chain().focus().setHeading({ level: 4 }).run();
            break;
        case 'h5':
            editor.chain().focus().setHeading({ level: 5 }).run();
            break;
        case 'h6':
            editor.chain().focus().setHeading({ level: 6 }).run();
            break;
        default:
            break;
    }
};


const getCurrentIndentLevel = (editor: Editor) => editor?.getAttributes('paragraph').indent || 0;

export const MenuItemDivider = () => (
    <div className='~border-[0.5px] ~border-solid ~border-gray-300 ~h-6' />
);

export interface MenuItemDefinition {
    id: string;
    render: (props: MenuItemRenderProps) => React.ReactNode;
    widthEstimate: number; // An estimate of the item's width in pixels
    dividerAfter?: boolean;
    group?: 'primary' | 'secondary'; // To group items if needed (e.g., primary always visible if possible)
    tooltipContent?: string; // Add tooltip content here
}

export const getAllMenuItems = (): MenuItemDefinition[] => [
    {
        id: 'ai-button',
        widthEstimate: 60,
        render: ({ editor, darkMode }) => (
            <MenuLink
                title={
                    <DialogMenuItem
                        title={
                            <div className='~flex ~items-center ~gap-1'>
                                <AIIcon />
                                <span className='~text-lg ~font-normal ~text-[#6038E8]'>Ai</span>
                            </div>
                        }
                        dialogClassName='~p-2 !~max-w-5xl !~h-5/6'
                        content={({ closeDialog }) => (
                            <AIContent editor={editor} closeDialog={closeDialog} />
                        )}
                    />
                }
                eventHandler={() => { }}
            />
        ),
        dividerAfter: true,
        group: 'primary',
        tooltipContent: 'AI Assistant', // Add tooltip content
    },
    {
        id: 'text-style',
        widthEstimate: 100,
        render: ({ editor }) => (
            <MenuLink
                title={
                    <SelectionTypeMenuItemContent
                        items={TextStyleItems}
                        onSelection={(value) => TextStyleOnSelection(editor, value)}
                        key={1}
                    />
                }
                eventHandler={() => { }}
            />
        ),
        dividerAfter: true,
        group: 'primary',
        tooltipContent: 'Text Style',
    },
    {
        id: 'bold',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Bold"} tooltipContent="Bold"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatBold
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().toggleBold().run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'primary',
    },
    {
        id: 'italic',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Italic"} tooltipContent="Italic"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatItalic
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().toggleItalic().run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'primary'
    },
    {
        id: 'underline',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Underline"} tooltipContent="Underline"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatUnderlined
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().toggleUnderline().run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'primary'
    },
    {
        id: 'strikethrough',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Strikethrough"} tooltipContent="Strikethrough"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdStrikethroughS
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().toggleStrike().run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'primary'
    },
    {
        id: 'color-picker',
        widthEstimate: 60,
        render: ({ editor, darkMode, fontColor, setFontColor }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Text"} tooltipContent="Text Color"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <PopoverMenuItemContent
                            title={
                                <MdFormatColorText
                                    className={clsx('~text-black', { '~text-white': darkMode })}
                                    size={18}
                                />
                            }
                            content={
                                <ColorPickerInput
                                    color={fontColor!}
                                    name='color-picker-demo'
                                    tabIndex={-1}
                                    setColor={(color) => {
                                        setFontColor!(color);
                                        editor.chain().focus().setColor(color).run();
                                    }}
                                    key='editor-font-color-picker'
                                />
                            }
                        />
                    }
                    eventHandler={() => { }}
                />
            </MenuItemWithTooltip>
        ),
        dividerAfter: true,
        group: 'primary'
    },
    {
        id: 'align-left',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Align"} tooltipContent="Align Left"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatAlignLeft
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().setTextAlign('left').run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'primary'
    },
    {
        id: 'align-center',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Align"} tooltipContent="Align Center"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatAlignCenter
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().setTextAlign('center').run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'primary'
    },
    {
        id: 'align-right',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Align"} tooltipContent="Align Right"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatAlignRight
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().setTextAlign('right').run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'primary'
    },
    {
        id: 'bullet-list',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Bullet"} tooltipContent="Bullet List"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatListBulleted
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().toggleBulletList().run()}
                />
            </MenuItemWithTooltip>
        ),
        dividerAfter: true,
        group: 'primary'
    },
    {
        id: 'undo',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Undo"} tooltipContent="Undo"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <LuUndo2
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().undo().run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'primary'
    },
    {
        id: 'redo',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Redo"} tooltipContent="Redo"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <LuRedo2
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().redo().run()}
                />
            </MenuItemWithTooltip>
        ),
        dividerAfter: true,
        group: 'primary'
    },
    {
        id: 'expand-dialog',
        widthEstimate: 36,
        render: ({ setShowEditorInDialog, showEditorInDialog, darkMode }) =>
            setShowEditorInDialog ? (
                <MenuItemWithTooltip key={"menu-link-tool-tip" + "Expand"} tooltipContent="Expand Editor"> {/* Wrap with Tooltip */}
                    <MenuLink
                        title={
                            <IoExpandOutline
                                className={clsx('~text-black', { '~text-white': darkMode })}
                                size={18}
                            />
                        }
                        eventHandler={() =>
                            setShowEditorInDialog(!showEditorInDialog)
                        }
                    />
                </MenuItemWithTooltip>
            ) : null,
        group: 'primary'
    },
    // Advanced Menu Items (will be in the More button if space is limited)
    {
        id: 'line-height',
        widthEstimate: 60,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Line"} tooltipContent="Line Height"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <PopoverMenuItemContent
                            title={
                                <TbLineHeight
                                    className={clsx('~text-black', { '~text-white': darkMode })}
                                    size={18}
                                />
                            }
                            content={
                                <SelectionTypeMenuItemContent
                                    items={[
                                        { value: '1.0', label: '1.0' },
                                        { value: '1.5', label: '1.5' },
                                        { value: '2.0', label: '2.0' },
                                        { value: '2.5', label: '2.5' },
                                        { value: '3.0', label: '3.0' },
                                    ]}
                                    onSelection={(value) =>
                                        editor.chain().focus().setLineHeight(value).run()
                                    }
                                />
                            }
                        />
                    }
                    eventHandler={() => { }}
                />
            </MenuItemWithTooltip>
        ),
        group: 'secondary'
    },
    {
        id: 'indent-decrease',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Decrease"} tooltipContent="Decrease Indent"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatIndentDecrease
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() =>
                        editor
                            ?.chain()
                            .focus()
                            .setIndentation(Math.max(getCurrentIndentLevel(editor) - 1, 0))
                            .run()
                    }
                />
            </MenuItemWithTooltip>
        ),
        group: 'secondary'
    },
    {
        id: 'indent-increase',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Increase"} tooltipContent="Increase Indent"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <MdFormatIndentIncrease
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() =>
                        editor
                            ?.chain()
                            .focus()
                            .setIndentation(getCurrentIndentLevel(editor) + 1)
                            .run()
                    }
                />
            </MenuItemWithTooltip>
        ),
        group: 'secondary'
    },
    {
        id: 'clear-format',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Clear"} tooltipContent="Clear Formatting"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <FaTextSlash
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() =>
                        editor.chain().focus().clearNodes().unsetAllMarks().run()
                    }
                />
            </MenuItemWithTooltip>
        ),
        dividerAfter: true,
        group: 'secondary'
    },
    {
        id: 'link',
        widthEstimate: 36,
        render: ({ darkMode, setL2MenuType }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Add"} tooltipContent="Add Link"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <FaLink
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => setL2MenuType?.('link')}
                />
            </MenuItemWithTooltip>
        ),
        group: 'secondary'
    },
    {
        id: 'code',
        widthEstimate: 36,
        render: ({ darkMode, toggleRawHtml, hasValidationErrors }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Toggle"} tooltipContent={hasValidationErrors ? "Fix HTML errors before switching" : "Toggle Code/Raw HTML"}> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <FaCode
                            className={clsx(
                                '~text-black', 
                                { 
                                    '~text-white': darkMode,
                                    '~text-red-500': hasValidationErrors && !darkMode,
                                    '~text-red-400': hasValidationErrors && darkMode,
                                }
                            )}
                            size={18}
                        />
                    }
                    eventHandler={() => toggleRawHtml && toggleRawHtml()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'secondary'
    },
    {
        id: 'image',
        widthEstimate: 36,
        render: ({ darkMode, setL2MenuType }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Insert"} tooltipContent="Insert Image"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <IoImageOutline
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => setL2MenuType?.('image')}
                />
            </MenuItemWithTooltip>
        ),
        group: 'secondary'
    },
    {
        id: 'video',
        widthEstimate: 36,
        render: ({ darkMode, setL2MenuType }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Insert"} tooltipContent="Insert Video"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <IoVideocamOutline
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => setL2MenuType?.('embed')}
                />
            </MenuItemWithTooltip>
        ),
        dividerAfter: true,
        group: 'secondary'
    },
    {
        id: 'table',
        widthEstimate: 36,
        render: ({ editor, darkMode }) => (
            <MenuItemWithTooltip key={"menu-link-tool-tip" + "Insert"} tooltipContent="Insert Table"> {/* Wrap with Tooltip */}
                <MenuLink
                    title={
                        <AiOutlineTable
                            className={clsx('~text-black', { '~text-white': darkMode })}
                            size={18}
                        />
                    }
                    eventHandler={() => editor.chain().focus().insertTable({ rows: 2, cols: 2, withHeaderRow: true }).run()}
                />
            </MenuItemWithTooltip>
        ),
        group: 'secondary'
    },
];

export const getL3MenuContent = (
    expandedMenuL2Type: L2MenuType | undefined,
    editor: Editor,
    l2Link: string | undefined,
    setL2Link: (link: string) => void,
    l2EmbedLink: string | undefined,
    setL2EmbedLink: (link: string) => void,
    l2Image: string | undefined,
    setL2Image: (image: string) => void,
    setExpandedMenuL2: (expanded: boolean) => void
) => {
    switch (expandedMenuL2Type) {
        case 'link':
            return (
                <>
                    <Input
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                            }
                        }}
                        type='url'
                        placeholder='https://'
                        value={l2Link}
                        className='~rounded-md ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
                        onChange={(e) => setL2Link(e.target.value)}
                    />
                    <Button
                        type='button'
                        variant='default'
                        className='~rounded-3xl ~px-8'
                        disabled={!l2Link || !isURL(l2Link, { require_protocol: true })}
                        onClick={() => {
                            if (l2Link && isURL(l2Link, { require_protocol: true })) {
                                editor
                                    .chain()
                                    .focus()
                                    .extendMarkRange('link')
                                    .setLink({ href: l2Link })
                                    .run();
                                setL2Link('');
                                setExpandedMenuL2(false);
                            }
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        type='button'
                        variant='secondary'
                        className='~rounded-3xl ~border-[1px] ~border-[#000] ~px-8 ~shadow-sm'
                        onClick={() => {
                            editor
                                .chain()
                                .focus()
                                .extendMarkRange('link')
                                .unsetLink()
                                .run();
                            setL2Link('');
                            setExpandedMenuL2(false);
                        }}
                    >
                        Cancel
                    </Button>
                </>
            );
        case 'embed':
            return (
                <>
                    <Input
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                            }
                        }}
                        type='url'
                        placeholder='https://'
                        value={l2EmbedLink}
                        className='~rounded-md ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
                        onChange={(e) => setL2EmbedLink(e.target.value)}
                    />
                    <Button
                        type='button'
                        variant='default'
                        className='~rounded-3xl ~px-8'
                        disabled={
                            !l2EmbedLink || !isURL(l2EmbedLink, { require_protocol: true })
                        }
                        onClick={() => {
                            if (
                                l2EmbedLink &&
                                isURL(l2EmbedLink, { require_protocol: true })
                            ) {
                                editor.chain().focus().setVideo(l2EmbedLink).run();
                                setL2EmbedLink('');
                                setExpandedMenuL2(false);
                            }
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        type='button'
                        variant='secondary'
                        className='~rounded-3xl ~border-[1px] ~border-[#000] ~px-8 ~shadow-sm'
                        onClick={() => {
                            setL2EmbedLink('');
                            setExpandedMenuL2(false);
                        }}
                    >
                        Cancel
                    </Button>
                </>
            );
        case 'image':
            return (
                <>
                    <Input
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                            }
                        }}
                        type='url'
                        placeholder='https://'
                        value={l2Image}
                        className='~rounded-md ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
                        onChange={(e) => setL2Image(e.target.value)}
                    />
                    <Button
                        type='button'
                        variant='default'
                        className='~rounded-3xl ~px-8'
                        disabled={!l2Image || !isURL(l2Image, { require_protocol: true })}
                        onClick={() => {
                            if (l2Image && isURL(l2Image, { require_protocol: true })) {
                                editor.commands.setImage({ src: l2Image });
                                setL2Image('');
                                setExpandedMenuL2(false);
                            }
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        type='button'
                        variant='secondary'
                        className='~rounded-3xl ~border-[1px] ~border-[#000] ~px-8 ~shadow-sm'
                        onClick={() => {
                            setL2Image('');
                            setExpandedMenuL2(false);
                        }}
                    >
                        Cancel
                    </Button>
                </>
            );

        default:
            return null;
    }
};
