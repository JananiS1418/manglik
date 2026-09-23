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
            <div className="gf-star-divider">
                <div className="gf-sd-line left"></div>
                <div className="gf-sd-circle">
                    <span className="gf-star">✦</span>
                </div>
                <div className="gf-sd-line right"></div>
            </div>
            <h2 className="gf-title">Why Choose <span className="purple-text">Mangal Dosha</span> Guidance from AstroVed?</h2>
        </div>

        <div className="gf-container">
            <div className="gf-box">
                
                <div className="gf-item anim-zoom">
                    <div className="gf-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                    </div>
                    <h3 className="gf-item-title">25+ years of Vedic astrology practice</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

                
                <div className="gf-item anim-glow">
                    <div className="gf-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <h3 className="gf-item-title">Real astrologers, not just automated results</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

                
                <div className="gf-item anim-bounce">
                    <div className="gf-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                            </path>
                        </svg>
                    </div>
                    <h3 className="gf-item-title">Remedies performed with tradition and care</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

                
                <div className="gf-item anim-pulse">
                    <div className="gf-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                    </div>
                    <h3 className="gf-item-title">Trusted across generations</h3>
                    <div className="gf-h-divider">
                        <div className="gf-h-line"></div>
                        <div className="gf-h-dot"></div>
                        <div className="gf-h-line"></div>
                    </div>
                </div>

                
                <div className="gf-item anim-tick">
                    <div className="gf-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
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
