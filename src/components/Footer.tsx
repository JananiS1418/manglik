"use client";

import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
            <div className="footer-grid">

                
                <div className="footer-col">
                    <h4 className="footer-heading">KNOW US</h4>
                    <ul className="footer-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Board Of Advisors</a></li>
                        <li><a href="#">R&D Institute</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Partner Sites</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Podcast</a></li>
                    </ul>
                </div>

                
                <div className="footer-col">
                    <h4 className="footer-heading">ASTROWORLD</h4>
                    <ul className="footer-links">
                        <li><a href="#">Astrology Services</a></li>
                        <li><a href="#">Astropedia</a></li>
                        <li><a href="#">Priest Services</a></li>
                        <li><a href="#">Love & Marriage</a></li>
                        <li><a href="#">Family</a></li>
                        <li><a href="#">Business & Career</a></li>
                        <li><a href="#">Wealth & Finance</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Health & Beauty</a></li>
                    </ul>
                </div>

                
                <div className="footer-col">
                    <h4 className="footer-heading">LEGAL</h4>
                    <ul className="footer-links">
                        <li><a href="#">Disclaimer</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Return & Refund Policy</a></li>
                        <li><a href="#">Security Policy</a></li>
                        <li><a href="#">Shipment Policy</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>

                
                <div className="footer-col">
                    <h4 className="footer-heading">SUPPORT</h4>
                    <ul className="footer-links">
                        <li><a href="mailto:support@astroved.com">support@astroved.com</a></li>
                        <li><a href="#">Offline Payment</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">Site Map</a></li>
                    </ul>
                </div>

                
                <div className="footer-col connect-col">
                    <h4 className="footer-heading">CONNECT</h4>
                    <div className="connect-info">
                        <p><strong>Customer Care</strong></p>
                        <p><a href="tel:+919677391108">+91 9677391108</a></p>
                        <p><a href="tel:+914443419898">+91 44 43419898</a></p>
                    </div>
                    <div className="connect-info">
                        <p><strong>Toll Free (India Only)</strong></p>
                        <p><a href="tel:18001029098">1800 102 9098</a></p>
                    </div>
                    <div className="connect-info">
                        <p><strong>USA Contact Number</strong></p>
                        <p><a href="tel:+14129273625">+1 412-927 3625</a></p>
                    </div>
                    <div className="connect-info">
                        <p><strong>Whatsapp</strong></p>
                        <p><a href="https://wa.me/919677391109">+91 9677391109</a></p>
                    </div>
                </div>

            </div>

            
            <div className="bottom-features-row">
                <div className="app-download-section">
                    <h5 className="app-download-heading">Download AstroVed App</h5>
                    <div className="app-buttons">
                        <a href="#" className="app-link" aria-label="Download on Google Play">
                            <img  src="https://cdn.astroved.com/images/images-av/play-store.png" alt="Google Play Store"
                                style={{height: '40px', width: 'auto', borderRadius: '6px'}} />
                        </a>
                        <a href="#" className="app-link" aria-label="Download on the App Store">
                            <img  src="https://cdn.astroved.com/images/images-av/app-store.png" alt="Apple App Store"
                                style={{height: '40px', width: 'auto', borderRadius: '6px'}} />
                        </a>
                    </div>
                </div>
                <div className="badges-container">
                    <img  src="https://cdn.astroved.com/images/images-av/years-of-services.png" alt="25 Years Excellence"
                        className="trust-badge-img" style={{height: '70px'}} />
                    <img  src="https://cdn.astroved.com/images/images-av/podbean-logo.png" alt="PodBean Downloads"
                        className="trust-badge-img" style={{height: '45px'}} />
                    <img  src="https://cdn.astroved.com/images/images-av/iso.png" alt="ISO 9001:2015 Certified"
                        className="trust-badge-img" style={{height: '45px'}} />
                    <img  src="https://cdn.astroved.com/images/images-av/sectigo_trust_seal.jpg" alt="Secured by Sectigo"
                        className="trust-badge-img" style={{height: '45px'}} />
                </div>
            </div>
        </div>

        <div className="footer-bottom-bar">
            <div className="footer-container bottom-bar-inner">
                <div className="copyright-wrapper">
                    <p className="copyright">&copy; 2001 - 2026 AstroVed - All rights reserved.</p>
                </div>
                <div className="social-wrapper">
                    <span>Follow us :</span>
                    <a href="#" className="social-icon" aria-label="Facebook">
                        <img  src="https://cdn.astroved.com/images/images-av/facebook.webp" alt="Facebook" width="28"
                            height="28" />
                    </a>
                    <a href="#" className="social-icon" aria-label="WhatsApp">
                        <img  src="https://cdn.astroved.com/images/images-av/whatsapp.webp" alt="WhatsApp" width="28"
                            height="28" />
                    </a>
                    <a href="#" className="social-icon" aria-label="Twitter">
                        <img  src="https://cdn.astroved.com/images/images-av/Twitter.webp" alt="Twitter" width="28"
                            height="28" />
                    </a>
                    <a href="#" className="social-icon" aria-label="YouTube">
                        <img  src="https://cdn.astroved.com/images/images-av/youtube.webp" alt="YouTube" width="28"
                            height="28" />
                    </a>
                    <a href="#" className="social-icon" aria-label="Instagram">
                        <img  src="https://cdn.astroved.com/images/images-av/instagram.webp" alt="Instagram" width="28"
                            height="28" />
                    </a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">
                        <img  src="https://cdn.astroved.com/images/images-av/linkedin.webp" alt="LinkedIn" width="28"
                            height="28" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
      <button 
        id="scrollToTopBtn" 
        className={`scroll-to-top ${showScroll ? 'show' : ''}`} 
        title="Go to top"
        onClick={scrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    </button>
    </>
  );
};

export default Footer;
