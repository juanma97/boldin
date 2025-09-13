/**
 * Text formatting styles available in the editor
 */
export type TextStyle = 'bold' | 'italic' | 'monospace' | 'bolditalic' | 'underline' | 'circled' | 'strikethrough' | 'inverted' | 'squared';

/**
 * Unicode character mappings for text styles
 */
export interface UnicodeMapping {
  readonly normal: string;
  readonly bold: string;
  readonly italic: string;
  readonly monospace: string;
  readonly bolditalic: string;
  readonly underline: string;
  readonly circled: string;
  readonly strikethrough: string;
  readonly inverted: string;
  readonly squared: string;
}

/**
 * Text selection in the editor
 */
export interface TextSelection {
  readonly start: number;
  readonly end: number;
  readonly text: string;
}

/**
 * Editor state interface
 */
export interface EditorState {
  readonly content: string;
  readonly selection: TextSelection | null;
  readonly isProcessing: boolean;
}

/**
 * Editor actions
 */
export type EditorAction =
  | { type: 'SET_CONTENT'; payload: string }
  | { type: 'SET_SELECTION'; payload: TextSelection | null }
  | { type: 'SET_PROCESSING'; payload: boolean }
  | { type: 'APPLY_STYLE'; payload: { style: TextStyle; selection: TextSelection } };

/**
 * Custom hook return type for editor functionality
 */
export interface UseEditorReturn {
  readonly state: EditorState;
  readonly applyStyle: (style: TextStyle) => void;
  readonly copyToClipboard: () => Promise<void>;
  readonly handleTextChange: (text: string) => void;
  readonly handleSelectionChange: (selection: TextSelection | null) => void;
}
