import '@testing-library/jest-dom';

// Global test setup
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock clipboard API
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: async (_text: string): Promise<void> => {
      return Promise.resolve();
    },
    readText: async (): Promise<string> => {
      return Promise.resolve('');
    },
  },
  writable: true,
});
