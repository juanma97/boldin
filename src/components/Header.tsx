import { type FC } from 'react';

/**
 * Props for the Header component
 */
interface HeaderProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Application header component
 */
export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`header ${className || ''}`}>
      <div className="container">
        <div className="header-content">
          <div>
            <a href="#" className="logo">
              𝐁𝐨𝐥𝐝𝐈𝐧
            </a>
          </div>
          
          <nav className="nav">
            <a href="#" className="nav-link">
              How it works
            </a>
            <a href="#" className="nav-link">
              FAQ
            </a>
            <a href="#" className="nav-link">
              Blog
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
