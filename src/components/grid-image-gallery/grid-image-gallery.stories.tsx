import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  GridImageGallery,
  type GridImageGalleryProps,
  type GridAssetItem,
} from './grid-image-gallery';

const meta: Meta<typeof GridImageGallery> = {
  title: 'Components/Grid Image Gallery',
  component: GridImageGallery,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A grid-based asset gallery component for displaying files, folders, images, and videos with selection support.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of assets to display in the grid',
    },
    selectedIds: {
      control: 'object',
      description: 'Controlled selected IDs (optional - if not provided, component manages its own state)',
    },
    onSelectionChange: {
      control: false,
      description: 'Callback when selection changes',
    },
    onItemClick: {
      control: false,
      description: 'Callback when an item is clicked',
    },
    onItemDoubleClick: {
      control: false,
      description: 'Callback when an item is double clicked',
    },
    onMenuClick: {
      control: false,
      description: 'Callback when the menu button is clicked',
    },
    allowMultiSelect: {
      control: 'boolean',
      description: 'Allow multiple selection',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether selection is enabled',
    },
    className: {
      control: 'text',
      description: 'Custom class name for the grid container',
    },
    virtualized: {
      control: 'boolean',
      description: 'Enable simple windowed rendering for long lists',
    },
    virtualizedRowHeight: {
      control: 'number',
      description: 'Row height in pixels when virtualized is enabled',
    },
    virtualizedContainerHeight: {
      control: 'number',
      description:
        'Scroll container height in pixels when virtualized is enabled',
    },
    pageIndex: {
      control: false,
      description:
        'Zero-based page index when using the built-in pagination footer (controlled by the parent).',
    },
    pageSize: {
      control: false,
      description:
        'Page size when using the built-in pagination footer (controlled by the parent).',
    },
    totalItems: {
      control: false,
      description:
        'Total number of items across all pages when using pagination. Defaults to items.length.',
    },
    pageSizeOptions: {
      control: 'object',
      description:
        'Available page size options for the pagination footer. Defaults to [12, 24, 48, 96].',
    },
    showPagination: {
      control: 'boolean',
      description:
        'Explicitly control whether pagination footer is shown. If not provided, auto-detects based on callbacks or total items.',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GridImageGallery>;

// Sample image data
const sampleItems: GridAssetItem[] = [
  {
    id: '1',
    name: 'Mountain Landscape.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=1',
  },
  {
    id: '2',
    name: 'Ocean Sunset.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=2',
  },
  {
    id: '3',
    name: 'City Skyline.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=3',
  },
  {
    id: '4',
    name: 'Forest Path.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=4',
  },
  {
    id: '5',
    name: 'Desert Landscape.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=5',
  },
  {
    id: '6',
    name: 'Beach Paradise.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=6',
  },
  {
    id: '7',
    name: 'Mountain Lake.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=7',
  },
  {
    id: '8',
    name: 'Aurora Borealis.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=8',
  },
  {
    id: '9',
    name: 'Tropical Island.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=9',
  },
  {
    id: '10',
    name: 'Winter Wonderland.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=10',
  },
  {
    id: '11',
    name: 'Urban Architecture.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=11',
  },
  {
    id: '12',
    name: 'Countryside Fields.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=12',
  },
  {
    id: '13',
    name: 'Rocky Mountains.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=13',
  },
  {
    id: '14',
    name: 'Coastal Cliffs.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=14',
  },
  {
    id: '15',
    name: 'Starry Night Sky.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=15',
  },
  {
    id: '16',
    name: 'Autumn Colors.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=16',
  },
  {
    id: '17',
    name: 'Spring Blossoms.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=17',
  },
  {
    id: '18',
    name: 'Waterfall Cascade.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=18',
  },
  {
    id: '19',
    name: 'Canyon Views.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=19',
  },
  {
    id: '20',
    name: 'River Valley.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=20',
  },
  {
    id: '21',
    name: 'Historic Landmarks.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=21',
  },
  {
    id: '22',
    name: 'Garden Paradise.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=22',
  },
  {
    id: '23',
    name: 'Modern Buildings.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=23',
  },
  {
    id: '24',
    name: 'Natural Wonders.jpg',
    imageUrl: 'https://picsum.photos/400/400?random=24',
  },
];

// Default story with interactive controls (no pagination)
const DefaultExample = (args: GridImageGalleryProps) => {
  const [items, setItems] = useState<GridAssetItem[]>(sampleItems);
  const [selectedIds, setSelectedIds] = useState<string[]>(["2", "5"]);

  const handleSelectionChange = (ids: string[]) => {
    console.log('Selection changed:', ids);
    setSelectedIds(ids);
  };

  const handleItemClick = (item: GridAssetItem) => {
    console.log('Item clicked:', item);
  };

  const handleItemDoubleClick = (item: GridAssetItem) => {
    console.log('Item double clicked:', item);
    alert(`Double clicked: ${item.name}`);
  };

  const handleMenuClick = (item: GridAssetItem) => {
    console.log('Menu clicked for:', item);
    alert(`Menu clicked for: ${item.name}`);
  };

  const handleDelete = (selectedIds: string[]) => {
    console.log('Deleting items:', selectedIds);
    setItems(items.filter((item) => !selectedIds.includes(item.id)));
    setSelectedIds([]);
  };

  return (
    <div className='w-full'>
      <div className='mb-4 p-4 bg-surface-sec rounded'>
        <p className='text-sm font-medium text-text-pri'>
          Total Items: {items.length} | Selected: {selectedIds.length}
        </p>
        {selectedIds.length > 0 && (
          <p className='text-xs text-text-opt mt-1'>
            Selected IDs: {selectedIds.join(', ')}
          </p>
        )}
      </div>
      <GridImageGallery
        {...args}
        items={items}
        selectedIds={selectedIds}
        onSelectionChange={handleSelectionChange}
        onItemClick={handleItemClick}
        onItemDoubleClick={handleItemDoubleClick}
        onMenuClick={handleMenuClick}
        onDelete={handleDelete}
      />
    </div>
  );
};

// Default story
export const Default: Story = {
  render: DefaultExample,
  args: {
    allowMultiSelect: true,
    selectable: true,
    showActionButtons: true,
  },
};

// Gallery with built-in pagination footer
const WithPaginationExample = (args: GridImageGalleryProps) => {
  const [allItems, setAllItems] = useState<GridAssetItem[]>(sampleItems);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(12);

  const handleDelete = (idsToDelete: string[]) => {
    setAllItems((prev) =>
      prev.filter((item) => !idsToDelete.includes(item.id))
    );
  };

  const pagedItems = allItems.slice(
    pageIndex * pageSize,
    pageIndex * pageSize + pageSize
  );

  return (
    <div className='w-full'>
      <div className='mb-4 p-4 bg-surface-sec rounded'>
        <p className='text-sm font-medium text-text-pri'>Paginated Gallery</p>
        <p className='text-xs text-text-opt mt-1'>
          Uses the gallery&apos;s optional pagination footer. Change items per
          page or navigate between pages.
        </p>
      </div>
      <GridImageGallery
        {...args}
        items={pagedItems}
        onDelete={handleDelete}
        pageIndex={pageIndex}
        pageSize={pageSize}
        totalItems={allItems.length}
        pageSizeOptions={[6, 12, 24]}
        onPageChange={setPageIndex}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPageIndex(0);
        }}
        showPagination={true}
      />
    </div>
  );
};

export const WithPagination: Story = {
  render: WithPaginationExample,
  args: {
    allowMultiSelect: true,
    selectable: true,
    showActionButtons: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Gallery using the optional pagination footer. The parent component controls page index, size, and items.',
      },
    },
  },
};

// Single selection only
const SingleSelectionExample = (args: GridImageGalleryProps) => {
  const [items, setItems] = useState<GridAssetItem[]>(sampleItems);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const handleDelete = (selectedIds: string[]) => {
    setItems(items.filter((item) => !selectedIds.includes(item.id)));
  };

  return (
    <div className='w-full'>
      <div className='mb-4 p-4 bg-surface-sec rounded'>
        <p className='text-sm font-medium text-text-pri'>
          Selected Item: {selectedIds.length > 0 ? selectedIds[0] : 'None'}
        </p>
        <p className='text-xs text-text-opt mt-1'>
          Only single selection is allowed
        </p>
      </div>
      <GridImageGallery
        {...args}
        items={items}
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        onDelete={handleDelete}
      />
    </div>
  );
};

export const SingleSelection: Story = {
  render: SingleSelectionExample,
  args: {
    allowMultiSelect: false,
    selectable: true,
    showActionButtons: true,
  },
};

// Without selection
export const NoSelection: Story = {
  render: DefaultExample,
  args: {
    selectable: false,
    showActionButtons: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Gallery without selection checkboxes, useful for view-only mode.',
      },
    },
  },
};

// High quality images
const highQualityItems: GridAssetItem[] = [
  {
    id: '1',
    name: 'Professional Photo 1.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Professional Photo 2.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Professional Photo 3.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'Professional Photo 4.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop',
  },
  {
    id: '5',
    name: 'Professional Photo 5.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
  },
  {
    id: '6',
    name: 'Professional Photo 6.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
  },
  {
    id: '7',
    name: 'Professional Photo 7.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop',
  },
  {
    id: '8',
    name: 'Professional Photo 8.jpg',
    imageUrl:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&h=400&fit=crop',
  },
];

const HighQualityExample = (args: GridImageGalleryProps) => {
  const [items, setItems] = useState<GridAssetItem[]>(highQualityItems);
  const handleDelete = (selectedIds: string[]) => {
    setItems(items.filter((item) => !selectedIds.includes(item.id)));
  };

  return (
    <div className='w-full'>
      <GridImageGallery {...args} items={items} onDelete={handleDelete} />
    </div>
  );
};

export const HighQualityImages: Story = {
  render: HighQualityExample,
  args: {
    allowMultiSelect: true,
    selectable: true,
    showActionButtons: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery displaying high quality images from Unsplash.',
      },
    },
  },
};

// Custom render example
const CustomRenderExample = (args: GridImageGalleryProps) => {
  const [items, setItems] = useState<GridAssetItem[]>(sampleItems.slice(0, 12));
  const handleDelete = (selectedIds: string[]) => {
    setItems(items.filter((item) => !selectedIds.includes(item.id)));
  };

  const customRender = (
    item: GridAssetItem,
    context: { isSelected: boolean }
  ) => {
    return (
      <div className='flex flex-col h-full'>
        <div className='aspect-square w-full relative overflow-hidden'>
          <img
            src={item.imageUrl}
            alt={item.name}
            className='w-full h-full object-cover'
          />
          <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3'>
            <p className='text-white text-sm font-medium truncate'>
              {context.isSelected ? `Selected: ${item.name}` : item.name}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full'>
      <div className='mb-4 p-4 bg-surface-sec rounded'>
        <p className='text-sm font-medium text-text-pri'>
          Custom Rendered Cards
        </p>
        <p className='text-xs text-text-opt mt-1'>
          Using custom renderCardContent function
        </p>
      </div>
      <GridImageGallery
        {...args}
        items={items}
        onDelete={handleDelete}
        renderCardContent={customRender}
      />
    </div>
  );
};

export const CustomRender: Story = {
  render: CustomRenderExample,
  args: {
    allowMultiSelect: true,
    selectable: true,
    showActionButtons: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Gallery with custom card rendering using renderCardContent prop.',
      },
    },
  },
};

// Virtualized long list with mixed states
const createVirtualizedItems = (count: number): GridAssetItem[] => {
  return Array.from({ length: count }).map((_, index) => {
    const id = String(index + 1);
    // Mark first few items as loading and some without image to demonstrate states
    if (index < 5) {
      return {
        id,
        name: `Loading asset ${id}`,
        isLoading: true,
      };
    }

    if (index % 7 === 0) {
      return {
        id,
        name: `Text-only asset ${id}`,
      };
    }

    return {
      id,
      name: `Asset ${id}`,
      imageUrl: `https://picsum.photos/400/400?random=${index + 30}`,
    };
  });
};

const VirtualizedExample = (args: GridImageGalleryProps) => {
  const [items] = useState<GridAssetItem[]>(() => createVirtualizedItems(500));

  return (
    <div className='w-full'>
      <div className='mb-4 p-4 bg-surface-sec rounded'>
        <p className='text-sm font-medium text-text-pri'>Virtualized Gallery</p>
        <p className='text-xs text-text-opt mt-1'>
          Rendering 500 items using simple windowed rendering. Some items are
          loading-only, some are text-only.
        </p>
      </div>
      <GridImageGallery {...args} items={items} />
    </div>
  );
};

export const VirtualizedLongList: Story = {
  render: VirtualizedExample,
  args: {
    allowMultiSelect: true,
    selectable: true,
    showActionButtons: true,
    columns: 4,
    virtualized: true,
    virtualizedRowHeight: 176,
    virtualizedContainerHeight: 480,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Gallery rendering a long list (500 items) using the built-in simple virtualization for better performance. Demonstrates loading placeholders and text-only items.',
      },
    },
  },
};

// Portrait orientation images
const portraitItems: GridAssetItem[] = [
  {
    id: '1',
    name: 'Portrait Photo 1.jpg',
    imageUrl: 'https://picsum.photos/400/600?random=25',
  },
  {
    id: '2',
    name: 'Portrait Photo 2.jpg',
    imageUrl: 'https://picsum.photos/400/600?random=26',
  },
  {
    id: '3',
    name: 'Portrait Photo 3.jpg',
    imageUrl: 'https://picsum.photos/400/600?random=27',
  },
  {
    id: '4',
    name: 'Portrait Photo 4.jpg',
    imageUrl: 'https://picsum.photos/400/600?random=28',
  },
  {
    id: '5',
    name: 'Portrait Photo 5.jpg',
    imageUrl: 'https://picsum.photos/400/600?random=29',
  },
  {
    id: '6',
    name: 'Portrait Photo 6.jpg',
    imageUrl: 'https://picsum.photos/400/600?random=30',
  },
  {
    id: '7',
    name: 'Portrait Photo 7.jpg',
    imageUrl: 'https://picsum.photos/400/600?random=31',
  },
  {
    id: '8',
    name: 'Portrait Photo 8.jpg',
    imageUrl: 'https://picsum.photos/400/600?random=32',
  },
];

const PortraitExample = (args: GridImageGalleryProps) => {
  const [items, setItems] = useState<GridAssetItem[]>(portraitItems);
  const handleDelete = (selectedIds: string[]) => {
    setItems(items.filter((item) => !selectedIds.includes(item.id)));
  };

  return (
    <div className='w-full'>
      <GridImageGallery {...args} items={items} onDelete={handleDelete} />
    </div>
  );
};

export const PortraitImages: Story = {
  render: PortraitExample,
  args: {
    allowMultiSelect: true,
    selectable: true,
    showActionButtons: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Gallery with portrait-oriented images, showing how the component handles different aspect ratios.',
      },
    },
  },
};

// Delete with confirmation
const DeleteWithConfirmationExample = (args: GridImageGalleryProps) => {
  const [items, setItems] = useState<GridAssetItem[]>(sampleItems.slice(0, 12));
  const handleDelete = (selectedIds: string[]) => {
    const count = selectedIds.length;
    const confirmed = window.confirm(
      `Are you sure you want to delete ${count} ${count === 1 ? 'item' : 'items'
      }?`
    );

    if (confirmed) {
      console.log('Deleting items:', selectedIds);
      setItems(items.filter((item) => !selectedIds.includes(item.id)));
    }
  };

  return (
    <div className='w-full'>
      <div className='mb-4 p-4 bg-surface-cta-bg border border-border-cta rounded'>
        <p className='text-sm font-medium text-text-cta'>
          Delete with Confirmation
        </p>
        <p className='text-xs text-text-cta mt-1'>
          This example shows how to add a confirmation dialog before deleting
          items. Select images and click the Delete button to see the
          confirmation.
        </p>
      </div>
      <GridImageGallery {...args} items={items} onDelete={handleDelete} />
    </div>
  );
};

export const DeleteWithConfirmation: Story = {
  render: DeleteWithConfirmationExample,
  args: {
    allowMultiSelect: true,
    selectable: true,
    showActionButtons: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Gallery with delete confirmation dialog. Select multiple images and click Delete to see the confirmation prompt.',
      },
    },
  },
};
