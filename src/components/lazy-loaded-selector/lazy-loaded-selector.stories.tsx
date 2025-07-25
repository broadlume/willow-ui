import { Meta, StoryObj } from '@storybook/react';

import { LazyLoadedSelector } from './lazy-loaded-selector';
import { useEffect, useState } from 'react';

const meta: Meta = {
    component: LazyLoadedSelector,
    title: 'Components/Lazy Loaded Selector',
};

export default meta;
type Story = StoryObj<typeof LazyLoadedSelector>;

type Item = {
    id: string;
    name: string;
    url: string;
    tenantId: string;
};

const initItems: Item[] = [
    { id: '1', name: 'Client A', url: 'client-a', tenantId: 'tenant-1', },
    { id: '2', name: 'Client B', url: 'client-b', tenantId: 'tenant-2', },
    { id: '3', name: 'Client C', url: 'client-c', tenantId: 'tenant-3', },
    { id: '4', name: 'Client D', url: 'client-d', tenantId: 'tenant-4', },
    { id: '5', name: 'Client E', url: 'client-e', tenantId: 'tenant-5', },
    { id: '6', name: 'Client F', url: 'client-f', tenantId: 'tenant-6', },
    { id: '7', name: 'Client G', url: 'client-g', tenantId: 'tenant-7', },
    { id: '8', name: 'Client H', url: 'client-h', tenantId: 'tenant-8', },
    { id: '9', name: 'Client I', url: 'client-i', tenantId: 'tenant-9', },
    { id: '10', name: 'Client J', url: 'client-j', tenantId: 'tenant-10', },
];

export const SelectorWithFavoriteAndCopyActionsDemo: Story = {
    render: (_) => {
        const onScroll = () => {
            setItems(prevItems => [
                ...prevItems,
                { id: `${prevItems.length + 1}`, name: `Client ${prevItems.length + 1}`, url: `client-${prevItems.length + 1}`, tenantId: `tenant-${prevItems.length + 1}`, },
            ]);
        };
        const onSearch = (q: string) => {
            setSearchTerm(q);
            setItems(prevItems =>
                prevItems.filter(item =>
                    item.name.toLowerCase().includes(q.toLowerCase())
                ));
        };
        const onSelect = (item: Item) => {
            setSelectedItem(item);
        }
        const [items, setItems] = useState<Item[]>(initItems);
        const [selectedItem, setSelectedItem] = useState<Item | null>(null);
        const [searchTerm, setSearchTerm] = useState('');
        useEffect(() => {
            if (searchTerm) {
                setSearchTerm(searchTerm);
            } else {
                setItems(initItems);
            }
        }, [searchTerm]);

        return <LazyLoadedSelector
            items={items}
            onScroll={onScroll}
            onSearch={onSearch}
            onSelect={onSelect}
            placeholderText='Select Company'
        />;
    },
};

export const SelectorWithCopyAndItemLinkDemo: Story = {
    render: (_) => {
        const onScroll = () => {
            setItems(prevItems => [
                ...prevItems,
                { id: `${prevItems.length + 1}`, name: `Client ${prevItems.length + 1}`, url: `client-${prevItems.length + 1}`, tenantId: `tenant-${prevItems.length + 1}`, },
            ]);
        };
        const onSearch = (q: string) => {
            setSearchTerm(q);
            setItems(prevItems =>
                prevItems.filter(item =>
                    item.name.toLowerCase().includes(q.toLowerCase())
                ));
        };
        const onSelect = (item: Item) => {
            setSelectedItem(item);
        }
        const [items, setItems] = useState<Item[]>(initItems);
        const [selectedItem, setSelectedItem] = useState<Item | null>(null);
        const [searchTerm, setSearchTerm] = useState('');

        useEffect(() => {
            if (searchTerm) {
                setSearchTerm(searchTerm);
            } else {
                setItems(initItems);
            }
        }, [searchTerm]);

        return <LazyLoadedSelector
            items={items}
            onScroll={onScroll}
            onSearch={onSearch}
            onSelect={onSelect}
            placeholderText='Select Website'
            isCms={true}
        />;
    },
};