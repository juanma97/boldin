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
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <EditorToolbar
          onStyleApply={applyStyle}
          onCopy={copyToClipboard}
          isProcessing={state.isProcessing}
          hasSelection={hasSelection}
          hasContent={hasContent}
        />
        
        <div className="p-4">
          <EditorTextArea
            value={state.content}
            onChange={handleTextChange}
            onSelectionChange={handleSelectionChange}
            disabled={state.isProcessing}
          />
        </div>
      </div>
      
      {/* Status information */}
      <div className="mt-2 text-sm text-gray-500 flex justify-between">
        <span>
          Characters: {state.content.length}
        </span>
        {hasSelection && state.selection && (
          <span>
            Selected: {state.selection.text.length} characters
          </span>
        )}
      </div>
    </div>
  );
};
