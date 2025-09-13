import type { TextStyle, UnicodeMapping } from '@/types';

/**
 * Unicode character mappings for mathematical alphanumeric symbols
 * These provide styled text alternatives without requiring special fonts
 */
const UNICODE_MAPS: Record<string, UnicodeMapping> = {
  // Uppercase letters A-Z
  A: { normal: 'A', bold: '𝐀', italic: '𝐴', monospace: '𝙰', bolditalic: '𝑨', underline: 'A͟', circled: 'Ⓐ', strikethrough: 'Ḁ̶', inverted: '∀', squared: '🄰' },
  B: { normal: 'B', bold: '𝐁', italic: '𝐵', monospace: '𝙱', bolditalic: '𝑩', underline: 'B͟', circled: 'Ⓑ', strikethrough: 'B̶', inverted: 'ᗺ', squared: '🄱' },
  C: { normal: 'C', bold: '𝐂', italic: '𝐶', monospace: '𝙲', bolditalic: '𝑪', underline: 'C͟', circled: 'Ⓒ', strikethrough: 'C̶', inverted: 'Ɔ', squared: '🄲' },
  D: { normal: 'D', bold: '𝐃', italic: '𝐷', monospace: '𝙳', bolditalic: '𝑫', underline: 'D͟', circled: 'Ⓓ', strikethrough: 'D̶', inverted: 'ᗡ', squared: '🄳' },
  E: { normal: 'E', bold: '𝐄', italic: '𝐸', monospace: '𝙴', bolditalic: '𝑬', underline: 'E͟', circled: 'Ⓔ', strikethrough: 'E̶', inverted: 'Ǝ', squared: '🄴' },
  F: { normal: 'F', bold: '𝐅', italic: '𝐹', monospace: '𝙵', bolditalic: '𝑭', underline: 'F͟', circled: 'Ⓕ', strikethrough: 'F̶', inverted: 'ᖴ', squared: '🄵' },
  G: { normal: 'G', bold: '𝐆', italic: '𝐺', monospace: '𝙶', bolditalic: '𝑮', underline: 'G͟', circled: 'Ⓖ', strikethrough: 'G̶', inverted: 'פ', squared: '🄶' },
  H: { normal: 'H', bold: '𝐇', italic: '𝐻', monospace: '𝙷', bolditalic: '𝑯', underline: 'H͟', circled: 'Ⓗ', strikethrough: 'H̶', inverted: 'H', squared: '🄷' },
  I: { normal: 'I', bold: '𝐈', italic: '𝐼', monospace: '𝙸', bolditalic: '𝑰', underline: 'I͟', circled: 'Ⓘ', strikethrough: 'I̶', inverted: 'I', squared: '🄸' },
  J: { normal: 'J', bold: '𝐉', italic: '𝐽', monospace: '𝙹', bolditalic: '𝑱', underline: 'J͟', circled: 'Ⓙ', strikethrough: 'J̶', inverted: 'ſ', squared: '🄹' },
  K: { normal: 'K', bold: '𝐊', italic: '𝐾', monospace: '𝙺', bolditalic: '𝑲', underline: 'K͟', circled: 'Ⓚ', strikethrough: 'K̶', inverted: 'ʞ', squared: '🄺' },
  L: { normal: 'L', bold: '𝐋', italic: '𝐿', monospace: '𝙻', bolditalic: '𝑳', underline: 'L͟', circled: 'Ⓛ', strikethrough: 'L̶', inverted: '˥', squared: '🄻' },
  M: { normal: 'M', bold: '𝐌', italic: '𝑀', monospace: '𝙼', bolditalic: '𝑴', underline: 'M͟', circled: 'Ⓜ', strikethrough: 'M̶', inverted: 'W', squared: '🄼' },
  N: { normal: 'N', bold: '𝐍', italic: '𝑁', monospace: '𝙽', bolditalic: '𝑵', underline: 'N͟', circled: 'Ⓝ', strikethrough: 'N̶', inverted: 'N', squared: '🄽' },
  O: { normal: 'O', bold: '𝐎', italic: '𝑂', monospace: '𝙾', bolditalic: '𝑶', underline: 'O͟', circled: 'Ⓞ', strikethrough: 'O̶', inverted: 'O', squared: '🄾' },
  P: { normal: 'P', bold: '𝐏', italic: '𝑃', monospace: '𝙿', bolditalic: '𝑷', underline: 'P͟', circled: 'Ⓟ', strikethrough: 'P̶', inverted: 'Ԁ', squared: '🄿' },
  Q: { normal: 'Q', bold: '𝐐', italic: '𝑄', monospace: '𝚀', bolditalic: '𝑸', underline: 'Q͟', circled: 'Ⓠ', strikethrough: 'Q̶', inverted: 'Q', squared: '🅀' },
  R: { normal: 'R', bold: '𝐑', italic: '𝑅', monospace: '𝚁', bolditalic: '𝑹', underline: 'R͟', circled: 'Ⓡ', strikethrough: 'R̶', inverted: 'ᴿ', squared: '🅁' },
  S: { normal: 'S', bold: '𝐒', italic: '𝑆', monospace: '𝚂', bolditalic: '𝑺', underline: 'S͟', circled: 'Ⓢ', strikethrough: 'S̶', inverted: 'S', squared: '🅂' },
  T: { normal: 'T', bold: '𝐓', italic: '𝑇', monospace: '𝚃', bolditalic: '𝑻', underline: 'T͟', circled: 'Ⓣ', strikethrough: 'T̶', inverted: '┴', squared: '🅃' },
  U: { normal: 'U', bold: '𝐔', italic: '𝑈', monospace: '𝚄', bolditalic: '𝑼', underline: 'U͟', circled: 'Ⓤ', strikethrough: 'U̶', inverted: '∩', squared: '🅄' },
  V: { normal: 'V', bold: '𝐕', italic: '𝑉', monospace: '𝚅', bolditalic: '𝑽', underline: 'V͟', circled: 'Ⓥ', strikethrough: 'V̶', inverted: 'Λ', squared: '🅅' },
  W: { normal: 'W', bold: '𝐖', italic: '𝑊', monospace: '𝚆', bolditalic: '𝑾', underline: 'W͟', circled: 'Ⓦ', strikethrough: 'W̶', inverted: 'M', squared: '🅆' },
  X: { normal: 'X', bold: '𝐗', italic: '𝑋', monospace: '𝚇', bolditalic: '𝑿', underline: 'X͟', circled: 'Ⓧ', strikethrough: 'X̶', inverted: 'X', squared: '🅇' },
  Y: { normal: 'Y', bold: '𝐘', italic: '𝑌', monospace: '𝚈', bolditalic: '𝒀', underline: 'Y͟', circled: 'Ⓨ', strikethrough: 'Y̶', inverted: '⅄', squared: '🅈' },
  Z: { normal: 'Z', bold: '𝐙', italic: '𝑍', monospace: '𝚉', bolditalic: '𝒁', underline: 'Z͟', circled: 'Ⓩ', strikethrough: 'Z̶', inverted: 'Z', squared: '🅉' },

  // Lowercase letters a-z
  a: { normal: 'a', bold: '𝐚', italic: '𝑎', monospace: '𝚊', bolditalic: '𝒂', underline: 'a͟', circled: 'ⓐ', strikethrough: 'a̶', inverted: 'ɐ', squared: '🄰' },
  b: { normal: 'b', bold: '𝐛', italic: '𝑏', monospace: '𝚋', bolditalic: '𝒃', underline: 'b͟', circled: 'ⓑ', strikethrough: 'b̶', inverted: 'q', squared: '🄱' },
  c: { normal: 'c', bold: '𝐜', italic: '𝑐', monospace: '𝚌', bolditalic: '𝒄', underline: 'c͟', circled: 'ⓒ', strikethrough: 'c̶', inverted: 'ɔ', squared: '🄲' },
  d: { normal: 'd', bold: '𝐝', italic: '𝑑', monospace: '𝚍', bolditalic: '𝒅', underline: 'd͟', circled: 'ⓓ', strikethrough: 'd̶', inverted: 'p', squared: '🄳' },
  e: { normal: 'e', bold: '𝐞', italic: '𝑒', monospace: '𝚎', bolditalic: '𝒆', underline: 'e͟', circled: 'ⓔ', strikethrough: 'e̶', inverted: 'ǝ', squared: '🄴' },
  f: { normal: 'f', bold: '𝐟', italic: '𝑓', monospace: '𝚏', bolditalic: '𝒇', underline: 'f͟', circled: 'ⓕ', strikethrough: 'f̶', inverted: 'ɟ', squared: '🄵' },
  g: { normal: 'g', bold: '𝐠', italic: '𝑔', monospace: '𝚐', bolditalic: '𝒈', underline: 'g͟', circled: 'ⓖ', strikethrough: 'g̶', inverted: 'ƃ', squared: '🄶' },
  h: { normal: 'h', bold: '𝐡', italic: 'ℎ', monospace: '𝚑', bolditalic: '𝒉', underline: 'h͟', circled: 'ⓗ', strikethrough: 'h̶', inverted: 'ɥ', squared: '🄷' },
  i: { normal: 'i', bold: '𝐢', italic: '𝑖', monospace: '𝚒', bolditalic: '𝒊', underline: 'i͟', circled: 'ⓘ', strikethrough: 'i̶', inverted: 'ᴉ', squared: '🄸' },
  j: { normal: 'j', bold: '𝐣', italic: '𝑗', monospace: '𝚓', bolditalic: '𝒋', underline: 'j͟', circled: 'ⓙ', strikethrough: 'j̶', inverted: 'ɾ', squared: '🄹' },
  k: { normal: 'k', bold: '𝐤', italic: '𝑘', monospace: '𝚔', bolditalic: '𝒌', underline: 'k͟', circled: 'ⓚ', strikethrough: 'k̶', inverted: 'ʞ', squared: '🄺' },
  l: { normal: 'l', bold: '𝐥', italic: '𝑙', monospace: '𝚕', bolditalic: '𝒍', underline: 'l͟', circled: 'ⓛ', strikethrough: 'l̶', inverted: 'ʅ', squared: '🄻' },
  m: { normal: 'm', bold: '𝐦', italic: '𝑚', monospace: '𝚖', bolditalic: '𝒎', underline: 'm͟', circled: 'ⓜ', strikethrough: 'm̶', inverted: 'ɯ', squared: '🄼' },
  n: { normal: 'n', bold: '𝐧', italic: '𝑛', monospace: '𝚗', bolditalic: '𝒏', underline: 'n͟', circled: 'ⓝ', strikethrough: 'n̶', inverted: 'u', squared: '🄽' },
  o: { normal: 'o', bold: '𝐨', italic: '𝑜', monospace: '𝚘', bolditalic: '𝒐', underline: 'o͟', circled: 'ⓞ', strikethrough: 'o̶', inverted: 'o', squared: '🄾' },
  p: { normal: 'p', bold: '𝐩', italic: '𝑝', monospace: '𝚙', bolditalic: '𝒑', underline: 'p͟', circled: 'ⓟ', strikethrough: 'p̶', inverted: 'd', squared: '🄿' },
  q: { normal: 'q', bold: '𝐪', italic: '𝑞', monospace: '𝚚', bolditalic: '𝒒', underline: 'q͟', circled: 'ⓠ', strikethrough: 'q̶', inverted: 'b', squared: '🅀' },
  r: { normal: 'r', bold: '𝐫', italic: '𝑟', monospace: '𝚛', bolditalic: '𝒓', underline: 'r͟', circled: 'ⓡ', strikethrough: 'r̶', inverted: 'ɹ', squared: '🅁' },
  s: { normal: 's', bold: '𝐬', italic: '𝑠', monospace: '𝚜', bolditalic: '𝒔', underline: 's͟', circled: 'ⓢ', strikethrough: 's̶', inverted: 's', squared: '🅂' },
  t: { normal: 't', bold: '𝐭', italic: '𝑡', monospace: '𝚝', bolditalic: '𝒕', underline: 't͟', circled: 'ⓣ', strikethrough: 't̶', inverted: 'ʇ', squared: '🅃' },
  u: { normal: 'u', bold: '𝐮', italic: '𝑢', monospace: '𝚞', bolditalic: '𝒖', underline: 'u͟', circled: 'ⓤ', strikethrough: 'u̶', inverted: 'n', squared: '🅄' },
  v: { normal: 'v', bold: '𝐯', italic: '𝑣', monospace: '𝚟', bolditalic: '𝒗', underline: 'v͟', circled: 'ⓥ', strikethrough: 'v̶', inverted: 'ʌ', squared: '🅅' },
  w: { normal: 'w', bold: '𝐰', italic: '𝑤', monospace: '𝚠', bolditalic: '𝒘', underline: 'w͟', circled: 'ⓦ', strikethrough: 'w̶', inverted: 'ʍ', squared: '🅆' },
  x: { normal: 'x', bold: '𝐱', italic: '𝑥', monospace: '𝚡', bolditalic: '𝒙', underline: 'x͟', circled: 'ⓧ', strikethrough: 'x̶', inverted: 'x', squared: '🅇' },
  y: { normal: 'y', bold: '𝐲', italic: '𝑦', monospace: '𝚢', bolditalic: '𝒚', underline: 'y͟', circled: 'ⓨ', strikethrough: 'y̶', inverted: 'ʎ', squared: '🅈' },
  z: { normal: 'z', bold: '𝐳', italic: '𝑧', monospace: '𝚣', bolditalic: '𝒛', underline: 'z͟', circled: 'ⓩ', strikethrough: 'z̶', inverted: 'z', squared: '🅉' },

  // Numbers 0-9
  '0': { normal: '0', bold: '𝟎', italic: '0', monospace: '𝟶', bolditalic: '𝟎', underline: '0͟', circled: '⓪', strikethrough: '0̶', inverted: '0', squared: '🄁' },
  '1': { normal: '1', bold: '𝟏', italic: '1', monospace: '𝟷', bolditalic: '𝟏', underline: '1͟', circled: '①', strikethrough: '1̶', inverted: 'Ɩ', squared: '🄂' },
  '2': { normal: '2', bold: '𝟐', italic: '2', monospace: '𝟸', bolditalic: '𝟐', underline: '2͟', circled: '②', strikethrough: '2̶', inverted: 'ᄅ', squared: '🄃' },
  '3': { normal: '3', bold: '𝟑', italic: '3', monospace: '𝟹', bolditalic: '𝟑', underline: '3͟', circled: '③', strikethrough: '3̶', inverted: 'Ɛ', squared: '🄄' },
  '4': { normal: '4', bold: '𝟒', italic: '4', monospace: '𝟺', bolditalic: '𝟒', underline: '4͟', circled: '④', strikethrough: '4̶', inverted: 'ㄣ', squared: '🄅' },
  '5': { normal: '5', bold: '𝟓', italic: '5', monospace: '𝟻', bolditalic: '𝟓', underline: '5͟', circled: '⑤', strikethrough: '5̶', inverted: 'ϛ', squared: '🄆' },
  '6': { normal: '6', bold: '𝟔', italic: '6', monospace: '𝟼', bolditalic: '𝟔', underline: '6͟', circled: '⑥', strikethrough: '6̶', inverted: '9', squared: '🄇' },
  '7': { normal: '7', bold: '𝟕', italic: '7', monospace: '𝟽', bolditalic: '𝟕', underline: '7͟', circled: '⑦', strikethrough: '7̶', inverted: 'ㄥ', squared: '🄈' },
  '8': { normal: '8', bold: '𝟖', italic: '8', monospace: '𝟾', bolditalic: '𝟖', underline: '8͟', circled: '⑧', strikethrough: '8̶', inverted: '8', squared: '🄉' },
  '9': { normal: '9', bold: '𝟗', italic: '9', monospace: '𝟿', bolditalic: '𝟗', underline: '9͟', circled: '⑨', strikethrough: '9̶', inverted: '6', squared: '🄊' },
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
      mapping.monospace === styledChar ||
      mapping.bolditalic === styledChar ||
      mapping.underline === styledChar ||
      mapping.circled === styledChar ||
      mapping.strikethrough === styledChar ||
      mapping.inverted === styledChar ||
      mapping.squared === styledChar
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
    if (mapping.bolditalic === char) return 'bolditalic';
    if (mapping.underline === char) return 'underline';
    if (mapping.circled === char) return 'circled';
    if (mapping.strikethrough === char) return 'strikethrough';
    if (mapping.inverted === char) return 'inverted';
    if (mapping.squared === char) return 'squared';
  }
  return 'normal';
};
