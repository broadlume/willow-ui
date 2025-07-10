// Determines if the platform specific toggle selection in group key was used
export const wasToggleInSelectionGroupKeyUsed = (
  event: MouseEvent | KeyboardEvent
) => {
  const isUsingWindows = navigator.platform.indexOf('Win') >= 0;
  return isUsingWindows ? event.ctrlKey : event.metaKey;
};

// Determines if the multiSelect key was used
export const wasMultiSelectKeyUsed = (event: MouseEvent | KeyboardEvent) =>
  event.shiftKey;

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
export const primaryButton = 0;
