import { useCallback, useReducer } from 'react';
import type { EditorAction, EditorState, TextSelection, TextStyle, UseEditorReturn } from '@/types';
import { convertTextToStyle, copyToClipboard } from '@/utils';

/**
 * Initial state for the editor
 */
const initialState: EditorState = {
  content: '',
  selection: null,
  isProcessing: false,
};

/**
 * Reducer for managing editor state
 * @param state - Current editor state
 * @param action - Action to perform
 * @returns New editor state
 */
const editorReducer = (state: EditorState, action: EditorAction): EditorState => {
  switch (action.type) {
    case 'SET_CONTENT':
      return { ...state, content: action.payload };
    
    case 'SET_SELECTION':
      return { ...state, selection: action.payload };
    
    case 'SET_PROCESSING':
      return { ...state, isProcessing: action.payload };
    
    case 'APPLY_STYLE': {
      const { style, selection } = action.payload;
      const { content } = state;
      
      const styledText = convertTextToStyle(selection.text, style);
      const newContent = 
        content.slice(0, selection.start) +
        styledText +
        content.slice(selection.end);
      
      return {
        ...state,
        content: newContent,
        selection: {
          ...selection,
          text: styledText,
          end: selection.start + styledText.length,
        },
      };
    }
    
    default:
      return state;
  }
};

/**
 * Custom hook for editor functionality
 * @returns Editor state and actions
 */
export const useEditor = (): UseEditorReturn => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  /**
   * Updates the editor content
   */
  const handleTextChange = useCallback((text: string): void => {
    dispatch({ type: 'SET_CONTENT', payload: text });
  }, []);

  /**
   * Updates the current text selection
   */
  const handleSelectionChange = useCallback((selection: TextSelection | null): void => {
    dispatch({ type: 'SET_SELECTION', payload: selection });
  }, []);

  /**
   * Applies a style to the current selection
   */
  const applyStyle = useCallback((style: TextStyle): void => {
    if (!state.selection || state.selection.text.length === 0) {
      return;
    }

    dispatch({
      type: 'APPLY_STYLE',
      payload: { style, selection: state.selection },
    });
  }, [state.selection]);

  /**
   * Copies the current content to clipboard
   */
  const copyToClipboardHandler = useCallback(async (): Promise<void> => {
    if (!state.content) {
      throw new Error('No content to copy');
    }

    dispatch({ type: 'SET_PROCESSING', payload: true });
    
    try {
      await copyToClipboard(state.content);
    } finally {
      dispatch({ type: 'SET_PROCESSING', payload: false });
    }
  }, [state.content]);

  return {
    state,
    applyStyle,
    copyToClipboard: copyToClipboardHandler,
    handleTextChange,
    handleSelectionChange,
  };
};
