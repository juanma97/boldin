import type { TextStyle, UnicodeMapping } from '@/types';

/**
 * Unicode character mappings for mathematical alphanumeric symbols
 * These provide styled text alternatives without requiring special fonts
 */
const UNICODE_MAPS: Record<string, UnicodeMapping> = {
  // Uppercase letters A-Z
  A: { normal: 'A', bold: '𝐀', italic: '𝐴', monospace: '𝙰' },
  B: { normal: 'B', bold: '𝐁', italic: '𝐵', monospace: '𝙱' },
  C: { normal: 'C', bold: '𝐂', italic: '𝐶', monospace: '𝙲' },
  D: { normal: 'D', bold: '𝐃', italic: '𝐷', monospace: '𝙳' },
  E: { normal: 'E', bold: '𝐄', italic: '𝐸', monospace: '𝙴' },
  F: { normal: 'F', bold: '𝐅', italic: '𝐹', monospace: '𝙵' },
  G: { normal: 'G', bold: '𝐆', italic: '𝐺', monospace: '𝙶' },
  H: { normal: 'H', bold: '𝐇', italic: '𝐻', monospace: '𝙷' },
  I: { normal: 'I', bold: '𝐈', italic: '𝐼', monospace: '𝙸' },
  J: { normal: 'J', bold: '𝐉', italic: '𝐽', monospace: '𝙹' },
  K: { normal: 'K', bold: '𝐊', italic: '𝐾', monospace: '𝙺' },
  L: { normal: 'L', bold: '𝐋', italic: '𝐿', monospace: '𝙻' },
  M: { normal: 'M', bold: '𝐌', italic: '𝑀', monospace: '𝙼' },
  N: { normal: 'N', bold: '𝐍', italic: '𝑁', monospace: '𝙽' },
  O: { normal: 'O', bold: '𝐎', italic: '𝑂', monospace: '𝙾' },
  P: { normal: 'P', bold: '𝐏', italic: '𝑃', monospace: '𝙿' },
  Q: { normal: 'Q', bold: '𝐐', italic: '𝑄', monospace: '𝚀' },
  R: { normal: 'R', bold: '𝐑', italic: '𝑅', monospace: '𝚁' },
  S: { normal: 'S', bold: '𝐒', italic: '𝑆', monospace: '𝚂' },
  T: { normal: 'T', bold: '𝐓', italic: '𝑇', monospace: '𝚃' },
  U: { normal: 'U', bold: '𝐔', italic: '𝑈', monospace: '𝚄' },
  V: { normal: 'V', bold: '𝐕', italic: '𝑉', monospace: '𝚅' },
  W: { normal: 'W', bold: '𝐖', italic: '𝑊', monospace: '𝚆' },
  X: { normal: 'X', bold: '𝐗', italic: '𝑋', monospace: '𝚇' },
  Y: { normal: 'Y', bold: '𝐘', italic: '𝑌', monospace: '𝚈' },
  Z: { normal: 'Z', bold: '𝐙', italic: '𝑍', monospace: '𝚉' },

  // Lowercase letters a-z
  a: { normal: 'a', bold: '𝐚', italic: '𝑎', monospace: '𝚊' },
  b: { normal: 'b', bold: '𝐛', italic: '𝑏', monospace: '𝚋' },
  c: { normal: 'c', bold: '𝐜', italic: '𝑐', monospace: '𝚌' },
  d: { normal: 'd', bold: '𝐝', italic: '𝑑', monospace: '𝚍' },
  e: { normal: 'e', bold: '𝐞', italic: '𝑒', monospace: '𝚎' },
  f: { normal: 'f', bold: '𝐟', italic: '𝑓', monospace: '𝚏' },
  g: { normal: 'g', bold: '𝐠', italic: '𝑔', monospace: '𝚐' },
  h: { normal: 'h', bold: '𝐡', italic: 'ℎ', monospace: '𝚑' },
  i: { normal: 'i', bold: '𝐢', italic: '𝑖', monospace: '𝚒' },
  j: { normal: 'j', bold: '𝐣', italic: '𝑗', monospace: '𝚓' },
  k: { normal: 'k', bold: '𝐤', italic: '𝑘', monospace: '𝚔' },
  l: { normal: 'l', bold: '𝐥', italic: '𝑙', monospace: '𝚕' },
  m: { normal: 'm', bold: '𝐦', italic: '𝑚', monospace: '𝚖' },
  n: { normal: 'n', bold: '𝐧', italic: '𝑛', monospace: '𝚗' },
  o: { normal: 'o', bold: '𝐨', italic: '𝑜', monospace: '𝚘' },
  p: { normal: 'p', bold: '𝐩', italic: '𝑝', monospace: '𝚙' },
  q: { normal: 'q', bold: '𝐪', italic: '𝑞', monospace: '𝚚' },
  r: { normal: 'r', bold: '𝐫', italic: '𝑟', monospace: '𝚛' },
  s: { normal: 's', bold: '𝐬', italic: '𝑠', monospace: '𝚜' },
  t: { normal: 't', bold: '𝐭', italic: '𝑡', monospace: '𝚝' },
  u: { normal: 'u', bold: '𝐮', italic: '𝑢', monospace: '𝚞' },
  v: { normal: 'v', bold: '𝐯', italic: '𝑣', monospace: '𝚟' },
  w: { normal: 'w', bold: '𝐰', italic: '𝑤', monospace: '𝚠' },
  x: { normal: 'x', bold: '𝐱', italic: '𝑥', monospace: '𝚡' },
  y: { normal: 'y', bold: '𝐲', italic: '𝑦', monospace: '𝚢' },
  z: { normal: 'z', bold: '𝐳', italic: '𝑧', monospace: '𝚣' },

  // Numbers 0-9
  '0': { normal: '0', bold: '𝟎', italic: '0', monospace: '𝟶' },
  '1': { normal: '1', bold: '𝟏', italic: '1', monospace: '𝟷' },
  '2': { normal: '2', bold: '𝟐', italic: '2', monospace: '𝟸' },
  '3': { normal: '3', bold: '𝟑', italic: '3', monospace: '𝟹' },
  '4': { normal: '4', bold: '𝟒', italic: '4', monospace: '𝟺' },
  '5': { normal: '5', bold: '𝟓', italic: '5', monospace: '𝟻' },
  '6': { normal: '6', bold: '𝟔', italic: '6', monospace: '𝟼' },
  '7': { normal: '7', bold: '𝟕', italic: '7', monospace: '𝟽' },
  '8': { normal: '8', bold: '𝟖', italic: '8', monospace: '𝟾' },
  '9': { normal: '9', bold: '𝟗', italic: '9', monospace: '𝟿' },
} as const;

/**
 * Converts a single character to its styled Unicode equivalent
 * @param char - The character to convert
 * @param style - The style to apply
 * @returns The styled character or original if no mapping exists
 */
export const convertCharToStyle = (char: string, style: TextStyle): string => {
  const mapping = UNICODE_MAPS[char];
  if (!mapping) {
    return char; // Return original character if no mapping exists
  }
  return mapping[style];
};

/**
 * Converts a text string to styled Unicode characters
 * @param text - The text to convert
 * @param style - The style to apply
 * @returns The styled text
 */
export const convertTextToStyle = (text: string, style: TextStyle): string => {
  return text
    .split('')
    .map(char => convertCharToStyle(char, style))
    .join('');
};

/**
 * Checks if a character has a Unicode mapping for the given style
 * @param char - The character to check
 * @param style - The style to check for
 * @returns True if mapping exists, false otherwise
 */
export const hasStyleMapping = (char: string, style: TextStyle): boolean => {
  const mapping = UNICODE_MAPS[char];
  return Boolean(mapping && mapping[style] !== char);
};

/**
 * Gets the original character from a styled Unicode character
 * @param styledChar - The styled character
 * @returns The original character or the input if not found
 */
export const getOriginalChar = (styledChar: string): string => {
  for (const [originalChar, mapping] of Object.entries(UNICODE_MAPS)) {
    if (
      mapping.bold === styledChar ||
      mapping.italic === styledChar ||
      mapping.monospace === styledChar
    ) {
      return originalChar;
    }
  }
  return styledChar;
};

/**
 * Detects the style of a given character
 * @param char - The character to analyze
 * @returns The detected style or 'normal' if no style detected
 */
export const detectCharStyle = (char: string): TextStyle | 'normal' => {
  for (const mapping of Object.values(UNICODE_MAPS)) {
    if (mapping.bold === char) return 'bold';
    if (mapping.italic === char) return 'italic';
    if (mapping.monospace === char) return 'monospace';
  }
  return 'normal';
};
