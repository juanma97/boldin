import { type FC } from 'react';
import { Header, Footer } from '@/components';
import { TextEditor } from '@/features/editor';

/**
 * Home page component with text editor
 */
export const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header className="bg-white shadow-sm" />
      
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Unicode Text Formatter
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your text with mathematical Unicode characters. 
              Select text and apply <strong>𝐛𝐨𝐥𝐝</strong>, <em>𝑖𝑡𝑎𝑙𝑖𝑐</em>, or <code>𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎</code> styling 
              that works everywhere.
            </p>
          </div>
          
          <TextEditor className="max-w-none" />
          
          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              How to use BoldIn
            </h2>
            <ol className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="bg-[#3b82f6] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                  1
                </span>
                Paste or type your text in the editor above
              </li>
              <li className="flex items-start">
                <span className="bg-[#3b82f6] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                  2
                </span>
                Select the text you want to format
              </li>
              <li className="flex items-start">
                <span className="bg-[#3b82f6] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                  3
                </span>
                Click a style button: <strong>𝐁</strong> for bold, <em>𝐼</em> for italic, or <code>𝙼</code> for monospace
              </li>
              <li className="flex items-start">
                <span className="bg-[#3b82f6] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                  4
                </span>
                Copy the formatted text and use it anywhere!
              </li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer className="bg-white" />
    </div>
  );
};
