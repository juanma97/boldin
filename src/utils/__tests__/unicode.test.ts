import { describe, it, expect } from 'vitest';
import {
  convertCharToStyle,
  convertTextToStyle,
  hasStyleMapping,
  getOriginalChar,
  detectCharStyle,
} from '../unicode';

describe('Unicode Utils', () => {
  describe('convertCharToStyle', () => {
    it('should_convert_uppercase_letter_to_bold', () => {
      const result = convertCharToStyle('A', 'bold');
      expect(result).toBe('𝐀');
    });

    it('should_convert_lowercase_letter_to_italic', () => {
      const result = convertCharToStyle('a', 'italic');
      expect(result).toBe('𝑎');
    });

    it('should_convert_number_to_monospace', () => {
      const result = convertCharToStyle('5', 'monospace');
      expect(result).toBe('𝟻');
    });

    it('should_return_original_char_when_no_mapping_exists', () => {
      const result = convertCharToStyle('!', 'bold');
      expect(result).toBe('!');
    });
  });

  describe('convertTextToStyle', () => {
    it('should_convert_full_text_to_bold', () => {
      const result = convertTextToStyle('Hello123', 'bold');
      expect(result).toBe('𝐇𝐞𝐥𝐥𝐨𝟏𝟐𝟑');
    });

    it('should_preserve_spaces_and_punctuation', () => {
      const result = convertTextToStyle('Hello, World!', 'italic');
      expect(result).toBe('𝐻𝑒𝑙𝑙𝑜, 𝑊𝑜𝑟𝑙𝑑!');
    });

    it('should_handle_empty_string', () => {
      const result = convertTextToStyle('', 'bold');
      expect(result).toBe('');
    });
  });

  describe('hasStyleMapping', () => {
    it('should_return_true_for_mapped_character', () => {
      const result = hasStyleMapping('A', 'bold');
      expect(result).toBe(true);
    });

    it('should_return_false_for_unmapped_character', () => {
      const result = hasStyleMapping('!', 'bold');
      expect(result).toBe(false);
    });

    it('should_return_false_when_style_same_as_normal', () => {
      // Numbers don't have italic variants, so they stay the same
      const result = hasStyleMapping('5', 'italic');
      expect(result).toBe(false);
    });
  });

  describe('getOriginalChar', () => {
    it('should_return_original_from_bold_char', () => {
      const result = getOriginalChar('𝐀');
      expect(result).toBe('A');
    });

    it('should_return_original_from_italic_char', () => {
      const result = getOriginalChar('𝑎');
      expect(result).toBe('a');
    });

    it('should_return_same_char_if_not_styled', () => {
      const result = getOriginalChar('A');
      expect(result).toBe('A');
    });
  });

  describe('detectCharStyle', () => {
    it('should_detect_bold_style', () => {
      const result = detectCharStyle('𝐀');
      expect(result).toBe('bold');
    });

    it('should_detect_italic_style', () => {
      const result = detectCharStyle('𝑎');
      expect(result).toBe('italic');
    });

    it('should_detect_monospace_style', () => {
      const result = detectCharStyle('𝟻');
      expect(result).toBe('monospace');
    });

    it('should_return_normal_for_unstyled_char', () => {
      const result = detectCharStyle('A');
      expect(result).toBe('normal');
    });
  });
});
