import { MouseEvent } from 'react';

// Determines if the platform specific toggle selection in group key was used
export const wasToggleInSelectionGroupKeyUsed = (event: unknown) => {
  const isUsingWindows = navigator.platform.indexOf('Win') >= 0;
  return isUsingWindows
    ? (event as MouseEvent).ctrlKey
    : (event as MouseEvent).metaKey;
};

// Determines if the multiSelect key was used
export const wasMultiSelectKeyUsed = (event: unknown) =>
  (event as MouseEvent).shiftKey;

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
export const primaryButton = 0;
