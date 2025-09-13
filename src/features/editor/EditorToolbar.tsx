import { type FC, useMemo } from 'react';
import { Button } from '@/components/Button';
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
      className="flex flex-wrap gap-3 p-4 bg-gray-50 border-b border-gray-200"
      role="toolbar"
      aria-label="Text formatting toolbar"
    >
      {/* Style buttons */}
      <div className="flex gap-2" role="group" aria-label="Text styles">
        {styleButtons.map(({ style, label, icon, shortcut }) => (
          <Button
            key={style}
            variant="secondary"
            size="sm"
            onClick={() => handleStyleClick(style)}
            disabled={!hasSelection || isProcessing}
            aria-label={`Apply ${label} style (${shortcut})`}
            title={`${label} (${shortcut})`}
            className="font-mono text-lg min-w-[3rem]"
          >
            {icon}
          </Button>
        ))}
      </div>

      {/* Separator */}
      <div className="w-px bg-gray-300 self-stretch" aria-hidden="true" />

      {/* Copy button */}
      <Button
        variant="primary"
        size="sm"
        onClick={handleCopyClick}
        disabled={!hasContent || isProcessing}
        isLoading={isProcessing}
        aria-label="Copy formatted text to clipboard"
        title="Copy to clipboard"
      >
        {isProcessing ? 'Copying...' : 'Copy'}
      </Button>
    </div>
  );
};
