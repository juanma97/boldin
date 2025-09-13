import { type FC, useMemo } from 'react';
import type { TextStyle } from '@/types';

/**
 * Props for the EditorToolbar component
 */
interface EditorToolbarProps {
  /** Callback when a style button is clicked */
  onStyleApply: (style: TextStyle) => void;
  /** Callback when copy button is clicked */
  onCopy: () => Promise<void>;
  /** Whether the editor is currently processing */
  isProcessing: boolean;
  /** Whether there is selected text */
  hasSelection: boolean;
  /** Whether there is content to copy */
  hasContent: boolean;
}

/**
 * Style button configuration
 */
interface StyleButton {
  readonly style: TextStyle;
  readonly label: string;
  readonly icon: string;
  readonly shortcut: string;
}

/**
 * Toolbar component for text editor with style and copy controls
 */
export const EditorToolbar: FC<EditorToolbarProps> = ({
  onStyleApply,
  onCopy,
  isProcessing,
  hasSelection,
  hasContent,
}) => {
  /**
   * Style buttons configuration
   */
  const styleButtons: readonly StyleButton[] = useMemo(
    () => [
      {
        style: 'bold' as const,
        label: 'Bold',
        icon: '𝐁',
        shortcut: 'Ctrl+B',
      },
      {
        style: 'italic' as const,
        label: 'Italic',
        icon: '𝐼',
        shortcut: 'Ctrl+I',
      },
      {
        style: 'monospace' as const,
        label: 'Monospace',
        icon: '𝙼',
        shortcut: 'Ctrl+M',
      },
      {
        style: 'bolditalic' as const,
        label: 'Bold and Italic',
        icon: '𝑨',
        shortcut: 'Ctrl+Shift+B',
      },
      {
        style: 'underline' as const,
        label: 'Underline',
        icon: 'A͟',
        shortcut: 'Ctrl+U',
      },
      {
        style: 'circled' as const,
        label: 'Circled',
        icon: 'Ⓐ',
        shortcut: 'Ctrl+O',
      },
      {
        style: 'strikethrough' as const,
        label: 'Strikethrough',
        icon: 'A̶',
        shortcut: 'Ctrl+Shift+X',
      },
      {
        style: 'inverted' as const,
        label: 'Inverted',
        icon: '∀',
        shortcut: 'Ctrl+Shift+I',
      },
      {
        style: 'squared' as const,
        label: 'Squared',
        icon: '🄰',
        shortcut: 'Ctrl+Shift+S',
      },
    ],
    []
  );

  /**
   * Handle style button click
   */
  const handleStyleClick = (style: TextStyle): void => {
    if (!hasSelection || isProcessing) {
      return;
    }
    onStyleApply(style);
  };

  /**
   * Handle copy button click
   */
  const handleCopyClick = async (): Promise<void> => {
    if (!hasContent || isProcessing) {
      return;
    }
    
    try {
      await onCopy();
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      // In a real app, you might want to show a toast notification here
    }
  };

  return (
    <div
      className="editor-toolbar"
      role="toolbar"
      aria-label="Text formatting toolbar"
    >
      {/* Style buttons */}
      <div className="style-buttons" role="group" aria-label="Text styles">
        {styleButtons.map(({ style, label, icon, shortcut }) => (
          <button
            key={style}
            className="btn btn-outline"
            onClick={() => handleStyleClick(style)}
            disabled={!hasSelection || isProcessing}
            aria-label={`Apply ${label} style (${shortcut})`}
            title={`${label} (${shortcut})`}
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Copy button */}
      <button
        className="btn btn-primary btn-copy"
        onClick={handleCopyClick}
        disabled={!hasContent || isProcessing}
        aria-label="Copy formatted text to clipboard"
        title="Copy to clipboard"
      >
        {isProcessing && <span className="spinner"></span>}
        {isProcessing ? 'Copying...' : 'Copy'}
      </button>
    </div>
  );
};
