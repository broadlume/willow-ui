import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form/form';
import {
  MiniAssetSelector,
  type MiniAssetSelectorProps,
} from './mini-asset-selector';

const meta: Meta<typeof MiniAssetSelector> = {
  title: 'Components/MiniAssetSelector',
  component: MiniAssetSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile asset selector component that supports both file uploads and URL input. Features drag & drop, preview, validation, and customizable asset management integration.',
      },
    },
  },
  argTypes: {
    selectedFile: {
      control: false,
      description: 'The currently selected file object',
    },
    onSelectedFile: {
      control: false,
      description: 'Callback when a file is selected',
    },
    selectedURL: {
      control: 'text',
      description: 'The currently selected URL string',
    },
    onSelectedURL: {
      control: false,
      description: 'Callback when a URL is selected',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Custom placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
    },
    browseButtonText: {
      control: 'text',
      description: 'Custom browse button text',
    },
    replaceButtonText: {
      control: 'text',
      description: 'Custom replace button text',
    },
    maxFileSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    acceptedFileTypes: {
      control: 'object',
      description: 'Accepted file types',
    },
    showBrowseButton: {
      control: 'boolean',
      description: 'Whether to show the browse button',
    },
    customBrowseButton: {
      control: false,
      description: 'Custom browse button component',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether to make the component full width',
    },
    className: {
      control: 'text',
      description: 'Custom class name for the wrapper',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MiniAssetSelector>;

// Wrapper component for stories
const DefaultExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        name={args.name || 'asset-selector'}
        onImageNameClick={(e) => {
          console.log('image clicked', e);
        }}
      />
    </div>
  );
};

const PresetURLExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>(
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  );

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        name={args.name || 'asset-selector-preset'}
      />
    </div>
  );
};

const DisabledExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        name={args.name || 'asset-selector-disabled'}
      />
    </div>
  );
};

const CustomButtonExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        name={args.name || 'asset-selector-custom'}
      />
    </div>
  );
};

const CustomBrowseExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  const handleCustomBrowse = () => {
    // Simulate opening a custom asset manager
    alert('Custom asset manager would open here!');
    // In real usage, this would open your custom asset management modal
    setSelectedURL(
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop'
    );
  };

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        onBrowseClick={handleCustomBrowse}
        name={args.name || 'asset-selector-custom-browse'}
      />
    </div>
  );
};

const RestrictionsExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        name={args.name || 'asset-selector-restricted'}
      />
      <div className='mt-4 text-sm text-gray-600'>
        <p>Restrictions:</p>
        <ul className='list-disc list-inside'>
          <li>Max file size: 2MB</li>
          <li>Accepted types: JPEG, PNG only</li>
        </ul>
      </div>
    </div>
  );
};

// Basic story with hooks for state management
export const Default: Story = {
  render: DefaultExample,
  args: {
    name: 'asset-selector',
    placeholder:
      'Enter Image URL here or Drag & drop here 1200 x 630 pixels (minimum 600 x 315 pixels)',
  },
};

// With preset URL
export const WithPresetURL: Story = {
  render: PresetURLExample,
  args: {
    name: 'asset-selector-preset',
    placeholder: 'Enter Image URL or drag & drop',
  },
};

// Disabled state
export const Disabled: Story = {
  render: DisabledExample,
  args: {
    name: 'asset-selector-disabled',
    placeholder: 'This component is disabled',
    disabled: true,
  },
};

// Custom button text
export const CustomButtonText: Story = {
  render: CustomButtonExample,
  args: {
    name: 'asset-selector-custom',
    browseButtonText: 'Select Asset',
    replaceButtonText: 'Change Asset',
    placeholder: 'Custom placeholder text here...',
  },
};

// With custom browse handler
export const CustomBrowseHandler: Story = {
  render: CustomBrowseExample,
  args: {
    name: 'asset-selector-custom-browse',
    browseButtonText: 'Asset Manager',
    placeholder: 'Click browse to open custom asset manager',
  },
};

const NoBrowseButtonExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        name={args.name || 'asset-selector-no-browse'}
      />
      <div className='mt-4 text-sm text-gray-600'>
        <p>
          This example shows the component without a browse button - only URL
          input and drag & drop work.
        </p>
      </div>
    </div>
  );
};

const CustomBrowseButtonExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  const customButton = (
    <button
      className='px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors'
      onClick={() =>
        alert(
          'Custom browse button clicked! This could open a modal, redirect, etc.'
        )
      }
    >
      🎨 Custom Gallery
    </button>
  );

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        customBrowseButton={customButton}
        name={args.name || 'asset-selector-custom-button'}
      />
      <div className='mt-4 text-sm text-gray-600'>
        <p>This example uses a completely custom browse button component.</p>
        <p>Click the purple button to see custom behavior!</p>
      </div>
    </div>
  );
};

const NotFullWidthExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  return (
    <div className='w-[600px] border p-4'>
      <h3 className='mb-4 font-semibold'>Container with fixed width</h3>
      <MiniAssetSelector
        {...args}
        selectedFile={selectedFile}
        onSelectedFile={setSelectedFile}
        selectedURL={selectedURL}
        onSelectedURL={setSelectedURL}
        name={args.name || 'asset-selector-not-full-width'}
      />
      <div className='mt-4 text-sm text-gray-600'>
        <p>
          This example shows the component not taking full width of its
          container.
        </p>
      </div>
    </div>
  );
};

// File size and type restrictions
export const WithRestrictions: Story = {
  render: RestrictionsExample,
  args: {
    name: 'asset-selector-restricted',
    maxFileSize: 2 * 1024 * 1024, // 2MB
    acceptedFileTypes: ['image/jpeg', 'image/png'],
    placeholder: 'Drop JPEG/PNG files up to 2MB',
  },
};

// Without browse button
export const WithoutBrowseButton: Story = {
  render: NoBrowseButtonExample,
  args: {
    name: 'asset-selector-no-browse',
    showBrowseButton: false,
    placeholder: 'Enter URL or drag & drop - no browse button',
  },
};

// Custom browse button component
export const WithCustomBrowseButton: Story = {
  render: CustomBrowseButtonExample,
  args: {
    name: 'asset-selector-custom-button',
    placeholder: 'Custom button component example',
  },
};

// Not full width
export const NotFullWidth: Story = {
  render: NotFullWidthExample,
  args: {
    name: 'asset-selector-not-full-width',
    fullWidth: false,
    placeholder: 'Not full width example',
  },
};

// Form integration example schema
const FormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  assetFile: z
    .union([
      z.instanceof(File),
      z.string().url('Please enter a valid URL'),
      z.null(),
    ])
    .optional(),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

// Form integration example component
const FormIntegrationExample = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      assetFile: null,
      description: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log('Form submitted:', values);
    alert(
      `Form submitted! Check console for details. Asset: ${
        values.assetFile instanceof File
          ? `File: ${values.assetFile.name}`
          : values.assetFile
          ? `URL: ${values.assetFile}`
          : 'No asset selected'
      }`
    );
  };

  return (
    <div className='w-full max-w-md mx-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    placeholder='Enter title'
                    className='w-full px-3 py-2 border rounded-md'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='assetFile'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Asset Upload</FormLabel>
                <FormControl>
                  <MiniAssetSelector
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name='assetFile'
                    placeholder='Upload image or enter URL'
                    fullWidth={true}
                    showBrowseButton={true}
                  />
                </FormControl>
                <FormDescription>
                  Upload an image file or enter a valid image URL
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    placeholder='Enter description (optional)'
                    className='w-full px-3 py-2 border rounded-md'
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex gap-2'>
            <Button type='submit' className='flex-1'>
              Submit
            </Button>
            <Button
              type='button'
              variant='outline'
              onClick={() => form.reset()}
              className='flex-1'
            >
              Reset
            </Button>
          </div>

          <div className='text-sm text-gray-600'>
            <p>
              <strong>Current Values:</strong>
            </p>
            <pre className='bg-gray-100 p-2 rounded text-xs mt-1'>
              {JSON.stringify(form.watch(), null, 2)}
            </pre>
          </div>
        </form>
      </Form>
    </div>
  );
};

// React Hook Form integration story
export const FormIntegration: Story = {
  render: FormIntegrationExample,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates React Hook Form integration with the MiniAssetSelector. Shows form validation, error handling, and seamless integration with other form fields.',
      },
    },
  },
};

// Multiple files example component
const MultipleFilesExample = (args: Partial<MiniAssetSelectorProps>) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState([
    {
      id: '1',
      imageUrl: 'https://picsum.photos/200/200?random=1',
      originalFile: 'product-image-1.jpg',
    },
    {
      id: '2',
      imageUrl: 'https://picsum.photos/200/200?random=2',
      originalFile: 'product-image-2.jpg',
    },
    {
      id: '3',
      imageUrl: 'https://picsum.photos/200/200?random=1',
      originalFile: 'product-image-3.jpg',
    },
    {
      id: '4',
      imageUrl: 'https://picsum.photos/200/200?random=2',
      originalFile: 'product-image-4.jpg',
    },
    {
      id: '5',
      imageUrl: 'https://picsum.photos/200/200?random=1',
      originalFile: 'product-image-5.jpg',
    },
    {
      id: '6',
      imageUrl: 'https://picsum.photos/200/200?random=2',
      originalFile: 'product-image-6.jpg',
    },
  ]);

  const handleFilesSelected = (files: File[]) => {
    console.log('Selected files:', files);
    setSelectedFiles(files);
  };

  const handleRemoveExistingImage = (id: string) => {
    console.log('Remove existing image:', id);
    setExistingImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className='w-[600px]'>
      <MiniAssetSelector
        {...args}
        multiple={true}
        onSelectedFiles={handleFilesSelected}
        existingImages={existingImages}
        onRemoveExistingImage={handleRemoveExistingImage}
        name={args.name || 'asset-selector-multiple'}
      />

      <div className='mt-4 text-sm text-gray-600'>
        <p>
          <strong>Features:</strong>
        </p>
        <ul className='list-disc list-inside'>
          <li>Display existing/uploaded images with "Uploaded" badge</li>
          <li>Select multiple files at once via browse button</li>
          <li>Drag & drop multiple files</li>
          <li>Click "Browse" again to add more files</li>
          <li>
            Remove individual files or existing images using the trash icon
          </li>
          <li>Files are added cumulatively (not replaced)</li>
        </ul>
      </div>
    </div>
  );
};

// Multiple files story
export const MultipleFiles: Story = {
  render: MultipleFilesExample,
  args: {
    name: 'asset-selector-multiple',
    multiplePlaceholder: 'Drag & drop files here or click Browse',
    browseButtonText: 'Browse',
    acceptedFileTypes: ['image/*'],
    maxFileSize: 10 * 1024 * 1024, // 10MB
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates multiple file upload functionality with existing/uploaded images. Users can see previously uploaded images with "Uploaded" badge, select multiple new files via browse button or drag & drop. New files are added to existing selection, and individual files or existing images can be removed.',
      },
    },
  },
};
