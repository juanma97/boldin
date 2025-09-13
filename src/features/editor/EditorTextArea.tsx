import { type ChangeEvent, type FC, type KeyboardEvent, useCallback, useRef } from 'react';
import type { TextSelection } from '@/types';

/**
 * Props for the EditorTextArea component
 */
interface EditorTextAreaProps {
  /** Current text content */
  value: string;
  /** Callback when text changes */
  onChange: (text: string) => void;
  /** Callback when selection changes */
  onSelectionChange: (selection: TextSelection | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether the editor is disabled */
  disabled?: boolean;
}

/**
 * Text area component for the editor with selection tracking
 */
export const EditorTextArea: FC<EditorTextAreaProps> = ({
  value,
  onChange,
  onSelectionChange,
  placeholder = 'Paste or type your text here...',
  className,
  disabled = false,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Gets the current selection from the textarea
   */
  const getCurrentSelection = useCallback((): TextSelection | null => {
    const textarea = textAreaRef.current;
    if (!textarea) {
      return null;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    if (start === end) {
      return null; // No selection
    }

    const selectedText = value.slice(start, end);
    
    return {
      start,
      end,
      text: selectedText,
    };
  }, [value]);

  /**
   * Handle text changes
   */
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>): void => {
      const newValue = event.target.value;
      onChange(newValue);
      
      // Update selection after content change
      setTimeout(() => {
        const selection = getCurrentSelection();
        onSelectionChange(selection);
      }, 0);
    },
    [onChange, onSelectionChange, getCurrentSelection]
  );

  /**
   * Handle selection changes (mouse/keyboard)
   */
  const handleSelectionChange = useCallback((): void => {
    const selection = getCurrentSelection();
    onSelectionChange(selection);
  }, [getCurrentSelection, onSelectionChange]);

  /**
   * Handle keyboard shortcuts
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>): void => {
      // Tab key for indentation
      if (event.key === 'Tab') {
        event.preventDefault();
        
        const textarea = event.currentTarget;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        const newValue = 
          value.substring(0, start) + 
          '\t' + 
          value.substring(end);
        
        onChange(newValue);
        
        // Restore cursor position
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 1;
          handleSelectionChange();
        }, 0);
      }
    },
    [value, onChange, handleSelectionChange]
  );

  const textAreaClasses = `${className || ''}`;

  return (
    <textarea
      ref={textAreaRef}
      value={value}
      onChange={handleChange}
      onSelect={handleSelectionChange}
      onMouseUp={handleSelectionChange}
      onKeyUp={handleSelectionChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      disabled={disabled}
      className={textAreaClasses}
      aria-label="Text editor"
      spellCheck="false"
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      rows={20}
    />
  );
};
