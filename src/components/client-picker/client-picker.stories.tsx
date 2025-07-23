import { Meta, StoryObj } from '@storybook/react';

import { ClientPicker } from './client-picker';

const meta: Meta = {
    component: ClientPicker,
    title: 'Components/Client Picker',
};

export default meta;
type Story = StoryObj<typeof ClientPicker>;

export const Demo: Story = {
    render: (_) => {
        const onScroll = () => {
            console.log('Scrolled');
        };
        const onSearch = (q: string) => {
            console.log('Search query:', q);
        };
        const onSelect = (client: any) => {
            console.log('Selected client:', client);
        };
        const clients = [
            { id: '1', name: 'Client A', subdomain: 'client-a', tenantId: 'tenant-1', active: true, status: 1 },
            { id: '2', name: 'Client B', subdomain: 'client-b', tenantId: 'tenant-2', active: true, status: 1 },
            { id: '3', name: 'Client C', subdomain: 'client-c', tenantId: 'tenant-3', active: true, status: 1 },
            { id: '4', name: 'Client D', subdomain: 'client-d', tenantId: 'tenant-4', active: true, status: 1 },
            { id: '5', name: 'Client E', subdomain: 'client-e', tenantId: 'tenant-5', active: true, status: 1 },
            { id: '6', name: 'Client F', subdomain: 'client-f', tenantId: 'tenant-6', active: true, status: 1 },
            { id: '7', name: 'Client G', subdomain: 'client-g', tenantId: 'tenant-7', active: true, status: 1 },
            { id: '8', name: 'Client H', subdomain: 'client-h', tenantId: 'tenant-8', active: true, status: 1 },
            { id: '9', name: 'Client I', subdomain: 'client-i', tenantId: 'tenant-9', active: true, status: 1 },
            { id: '10', name: 'Client J', subdomain: 'client-j', tenantId: 'tenant-10', active: true, status: 1 },
        ];
        return <ClientPicker 
            clients={clients} 
            onScroll={onScroll} 
            onSearch={onSearch} 
            onSelect={onSelect}
            selectedClient={clients[1]}
            />;
    },
};
