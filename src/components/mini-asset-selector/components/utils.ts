/**
 * Utility functions for handling image URLs and metadata
 */

/**
 * Extracts a filename from a URL
 * @param url - The image URL
 * @returns A filename derived from the URL
 */
export const getFileNameFromUrl = (url: string): string => {
  try {
    const urlPath = new URL(url).pathname;
    const fileName = urlPath.split('/').pop() || 'image';
    return fileName.includes('.') ? fileName : `${fileName}.jpg`;
  } catch {
    return 'image.jpg';
  }
};

/**
 * Fetches the file size of an image from a URL using HEAD request
 * @param url - The image URL
 * @returns Promise that resolves to file size in bytes or null if not available
 */
export const getImageSizeFromUrl = (url: string): Promise<number | null> => {
  return new Promise((resolve) => {
    fetch(url, { method: 'HEAD' })
      .then(response => {
        const contentLength = response.headers.get('content-length');
        resolve(contentLength ? parseInt(contentLength, 10) : null);
      })
      .catch(() => resolve(null));
  });
};

/**
 * Formats file size in bytes to human readable format
 * @param bytes - File size in bytes
 * @returns Formatted string like "2.5 MB"
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};