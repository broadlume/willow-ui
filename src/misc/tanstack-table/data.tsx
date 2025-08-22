import { Button } from '@components/button';
import { Checkbox } from '@components/checkbox/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { HiChevronUpDown } from 'react-icons/hi2';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: () => <div className='text-right'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className='text-right font-medium'>{formatted}</div>;
    },
  },
];

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: 'ba32f8aa',
    amount: 250,
    status: 'processing',
    email: 'john.doe@example.com',
  },
  {
    id: '9dcfa231',
    amount: 75,
    status: 'failed',
    email: 'jane.smith@example.com',
  },
  {
    id: 'b839c102',
    amount: 310,
    status: 'pending',
    email: 'lisa.brown@example.com',
  },
  {
    id: 'd3419a12',
    amount: 89.99,
    status: 'processing',
    email: 'kevin.lee@example.com',
  },
  {
    id: '8f2391cb',
    amount: 45.5,
    status: 'pending',
    email: 'olivia.james@example.com',
  },
  {
    id: 'ac82e4c9',
    amount: 600,
    status: 'processing',
    email: 'noah.kim@example.com',
  },
  {
    id: '2bd74f39',
    amount: 199.99,
    status: 'pending',
    email: 'emma.wilson@example.com',
  },
  {
    id: 'c5b8fe44',
    amount: 149.5,
    status: 'failed',
    email: 'liam.johnson@example.com',
  },
  {
    id: 'd5b8fe44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
  },
  {
    id: 'd5b8asfasfe44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
  },
  {
    id: 'd5b8f121e44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
  },
  {
    id: 'd5b8sgqsfe44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
  },

  {
    id: 'd5b8e4gasfe44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
  },
];
