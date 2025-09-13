import { type FC } from 'react';
import { Header, Footer } from '@/components';

/**
 * How it works page component
 */
export const HowItWorksPage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="main">
        <div className="container-sm">
          {/* Hero Section */}
          <div className="hero">
            <h1>How BoldelIn Works</h1>
            <p>Transform your plain text into eye-catching formatted content that works everywhere</p>
          </div>
          
          {/* Main Content */}
          <div className="how-it-works-content">
            
            {/* The Problem Section */}
            <section className="section">
              <h2>The Problem with LinkedIn Text Formatting</h2>
              <div className="problem-grid">
                <div className="problem-item">
                  <div className="problem-icon">❌</div>
                  <h3>No Native Formatting</h3>
                  <p>LinkedIn doesn't provide bold, italic, or any text formatting options in posts, comments, or messages.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">😴</div>
                  <h3>Boring Plain Text</h3>
                  <p>Your content gets lost in the sea of identical-looking posts. No way to emphasize important points.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">📉</div>
                  <h3>Less Engagement</h3>
                  <p>Plain text fails to grab attention, resulting in lower engagement rates and fewer views.</p>
                </div>
              </div>
            </section>

            {/* Our Solution Section */}
            <section className="section">
              <h2>Our Solution: Unicode Mathematical Characters</h2>
              <div className="solution-explanation">
                <div className="solution-text">
                  <h3>What makes BoldelIn special?</h3>
                  <p>We use <strong>Unicode mathematical alphanumeric symbols</strong> - special characters that look like formatted text but are actually regular Unicode characters that work everywhere.</p>
                  
                  <div className="unicode-demo">
                    <div className="demo-item">
                      <span className="demo-label">Regular text:</span>
                      <span className="demo-text">Hello World</span>
                    </div>
                    <div className="demo-item">
                      <span className="demo-label">BoldIn bold:</span>
                      <span className="demo-text">𝗛𝗲𝗹𝗹𝗼 𝗪𝗼𝗿𝗹𝗱</span>
                    </div>
                    <div className="demo-item">
                      <span className="demo-label">BoldIn italic:</span>
                      <span className="demo-text">𝐻𝑒𝑙𝑙𝑜 𝑊𝑜𝑟𝑙𝑑</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works Steps */}
            <section className="section">
              <h2>How It Works - Step by Step</h2>
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3>Write Your Text</h3>
                    <p>Type or paste your content into our editor. Write exactly what you want to say on LinkedIn.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3>Select Text to Format</h3>
                    <p>Highlight the words or phrases you want to emphasize. Just like selecting text in any document.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3>Choose Your Style</h3>
                    <p>Click any style button: <strong>𝗕𝗼𝗹𝗱</strong>, <em>𝐼𝑡𝑎𝑙𝑖𝑐</em>, Ⓒⓘⓡⓒⓛⓔⓓ, and more!</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3>Copy & Paste</h3>
                    <p>Hit the "Copy" button and paste directly into LinkedIn. The formatting will appear instantly!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why LinkedIn Needs This */}
            <section className="section">
              <h2>Why LinkedIn Desperately Needs Text Formatting</h2>
              <div className="linkedin-reasons">
                <div className="reason">
                  <h3>🎯 Professional Communication</h3>
                  <p>LinkedIn is the world's largest professional network, yet it lacks basic text formatting that's essential for clear business communication.</p>
                </div>
                <div className="reason">
                  <h3>📊 Content Marketing</h3>
                  <p>Professionals need to create engaging content that stands out. Formatted text increases readability and engagement rates significantly.</p>
                </div>
                <div className="reason">
                  <h3>🏢 Brand Consistency</h3>
                  <p>Companies and personal brands need consistent, professional-looking content. Plain text doesn't cut it in today's competitive landscape.</p>
                </div>
                <div className="reason">
                  <h3>📈 Algorithm Boost</h3>
                  <p>Eye-catching formatted text tends to get more engagement, which signals LinkedIn's algorithm to show your content to more people.</p>
                </div>
              </div>
            </section>

            {/* Technical Explanation */}
            <section className="section">
              <h2>The Technical Magic Behind BoldelIn</h2>
              <div className="technical-grid">
                <div className="tech-item">
                  <h3>Unicode Standard</h3>
                  <p>We use officially standardized Unicode characters (U+1D400-U+1D7FF range) that are supported by all modern platforms and browsers.</p>
                </div>
                <div className="tech-item">
                  <h3>Universal Compatibility</h3>
                  <p>These characters work on LinkedIn, Twitter, Facebook, WhatsApp, email, documents - literally everywhere that supports Unicode text.</p>
                </div>
                <div className="tech-item">
                  <h3>No Special Fonts Required</h3>
                  <p>Unlike custom fonts or formatting, these characters are built into Unicode itself, so they display correctly on any device.</p>
                </div>
                <div className="tech-item">
                  <h3>SEO Friendly</h3>
                  <p>Search engines can read and index this text normally, unlike images or complex formatting that might hurt SEO.</p>
                </div>
              </div>
            </section>

            {/* Free Forever Section */}
            <section className="section free-section">
              <div className="free-badge">
                <h2>🎉 Free Forever</h2>
              </div>
              <div className="free-content">
                <h3>Why is BoldelIn completely free?</h3>
                <div className="free-reasons">
                  <div className="free-reason">
                    <strong>Our Mission:</strong> We believe professional communication tools should be accessible to everyone, regardless of budget.
                  </div>
                  <div className="free-reason">
                    <strong>No Hidden Costs:</strong> No subscriptions, no premium plans, no limits. Use it as much as you want, whenever you want.
                  </div>
                  <div className="free-reason">
                    <strong>Community Driven:</strong> We're built by professionals, for professionals. Your success is our success.
                  </div>
                </div>
                <div className="free-guarantee">
                  <p><strong>Our Promise:</strong> BoldelIn will remain free forever. No ads, no data collection, no strings attached.</p>
                </div>
              </div>
            </section>

            {/* Comparison Section */}
            <section className="section">
              <h2>BoldelIn vs Alternatives</h2>
              <div className="comparison-table">
                <div className="comparison-header">
                  <div></div>
                  <div>BoldelIn</div>
                  <div>Manual Unicode</div>
                  <div>LinkedIn Premium</div>
                </div>
                <div className="comparison-row">
                  <div>Easy to Use</div>
                  <div className="check">✅</div>
                  <div className="cross">❌</div>
                  <div className="cross">❌</div>
                </div>
                <div className="comparison-row">
                  <div>Text Formatting</div>
                  <div className="check">✅</div>
                  <div className="partial">⚠️</div>
                  <div className="cross">❌</div>
                </div>
                <div className="comparison-row">
                  <div>Free</div>
                  <div className="check">✅</div>
                  <div className="check">✅</div>
                  <div className="cross">❌</div>
                </div>
                <div className="comparison-row">
                  <div>Multiple Styles</div>
                  <div className="check">✅ (9 styles)</div>
                  <div className="cross">❌</div>
                  <div className="cross">❌</div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
              <div className="cta-content">
                <h2>Ready to Transform Your LinkedIn Content?</h2>
                <p>Join thousands of professionals who are already using BoldIn to make their content stand out on LinkedIn.</p>
                <div className="cta-buttons">
                  <a href="/" className="btn btn-primary btn-large">Start Formatting Now</a>
                  <a href="#examples" className="btn btn-outline btn-large">See Examples</a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};
