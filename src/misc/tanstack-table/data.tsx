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
  customerName: string;
  phoneNumber: string;
  address: string;
  city: string;
  country: string;
  description: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
    size: 120,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    size: 200,
  },
  {
    accessorKey: 'customerName',
    header: 'Customer Name',
    size: 150,
  },
  {
    accessorKey: 'phoneNumber',
    header: 'Phone Number',
    size: 130,
  },
  {
    accessorKey: 'address',
    header: 'Address',
    size: 200,
  },
  {
    accessorKey: 'city',
    header: 'City',
    size: 120,
  },
  {
    accessorKey: 'country',
    header: 'Country',
    size: 120,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: 250,
  },
  {
    accessorKey: 'amount',
    size: 100,
    minSize: 80,
    maxSize: 120,
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
    customerName: 'John Miller',
    phoneNumber: '+1-555-0123',
    address: '123 Main Street, Apt 4B',
    city: 'New York',
    country: 'USA',
    description:
      'Monthly subscription payment for premium services and features',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
    customerName: 'Sarah Johnson',
    phoneNumber: '+1-555-0456',
    address: '456 Oak Avenue',
    city: 'Los Angeles',
    country: 'USA',
    description:
      'One-time purchase for digital product bundle with extended warranty',
  },
  {
    id: 'ba32f8aa',
    amount: 250,
    status: 'processing',
    email: 'john.doe@example.com',
    customerName: 'John Doe',
    phoneNumber: '+1-555-0789',
    address: '789 Pine Road, Suite 200',
    city: 'Chicago',
    country: 'USA',
    description:
      'Enterprise software license renewal with additional user seats',
  },
  {
    id: '9dcfa231',
    amount: 75,
    status: 'failed',
    email: 'jane.smith@example.com',
    customerName: 'Jane Smith',
    phoneNumber: '+1-555-0321',
    address: '321 Elm Street',
    city: 'Boston',
    country: 'USA',
    description:
      'Consulting services for project management and team coordination',
  },
  {
    id: 'b839c102',
    amount: 310,
    status: 'pending',
    email: 'lisa.brown@example.com',
    customerName: 'Lisa Brown',
    phoneNumber: '+1-555-0654',
    address: '654 Maple Drive, Unit 12',
    city: 'Seattle',
    country: 'USA',
    description:
      'Annual subscription for cloud hosting services with premium support',
  },
  {
    id: 'd3419a12',
    amount: 89.99,
    status: 'processing',
    email: 'kevin.lee@example.com',
    customerName: 'Kevin Lee',
    phoneNumber: '+1-555-0987',
    address: '987 Cedar Lane',
    city: 'Miami',
    country: 'USA',
    description:
      'Mobile app development service with maintenance package included',
  },
  {
    id: '8f2391cb',
    amount: 45.5,
    status: 'pending',
    email: 'olivia.james@example.com',
    customerName: 'Olivia James',
    phoneNumber: '+1-555-0246',
    address: '246 Birch Street, Floor 3',
    city: 'Denver',
    country: 'USA',
    description:
      'Training workshop registration fee for professional development',
  },
  {
    id: 'ac82e4c9',
    amount: 600,
    status: 'processing',
    email: 'noah.kim@example.com',
    customerName: 'Noah Kim',
    phoneNumber: '+1-555-0135',
    address: '135 Spruce Avenue, Building A',
    city: 'Portland',
    country: 'USA',
    description:
      'Custom software development project with ongoing maintenance contract',
  },
  {
    id: '2bd74f39',
    amount: 199.99,
    status: 'pending',
    email: 'emma.wilson@example.com',
    customerName: 'Emma Wilson',
    phoneNumber: '+1-555-0369',
    address: '369 Willow Creek Road',
    city: 'Austin',
    country: 'USA',
    description:
      'Digital marketing campaign management with analytics and reporting',
  },
  {
    id: 'c5b8fe44',
    amount: 149.5,
    status: 'failed',
    email: 'liam.johnson@example.com',
    customerName: 'Liam Johnson',
    phoneNumber: '+1-555-0147',
    address: '147 Valley View Drive',
    city: 'San Francisco',
    country: 'USA',
    description:
      'Web design services with responsive layout and SEO optimization',
  },
  {
    id: 'd5b8fe44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
    customerName: 'Liam Johnson',
    phoneNumber: '+1-555-0258',
    address: '258 Highland Park Avenue',
    city: 'Phoenix',
    country: 'USA',
    description:
      'Database optimization and performance tuning services for enterprise',
  },
  {
    id: 'd5b8asfasfe44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
    customerName: 'Michael Davis',
    phoneNumber: '+1-555-0741',
    address: '741 Riverside Drive, Apt 8C',
    city: 'Philadelphia',
    country: 'USA',
    description:
      'API integration services with third-party payment processing systems',
  },
  {
    id: 'd5b8f121e44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
    customerName: 'Sophie Martinez',
    phoneNumber: '+1-555-0852',
    address: '852 Mountain View Circle',
    city: 'Las Vegas',
    country: 'USA',
    description:
      'Cloud infrastructure setup with automated backup and monitoring solutions',
  },
  {
    id: 'd5b8sgqsfe44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
    customerName: 'Alexander Thompson',
    phoneNumber: '+1-555-0963',
    address: '963 Sunset Boulevard, Studio 15',
    city: 'San Diego',
    country: 'USA',
    description:
      'Security audit and penetration testing for web application infrastructure',
  },

  {
    id: 'd5b8e4gasfe44',
    amount: 149.5,
    status: 'success',
    email: 'liam.johnson@example.com',
    customerName: 'Isabella Garcia',
    phoneNumber: '+1-555-0174',
    address: '174 Ocean View Terrace, Unit 9B',
    city: 'Tampa',
    country: 'USA',
    description:
      'E-commerce platform development with integrated payment gateway and inventory management',
  },
];
