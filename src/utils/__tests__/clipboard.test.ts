import { describe, it, expect, vi, beforeEach } from 'vitest';
import { copyToClipboard, isClipboardAvailable } from '../clipboard';

// Mock the clipboard API
const mockWriteText = vi.fn();
const mockClipboard = {
  writeText: mockWriteText,
};

// Mock execCommand
const mockExecCommand = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  
  // Reset navigator.clipboard
  Object.defineProperty(navigator, 'clipboard', {
    value: mockClipboard,
    writable: true,
  });
  
  // Reset window.isSecureContext
  Object.defineProperty(window, 'isSecureContext', {
    value: true,
    writable: true,
  });
  
  // Reset execCommand
  Object.defineProperty(document, 'execCommand', {
    value: mockExecCommand,
    writable: true,
  });
  
  // Reset queryCommandSupported
  Object.defineProperty(document, 'queryCommandSupported', {
    value: vi.fn(() => true),
    writable: true,
  });
});

describe('Clipboard Utils', () => {
  describe('copyToClipboard', () => {
    it('should_copy_text_using_clipboard_api', async () => {
      mockWriteText.mockResolvedValue(undefined);
      
      await copyToClipboard('test text');
      
      expect(mockWriteText).toHaveBeenCalledWith('test text');
    });

    it('should_throw_error_for_empty_text', async () => {
      await expect(copyToClipboard('')).rejects.toThrow('No text provided to copy');
    });

    it('should_fallback_to_execCommand_when_clipboard_api_fails', async () => {
      mockWriteText.mockRejectedValue(new Error('Clipboard API failed'));
      mockExecCommand.mockReturnValue(true);
      
      // Mock createElement and appendChild/removeChild
      const mockTextArea = {
        value: '',
        style: {},
        focus: vi.fn(),
        select: vi.fn(),
        setAttribute: vi.fn(),
      };
      
      const mockCreateElement = vi.fn(() => mockTextArea);
      const mockAppendChild = vi.fn();
      const mockRemoveChild = vi.fn();
      
      Object.defineProperty(document, 'createElement', {
        value: mockCreateElement,
        writable: true,
      });
      
      Object.defineProperty(document.body, 'appendChild', {
        value: mockAppendChild,
        writable: true,
      });
      
      Object.defineProperty(document.body, 'removeChild', {
        value: mockRemoveChild,
        writable: true,
      });
      
      await copyToClipboard('fallback text');
      
      expect(mockCreateElement).toHaveBeenCalledWith('textarea');
      expect(mockTextArea.value).toBe('fallback text');
      expect(mockExecCommand).toHaveBeenCalledWith('copy');
      expect(mockAppendChild).toHaveBeenCalledWith(mockTextArea);
      expect(mockRemoveChild).toHaveBeenCalledWith(mockTextArea);
    });

    it('should_throw_error_when_both_methods_fail', async () => {
      // Disable clipboard API
      Object.defineProperty(navigator, 'clipboard', {
        value: undefined,
        writable: true,
      });
      
      // Make execCommand fail
      mockExecCommand.mockReturnValue(false);
      
      // Mock createElement and DOM methods
      const mockTextArea = {
        value: '',
        style: {},
        focus: vi.fn(),
        select: vi.fn(),
        setAttribute: vi.fn(),
      };
      
      Object.defineProperty(document, 'createElement', {
        value: vi.fn(() => mockTextArea),
        writable: true,
      });
      
      Object.defineProperty(document.body, 'appendChild', {
        value: vi.fn(),
        writable: true,
      });
      
      Object.defineProperty(document.body, 'removeChild', {
        value: vi.fn(),
        writable: true,
      });
      
      await expect(copyToClipboard('test')).rejects.toThrow('execCommand copy failed');
    });
  });

  describe('isClipboardAvailable', () => {
    it('should_return_true_when_clipboard_api_available', () => {
      const result = isClipboardAvailable();
      expect(result).toBe(true);
    });

    it('should_return_true_when_execCommand_supported', () => {
      // Disable clipboard API
      Object.defineProperty(navigator, 'clipboard', {
        value: undefined,
        writable: true,
      });
      
      const result = isClipboardAvailable();
      expect(result).toBe(true);
    });

    it('should_return_false_when_no_clipboard_support', () => {
      // Disable clipboard API
      Object.defineProperty(navigator, 'clipboard', {
        value: undefined,
        writable: true,
      });
      
      // Disable execCommand
      Object.defineProperty(document, 'queryCommandSupported', {
        value: undefined,
        writable: true,
      });
      
      const result = isClipboardAvailable();
      expect(result).toBe(false);
    });
  });
});
