import { type FC } from 'react';
import { Header, Footer } from '@/components';
import { TextEditor } from '@/features/editor';

/**
 * Home page component with text editor
 */
export const HomePage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="main">
        <div className="container-sm">
          <div className="hero">
            <h1>Format your text</h1>
            <p>Format your text and highlight your content</p>
          </div>
          
          <TextEditor className="editor" />
          
          {/* Style Examples */}
          <div className="examples">
            <div className="example-item">
              <h3>Bold Ej. 𝗔 𝗮</h3>
              <p>𝗪𝗿𝗶𝘁𝗲 𝘆𝗼𝘂𝗿 𝘁𝗲𝘅𝘁 𝗮𝗯𝗼𝘃𝗲</p>
            </div>
            
            <div className="example-item">
              <h3>Italic Ej. 𝘈 𝘢</h3>
              <p>𝘞𝘳𝘪𝘵𝘦 𝘺𝘰𝘶𝘳 𝘵𝘦𝘹𝘵 𝘢𝘣𝘰𝘷𝘦</p>
            </div>
            
            <div className="example-item">
              <h3>Monospace Ej. 𝙰 𝚊</h3>
              <p>𝚆𝚛𝚒𝚝𝚎 𝚢𝚘𝚞𝚛 𝚝𝚎𝚡𝚝 𝚊𝚋𝚘𝚟𝚎</p>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="faq">
            <div className="faq-item">
              <h2>How to bold text?</h2>
              <p>
                To <strong>bold text</strong>, simply copy and paste the text you want to highlight in the box above and we will automatically return the text in bold.
              </p>
            </div>
            
            <div className="faq-item">
              <h2>Is this tool free?</h2>
              <p>
                Yes! We have created it for you, so you can <strong>highlight your content</strong>, and make your text stand out! 😊
              </p>
            </div>
            
            <div className="faq-item">
              <h2>But... Why use formatted text?</h2>
              <p>
                Formatted text is a way to highlight your content and make it stand out. It's a way to <strong>grab attention</strong> and highlight important parts of your content.
              </p>
            </div>
            
            <div className="faq-item">
              <h2>Is formatted text enough to create standout content?</h2>
              <p>
                <strong>No</strong>, formatted text is a way to highlight your content, but it is not enough to create standout content! It is important that the content itself is relevant and adds value.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
