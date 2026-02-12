import type { Meta, StoryObj } from '@storybook/react';
import { useDataTable } from './Table';
import { columns, Payment, payments } from './data';
import { useState, useCallback } from 'react';
import { SortingState } from '@tanstack/react-table';
import clsx from 'clsx';
// import HeaderOverlayToast from './HeaderOverlayToast';

const TanStackTable = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    includeLoading: false, // Disable loading state for this example [This is true by default]
    enableRowSelection: true,
  });
  return <CustomDataTable />;
};

const meta: Meta<typeof TanStackTable> = {
  component: TanStackTable,
  title: 'Tanstack Data Table',
  parameters: {
    docs: {
      description: {
        component: `
# TanStack Data Table

A powerful, flexible data table component built with TanStack Table and React. Supports sorting, pagination, row selection, drag & drop, and customizable header overlay toasts.

## Header Overlay Toast Feature

The \`headerOverlayToast\` prop allows you to display custom toast components in the table header when certain conditions are met (e.g., when rows are selected). This feature provides maximum flexibility for bulk operations and user feedback.

### Basic Usage

\`\`\`typescript
headerOverlayToast: (header, index, itemProps) => {
  // Return null = show normal headers
  // Return component = show toast overlay at specified index
  
  if (someCondition && index === desiredIndex) {
    return <YourToastComponent />;
  }
  return null;
}
\`\`\`

### Function Parameters

- **header**: TanStack Header object containing column information
- **index**: Column index (0-based) where the toast would appear
- **itemProps**: Access to table styling props for consistent theming

### Key Concepts

1. **Flexible Positioning**: Toast can appear at any column index (0, 1, 2, etc.)
2. **Single Toast Rule**: Only the first matching toast is rendered (prevents conflicts)
3. **Auto-spanning**: Toast automatically spans from the specified index to the end
4. **Conditional Rendering**: Return \`null\` for normal headers, component for toast mode
5. **Built-in Animations**: Smooth slide-in/slide-out from top (200-300ms duration)

### Positioning Strategies

#### Index 0: Full Width (includes checkbox area)
- Spans entire table width
- User manages checkbox within toast component
- Best for: Complete header replacement

#### Index 1: Preserves Checkbox Column  
- Normal checkbox column + toast spanning remaining columns
- System handles checkbox, toast handles other actions
- Best for: Bulk actions while preserving selection UI

#### Index 2+: Preserves Multiple Columns
- Keeps checkbox + first data columns visible
- Toast spans remaining columns  
- Best for: Contextual actions with column visibility

### Animation Features

- **Automatic**: Triggers based on your return conditions
- **Smooth Transitions**: 200-300ms slide animations
- **Performance Optimized**: Proper state management and DOM cleanup
- **Customizable**: Override with your own animation classes

### itemProps Integration

Access all table styling props for consistent theming:

\`\`\`typescript
headerOverlayToast: (header, index, itemProps) => (
  <div className={\`my-toast \${itemProps?.tableHead?.className || ''}\`}>
    {/* Your content */}
  </div>
)
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TanStackTable>;

export const Demo: Story = {
  render: (args) => <TanStackTable />,
  parameters: {
    docs: {
      description: {
        story: `
### Basic Table Demo

A simple data table without any header overlay toast functionality. This serves as the baseline for comparison with the enhanced examples below.

Select some rows in the examples below to see the header overlay toast feature in action!
        `,
      },
    },
  },
};

// Story for DataTable with loading state
const TanstackTableWithLoading = () => {
  const [asyncPayments, setPayments] = useState<Payment[]>([]);

  setTimeout(() => {
    // simulate fetching data from an API
    setPayments(payments);
  }, 5000);

  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: asyncPayments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    includeLoading: true, // it's true by default, so you can omit it
  });
  return <CustomDataTable />;
};

export const WithLoadingState: Story = {
  render: (args) => <TanstackTableWithLoading />,
};

// Story for DataTable without pagination
const TanstackTableWithoutPagination = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    showPagination: false, // Disable pagination
  });
  return <CustomDataTable />;
};
export const WithoutPagination: Story = {
  render: (args) => <TanstackTableWithoutPagination />,
};

// Story for DataTable with single row selection
const TanstackTableWithSingleRowSelection = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    enableSingleSelection: true, // Enable single row selection
  });
  return <CustomDataTable />;
};

export const WithSingleRowSelection: Story = {
  render: (args) => <TanstackTableWithSingleRowSelection />,
};

// Story for DataTable with custom no data found message
const TanstackTableWithWithNoDataFoundMessage = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: [],
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    noRecordFoundMessage: 'Custom empty message: No data found!',
    includeLoading: false,
  });
  return <CustomDataTable />;
};

export const WithNoDataFoundMessage: Story = {
  render: (args) => <TanstackTableWithWithNoDataFoundMessage />,
};

// Story for DataTable with dynamic no data found message
const TanstackTableWithDynamicNoDataFoundMessage = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: [],
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    noRecordFoundMessage: (
      <div className='~text-center ~py-8'>
        <h3 className='~text-lg ~font-semibold ~text-gray-700'>
          No Data Available
        </h3>
        <p className='~text-sm ~text-gray-500 ~mt-2'>
          Try adjusting your filters or check back later.
        </p>
      </div>
    ),
    includeLoading: false,
  });
  return <CustomDataTable />;
};

export const WithDynamicNoDataFoundMessage: Story = {
  render: (args) => <TanstackTableWithDynamicNoDataFoundMessage />,
};

// Story for DataTable with dynamic background row style
const TanstackTableWithDynamicRowStyle = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    itemProps: {
      tableBodyRow: (row) => ({
        className: clsx({
          '~bg-green-50 hover:~bg-green-100': row.original.status === 'success',
          '~bg-red-50 hover:~bg-red-100': row.original.status === 'failed',
          '~bg-blue-50 hover:~bg-blue-100':
            row.original.status === 'processing',
          '~bg-yellow-50 hover:~bg-yellow-100':
            row.original.status === 'pending',
          '~bg-gray-50 hover:~bg-gray-100': ![
            'success',
            'failed',
            'processing',
            'pending',
          ].includes(row.original.status),
        }),
      }),
    },
  });
  return <CustomDataTable />;
};

export const WithDynamicRowStyle: Story = {
  render: (args) => <TanstackTableWithDynamicRowStyle />,
};

// Story for DataTable with global dynamic row style
const TanstackTableWithGlobalDynamicRowStyle = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    itemProps: {
      tableBodyRow: {
        className: '~bg-blue-50 hover:~bg-blue-100',
      },
    },
  });
  return <CustomDataTable />;
};

export const WithGlobalDynamicRowStyle: Story = {
  render: (args) => <TanstackTableWithGlobalDynamicRowStyle />,
};

// Story for DataTable with sticky header
const TanstackTableWithStickyHeader = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    initialPagination: { pageIndex: 0, pageSize: 20 },
    itemProps: {
      tableWrapper: {
        enableStickyHeader: true,
      },
    },
  });
  return <CustomDataTable />;
};

export const WithStickyHeader: Story = {
  render: (args) => <TanstackTableWithStickyHeader />,
};

// Story for DataTable with dynamic page size options
const TanstackTableWithDynamicPageSizeOptions = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    initialPagination: { pageIndex: 0, pageSize: 50 },
    pageSizeOptions: [10, 25, 50, 100, 250, 500, 1000],
  });
  return <CustomDataTable />;
};

export const WithDynamicPageSizeOptions: Story = {
  render: (args) => <TanstackTableWithDynamicPageSizeOptions />,
};

// Story for DataTable with column drag functionality
const TanstackTableWithColumnDrag = () => {
  const [columnOrderState, setColumnOrderState] = useState<string[]>([
    'select',
    'status',
    'email',
    'customerName',
    'phoneNumber',
    'address',
    'city',
    'country',
    'description',
    'amount',
  ]);

  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    initialColumnOrder: columnOrderState, // This enables column drag functionality
    onColumnOrderChange: (newOrder) => {
      setColumnOrderState(newOrder);
      console.log('Column order changed:', newOrder);
    },
    fixedStartColIds: ['select'], // Checkbox column cannot be dragged
    fixedEndColIds: [], // No fixed end columns for this example
  });

  return (
    <div>
      <CustomDataTable />
    </div>
  );
};

export const WithColumnDrag: Story = {
  render: (args) => <TanstackTableWithColumnDrag />,
  parameters: {
    docs: {
      description: {
        story: `
### Column Drag & Drop Functionality (CMS Style)

This example demonstrates the column reordering feature exactly as implemented in the CMS.

**Key Features:**
- **No separate drag icon** - the entire header cell is draggable
- **Smart activation** - requires 10px mouse movement or 250ms touch delay to distinguish from clicks
- **Visual feedback** during drag operations with opacity change
- **Checkbox column remains fixed** (non-draggable)
- **State management** for column order changes
- **Console logging** of order changes

**How It Works:**
1. **Single click** on column header = **Sort** the column
2. **Click and drag** column header = **Reorder** the column

**Implementation Details:**
- Uses \`@dnd-kit/core\` with proper sensor configuration
- \`MouseSensor\` with 10px distance activation constraint
- \`TouchSensor\` with 250ms delay activation constraint  
- Drag listeners and sort handlers on same element (no conflicts due to sensors)

**Required Props:**
\`\`\`typescript
useDataTable({
  // ... other props
  initialColumnOrder: ['select', 'status', 'email', ...], // REQUIRED
  onColumnOrderChange: handleOrderChange, // Callback for changes
  fixedStartColIds: ['select'], // Columns that can't be dragged
  fixedEndColIds: ['actions'], // Columns that stay at the end
});
\`\`\`

**Visual Indicators:**
- \`cursor: grab\` when hovering over draggable headers
- \`cursor: move\` when dragging
- \`opacity: 0.8\` during drag operation
- Column header transforms smoothly during reorder

This is the **exact same implementation** used in the CMS without any additional drag handles or icons.
        `,
      },
    },
  },
};

// Story for DataTable with Header Overlay Toast at index 0 (includes checkbox column)
// const TanstackTableWithHeaderOverlayToast = () => {
//   const { CustomDataTable, table, rowSelection } = useDataTable({
//     columns: columns,
//     data: payments,
//     tableParams: {
//       manualPagination: false,
//     },
//     enableRowSelection: true,
//     includeLoading: false,
//     initialPagination: { pageIndex: 0, pageSize: 25 },
//     pageSizeOptions: [10, 25, 50, 100],
//     // Toast at index 0 (spans all columns including checkbox column)
//     headerOverlayToast: ({ header, index, itemProps }) => {
//       const selectedRows = table.getSelectedRowModel().rows;
//       const selectedCount = selectedRows.length;

//       // Only show toast at index 0 when items are selected
//       if (index !== 0 || selectedCount === 0) {
//         return null;
//       }

//       // Toast spans all columns from index 0 - with animation and itemProps access
//       return (
//         <div
//           className={`
//             transform transition-all duration-200 ease-in-out
//             translate-y-0 opacity-100
//             flex items-center justify-between p-3 bg-blue-50 border-b border-blue-200 w-full
//             ${itemProps?.tableHead?.className || ''}
//           `}
//         >
//           <div className='flex items-center gap-3'>
//             {/* Include checkbox since we're starting from index 0 */}
//             <input
//               type='checkbox'
//               checked={true}
//               onChange={() => table.resetRowSelection()}
//               className='h-4 w-4'
//             />
//             <span className='text-blue-800 font-medium'>
//               {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected
//               (Toast at index 0 with animation)
//             </span>
//           </div>
//           <div className='flex gap-2'>
//             <button
//               onClick={() => {
//                 const selectedData = selectedRows.map((row) => row.original);
//                 console.log('Custom bulk action on:', selectedData);
//                 alert(`Processing ${selectedCount} selected items!`);
//               }}
//               className='bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700'
//             >
//               Custom Action
//             </button>
//             <button
//               onClick={() => {
//                 table.resetRowSelection();
//                 rowSelection.handleSelectionReset();
//               }}
//               className='text-blue-600 hover:text-blue-800 px-2 py-1 rounded'
//             >
//               Clear
//             </button>
//           </div>
//         </div>
//       );
//     },
//   });

//   return <CustomDataTable />;
// };
// export const WithHeaderOverlayToast: Story = {
//   render: (args) => <TanstackTableWithHeaderOverlayToast />,
//   parameters: {
//     docs: {
//       description: {
//         story: `
// ### Toast at Index 0 (Full Width)

// This example demonstrates a toast that appears at index 0, spanning the entire table width including the checkbox area.

// **Key Features:**
// - Toast replaces all header columns when items are selected
// - User manages checkbox within the toast component
// - Full control over the entire header area
// - Smooth slide-in animation with 200ms duration

// **Use Cases:**
// - Complete header replacement for bulk operations
// - Custom selection UI with integrated actions
// - Full-width notifications or status messages

// **Code Pattern:**
// \`\`\`typescript
// headerOverlayToast: (header, index, itemProps) => {
//   if (index !== 0 || selectedCount === 0) return null;

//   return (
//     <div className="transform transition-all duration-200 ease-in-out translate-y-0 opacity-100">
//       {/* Include checkbox + content */}
//       <input type="checkbox" />
//       <span>Selection info</span>
//       <button>Actions</button>
//     </div>
//   );
// }
// \`\`\`

// **Best Practices:**
// - Include checkbox in your component when using index 0
// - Use \`itemProps?.tableHead?.className\` for consistent styling
// - Add animation classes for smooth transitions
//         `,
//       },
//     },
//   },
// };

// // Story showing toast at index 1 (preserves checkbox column, no checkbox in toast)
// const TanstackTableWithAdvancedHeaderToast = () => {
//   const { CustomDataTable, table } = useDataTable({
//     columns: columns,
//     data: payments,
//     tableParams: {
//       manualPagination: false,
//     },
//     enableRowSelection: true,
//     includeLoading: false,
//     initialPagination: { pageIndex: 0, pageSize: 10 },
//     headerOverlayToast: ({ header, index, itemProps }) => {
//       const selectedRows = table.getSelectedRowModel().rows;

//       // Only show toast at index 1 when items are selected
//       if (index !== 1 || selectedRows.length === 0) return null;

//       const isMultipleSelected = selectedRows.length > 1;

//       // Toast at index 1 with slide animation and itemProps access
//       return (
//         <div
//           className={`
//           transform transition-all duration-300 ease-in-out
//           translate-y-0 opacity-100
//           flex items-center justify-between p-3 w-full border-b
//           ${
//             isMultipleSelected
//               ? 'bg-red-50 border-red-200'
//               : 'bg-yellow-50 border-yellow-200'
//           }
//           ${itemProps?.tableHead?.className || ''}
//         `}
//         >
//           <div className='flex items-center gap-2'>
//             <span
//               className={`font-semibold ${
//                 isMultipleSelected ? 'text-red-800' : 'text-yellow-800'
//               }`}
//             >
//               {selectedRows.length} payment
//               {selectedRows.length !== 1 ? 's' : ''} selected (Toast at index 1
//               with animation)
//             </span>
//             {isMultipleSelected && (
//               <span className='text-red-600 text-xs'>
//                 (Bulk operations available)
//               </span>
//             )}
//           </div>
//           <div className='flex gap-2'>
//             <button
//               onClick={() => {
//                 console.log('Header info:', header.id, 'Index:', index);
//                 alert(
//                   `Custom action from header ${header.id} at index ${index}`
//                 );
//               }}
//               className={`px-3 py-1 rounded text-sm text-white ${
//                 isMultipleSelected
//                   ? 'bg-red-600 hover:bg-red-700'
//                   : 'bg-yellow-600 hover:bg-yellow-700'
//               }`}
//             >
//               {isMultipleSelected ? 'Bulk Delete' : 'Process'}
//             </button>
//             <button
//               onClick={() => table.resetRowSelection()}
//               className='text-gray-600 hover:text-gray-800 px-2 py-1 rounded border'
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       );
//     },
//   });

//   return <CustomDataTable />;
// };

// export const WithAdvancedHeaderToast: Story = {
//   render: (args) => <TanstackTableWithAdvancedHeaderToast />,
//   parameters: {
//     docs: {
//       description: {
//         story: `
// ### Toast at Index 1 (Preserves Checkbox)

// This example shows a toast at index 1, which preserves the normal checkbox column while displaying the toast in the remaining columns.

// **Key Features:**
// - Normal checkbox column remains functional
// - Toast spans from index 1 to the end of the table
// - System handles row selection automatically
// - No need to manage checkbox in toast component
// - Conditional styling based on selection count

// **Use Cases:**
// - Bulk actions while keeping standard selection UI
// - Multi-state toasts (different colors/actions based on selection)
// - Preserving familiar checkbox behavior

// **Code Pattern:**
// \`\`\`typescript
// headerOverlayToast: (header, index, itemProps) => {
//   if (index !== 1 || selectedRows.length === 0) return null;

//   const isMultiple = selectedRows.length > 1;

//   return (
//     <div className={\`transform transition-all duration-300 ease-in-out
//       \${isMultiple ? 'bg-red-50' : 'bg-yellow-50'}\`}>
//       {/* No checkbox needed - system handles it */}
//       <span>Selection status</span>
//       <button>Bulk action</button>
//     </div>
//   );
// }
// \`\`\`

// **Advantages:**
// - Familiar checkbox behavior for users
// - Cleaner toast component (no checkbox logic)
// - System handles selection state automatically
// - Easy to implement conditional styling
//         `,
//       },
//     },
//   },
// };

// // Story showing toast at index 2 (preserves checkbox and first data column)
// const TanstackTableWithPermanentToast = () => {
//   const { CustomDataTable, table } = useDataTable({
//     columns: columns,
//     data: payments,
//     tableParams: {
//       manualPagination: false,
//     },
//     enableRowSelection: true,
//     includeLoading: false,
//     initialPagination: { pageIndex: 0, pageSize: 10 },
//     headerOverlayToast: ({ header, index }) => {
//       const selectedRows = table.getSelectedRowModel().rows;
//       const selectedCount = selectedRows.length;

//       // Only show toast at index 2 (preserves checkbox and first data column)
//       if (index !== 2) return null;

//       // Always show toast at index 2 (spans remaining columns)
//       return (
//         <div className='flex items-center justify-between p-3 bg-green-50 border-b border-green-200 w-full'>
//           <div className='flex items-center gap-3'>
//             <span className='text-green-800 font-medium'>
//               {selectedCount > 0
//                 ? `${selectedCount} item${
//                     selectedCount !== 1 ? 's' : ''
//                   } selected (Toast at index 2)`
//                 : 'Select items to perform actions (Toast at index 2)'}
//             </span>
//           </div>
//           <div className='flex gap-2'>
//             <button
//               onClick={() => table.toggleAllRowsSelected()}
//               className='bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700'
//             >
//               Select All
//             </button>
//             {selectedCount > 0 && (
//               <button
//                 onClick={() => table.resetRowSelection()}
//                 className='text-green-600 hover:text-green-800 px-2 py-1 rounded border border-green-300'
//               >
//                 Clear
//               </button>
//             )}
//           </div>
//         </div>
//       );
//     },
//   });

//   return <CustomDataTable />;
// };

// export const WithPermanentToast: Story = {
//   render: (args) => <TanstackTableWithPermanentToast />,
//   parameters: {
//     docs: {
//       description: {
//         story: `
// ### Toast at Index 2 (Preserves Multiple Columns)

// This example demonstrates a toast at index 2, preserving both the checkbox column and the first data column while showing the toast in remaining columns.

// **Key Features:**
// - Checkbox column + first data column remain visible
// - Toast spans from index 2 onwards
// - Always visible (not dependent on selection)
// - Useful for persistent actions or status

// **Use Cases:**
// - Contextual actions with column visibility
// - Persistent action bars or status indicators
// - Progressive disclosure of functionality
// - Mixed content (data + actions)

// **Code Pattern:**
// \`\`\`typescript
// headerOverlayToast: (header, index) => {
//   if (index !== 2) return null; // Only show at index 2

//   // Always show toast (or add conditions as needed)
//   return (
//     <div className="flex items-center justify-between p-3 bg-green-50">
//       <span>Status or helper text</span>
//       <button>Persistent action</button>
//     </div>
//   );
// }
// \`\`\`

// **Benefits:**
// - Maintains data context (first column visible)
// - Provides persistent functionality
// - Balances content and actions
// - Flexible positioning strategy
//         `,
//       },
//     },
//   },
// };

// // Story showing multiple index conditions (only first match will render)
// const TanstackTableWithConditionalPositioning = () => {
//   const { CustomDataTable, table } = useDataTable({
//     columns: columns,
//     data: payments,
//     tableParams: {
//       manualPagination: false,
//     },
//     enableRowSelection: true,
//     includeLoading: false,
//     initialPagination: { pageIndex: 0, pageSize: 10 },
//     headerOverlayToast: ({ header, index }) => {
//       const selectedRows = table.getSelectedRowModel().rows;
//       const selectedCount = selectedRows.length;

//       // Complex conditional logic - different positions based on selection count
//       if (selectedCount >= 5 && index === 0) {
//         // When 5+ selected: Toast at index 0 (spans all, includes checkbox area)
//         return (
//           <div className='flex items-center justify-between p-3 bg-purple-50 border-b border-purple-200 w-full'>
//             <span className='text-purple-800 font-medium'>
//               🚨 {selectedCount} items selected - Bulk mode active (Toast at
//               index 0)
//             </span>
//             <button
//               onClick={() => alert('Bulk processing all selected items!')}
//               className='bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700'
//             >
//               Bulk Process All
//             </button>
//           </div>
//         );
//       } else if (selectedCount >= 2 && selectedCount < 5 && index === 1) {
//         // When 2-4 selected: Toast at index 1 (preserves checkbox column)
//         return (
//           <div className='flex items-center justify-between p-3 bg-orange-50 border-b border-orange-200 w-full'>
//             <span className='text-orange-800 font-medium'>
//               {selectedCount} items selected - Multi-select mode (Toast at index
//               1)
//             </span>
//             <button
//               onClick={() => table.resetRowSelection()}
//               className='bg-orange-600 text-white px-3 py-1 rounded text-sm hover:bg-orange-700'
//             >
//               Clear Selection
//             </button>
//           </div>
//         );
//       } else if (selectedCount === 1 && index === 2) {
//         // When 1 selected: Toast at index 2 (preserves checkbox + first data column)
//         return (
//           <div className='flex items-center justify-between p-3 bg-blue-50 border-b border-blue-200 w-full'>
//             <span className='text-blue-800 font-medium'>
//               Single item selected (Toast at index 2)
//             </span>
//             <button
//               onClick={() => alert('Processing single item!')}
//               className='bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700'
//             >
//               Process Item
//             </button>
//           </div>
//         );
//       }

//       // No conditions met: Show normal headers
//       return null;
//     },
//   });

//   return <CustomDataTable />;
// };

// export const WithConditionalPositioning: Story = {
//   render: (args) => <TanstackTableWithConditionalPositioning />,
//   parameters: {
//     docs: {
//       description: {
//         story: `
// ### Advanced Conditional Positioning

// This example showcases complex conditional logic where the toast position and appearance change based on different selection states.

// **Dynamic Positioning Logic:**
// - **5+ items selected**: Toast at index 0 (full width, bulk mode)
// - **2-4 items selected**: Toast at index 1 (preserves checkbox)
// - **1 item selected**: Toast at index 2 (preserves checkbox + first column)
// - **0 items selected**: Normal headers

// **Key Features:**
// - Single toast enforcement (first match wins)
// - Different UI states for different scenarios
// - Progressive functionality based on selection count
// - Visual hierarchy through positioning and styling

// **Code Pattern:**
// \`\`\`typescript
// headerOverlayToast: (header, index) => {
//   const selectedCount = table.getSelectedRowModel().rows.length;

//   // Bulk mode: 5+ selections at index 0
//   if (selectedCount >= 5 && index === 0) {
//     return <BulkModeToast />;
//   }

//   // Multi-select mode: 2-4 selections at index 1
//   if (selectedCount >= 2 && selectedCount < 5 && index === 1) {
//     return <MultiSelectToast />;
//   }

//   // Single select mode: 1 selection at index 2
//   if (selectedCount === 1 && index === 2) {
//     return <SingleSelectToast />;
//   }

//   return null; // Normal headers
// }
// \`\`\`

// **Advanced Techniques:**
// - State-driven positioning strategies
// - Progressive UI disclosure
// - Context-aware functionality
// - Visual feedback for different modes

// **Use Cases:**
// - Complex workflows with multiple selection states
// - Progressive enhancement of functionality
// - State-dependent UI changes
// - Advanced bulk operation interfaces
//         `,
//       },
//     },
//   },
// };

// // Story showing usage of the HeaderOverlayToast component with animations
// const TanstackTableWithAnimatedHeaderOverlayToast = () => {
//   const { CustomDataTable, table } = useDataTable({
//     columns: columns,
//     data: payments,
//     tableParams: {
//       manualPagination: false,
//     },
//     enableRowSelection: true,
//     includeLoading: false,
//     initialPagination: { pageIndex: 0, pageSize: 15 },
//     headerOverlayToast: ({ header, index, itemProps }) => {
//       // Only show at index 0
//       if (index !== 0) return null;

//       // Use the HeaderOverlayToast component with animations
//       return (
//         <HeaderOverlayToast
//           table={table}
//           onBulkAction={(selectedRows) => {
//             console.log('Bulk action on:', selectedRows);
//             alert(
//               `Processing ${selectedRows.length} items using HeaderOverlayToast component!`
//             );
//           }}
//           actionLabel='Bulk Process'
//           className={itemProps?.tableHead?.className}
//         />
//       );
//     },
//   });

//   return <CustomDataTable />;
// };

// export const WithAnimatedHeaderOverlayToast: Story = {
//   render: (args) => <TanstackTableWithAnimatedHeaderOverlayToast />,
//   parameters: {
//     docs: {
//       description: {
//         story: `
// ### Using the Built-in HeaderOverlayToast Component

// This example demonstrates how to use the pre-built \`HeaderOverlayToast\` component which includes built-in animations and standard functionality.

// **Built-in Features:**
// - Automatic slide-in/slide-out animations
// - Standard selection display and actions
// - Configurable action button and callback
// - Consistent styling and behavior
// - Proper state management for smooth animations

// **Component Props:**
// - \`table\`: TanStack table instance
// - \`onBulkAction\`: Callback function for bulk operations
// - \`actionLabel\`: Text for the action button
// - \`className\`: Additional CSS classes

// **Animation Details:**
// - **Slide In**: 200ms ease-in-out from top (-translate-y-full → translate-y-0)
// - **Slide Out**: 200ms ease-in-out to top (translate-y-0 → -translate-y-full)
// - **State Management**: Uses \`shouldRender\` and \`isVisible\` for clean DOM handling
// - **Performance**: Optimized with \`willChange\` CSS property

// **Usage Pattern:**
// \`\`\`typescript
// headerOverlayToast: (header, index, itemProps) => {
//   if (index !== 0) return null; // Choose your index

//   return (
//     <HeaderOverlayToast
//       table={table}
//       onBulkAction={(selectedRows) => {
//         // Handle bulk operations
//         console.log('Processing:', selectedRows);
//       }}
//       actionLabel="Process Items"
//       className={itemProps?.tableHead?.className}
//     />
//   );
// }
// \`\`\`

// **Benefits of Built-in Component:**
// - Consistent behavior across applications
// - Pre-tested animations and state management
// - Standard UX patterns
// - Reduced development time
// - Accessibility considerations built-in

// **Customization Options:**
// - Custom action labels and callbacks
// - Additional CSS classes through itemProps
// - Positioning through index parameter
// - Conditional rendering based on your logic

// **When to Use:**
// - Standard bulk operations interface
// - Quick implementation needs
// - Consistent design requirements
// - When you want proven UX patterns
//         `,
//       },
//     },
//   },
// };

// Story for DataTable with horizontal scrolling when content overflows
const TanstackTableWithHorizontalScrolling = () => {
  const { CustomDataTable } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    includeLoading: false,
    initialPagination: { pageIndex: 0, pageSize: 10 },
    pageSizeOptions: [5, 10, 20],
    itemProps: {
      tableWrapper: {
        className: 'max-w-[200px]', // Constrain width to force horizontal scrolling
      },
    },
  });

  return (
    <div className='max-w-[800px] mx-auto p-4'>
      <h3 className='mb-4 text-lg font-semibold'>
        Table with Horizontal Scrolling
      </h3>
      <p className='mb-4 text-sm text-gray-600'>
        This table has many columns that exceed the container width,
        demonstrating horizontal scrolling functionality.
      </p>
      <CustomDataTable />
    </div>
  );
};

export const WithHorizontalScrolling: Story = {
  render: (args) => <TanstackTableWithHorizontalScrolling />,
};

// // Documentation-only story for comprehensive usage guide
// const HeaderOverlayToastGuide = () => null;

// export const HeaderOverlayToastCompleteGuide: Story = {
//   render: () => (
//     <div className='p-8 max-w-4xl mx-auto'>
//       <h1 className='text-3xl font-bold mb-6'>
//         Header Overlay Toast - Complete Implementation Guide
//       </h1>

//       <div className='prose max-w-none'>
//         <h2>📋 Quick Reference</h2>
//         <div className='bg-gray-50 p-4 rounded-lg mb-6'>
//           <pre>{`headerOverlayToast: (header, index, itemProps) => {
//   // Conditional logic for when to show toast
//   if (condition && index === targetIndex) {
//     return <YourToastComponent />;
//   }
//   return null; // Normal headers
// }`}</pre>
//         </div>

//         <h2>🎯 Positioning Strategy Guide</h2>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
//           <div className='border rounded-lg p-4'>
//             <h3 className='font-semibold text-blue-600'>
//               Index 0 - Full Width
//             </h3>
//             <ul className='text-sm mt-2 space-y-1'>
//               <li>✅ Complete header control</li>
//               <li>✅ Custom checkbox handling</li>
//               <li>⚠️ Must manage selection UI</li>
//               <li>🎯 Best for: Brand new UX</li>
//             </ul>
//           </div>
//           <div className='border rounded-lg p-4'>
//             <h3 className='font-semibold text-green-600'>
//               Index 1 - Preserve Checkbox
//             </h3>
//             <ul className='text-sm mt-2 space-y-1'>
//               <li>✅ Standard checkbox behavior</li>
//               <li>✅ Focus on bulk actions</li>
//               <li>✅ Familiar UX patterns</li>
//               <li>🎯 Best for: Most use cases</li>
//             </ul>
//           </div>
//           <div className='border rounded-lg p-4'>
//             <h3 className='font-semibold text-purple-600'>
//               Index 2+ - Contextual
//             </h3>
//             <ul className='text-sm mt-2 space-y-1'>
//               <li>✅ Preserve data context</li>
//               <li>✅ Progressive disclosure</li>
//               <li>✅ Mixed content strategy</li>
//               <li>🎯 Best for: Complex layouts</li>
//             </ul>
//           </div>
//         </div>

//         <h2>🎨 Animation Implementation</h2>
//         <div className='bg-blue-50 p-4 rounded-lg mb-6'>
//           <h4 className='font-semibold mb-2'>Manual Animation Classes:</h4>
//           <pre>{`className="transform transition-all duration-200 ease-in-out translate-y-0 opacity-100"`}</pre>

//           <h4 className='font-semibold mb-2 mt-4'>
//             Built-in HeaderOverlayToast Component:
//           </h4>
//           <pre>{`<HeaderOverlayToast
//   table={table}
//   onBulkAction={handleBulkAction}
//   actionLabel="Process"
//   className={itemProps?.tableHead?.className}
// />`}</pre>
//         </div>

//         <h2>⚙️ Common Patterns & Best Practices</h2>
//         <div className='space-y-4 mb-6'>
//           <div className='border-l-4 border-green-400 pl-4'>
//             <h4 className='font-semibold'>✅ Do:</h4>
//             <ul className='text-sm space-y-1'>
//               <li>
//                 Use index 1 for most bulk operations (preserves familiar
//                 checkbox UX)
//               </li>
//               <li>
//                 Include itemProps?.tableHead?.className for consistent styling
//               </li>
//               <li>Return null when you want normal headers</li>
//               <li>Use smooth animations (200-300ms duration)</li>
//               <li>Test with different selection counts and states</li>
//             </ul>
//           </div>

//           <div className='border-l-4 border-red-400 pl-4'>
//             <h4 className='font-semibold'>❌ Don't:</h4>
//             <ul className='text-sm space-y-1'>
//               <li>
//                 Return components from multiple indexes (first match wins)
//               </li>
//               <li>Forget to handle the empty selection state</li>
//               <li>Override system checkbox behavior unnecessarily</li>
//               <li>Use overly complex animation timing</li>
//               <li>Ignore responsive design considerations</li>
//             </ul>
//           </div>
//         </div>

//         <h2>🔧 Implementation Checklist</h2>
//         <div className='bg-gray-50 p-4 rounded-lg'>
//           <ul className='space-y-2 text-sm'>
//             <li>□ Choose appropriate index based on UX requirements</li>
//             <li>□ Implement conditional logic for when to show toast</li>
//             <li>□ Add smooth animations (manual or use HeaderOverlayToast)</li>
//             <li>□ Include itemProps for consistent styling</li>
//             <li>□ Test with various selection states (0, 1, multiple)</li>
//             <li>□ Verify responsive behavior</li>
//             <li>□ Ensure accessibility compliance</li>
//             <li>□ Test animation performance</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   ),
//   parameters: {
//     docs: {
//       description: {
//         story: `
// ### Complete Implementation Guide

// This comprehensive guide covers all aspects of implementing header overlay toasts. Use this as your reference when building custom toast functionality.

// The guide includes positioning strategies, animation techniques, best practices, and common patterns to help you implement the perfect toast solution for your use case.
//         `,
//       },
//     },
//   },
// };

// Story for testing server-side sorting with scroll preservation
const TanstackTableWithServerSideSorting = () => {
  const [sortedData, setSortedData] = useState(payments);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [loading, setLoading] = useState(false);

  // Handle server-side sorting with scroll position preservation
  const handleSortingChange = useCallback((updaterOrValue: SortingState | ((old: SortingState) => SortingState)) => {
    const newSorting = typeof updaterOrValue === 'function' ? updaterOrValue(sorting) : updaterOrValue;

    setSorting(newSorting);
    setLoading(true);
    
    // Simulate API call - replace this with your actual API call
    setTimeout(() => {
      if (newSorting.length > 0) {
        const { id, desc } = newSorting[0];
        const sorted = [...payments].sort((a, b) => {
          const aVal = a[id as keyof typeof a];
          const bVal = b[id as keyof typeof b];
          
          if (typeof aVal === 'string' && typeof bVal === 'string') {
            return desc ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
          }
          if (typeof aVal === 'number' && typeof bVal === 'number') {
            return desc ? bVal - aVal : aVal - bVal;
          }
          return 0;
        });
        setSortedData(sorted);
      } else {
        setSortedData(payments);
      }
      setLoading(false);
    }, 200); // Simulate network delay
  }, [sorting]);

  const { CustomDataTable } = useDataTable({
    columns: columns,
    data: sortedData,
    tableParams: {
      manualPagination: false,
      manualSorting: true, // Enable server-side sorting
      onSortingChange: handleSortingChange,
    },
    itemProps: {
      tableWrapper: {
        enableStickyHeader: true,
      },
    },
    enableRowSelection: true,
    initialPagination: { pageIndex: 0, pageSize: 100 },
    initialSorting: sorting,
    includeLoading: loading, // Show loading state during sort
  });
  
  return (
    <div>
      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Server-Side Sorting Example</h3>
        <p className="text-sm text-gray-600 mb-3">
          This demonstrates proper server-side sorting with scroll position preservation.
        </p>
        <div className="text-sm">
          <strong>Configuration:</strong>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li><code>manualSorting: true</code> - Enables server-side sorting</li>
            <li><code>onSortingChange</code> - Handles sort state changes</li>
            <li><code>initialSorting</code> - Syncs sort state</li>
            <li><code>includeLoading</code> - Shows loading during API calls</li>
            <li><code>Scroll Preservation</code> - Maintains horizontal scroll position</li>
          </ul>
        </div>
        <div className="mt-3 p-2 bg-blue-50 rounded">
          <strong>Current Sort:</strong> {' '}
          {sorting.length > 0 
            ? `${sorting[0].id} (${sorting[0].desc ? 'desc' : 'asc'})`
            : 'None'
          }
          {loading && <span className="ml-2 text-blue-600">Loading...</span>}
        </div>
      </div>
      
      <CustomDataTable />
      
      <div className="mt-4 text-sm text-gray-600">
        <strong>Test Instructions:</strong>
        <ol className="list-decimal list-inside space-y-1 mt-1">
          <li>Scroll horizontally to see more columns</li>
          <li>Click on any column header to sort (especially the last column)</li>
          <li>Notice the loading state and API call simulation</li>
          <li>Verify that horizontal scroll position is preserved during sorting</li>
          <li>Check that data is properly sorted after loading</li>
        </ol>
      </div>
    </div>
  );
};

export const ServerSideSortingTest: Story = {
  render: (args) => <TanstackTableWithServerSideSorting />,
};
