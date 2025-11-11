// Debug utility to help identify file object issues
export const debugFileObject = (file: unknown, context: string): void => {
  console.group(`🐛 Debug File Object - ${context}`);
  
  console.log('File object:', file);
  console.log('Type of file:', typeof file);
  console.log('File is null/undefined:', file == null);
  
  if (file) {
    const fileObj = file as Record<string, unknown>;
    console.log('File.type:', fileObj.type);
    console.log('Type of file.type:', typeof fileObj.type);
    console.log('File.name:', fileObj.name);
    console.log('Type of file.name:', typeof fileObj.name);
    console.log('File.size:', fileObj.size);
    console.log('Type of file.size:', typeof fileObj.size);
    
    // Check if it's a proper File object
    console.log('Is File instance:', file instanceof File);
    console.log('Constructor:', (file as { constructor?: { name?: string } }).constructor?.name);
    
    // Check all properties
    console.log('All properties:', Object.getOwnPropertyNames(file));
    console.log('All descriptors:');
    Object.getOwnPropertyNames(file).forEach(prop => {
      try {
        const descriptor = Object.getOwnPropertyDescriptor(file, prop);
        console.log(`  ${prop}:`, descriptor);
      } catch (e) {
        console.log(`  ${prop}: Error getting descriptor`, e);
      }
    });
  }
  
  console.groupEnd();
};