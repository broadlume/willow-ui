# MiniAssetSelector

A versatile asset selector component that supports both file uploads and URL input. Features drag & drop, preview, validation, and customizable asset management integration.

## Features

- **Dual Input Methods**: Support for both file uploads and URL input
- **Multiple File Upload**: Support for selecting and managing multiple files at once
- **Existing Images Display**: Show previously uploaded images alongside new file selection
- **Drag & Drop**: Intuitive drag and drop interface for file uploads (single and multiple)
- **Image Preview**: Shows preview thumbnails for selected images with file size information
- **Validation**: Built-in file size and type validation
- **Customizable**: Configurable button text, placeholders, and restrictions
- **Asset Manager Integration**: Customizable browse handler for asset management systems
- **React Hook Form Integration**: First-class support for React Hook Form with forwardRef
- **Form Integration**: Works seamlessly with form libraries like Formik
- **TypeScript Support**: Full TypeScript support with proper type definitions

## Usage

```tsx
import { MiniAssetSelector } from '@broadlume/willow-ui';

function MyComponent() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedURL, setSelectedURL] = useState<string | null>('');

  return (
    <MiniAssetSelector
      name='asset-selector'
      selectedFile={selectedFile}
      onSelectedFile={setSelectedFile}
      selectedURL={selectedURL}
      onSelectedURL={setSelectedURL}
      placeholder='Enter Image URL or drag & drop here'
    />
  );
}
```

## Props

| Prop                    | Type                                                           | Default                                                                                 | Description                                                                                 |
| ----------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `selectedFile`          | `File \| null`                                                 | -                                                                                       | The currently selected file object                                                          |
| `onSelectedFile`        | `(file: File \| null) => void`                                 | -                                                                                       | Callback when a file is selected                                                            |
| `selectedURL`           | `string \| null`                                               | -                                                                                       | The currently selected URL string                                                           |
| `onSelectedURL`         | `(url: string \| null) => void`                                | -                                                                                       | Callback when a URL is selected                                                             |
| `name`                  | `string`                                                       | `'asset'`                                                                               | The name attribute for the input field                                                      |
| `placeholder`           | `string`                                                       | "Enter Image URL here or Drag & drop here 1200 x 630 pixels (minimum 600 x 315 pixels)" | Custom placeholder text                                                                     |
| `disabled`              | `boolean`                                                      | `false`                                                                                 | Whether the component is disabled                                                           |
| `browseButtonText`      | `string`                                                       | "Browse"                                                                                | Custom browse button text                                                                   |
| `replaceButtonText`     | `string`                                                       | "Replace"                                                                               | Custom replace button text                                                                  |
| `onBrowseClick`         | `() => void`                                                   | -                                                                                       | Callback when browse button is clicked - allows custom asset manager integration            |
| `onFileUpload`          | `(file: File) => void`                                         | -                                                                                       | Custom file upload handler - if provided, will be called instead of default file handling   |
| `maxFileSize`           | `number`                                                       | `10485760` (10MB)                                                                       | Maximum file size in bytes                                                                  |
| `acceptedFileTypes`     | `string[]`                                                     | `['image/*']`                                                                           | Accepted file types                                                                         |
| `className`             | `string`                                                       | -                                                                                       | Custom class name for the wrapper                                                           |
| `showBrowseButton`      | `boolean`                                                      | `true`                                                                                  | Whether to show the browse button                                                           |
| `customBrowseButton`    | `React.ReactNode`                                              | -                                                                                       | Custom browse button component - if provided, replaces the default button                   |
| `fullWidth`             | `boolean`                                                      | `true`                                                                                  | Whether to make the component full width                                                    |
| `multiple`              | `boolean`                                                      | `false`                                                                                 | Whether to allow multiple file selection - when true, only file upload works (no URL input) |
| `onSelectedFiles`       | `(files: File[]) => void`                                      | -                                                                                       | Callback when multiple files are selected (only used when multiple=true)                    |
| `multiplePlaceholder`   | `string`                                                       | "Drag & drop files here or click Browse"                                                | Custom placeholder for multiple file mode                                                   |
| `existingImages`        | `Array<{id: string; imageUrl: string; originalFile: string;}>` | `[]`                                                                                    | Existing/uploaded images to display (only used when multiple=true)                          |
| `onRemoveExistingImage` | `(id: string) => void`                                         | -                                                                                       | Callback when an existing image is removed                                                  |

### React Hook Form Integration Props

| Prop           | Type                                      | Default | Description                                                                   |
| -------------- | ----------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `value`        | `File \| string \| null`                  | -       | Value for controlled component usage (React Hook Form compatibility)          |
| `onChange`     | `(value: File \| string \| null) => void` | -       | Change handler for controlled component usage (React Hook Form compatibility) |
| `onBlur`       | `() => void`                              | -       | Blur handler for form validation                                              |
| `error`        | `boolean`                                 | `false` | Error state for form validation                                               |
| `errorMessage` | `string`                                  | -       | Error message for form validation                                             |

## Examples

### Basic Usage

```tsx
<MiniAssetSelector
  name='basic-selector'
  selectedURL={url}
  onSelectedURL={setUrl}
  selectedFile={file}
  onSelectedFile={setFile}
/>
```

### With Custom Asset Manager

```tsx
<MiniAssetSelector
  name='custom-manager'
  selectedURL={url}
  onSelectedURL={setUrl}
  selectedFile={file}
  onSelectedFile={setFile}
  onBrowseClick={() => openCustomAssetManager()}
  browseButtonText='Asset Library'
/>
```

### With File Restrictions

```tsx
<MiniAssetSelector
  name='restricted-selector'
  selectedURL={url}
  onSelectedURL={setUrl}
  selectedFile={file}
  onSelectedFile={setFile}
  maxFileSize={2 * 1024 * 1024} // 2MB
  acceptedFileTypes={['image/jpeg', 'image/png']}
/>
```

### With Custom Upload Handler

```tsx
<MiniAssetSelector
  name='custom-upload'
  selectedURL={url}
  onSelectedURL={setUrl}
  selectedFile={file}
  onSelectedFile={setFile}
  onFileUpload={(file) => uploadToCloudStorage(file)}
/>
```

### Without Browse Button

```tsx
<MiniAssetSelector
  name='no-browse'
  selectedURL={url}
  onSelectedURL={setUrl}
  selectedFile={file}
  onSelectedFile={setFile}
  showBrowseButton={false}
  placeholder='URL input and drag & drop only'
/>
```

### With Custom Browse Button

```tsx
const customButton = (
  <button
    className='px-4 py-2 bg-purple-600 text-white rounded'
    onClick={() => openCustomModal()}
  >
    🎨 Open Gallery
  </button>
);

<MiniAssetSelector
  name='custom-button'
  selectedURL={url}
  onSelectedURL={setUrl}
  selectedFile={file}
  onSelectedFile={setFile}
  customBrowseButton={customButton}
/>;
```

### Not Full Width

```tsx
<MiniAssetSelector
  name='fixed-width'
  selectedURL={url}
  onSelectedURL={setUrl}
  selectedFile={file}
  onSelectedFile={setFile}
  fullWidth={false}
  className='w-96' // Apply your own width
/>
```

### Multiple File Upload

```tsx
function MultipleFileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [existingImages, setExistingImages] = useState([
    {
      id: '1',
      imageUrl: 'https://example.com/image1.jpg',
      originalFile: 'product-image-1.jpg',
    },
    {
      id: '2',
      imageUrl: 'https://example.com/image2.jpg',
      originalFile: 'product-image-2.jpg',
    },
  ]);

  const handleRemoveExisting = (id: string) => {
    // Call your API to delete the image
    deleteImageFromAPI(id).then(() => {
      setExistingImages((prev) => prev.filter((img) => img.id !== id));
    });
  };

  return (
    <MiniAssetSelector
      name='multiple-files'
      multiple={true}
      onSelectedFiles={setSelectedFiles}
      existingImages={existingImages}
      onRemoveExistingImage={handleRemoveExisting}
      multiplePlaceholder='Drag & drop files here or click Browse'
      browseButtonText='Browse'
      acceptedFileTypes={['image/*']}
      maxFileSize={10 * 1024 * 1024} // 10MB
    />
  );
}
```

**Multiple File Upload Features:**

- Select multiple files at once via browse button
- Drag & drop multiple files simultaneously
- Display existing/uploaded images from API
- Individual file removal for both new and existing files
- Files are added cumulatively (not replaced)

## Styling

The component uses CSS classes that can be customized through your Tailwind CSS configuration or by overriding the default styles. Key styling classes include:

- `.border-blue-500.bg-blue-50` - Active drag state
- `.border-red-500.bg-red-50` - Error drag state
- `.border-surface-cta` - Selected state border
- `.bg-surface-sec` - Preview section background

## Integration with Forms

### React Hook Form (Recommended)

The component supports React Hook Form out of the box with controlled component patterns:

```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@broadlume/willow-ui';
import { MiniAssetSelector } from '@broadlume/willow-ui';

const schema = z.object({
  assetFile: z
    .union([
      z.instanceof(File),
      z.string().url('Please enter a valid URL'),
      z.null(),
    ])
    .optional(),
});

function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      assetFile: null,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
```

### Legacy Formik Integration

The component also works with Formik using the legacy prop pattern:

```tsx
<Formik
  initialValues={{ imageUrl: '' }}
  onSubmit={(values) => console.log(values)}
>
  {({ values, setFieldValue }) => (
    <Form>
      <MiniAssetSelector
        name='imageUrl'
        selectedURL={values.imageUrl}
        onSelectedURL={(url) => setFieldValue('imageUrl', url)}
        selectedFile={null}
        onSelectedFile={() => {}}
      />
    </Form>
  )}
</Formik>
```
