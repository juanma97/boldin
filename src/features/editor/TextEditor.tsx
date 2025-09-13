import { type FC } from 'react';
import { useEditor } from '@/hooks';
import { EditorToolbar } from './EditorToolbar';
import { EditorTextArea } from './EditorTextArea';

/**
 * Props for the TextEditor component
 */
interface TextEditorProps {
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * Main text editor component that combines toolbar and text area
 */
export const TextEditor: FC<TextEditorProps> = ({ className }) => {
  const {
    state,
    applyStyle,
    copyToClipboard,
    handleTextChange,
    handleSelectionChange,
  } = useEditor();

  const hasSelection = Boolean(state.selection && state.selection.text.length > 0);
  const hasContent = state.content.length > 0;

  return (
    <div className={className}>
      <div className="editor-container">
        <div className="editor-textarea-container">
          <EditorTextArea
            value={state.content}
            onChange={handleTextChange}
            onSelectionChange={handleSelectionChange}
            disabled={state.isProcessing}
            placeholder="0 / 150"
            className="editor-textarea"
          />
        </div>
        
        <EditorToolbar
          onStyleApply={applyStyle}
          onCopy={copyToClipboard}
          isProcessing={state.isProcessing}
          hasSelection={hasSelection}
          hasContent={hasContent}
        />
      </div>
      
      {/* Status information */}
      {hasSelection && state.selection && (
        <div className="selection-info">
          Selected: {state.selection.text.length} characters
        </div>
      )}
    </div>
  );
};
