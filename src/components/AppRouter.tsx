import { type FC, useState, useEffect } from 'react';
import { HomePage, HowItWorksPage } from '@/pages';

/**
 * Simple hash-based router for the application
 */
export const AppRouter: FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = (): void => {
      setCurrentPath(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/':
      case '#/home':
        return <HomePage />;
      case '#/how-it-works':
        return <HowItWorksPage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
};
