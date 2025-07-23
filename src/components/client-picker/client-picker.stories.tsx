import { Meta, StoryObj } from '@storybook/react';

import { ClientPicker } from './client-picker';
import { useEffect, useState } from 'react';

const meta: Meta = {
    component: ClientPicker,
    title: 'Components/Client Picker',
};

export default meta;
type Story = StoryObj<typeof ClientPicker>;

type Client = {
    id: string;
    name: string;
    subdomain: string;
    tenantId: string;
    active: boolean;
    status: number;
};

const initClients: Client[] = [
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

export const ShellCompanySelectorDemo: Story = {
    render: (_) => {
        const onScroll = () => {
            setClients(prevClients => [
                ...prevClients,
                { id: `${prevClients.length + 1}`, name: `Client ${prevClients.length + 1}`, subdomain: `client-${prevClients.length + 1}`, tenantId: `tenant-${prevClients.length + 1}`, active: true, status: 1 },
            ]);
        };
        const onSearch = (q: string) => {
            setSearchTerm(q);
            setClients(prevClients =>
                prevClients.filter(client =>
                    client.name.toLowerCase().includes(q.toLowerCase())
                ));
        };
        const onSelect = (client: Client) => {
            setSelectedClient(client);
        }
        const [clients, setClients] = useState<Client[]>(initClients);
        const [selectedClient, setSelectedClient] = useState<Client | null>(null);
        const [searchTerm, setSearchTerm] = useState('');
        useEffect(() => {
            if (searchTerm) {
                setSearchTerm(searchTerm);
            } else {
                setClients(initClients);
            }
        }, [searchTerm]);

        return <ClientPicker
            clients={clients}
            onScroll={onScroll}
            onSearch={onSearch}
            onSelect={onSelect}
            selectedClient={selectedClient}
            placeholderText='Select Company'
        />;
    },
};

export const CmsSelectorDemo: Story = {
    render: (_) => {
        const onScroll = () => {
            setClients(prevClients => [
                ...prevClients,
                { id: `${prevClients.length + 1}`, name: `Client ${prevClients.length + 1}`, subdomain: `client-${prevClients.length + 1}`, tenantId: `tenant-${prevClients.length + 1}`, active: true, status: 1 },
            ]);
        };
        const onSearch = (q: string) => {
            setSearchTerm(q);
            setClients(prevClients =>
                prevClients.filter(client =>
                    client.name.toLowerCase().includes(q.toLowerCase())
                ));
        };
        const onSelect = (client: Client) => {
            setSelectedClient(client);
        }
        const [clients, setClients] = useState<Client[]>(initClients);
        const [selectedClient, setSelectedClient] = useState<Client | null>(null);
        const [searchTerm, setSearchTerm] = useState('');
        useEffect(() => {
            if (searchTerm) {
                setSearchTerm(searchTerm);
            } else {
                setClients(initClients);
            }
        }, [searchTerm]);

        return <ClientPicker
            clients={clients}
            onScroll={onScroll}
            onSearch={onSearch}
            onSelect={onSelect}
            selectedClient={selectedClient}
            placeholderText='Select Website'
            isCms={true}
        />;
    },
};