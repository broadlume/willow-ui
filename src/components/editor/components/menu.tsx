import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Editor } from '@tiptap/react';
import clsx from 'clsx';

// Icons
import { MdOutlineMoreVert } from 'react-icons/md';
import { FiSun, FiMoon } from 'react-icons/fi';

// Components
import { MenuLink } from './menu-link';
import {
  MenuItemDivider,
  MenuItemDefinition,
  getAllMenuItems,
  MenuItemRenderProps,
  getL3MenuContent,
} from './menu-items'; // Import the new items array
import { MenuItemWithTooltip } from './menu-item-with-tooltip';

interface MenuProps {
  editor: Editor;
  setShowEditorInDialog?: (show: boolean) => void;
  showEditorInDialog?: boolean;
  showRawHtml?: boolean;
  toggleRawHtml?: () => void;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  className?: string;
  hostname: string;
  onImageBrowseClick?: (
    editor: Editor,
    setImageData: (data: {
      url: string;
      metadata?: Record<string, string>;
    }) => void
  ) => void; // Callback for custom asset manager integration with URL and metadata setter
  onImageDrop?: (
    editor: Editor,
    file: File,
    setUrl: (url: string) => void
  ) => void; // Callback for custom file drop handling
  onImageNameClick?: (
    editor: Editor,
    imageData: {
      name: string | null;
      url: string | null;
      size: number | null;
      file: File | null;
    }
  ) => void; // Callback for when image name is clicked
  disableAssetImageNameClick?: boolean; // Whether to disable clicking on the image name - independent from the disabled prop
  isShowAssetEditIcon?: boolean; // Whether to show edit icon on image preview
  onAssetSelectorChange?: (editor: Editor, value: File | string | null) => void; // Callback when MiniAssetSelector value changes
  assetSelectorValue?: string; // Controlled value for the MiniAssetSelector input in the image insertion dialog
  onAssetSelectorValueChange?: (value: string) => void; // Callback when the MiniAssetSelector input value changes
  hideAIMenu?: boolean; // Whether to hide the AI Menu button
}

type L2MenuType = 'video' | 'embed' | 'link' | 'image';

// Define the static width of the "More" button and the dark mode button
const MORE_BUTTON_WIDTH = 40; // Approximate width of the more button + its padding/margin
const DARK_MODE_BUTTON_WIDTH = 40; // Approximate width of the dark mode button + its padding/margin
const MENU_PADDING = 32; // Total horizontal padding of the menu (p-[0.625em_1em_0.625em_1em] = 1em left + 1em right = 32px)
const GAP_WIDTH = 16; // Tailwind gap-4 means 16px gap

export const Menu = ({
  editor,
  showEditorInDialog,
  setShowEditorInDialog,
  toggleRawHtml,
  className,
  darkMode,
  toggleDarkMode,
  hostname,
  onImageBrowseClick,
  onImageDrop,
  onImageNameClick,
  disableAssetImageNameClick,
  isShowAssetEditIcon,
  onAssetSelectorChange,
  assetSelectorValue,
  onAssetSelectorValueChange,
  hideAIMenu,
}: MenuProps) => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [expandedMenuL2, setExpandedMenuL2] = useState(false);
  const [expandedMenuL2Type, setExpandedMenuL2Type] = useState<L2MenuType>();
  const [fontColor, setFontColor] = useState('#000000');
  const [l2Link, setL2Link] = useState<string>();
  const [l2EmbedLink, setL2EmbedLink] = useState<string>();
  const [l2Image, setL2Image] = useState<string>(assetSelectorValue || '');
  const [l2ImageMetadata, setL2ImageMetadata] =
    useState<Record<string, string>>();

  // Sync external assetSelectorValue with internal l2Image state
  useEffect(() => {
    setL2Image(assetSelectorValue || '');
  }, [assetSelectorValue]);

  // Create a wrapper for setL2Image that calls the external callback
  const handleSetL2Image = useCallback(
    (value: string) => {
      setL2Image(value);
      onAssetSelectorValueChange?.(value);
    },
    [onAssetSelectorValueChange]
  );

  const menuRef = useRef<HTMLDivElement>(null);
  const [availableWidth, setAvailableWidth] = useState(0);

  const [visibleItems, setVisibleItems] = useState<MenuItemDefinition[]>([]);
  const [hiddenItems, setHiddenItems] = useState<MenuItemDefinition[]>([]);

  const setL2MenuTypeHandler = useCallback(
    (type: L2MenuType) => {
      if (expandedMenuL2Type === type && expandedMenuL2) {
        setExpandedMenuL2(false);
      } else {
        setExpandedMenuL2(true);
      }
      setExpandedMenuL2Type(type);
    },
    [expandedMenuL2, expandedMenuL2Type]
  );

  // Use ResizeObserver to get the available width of the menu container
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const newWidth = entry.contentRect.width;
        setAvailableWidth(
          newWidth - MORE_BUTTON_WIDTH - DARK_MODE_BUTTON_WIDTH - MENU_PADDING
        );
      }
    });

    const currentRef = menuRef.current;
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  // Effect to manage item visibility based on available width
  useEffect(() => {
    if (availableWidth === 0) return;

    let currentWidth = 0;
    const tempVisible: MenuItemDefinition[] = [];
    const tempHidden: MenuItemDefinition[] = [];

    // Iterate through all menu items and decide where to place them
    const allMenuItems = getAllMenuItems().filter(
      (item) => !(hideAIMenu && item.id === 'ai-button')
    );
    for (const item of allMenuItems) {
      // Estimate item width, including a gap if it's not the first item
      const itemRenderedWidth = item.widthEstimate + GAP_WIDTH;

      // Prioritize 'primary' group items to stay visible if possible
      if (
        item.group === 'primary' &&
        currentWidth + itemRenderedWidth <= availableWidth
      ) {
        tempVisible.push(item);
        currentWidth += itemRenderedWidth;
        if (item.dividerAfter) {
          currentWidth += 0.5 + GAP_WIDTH; // Divider width + gap
        }
      } else if (item.group === 'secondary') {
        tempHidden.push(item); // Secondary items always start in hidden
      } else {
        // If a primary item doesn't fit, move it to hidden
        tempHidden.push(item);
      }
    }

    // If there are any hidden items, ensure the "More" button is visible
    if (tempHidden.length > 0) {
      // If the "More" button itself would push a primary item off,
      // we might need to move one more primary item to hidden to make space.
      // This logic can get complex; for simplicity, we're assuming the More button
      // space is already accounted for in `availableWidth`.
      // If you need more granular control, you'd iterate backwards from `tempVisible`
      // and move items to `tempHidden` until `currentWidth` is sufficient.
    }

    setVisibleItems(tempVisible);
    setHiddenItems(tempHidden);
  }, [availableWidth]);

  const commonMenuItemProps: MenuItemRenderProps = {
    editor,
    darkMode: darkMode || false,
    toggleDarkMode,
    setShowEditorInDialog,
    showEditorInDialog,
    toggleRawHtml,
    setL2MenuType: setL2MenuTypeHandler,
    hostname,
    fontColor,
    setFontColor,
    l2Link,
    setL2Link,
    l2EmbedLink,
    setL2EmbedLink,
    l2Image,
    setL2Image,
    l2ImageMetadata,
    setL2ImageMetadata,
    onImageBrowseClick,
    onImageDrop,
    onImageNameClick,
    disableAssetImageNameClick,
    isShowAssetEditIcon,
    onAssetSelectorChange,
    expandedMenu,
    setExpandedMenu,
    expandedMenuL2,
    setExpandedMenuL2,
  };

  return (
    <div>
      <div
        ref={menuRef} // Attach ref to the menu container
        className={clsx(
          'flex w-full flex-wrap rounded-tl-md rounded-tr-md border-[1px] border-b-0 border-border-pri px-4 py-2 text-lg',
          className
        )}
      >
        <div className='flex w-full items-center justify-between'>
          <div className={clsx('flex flex-wrap items-center gap-4')}>
            {visibleItems.map((item, index) => (
              <React.Fragment key={item.id}>
                {item.render(commonMenuItemProps)}
                {item.dividerAfter && <MenuItemDivider />}
              </React.Fragment>
            ))}
          </div>
          <div className='flex items-center gap-2'>
            <MenuItemWithTooltip
              key={'menu-link-tool-tip' + 'theme'}
              tooltipContent={
                darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
              }
            >
              {' '}
              {/* Wrap with Tooltip */}
              <MenuLink
                title={
                  darkMode ? (
                    <FiSun
                      className={clsx('text-black', {
                        'text-white': darkMode,
                      })}
                    />
                  ) : (
                    <FiMoon
                      className={clsx('text-black', {
                        'text-white': darkMode,
                      })}
                    />
                  )
                }
                eventHandler={() => toggleDarkMode && toggleDarkMode()}
              />
            </MenuItemWithTooltip>
            {hiddenItems.length > 0 && (
              <MenuItemWithTooltip
                key={'menu-link-tool-tip' + 'more'}
                tooltipContent='More'
              >
                <MenuLink
                  className=''
                  title={
                    <MdOutlineMoreVert
                      className={clsx('text-black', {
                        'text-white': darkMode,
                      })}
                      size={18}
                    />
                  }
                  eventHandler={() => {
                    setExpandedMenu(!expandedMenu);
                    setExpandedMenuL2(false); // Close L2 menu when L1 is toggled
                  }}
                />
              </MenuItemWithTooltip>
            )}
          </div>
        </div>
      </div>
      {/* Expanded Menu */}
      <div
        className={clsx(
          'hidden w-full flex-wrap justify-end gap-5 border-l-[1px] border-r-[1px] border-solid border-gray-300 p-3',
          {
            '!flex': expandedMenu,
            'bg-surface-pri text-text-pri': !darkMode,
            'bg-gray-900 text-white': darkMode,
          }
        )}
      >
        {hiddenItems.map((item) => (
          <React.Fragment key={item.id}>
            {item.render(commonMenuItemProps)}
            {item.dividerAfter && <MenuItemDivider />}
          </React.Fragment>
        ))}
      </div>
      {/* Expanded Menu */}
      {/* Expanded Menu L2*/}
      <div
        className={clsx(
          'hidden w-full justify-end gap-2 border-l-[1px] border-r-[1px] border-t-2  border-solid border-gray-300 border-t-white bg-[#F3F3F3] p-3',
          {
            '!flex': expandedMenuL2,
            'bg-surface-pri text-text-pri': !darkMode,
            'bg-gray-900 text-white border-gray-600 border-t-gray-400':
              darkMode,
          }
        )}
      >
        {getL3MenuContent(
          expandedMenuL2Type,
          editor,
          l2Link,
          setL2Link,
          l2EmbedLink,
          setL2EmbedLink,
          l2Image,
          handleSetL2Image,
          l2ImageMetadata,
          setL2ImageMetadata,
          setExpandedMenuL2,
          onImageBrowseClick,
          onImageDrop,
          onImageNameClick,
          disableAssetImageNameClick,
          isShowAssetEditIcon,
          onAssetSelectorChange
        )}
      </div>
      {/* Expanded Menu L2*/}
    </div>
  );
};
