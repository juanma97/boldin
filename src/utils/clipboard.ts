/**
 * Clipboard utility functions with error handling and fallbacks
 */

/**
 * Copies text to clipboard using modern Clipboard API with fallback
 * @param text - The text to copy
 * @throws Error if clipboard operation fails
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  if (!text) {
    throw new Error('No text provided to copy');
  }

  // Try modern Clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      console.warn('Clipboard API failed, trying fallback method:', error);
    }
  }

  // Fallback method for older browsers or insecure contexts
  await copyToClipboardFallback(text);
};

/**
 * Fallback clipboard copy method using execCommand
 * @param text - The text to copy
 * @throws Error if fallback method also fails
 */
const copyToClipboardFallback = async (text: string): Promise<void> => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  textArea.setAttribute('aria-hidden', 'true');
  
  document.body.appendChild(textArea);
  
  try {
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('execCommand copy failed');
    }
  } finally {
    document.body.removeChild(textArea);
  }
};

/**
 * Checks if clipboard functionality is available
 * @returns True if clipboard is available, false otherwise
 */
export const isClipboardAvailable = (): boolean => {
  return !!(
    (navigator.clipboard && window.isSecureContext) ||
    document.queryCommandSupported?.('copy')
  );
};
