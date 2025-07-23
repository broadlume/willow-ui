import React, { useState } from 'react';
import classNames from 'classnames';
import { HiStar, HiOutlineStar, HiOutlineIdentification, HiMiniIdentification } from 'react-icons/hi2';
import { Command, CommandInput, CommandList } from '@components/command/command';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/tooltip/tooltip';

type Client = {
  id: string;
  name: string;
  subdomain: string;
  tenantId: string;
  active: boolean;
  status: number;
};

interface ClientPickerProps {
  clients: Client[];
  onScroll: () => void;
  onSearch: (q: string) => void;
  onSelect: (client: Client) => void;
  wrapClassName?: string;
  selectedClient?: Client | null;
  isCms?: boolean
  placeholderText?: string;
}

const ClientPicker: React.FC<ClientPickerProps> = ({
  clients,
  onScroll,
  onSearch,
  onSelect,
  wrapClassName = '',
  selectedClient,
  isCms,
  placeholderText = 'Search website'
}: ClientPickerProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);
  const [favoriteClients, setFavoriteClients] = useState<string[]>(JSON.parse(localStorage.getItem('favoriteClients') || '[]'));

  const handleScrollDownEvent = async (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (clients && clients.length > 0) {
      if (
        Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) < 5
      ) {
        onScroll();
      }
    }
  };

  const handleSelect = (client: Client) => {
    onSelect(client);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Failed to copy text to clipboard:', err);
    });
  };

  const handleFavorites = (clientId: string) => {
    const updatedFavorites = favoriteClients.includes(clientId)
      ? favoriteClients.filter(id => id !== clientId)
      : [...favoriteClients, clientId];
    localStorage.setItem('favoriteClients', JSON.stringify(updatedFavorites));
    setFavoriteClients(updatedFavorites);
  };

  return (
    <Command className={classNames(wrapClassName)}>
      <CommandInput
        placeholder={placeholderText}
        className="h-9"
        onValueChange={(q) => onSearch(q)}
        data-testid="website-search"
      />
      <CommandList onScroll={handleScrollDownEvent} className='~max-w-[400px]'>
        {clients?.length > 0 ? (
          <div
            data-testid="website-list"
            id="lazyDropdownSearch-listbox"
            className="~px-2 ~py-1.5"
          >
            {clients?.map((clientItem: Client, index: number) => {
              return (
                <div
                  data-testid={'website-item-' + clientItem?.name}
                  className="~grow ~px-2 ~py-1.5
                    ~rounded-sm ~flex"
                  key={clientItem?.id}
                >
                  <div className='~flex-grow' onClick={() => handleSelect(clientItem)}>
                    <p data-testid="website-item">
                      {clientItem?.name}
                    </p>
                    {isCms && <a href={clientItem?.subdomain}
                      target="_blank"
                      className=' ~inline-block ~mb-2 ~text-xs ~text-zinc-500'
                      data-testid="website-item-data"
                    >
                      {clientItem?.subdomain}
                    </a>}
                  </div>
                  <div className='~flex ~items-start'>
                    <TooltipProvider>
                      <Tooltip
                        onOpenChange={(open) => {
                          setIsTooltipOpen(open);
                          setActiveTooltipId(open ? clientItem.id : null);
                        }}
                      >
                        <TooltipTrigger>
                          {(isTooltipOpen && activeTooltipId === clientItem.id)
                            ? <HiMiniIdentification className="~h-5 ~w-5" color="#6038E8"/>
                            : <HiOutlineIdentification className="~h-5 ~w-5"/>
                          }
                        </TooltipTrigger>
                        <TooltipContent className='~bg-[#1A1A1A] ~px-3 ~py-2'>
                          {
                            clientItem?.id && <div className='~flex ~gap-4 ~w-auto'>
                              <p>
                                <span className='~font-bold ~text-sm ~text-white'>UUID:</span>
                                <span className='~text-sm ~text-white'>{" "}{clientItem?.id}</span>
                              </p>
                              <span onClick={() => handleCopy(clientItem?.id)} className='~cursor-pointer'>
                                <svg width="16" height="18" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2.75 1.6875C2.75 1.16973 3.16973 0.75 3.6875 0.75H3.875C4.91053 0.75 5.75 1.58947 5.75 2.625V3.5625C5.75 4.08027 6.16973 4.5 6.6875 4.5H7.625C8.66053 4.5 9.5 5.33947 9.5 6.375V8.0625C9.5 8.58027 9.08027 9 8.5625 9H3.6875C3.16973 9 2.75 8.58027 2.75 8.0625V1.6875Z" fill="#F2F2F2"/>
                                  <path d="M6.5 2.625C6.5 1.96847 6.25898 1.36824 5.8606 0.907952C7.56006 1.35189 8.89811 2.68994 9.34205 4.3894C8.88176 3.99102 8.28153 3.75 7.625 3.75H6.6875C6.58395 3.75 6.5 3.66605 6.5 3.5625V2.625Z" fill="#F2F2F2"/>
                                  <path d="M1.4375 3H2V8.0625C2 8.99448 2.75552 9.75 3.6875 9.75H7.25V10.3125C7.25 10.8303 6.83027 11.25 6.3125 11.25H1.4375C0.919733 11.25 0.5 10.8303 0.5 10.3125V3.9375C0.5 3.41973 0.919733 3 1.4375 3Z" fill="#F2F2F2"/>
                                </svg>
                              </span>
                            </div>
                          }
                          {
                            isCms && (
                              clientItem?.tenantId && <div className='~flex ~gap-4 ~w-auto'>
                                <p>
                                  <span className='~font-bold ~text-sm ~text-white'>Site Id:</span>
                                  <span className='~text-sm ~text-white'>{" "}{clientItem?.tenantId}</span>
                                </p>
                                <span onClick={() => handleCopy(clientItem?.tenantId)} className='~cursor-pointer'>
                                  <svg width="16" height="18" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.75 1.6875C2.75 1.16973 3.16973 0.75 3.6875 0.75H3.875C4.91053 0.75 5.75 1.58947 5.75 2.625V3.5625C5.75 4.08027 6.16973 4.5 6.6875 4.5H7.625C8.66053 4.5 9.5 5.33947 9.5 6.375V8.0625C9.5 8.58027 9.08027 9 8.5625 9H3.6875C3.16973 9 2.75 8.58027 2.75 8.0625V1.6875Z" fill="#F2F2F2"/>
                                    <path d="M6.5 2.625C6.5 1.96847 6.25898 1.36824 5.8606 0.907952C7.56006 1.35189 8.89811 2.68994 9.34205 4.3894C8.88176 3.99102 8.28153 3.75 7.625 3.75H6.6875C6.58395 3.75 6.5 3.66605 6.5 3.5625V2.625Z" fill="#F2F2F2"/>
                                    <path d="M1.4375 3H2V8.0625C2 8.99448 2.75552 9.75 3.6875 9.75H7.25V10.3125C7.25 10.8303 6.83027 11.25 6.3125 11.25H1.4375C0.919733 11.25 0.5 10.8303 0.5 10.3125V3.9375C0.5 3.41973 0.919733 3 1.4375 3Z" fill="#F2F2F2"/>
                                  </svg>
                                </span>
                              </div>
                            )
                          }
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {!isCms && <div onClick={() => handleFavorites(clientItem?.id)} className="~ml-2 ~cursor-pointer">
                      {favoriteClients.includes(clientItem?.id)
                        ? <HiStar className="~h-5 ~w-5" color="#6038E8" />
                        : <HiOutlineStar className="~h-5 ~w-5"/>
                      }
                    </div>}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div data-testid="website-results">
            <div className="~py-6 ~text-center ~text-sm">
              No results found.
            </div>
          </div>
        )}
      </CommandList>
    </Command>
  );
};

export { ClientPicker}