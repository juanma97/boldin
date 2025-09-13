import { type FC } from 'react';

/**
 * Props for the Footer component
 */
interface FooterProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Application footer component
 */
export const Footer: FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 border-t border-gray-200">
          <div className="text-center space-y-4">
            <div className="text-sm text-gray-600">
              Transform your text with Unicode mathematical symbols
            </div>
            
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>© {currentYear} BoldIn</span>
              <span>•</span>
              <span>Made with ❤️ and Unicode</span>
            </div>
            
            <div className="text-xs text-gray-400">
              Supports: <span className="font-mono">𝐁𝐨𝐥𝐝</span>, <span className="font-mono">𝐼𝑡𝑎𝑙𝑖𝑐</span>, <span className="font-mono">𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
