import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import { cn } from '@/utils/cn';

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button content */
  children: ReactNode;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Loading state */
  isLoading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
}

/**
 * Reusable Button component with accessibility and styling
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = [
      'inline-flex items-center justify-center font-medium',
      'transition-colors duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'rounded-lg',
    ];

    const variantClasses = {
      primary: [
        'bg-[#3b82f6] text-white',
        'hover:bg-[#2563eb]',
        'focus:ring-[#3b82f6]',
      ],
      secondary: [
        'bg-[#e5e7eb] text-[#374151]',
        'hover:bg-[#d1d5db]',
        'focus:ring-[#6b7280]',
      ],
      outline: [
        'border-2 border-[#3b82f6] text-[#3b82f6] bg-transparent',
        'hover:bg-[#eff6ff]',
        'focus:ring-[#3b82f6]',
      ],
    };

    const sizeClasses = {
      sm: ['px-3 py-2 text-sm'],
      md: ['px-4 py-2 text-base'],
      lg: ['px-6 py-3 text-lg'],
    };

    const widthClasses = fullWidth ? ['w-full'] : [];

    const buttonClasses = cn(
      ...baseClasses,
      ...variantClasses[variant],
      ...sizeClasses[size],
      ...widthClasses,
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
