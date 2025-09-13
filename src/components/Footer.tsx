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
    <footer className={`footer ${className || ''}`}>
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <div className="footer-brand">
              𝐁𝐨𝐥𝐝𝐈𝐧
            </div>
            <p className="footer-brand-desc">
              Your content formatting tool
            </p>
          </div>
        
          
          {/* Free Resources */}
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} BoldIn</p>
        </div>
      </div>
    </footer>
  );
};
