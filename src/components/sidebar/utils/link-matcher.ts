import { SidebarItemProps } from '../types';

/**
 * Checks if the current location matches any of the item's links or patterns
 */
export const isLocationActive = (location: string, item: SidebarItemProps): boolean => {
  // Check single link (backward compatibility)
  if (item.link) {
    if (location === item.link || location + "/" === item.link) {
      return true;
    }
  }

  // Check multiple links
  if (item.links && Array.isArray(item.links)) {
    return item.links.some(link => location === link || location + "/" === link);
  }

  // Check pattern matching
  if (item.linkPattern) {
    try {
      const regex = new RegExp(item.linkPattern);
      return regex.test(location);
    } catch (error) {
      console.warn(`Invalid regex pattern in sidebar item "${item.label}": ${item.linkPattern}`, error);
      return false;
    }
  }

  return false;
};

/**
 * Gets the primary link for navigation purposes
 * Returns the first available link from: link, links[0], or null
 */
export const getPrimaryLink = (item: SidebarItemProps): string | null => {
  if (item.link) {
    return item.link;
  }
  
  if (item.links && Array.isArray(item.links) && item.links.length > 0) {
    return item.links[0];
  }
  
  return null;
};

/**
 * Checks if an item has any navigable links
 */
export const hasNavigableLink = (item: SidebarItemProps): boolean => {
  return !!(item.link || (item.links && item.links.length > 0));
};
