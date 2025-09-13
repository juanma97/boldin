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
            <h1>Format your LinkedIn posts</h1>
            <p>Format your text and highlight your content for LinkedIn posts!</p>
          </div>
          
          <TextEditor className="editor" />
          
          {/* Style Examples */}
          <h2>Style Examples</h2>
          <br />
          <div className="examples">
            <div className="example-item">
              <h3>Bold Ej. 𝗔 𝗮</h3>
              <div>Example</div>
              <p>𝗪𝗿𝗶𝘁𝗲 𝘆𝗼𝘂𝗿 𝘁𝗲𝘅𝘁 𝗮𝗯𝗼𝘃𝗲</p>
            </div>
            
            <div className="example-item">
              <h3>Italic Ej. 𝘈 𝘢</h3>
              <div>Example</div>
              <p>𝘞𝘳𝘪𝘵𝘦 𝘺𝘰𝘶𝘳 𝘵𝘦𝘹𝘵 𝘢𝘣𝘰𝘷𝘦</p>
            </div>
            
            <div className="example-item">
              <h3>Bold and Italic Ej. 𝑨 𝒂</h3>
              <div>Example</div>
              <p>𝑾𝒓𝒊𝒕𝒆 𝒚𝒐𝒖𝒓 𝒕𝒆𝒙𝒕 𝒂𝒃𝒐𝒗𝒆</p>
            </div>
            
            <div className="example-item">
              <h3>Underline Ej. A͟ a͟</h3>
              <div>Example</div>
              <p>W͟r͟i͟t͟e͟ ͟y͟o͟u͟r͟ ͟t͟e͟x͟t͟ ͟a͟b͟o͟v͟e͟</p>
            </div>
            
            <div className="example-item">
              <h3>Strikethrough Ej. A̶ a̶</h3>
              <div>Example</div>
              <p>W̶r̶i̶t̶e̶ ̶y̶o̶u̶r̶ ̶t̶e̶x̶t̶ ̶a̶b̶o̶v̶e̶</p>
            </div>
            
            <div className="example-item">
              <h3>Circled Ej. Ⓐ ⓐ</h3>
              <div>Example</div>
              <p>Ⓦⓡⓘⓣⓔ ⓨⓞⓤⓡ ⓣⓔⓧⓣ ⓐⓑⓞⓥⓔ</p>
            </div>
            
            <div className="example-item">
              <h3>Squared Ej. 🄰 🄰</h3>
              <div>Example</div>
              <p>🅆🅁🄸🅃🄴 🅈🄾🅄🅁 🅃🄴🅇🅃 🄰🄱🄾🅅🄴</p>
            </div>
            
            <div className="example-item">
              <h3>Inverted Ej. ∀ ɐ</h3>
              <div>Example</div>
              <p>Mɹᴉʇǝ ʎonɹ ʇǝxʇ ɐqoʌǝ</p>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
