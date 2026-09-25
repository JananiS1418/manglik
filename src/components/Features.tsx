import React from 'react';

const Features = () => {
  return (
    <>
      <section className="guidance-features-section">
        <div className="gf-bg-left">
            <svg viewBox="0 0 100 100" fill="rgba(212, 175, 55, 0.2)" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M50 10 C 60 40, 90 40, 90 50 C 90 60, 60 60, 50 90 C 40 60, 10 60, 10 50 C 10 40, 40 40, 50 10 Z">
                </path>
            </svg>
        </div>
        <div className="gf-bg-right">
            <svg viewBox="0 0 100 100" fill="rgba(104, 104, 249, 0.15)" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="rgba(104, 104, 249, 0.1)" strokeWidth="1"
                    strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="30" stroke="rgba(104, 104, 249, 0.2)" strokeWidth="1" />
            </svg>
        </div>

        <div className="gf-header">
            <h2 className="gf-title">Why Choose <span className="purple-text">Mangal Dosha</span> Guidance from AstroVed?</h2>
        </div>

        <div className="gf-container">
            <div className="gf-box">
                
                <div className="gf-item anim-zoom">
                    <div className="gf-image-container">
                        <span className="gf-number-badge">01</span>
                        <img src="/images/guidance-1.png" alt="Vedic astrology practice" className="gf-image" />
                    </div>
                    <h3 className="gf-item-title">25+ years of Vedic astrology practice</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

                
                <div className="gf-item anim-glow">
                    <div className="gf-image-container">
                        <span className="gf-number-badge">02</span>
                        <img src="/images/guidance-2.png" alt="Real astrologers" className="gf-image" />
                    </div>
                    <h3 className="gf-item-title">Real astrologers, not just automated results</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

                
                <div className="gf-item anim-bounce">
                    <div className="gf-image-container">
                        <span className="gf-number-badge">03</span>
                        <img src="/images/guidance-3.png" alt="Remedies performed with tradition" className="gf-image" />
                    </div>
                    <h3 className="gf-item-title">Remedies performed with tradition and care</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

                
                <div className="gf-item anim-pulse">
                    <div className="gf-image-container">
                        <span className="gf-number-badge">04</span>
                        <img src="/images/guidance-4.png" alt="Trusted across generations" className="gf-image" />
                    </div>
                    <h3 className="gf-item-title">Trusted across generations</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

                
                <div className="gf-item anim-tick">
                    <div className="gf-image-container">
                        <span className="gf-number-badge">05</span>
                        <img src="/images/guidance-5.png" alt="100% confidential" className="gf-image" />
                    </div>
                    <h3 className="gf-item-title">100% confidential</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  );
};

export default Features;
