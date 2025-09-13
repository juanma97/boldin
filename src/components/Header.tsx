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
            <a href="#/" className="logo">
              BoldelIn
            </a>
          </div>
          
          <nav className="nav">
            <a href="#/how-it-works" className="nav-link">
              How it works
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
