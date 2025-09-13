/**
 * Utility for conditionally combining CSS class names
 * Simple alternative to clsx/classnames for basic use cases
 */

type ClassValue = string | number | boolean | undefined | null;

/**
 * Combines CSS class names, filtering out falsy values
 * @param classes - Array of class values to combine
 * @returns Combined class string
 */
export const cn = (...classes: ClassValue[]): string => {
  return classes
    .flat()
    .filter(Boolean)
    .join(' ')
    .trim();
};
