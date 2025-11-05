import {
  Command,
  CommandInput,
  CommandList,
} from '@components/command/command';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@components/tooltip/tooltip';
import classNames from 'classnames';
import React, { useState } from 'react';
import {
  HiMiniClipboardDocument,
  HiMiniIdentification,
  HiOutlineIdentification,
  HiOutlineStar,
  HiStar,
} from 'react-icons/hi2';

type Items = {
  id: string;
  name: string;
  url: string;
  tenantId: string;
};

interface LazyLoadedSelectorProps<T> {
  items: T[];
  onScroll: () => void;
  onSearch: (q: string) => void;
  onSelect: (item: T) => void;
  wrapClassName?: string;
  isCms?: boolean;
  placeholderText?: string;
  storageKey?: string;
}

const LazyLoadedSelector = <T extends Items>({
  items,
  onScroll,
  onSearch,
  onSelect,
  wrapClassName = '',
  isCms,
  placeholderText = 'Search website',
  storageKey = 'favoriteClients',
}: LazyLoadedSelectorProps<T>) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const [favoriteItems, setFavoriteItems] = useState<string[]>(
    JSON.parse(localStorage.getItem(storageKey) || '[]')
  );

  const handleScrollDownEvent = async (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (items && items?.length > 0) {
      if (
        Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) <
        5
      ) {
        onScroll();
      }
    }
  };

  const handleSelect = (item: T) => {
    onSelect(item);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error('Failed to copy text to clipboard:', err);
    });
  };

  const handleFavorites = (itemId: string) => {
    const updatedFavorites = favoriteItems.includes(itemId)
      ? favoriteItems.filter((id) => id !== itemId)
      : [...favoriteItems, itemId];
    localStorage.setItem(storageKey, JSON.stringify(updatedFavorites));
    setFavoriteItems(updatedFavorites);
  };

  return (
    <Command className={classNames(wrapClassName)}>
      <CommandInput
        placeholder={placeholderText}
        className='h-9'
        onValueChange={(q) => onSearch(q)}
        data-testid='website-search'
      />
      <CommandList onScroll={handleScrollDownEvent} className='max-w-[400px]'>
        {items?.length > 0 ? (
          <div
            data-testid='website-list'
            id='lazyDropdownSearch-listbox'
            className='px-2 py-1.5'
          >
            {items?.map((item) => {
              return (
                <div
                  data-testid={'website-item-' + item?.name}
                  className='grow px-2 py-1.5 hover:!cursor-pointer hover:!bg-slate-100 rounded-sm text-sm flex'
                  key={item?.id}
                >
                  <div className='flex-grow' onClick={() => handleSelect(item)}>
                    <p data-testid='website-item'>{item?.name}</p>
                    {isCms && (
                      <a
                        href={item?.url}
                        target='_blank'
                        className=' inline-block mb-2 text-xs text-zinc-500'
                        data-testid='website-item-data'
                      >
                        {item?.url}
                      </a>
                    )}
                  </div>
                  <div className='flex items-start'>
                    <TooltipProvider>
                      <Tooltip
                        onOpenChange={(open) => {
                          setIsTooltipOpen(open);
                          setActiveTooltipId(open ? item.id : null);
                        }}
                      >
                        <TooltipTrigger>
                          {isTooltipOpen && activeTooltipId === item.id ? (
                            <HiMiniIdentification
                              className='h-5 w-5'
                              color='#6038E8'
                            />
                          ) : (
                            <HiOutlineIdentification className='h-5 w-5' />
                          )}
                        </TooltipTrigger>
                        <TooltipContent className='bg-surface-invert px-3 py-2'>
                          {item?.id && (
                            <div className='flex gap-4 w-auto'>
                              <p>
                                <span className='font-bold text-sm text-white'>
                                  UUID:
                                </span>
                                <span className='text-sm text-white'>
                                  {' '}
                                  {item?.id}
                                </span>
                              </p>
                              <button
                                className='cursor-pointer'
                                onClick={() => handleCopy(item?.id)}
                              >
                                <HiMiniClipboardDocument className='text-icon-invert w-4 h-4' />
                              </button>
                            </div>
                          )}
                          {isCms && item?.tenantId && (
                            <div className='flex gap-4 w-auto'>
                              <p>
                                <span className='font-bold text-sm text-white'>
                                  Site Id:
                                </span>
                                <span className='text-sm text-white'>
                                  {' '}
                                  {item?.tenantId}
                                </span>
                              </p>
                              <button
                                className='cursor-pointer'
                                onClick={() => handleCopy(item?.tenantId)}
                              >
                                <HiMiniClipboardDocument className='text-icon-invert w-4 h-4' />
                              </button>
                            </div>
                          )}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {!isCms && (
                      <div
                        onClick={() => handleFavorites(item?.id)}
                        className='ml-2 cursor-pointer'
                      >
                        {favoriteItems.includes(item?.id) ? (
                          <HiStar className='h-5 w-5' color='#6038E8' />
                        ) : (
                          <HiOutlineStar className='h-5 w-5' />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div data-testid='website-results'>
            <div className='py-6 text-center text-sm'>No results found.</div>
          </div>
        )}
      </CommandList>
    </Command>
  );
};

export { LazyLoadedSelector };
