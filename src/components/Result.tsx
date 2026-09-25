"use client";

import React, { useEffect } from 'react';

import { ManglikResult } from './ManglikFlow';

interface ResultProps {
    isVisible: boolean;
    isManglik: boolean;
    result: ManglikResult | null;
}

const Result = ({ isVisible, isManglik, result }: ResultProps) => {
    useEffect(() => {
        if (isVisible && !isManglik) {
            const container = document.getElementById('successParticles');
            if (!container) return;
            container.innerHTML = '';
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                const size = Math.random() * 8 + 4;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const duration = Math.random() * 2 + 1;
                const delay = Math.random() * 0.5;
                particle.style.position = 'absolute';
                particle.style.left = `${x}%`;
                particle.style.top = `${y}%`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.backgroundColor = Math.random() > 0.5 ? '#D4AF37' : '#22c55e';
                particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                particle.style.opacity = '0';
                particle.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.5)';

                particle.animate([
                    { opacity: 0, transform: `translate(0, 0) scale(0)` },
                    { opacity: 1, transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(1)` },
                    { opacity: 0, transform: `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(0)` }
                ], {
                    duration: duration * 1000,
                    delay: delay * 1000,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    fill: 'forwards'
                });
                container.appendChild(particle);
            }
        }
    }, [isVisible, isManglik]);

    return (
        <>
            <section id="resultSection" className="result-section animated">

                <div id="successParticles" className="particles-container"></div>

                <div className="container result-container">





                    {!isManglik && (<>
                        <div id="manglikNegativeCard"
                            style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                            <div className="result-card non-manglik-card-new">
                                <div className="nm-main-grid">


                                    <div className="nm-left-col">
                                        <div className="nm-shield-icon-container">
                                            <div className="nm-shield-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
                                                    fill="#4ade80" stroke="#16a34a" strokeWidth="1.5">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                    <polyline points="9 12 11 14 15 10" stroke="#ffffff" strokeWidth="2.5">
                                                    </polyline>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="nm-text-content">
                                            <h2 className="nm-result-title">You are not under the<br />influence of Manglik Dosha</h2>
                                            <div className="nm-result-divider">
                                                <span className="m-line"></span><span className="m-dot">✦</span><span className="m-line"></span>
                                            </div>
                                            <p className="nm-result-desc">Great! As per the calculated positions of Mars in your birth
                                                chart, you are not affected by Manglik Dosha.</p>
                                        </div>
                                    </div>


                                    <div className="nm-right-col">
                                        <div className="nm-talk-card">
                                            <div className="nm-talk-header">
                                                <div className="nm-talk-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                        viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.5">
                                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="9" cy="7" r="4"></circle>
                                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                    </svg>
                                                </div>
                                                <div className="nm-talk-text">
                                                    <h4>No Manglik Dosha, But Still Have Concerns?</h4>
                                                    <p>To understand other astrological factors that may affect your marriage and compatibility.</p>
                                                </div>
                                            </div>
                                            <a href="https://www.astroved.com/astrovedspeaks/" className="btn-talk-negative">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" className="talk-icon">
                                                    <path
                                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                                    </path>
                                                </svg>
                                                <span>Talk to Astrologer</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </a>
                                            <div className="nm-trust-badges">
                                                <div className="nm-badge">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.5">
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                        <polyline points="9 12 11 14 15 10"></polyline>
                                                    </svg>
                                                    <span>100%<br />Confidential</span>
                                                </div>
                                                <div className="nm-badge">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.5">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <span>Verified<br />Astrologers</span>
                                                </div>
                                                <div className="nm-badge">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.5">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                    <span>Available<br />24x7</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}


                    {isManglik && (<>
                        <div id="manglikPositiveBanner"
                            style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>

                            <div className="manglik-positive-banner-new">
                                <div className="mpb-main-grid">
                                    <div className="mpb-left-col">
                                        <div className="mpb-shield-icon-container">
                                            <div className="mpb-shield-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
                                                    fill="#dc2626" stroke="#b91c1c" strokeWidth="1.5">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                    <line x1="12" y1="8" x2="12" y2="12" stroke="#ffffff" strokeWidth="2.5"></line>
                                                    <line x1="12" y1="16" x2="12.01" y2="16" stroke="#ffffff" strokeWidth="2.5">
                                                    </line>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="mpb-text-content">
                                            <h2 className="mpb-result-title">You are under<br />Manglik Dosha</h2>
                                            <div className="mpb-result-divider">
                                                <span className="mpb-line"></span><span className="mpb-star">✦</span><span
                                                    className="mpb-line"></span>
                                            </div>
                                            <p className="mpb-result-desc">As per the calculated positions of Mars in your birth chart,
                                                you are affected by Manglik Dosha.</p>
                                        </div>
                                    </div>
                                    <div className="mpb-right-col">
                                        <div className="mpb-talk-card">
                                            <div className="mpb-talk-header">
                                                <div className="mpb-talk-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                                        viewBox="0 0 24 24" fill="none" stroke="#be123c" strokeWidth="1.5">
                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="8.5" cy="7" r="4"></circle>
                                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                                    </svg>
                                                </div>
                                                <div className="mpb-talk-text">
                                                    <h4>Have Manglik Dosha? Know What It Means.</h4>
                                                    <p>Get personalized guidance on its impact on marriage, compatibility, and
                                                        suitable remedies.</p>
                                                </div>
                                            </div>
                                            <a href="https://www.astroved.com/astrovedspeaks/" className="btn-talk-positive-banner">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" className="talk-icon">
                                                    <path
                                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                                    </path>
                                                </svg>
                                                <span>Talk to Astrologer</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor" strokeWidth="2" className="arrow-icon">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </a>
                                            <div className="mpb-trust-badges">
                                                <div className="mpb-badge">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 24 24" fill="none" stroke="#be123c" strokeWidth="1.5">
                                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                        <polyline points="9 12 11 14 15 10"></polyline>
                                                    </svg>
                                                    <span>100%<br />Confidential</span>
                                                </div>
                                                <div className="mpb-badge">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 24 24" fill="none" stroke="#be123c" strokeWidth="1.5">
                                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <span>Verified<br />Astrologers</span>
                                                </div>
                                                <div className="mpb-badge">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        viewBox="0 0 24 24" fill="none" stroke="#be123c" strokeWidth="1.5">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                    <span>Available<br />24x7</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>)}


                    <div className="astrological-identity-banner"
                        style={{ background: '#ffffff', borderRadius: '12px', padding: '25px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1100px', margin: '15px auto 0 auto', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid #fcedda', position: 'relative', overflow: 'hidden', flexWrap: 'nowrap', gap: '20px' }}>


                        <div className="ai-banner-decor-left" style={{ flexShrink: '0', display: 'flex', alignItems: 'center' }}>
                            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="18" stroke="#d97706" strokeWidth="2.5" />
                                <path
                                    d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50 M25 25 L32 32 M68 68 L75 75 M25 75 L32 68 M68 25 L75 32"
                                    stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
                                <path d="M50 38 L53 47 L62 50 L53 53 L50 62 L47 53 L38 50 L47 47 Z" fill="#d97706" />
                                <circle cx="20" cy="20" r="2" fill="#d97706" />
                                <circle cx="80" cy="20" r="1.5" fill="#d97706" />
                                <circle cx="20" cy="80" r="1.5" fill="#d97706" />
                                <circle cx="80" cy="80" r="2" fill="#d97706" />
                            </svg>
                        </div>

                        <div className="ai-banner-divider ai-hide-mobile" style={{ width: '1px', height: '50px', background: '#e2e8f0' }}>
                        </div>


                        <div className="ai-banner-title" style={{ flexGrow: '1', minWidth: '200px' }}>
                            <h2
                                style={{ fontSize: '24px', color: '#1e3a8a', fontFamily: '\'Playfair Display\', serif', margin: '0 0 4px 0', fontWeight: '700' }}>
                                Your Astrological Identity
                            </h2>
                            <p style={{ color: '#64748b', fontSize: '14px', margin: '0' }}>These key details are used for your Manglik
                                analysis.</p>
                        </div>

                        <div className="ai-banner-divider ai-hide-mobile" style={{ width: '1px', height: '50px', background: '#e2e8f0' }}>
                        </div>


                        <div className="ai-banner-item" style={{ display: 'flex', alignItems: 'center', gap: '15px', flexShrink: '0' }}>
                            <div className="ai-banner-icon"
                                style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f3efff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="#4c1d95" stroke="none">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </div>
                            <div className="ai-banner-text" style={{ textAlign: 'left' }}>
                                <div
                                    style={{ color: '#64748b', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                                    MOON SIGN</div>
                                <div style={{ color: '#1e3a8a', fontSize: '20px', fontFamily: '\'Playfair Display\', serif', fontWeight: '700' }}
                                    id="resultMoonSign">{result?.moonSign}</div>
                            </div>
                        </div>

                        <div className="ai-banner-divider ai-hide-mobile" style={{ width: '1px', height: '50px', background: '#e2e8f0' }}>
                        </div>


                        <div className="ai-banner-item"
                            style={{ display: 'flex', alignItems: 'center', gap: '15px', flexShrink: '0', zIndex: '1' }}>
                            <div className="ai-banner-icon"
                                style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                    fill="#d97706" stroke="none">
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                    </polygon>
                                </svg>
                            </div>
                            <div className="ai-banner-text" style={{ textAlign: 'left' }}>
                                <div
                                    style={{ color: '#64748b', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                                    BIRTH STAR</div>
                                <div style={{ color: '#1e3a8a', fontSize: '20px', fontFamily: '\'Playfair Display\', serif', fontWeight: '700' }}
                                    id="resultBirthStar">{result?.birthStar}</div>
                            </div>
                        </div>


                        <div className="ai-banner-decor-right"
                            style={{ position: 'absolute', right: '0', top: '0', height: '100%', width: '200px', pointerEvents: 'none', zIndex: '0', overflow: 'hidden', borderRadius: '0 12px 12px 0' }}>
                            <svg width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMaxYMid slice"
                                fill="none" xmlns="http://www.w3.org/2000/svg">

                                <path d="M 120 -10 A 70 70 0 1 1 120 130 A 60 60 0 1 0 120 -10 Z" fill="#faebd7" />

                                <path d="M 180 20 Q 185 20 185 15 Q 185 20 190 20 Q 185 20 185 25 Q 185 20 180 20 Z"
                                    fill="#faebd7" />

                                <circle cx="185" cy="100" r="5" fill="#faebd7" />

                                <circle cx="70" cy="40" r="4" fill="#faebd7" />
                            </svg>
                        </div>
                    </div>


                    <style dangerouslySetInnerHTML={{
                        __html: `
                /* Animations */
                @keyframes spinSlow {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes floatSlow {
                    0% {
                        transform: translateY(0px);
                    }

                    50% {
                        transform: translateY(-5px);
                    }

                    100% {
                        transform: translateY(0px);
                    }
                }

                /* Banner Hover Effects */
                .astrological-identity-banner {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .astrological-identity-banner:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
                }

                /* Left Decor Animation */
                .ai-banner-decor-left svg {
                    animation: spinSlow 20s linear infinite;
                    transform-origin: center;
                }

                /* Right Decor Animation */
                .ai-banner-decor-right svg {
                    animation: floatSlow 6s ease-in-out infinite;
                }

                /* Item Hover Effects */
                .ai-banner-item {
                    transition: transform 0.3s ease;
                }

                .ai-banner-item:hover {
                    transform: translateY(-2px);
                }

                .ai-banner-icon {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .ai-banner-item:hover .ai-banner-icon {
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                }

                @media (max-width: 992px) {
                    .astrological-identity-banner {
                        padding: 15px 20px !important;
                        gap: 10px !important;
                    }

                    .ai-banner-title h2 {
                        font-size: 18px !important;
                    }

                    .ai-banner-title p {
                        font-size: 12px !important;
                    }

                    .ai-banner-icon {
                        width: 38px !important;
                        height: 38px !important;
                    }

                    .ai-banner-text div:last-child {
                        font-size: 16px !important;
                    }

                    .ai-banner-decor-left svg {
                        width: 36px;
                        height: 36px;
                    }

                    .ai-banner-divider.ai-hide-mobile {
                        margin: 0 10px !important;
                    }
                }

                @media (max-width: 600px) {
                    .astrological-identity-banner {
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center !important;
                        padding: 25px 20px !important;
                    }

                    .ai-banner-decor-left {
                        margin: 0 0 15px 0 !important;
                    }

                    .ai-hide-mobile {
                        display: none !important;
                    }

                    .ai-banner-title {
                        margin-bottom: 20px !important;
                    }

                    .ai-banner-item {
                        width: 100% !important;
                        justify-content: center !important;
                        margin-bottom: 15px !important;
                    }

                    .ai-banner-item:last-child {
                        margin-bottom: 0 !important;
                    }

                    .ai-banner-text {
                        text-align: left !important;
                    }
                }
            ` }} />

                    {isManglik && (<>

                        <div id="manglikPositiveCard"
                            style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>

                            <div className="result-card manglik-positive-card-new">

                                <div className="mp-header-new">
                                    <div className="mp-icon-new">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                            fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <circle cx="10" cy="14" r="6"></circle>
                                            <line x1="14.24" y1="9.76" x2="21" y2="3"></line>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                        </svg>
                                    </div>
                                    <h2 className="mp-title-new">Manglik Report</h2>
                                    <p className="mp-subtitle-new">Here is your personalized Manglik analysis based on your birth chart.
                                    </p>
                                    <div className="mp-divider-new">
                                        <span className="m-line"></span><span className="sh-star">✦</span><span className="m-line"></span>
                                    </div>
                                </div>



                                <div className="mp-main-grid">
                                    <div className="mp-left-col">

                                        <div className="mp-block-new prediction-block-new">
                                            <div className="mp-left-icon-container">
                                                <div className="mars-circle-icon-new">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                                        viewBox="0 0 24 24" fill="none" stroke="#be123c" strokeWidth="2">
                                                        <circle cx="10" cy="14" r="6"></circle>
                                                        <line x1="14.24" y1="9.76" x2="21" y2="3"></line>
                                                        <polyline points="15 3 21 3 21 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="mp-content-container">
                                                <h3 className="mp-block-title">Prediction <span className="sh-star"
                                                    style={{ color: '#be123c', fontSize: '14px', marginLeft: '5px' }}>✦</span></h3>
                                                <p>{result?.prediction || 'Prediction based on your chart will appear here.'}</p>
                                            </div>
                                        </div>


                                        <div className="mp-block-new remedies-block-new">
                                            <div className="mp-left-icon-container">
                                                <div className="trishul-icon-new">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                                        viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2">
                                                        <path d="M12 2v20M12 2l3 3M12 2L9 5M5 7v4a7 7 0 0 0 14 0V7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="mp-content-container">
                                                <h3 className="mp-block-title" style={{ color: '#d97706' }}>Remedies <span className="sh-star"
                                                    style={{ color: '#d97706', fontSize: '14px', marginLeft: '5px' }}>✦</span></h3>
                                                <p>{result?.remedies || 'Remedies for your chart will appear here.'}</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                                <div className="mp-footer-note-new">
                                    <div className="mpn-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                            fill="none" stroke="#be123c" strokeWidth="2">
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                        </svg>
                                    </div>
                                    <p><strong>Note:</strong> Manglik Dosha cannot be understood alone. Its impact depends on your
                                        complete birth chart, so an astrologer can provide a clearer answer.</p>
                                </div>


                                <div className="mp-talk-banner-new">
                                    <div className="mtb-left">
                                        <div className="mtb-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                                                fill="none" stroke="#be123c" strokeWidth="2">
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="mtb-text">
                                            <h4>Understand Your Manglik Dosha Better</h4>
                                            <p>Get your chart reviewed and understand the right guidance and remedies for your
                                                situation.</p>
                                        </div>
                                    </div>
                                    <a href="https://www.astroved.com/astrovedspeaks/" className="btn-talk-positive">Talk to astrologer &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </>)}
                    {isManglik && <div className="homa-section" id="homaSection">
                        <div className="homa-header">
                            <div className="homa-divider">
                                <span className="h-line"></span>
                                <span className="h-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M12 2v20"></path>
                                        <path d="M6 7v4a6 6 0 0 0 12 0V7"></path>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                        <polyline points="10 5 12 2 14 5"></polyline>
                                        <polyline points="4 9 6 7 8 9"></polyline>
                                        <polyline points="16 9 18 7 20 9"></polyline>
                                    </svg>
                                </span>
                                <span className="h-line"></span>
                            </div>
                            <h3 className="homa-title">Recommended Manglik Dosha Remedies</h3>
                            <p className="homa-subtitle">Explore suitable homas for reducing Mars-related challenges in marriage.
                            </p>
                        </div>

                        <div className="homa-grid">

                            <div className="homa-card">
                                <div className="homa-badge">01</div>
                                <div className="homa-img-wrapper">
                                    <img src="/images/mars.png" alt="Mangal Shanti Homa" />
                                </div>
                                <div className="homa-card-content">
                                    <div className="homa-card-divider">
                                        <span className="hcd-line"></span>
                                        <span className="hcd-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                                fill="none" stroke="#be123c" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M12 2v20"></path>
                                                <path d="M6 7v4a6 6 0 0 0 12 0V7"></path>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                                <polyline points="10 5 12 2 14 5"></polyline>
                                                <polyline points="4 9 6 7 8 9"></polyline>
                                                <polyline points="16 9 18 7 20 9"></polyline>
                                            </svg>
                                        </span>
                                        <span className="hcd-line"></span>
                                    </div>
                                    <h4 className="homa-card-title">Mangal Santhi Homa</h4>
                                    <p className="homa-card-subtitle">(Mars Pacification Homa)</p>
                                    <a href="https://www.astroved.com/-P52.aspx" className="homa-btn">View Details &rarr;</a>
                                </div>
                            </div>


                            <div className="homa-card">
                                <div className="homa-badge">02</div>
                                <div className="homa-img-wrapper">
                                    <img src="/images/hanuman.png" alt="Hanuman Homa" />
                                </div>
                                <div className="homa-card-content">
                                    <div className="homa-card-divider">
                                        <span className="hcd-line"></span>
                                        <span className="hcd-icon" style={{ fontSize: '18px', color: '#be123c', fontWeight: 'bold', lineHeight: '1' }}>
                                            ॐ
                                        </span>
                                        <span className="hcd-line"></span>
                                    </div>
                                    <h4 className="homa-card-title">Hanuman Homa</h4>
                                    <p className="homa-card-subtitle">(Homa for Strength, Courage and Protection)</p>
                                    <a href="https://www.astroved.com/-P68.aspx" className="homa-btn">View Details &rarr;</a>
                                </div>
                            </div>


                            <div className="homa-card">
                                <div className="homa-badge">03</div>
                                <div className="homa-img-wrapper">
                                    <img src="/images/murugar.png" alt="Valli Murugan Homa" />
                                </div>
                                <div className="homa-card-content">
                                    <div className="homa-card-divider">
                                        <span className="hcd-line"></span>
                                        <span className="hcd-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                                fill="none" stroke="#be123c" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M12 22v-3"></path>
                                                <path d="M12 19c-3.3 0-6-2.7-6-6s6-11 6-11 6 7.7 6 11-2.7 6-6 6z"></path>
                                                <path d="M6 13c-2.8 0-5 2.2-5 5s5 3 7 1c-1.3-1.6-2-3.8-2-6z"></path>
                                                <path d="M18 13c2.8 0 5 2.2 5 5s-5 3-7 1c1.3-1.6 2-3.8 2-6z"></path>
                                            </svg>
                                        </span>
                                        <span className="hcd-line"></span>
                                    </div>
                                    <h4 className="homa-card-title">Valli Murugan Homa</h4>
                                    <p className="homa-card-subtitle">(Homa for Murugan and his consorts Valli and Devayani)</p>
                                    <a href="https://www.astroved.com/-P64969.aspx" className="homa-btn">View Details &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {!isManglik && <div id="powerfulRemediesSection" className="powerful-remedies-section"
                        style={{ width: '100%', marginTop: '15px' }}>
                        <div className="container">
                            <div className="remedies-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <div
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
                                    <span style={{ height: '1px', width: '30px', background: '#9ca3af' }}></span>
                                    <div
                                        style={{ background: '#f0fdf4', border: '1px solid #dcfce7', padding: '6px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="#16a34a" stroke="#16a34a" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            <polyline points="9 12 11 14 15 10" stroke="#ffffff"></polyline>
                                        </svg>
                                    </div>
                                    <span style={{ height: '1px', width: '30px', background: '#9ca3af' }}></span>
                                </div>
                                <h2
                                    style={{ fontSize: '32px', color: '#064e3b', fontFamily: '\'Playfair Display\', serif', margin: '0 0 10px 0' }}>
                                    What Else Could Be Influencing Your Marriage?</h2>
                                <p style={{ color: '#475569', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>Explore other astrological factors related to marriage, compatibility, and timing.</p>
                            </div>

                            <div className="remedies-grid">

                                {/* Card 1: Sarpa Dosha Calculator */}
                                <div className="remedy-card hover-glow-orange" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid #ffedd5', transition: 'all 0.4s ease', background: '#fffaf5' }}>
                                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                                        <img src="/images/sarpa-dosha.png" alt="Sarpa Dosha Calculator" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    </div>

                                    <div style={{ position: 'relative', padding: '0 25px 35px', display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'center', zIndex: 2 }}>
                                        <div style={{ position: 'absolute', top: '-35px', left: '50%', transform: 'translateX(-50%)', width: '70px', height: '70px', background: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 25px rgba(234, 88, 12, 0.2)' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </div>

                                        <div style={{ marginTop: '50px', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <h3 style={{ color: '#7c2d12', fontSize: '22px', fontFamily: '"Playfair Display", serif', margin: '0 0 10px', fontWeight: '700' }}>
                                                Sarpa Dosha Calculator
                                            </h3>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
                                                <span style={{ height: '1px', width: '30px', background: '#fdba74' }}></span>
                                                <span style={{ color: '#ea580c', fontSize: '14px' }}>✿</span>
                                                <span style={{ height: '1px', width: '30px', background: '#fdba74' }}></span>
                                            </div>
                                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                                                Find out if Sarpa Dosha is present in your horoscope and get insights on its effects and remedies.
                                            </p>
                                            <a href="https://www.astroved.com/astropedia/en/freetools/naga-dosha" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#d56615', color: '#ffffff', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', transition: 'background 0.3s ease', margin: '0 auto' }}>
                                                View Details
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Horoscope Matching */}
                                <div className="remedy-card hover-pulse-pink" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid #fce7f3', transition: 'all 0.4s ease', background: '#fff5f8' }}>
                                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                                        <img src="/images/horoscope.png" alt="Horoscope Matching" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    </div>

                                    <div style={{ position: 'relative', padding: '0 25px 35px', display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'center', zIndex: 2 }}>
                                        <div style={{ position: 'absolute', top: '-35px', left: '50%', transform: 'translateX(-50%)', width: '70px', height: '70px', background: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 25px rgba(219, 39, 119, 0.2)' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#be185d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                            </svg>
                                        </div>

                                        <div style={{ marginTop: '50px', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <h3 style={{ color: '#831843', fontSize: '22px', fontFamily: '"Playfair Display", serif', margin: '0 0 10px', fontWeight: '700' }}>
                                                Horoscope Matching
                                            </h3>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
                                                <span style={{ height: '1px', width: '30px', background: '#f9a8d4' }}></span>
                                                <span style={{ color: '#db2777', fontSize: '14px' }}>✿</span>
                                                <span style={{ height: '1px', width: '30px', background: '#f9a8d4' }}></span>
                                            </div>
                                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                                                Match two horoscopes to check compatibility and assess the strength of your relationship.
                                            </p>
                                            <a href="https://www.astroved.com/astropedia/en/freetools/horoscope-matching" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#c1215b', color: '#ffffff', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', transition: 'background 0.3s ease', margin: '0 auto' }}>
                                                View Details
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: Marriage Compatibility */}
                                <div className="remedy-card hover-tilt-green" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid #dcfce7', transition: 'all 0.4s ease', background: '#f2fdf5' }}>
                                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                                        <img src="/images/matrimony.png" alt="Marriage Compatibility" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                    </div>

                                    <div style={{ position: 'relative', padding: '0 25px 35px', display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'center', zIndex: 2 }}>
                                        <div style={{ position: 'absolute', top: '-35px', left: '50%', transform: 'translateX(-50%)', width: '70px', height: '70px', background: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 25px rgba(22, 163, 74, 0.2)' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="9" cy="12" r="5"></circle>
                                                <circle cx="15" cy="12" r="5"></circle>
                                            </svg>
                                        </div>

                                        <div style={{ marginTop: '50px', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <h3 style={{ color: '#14532d', fontSize: '22px', fontFamily: '"Playfair Display", serif', margin: '0 0 10px', fontWeight: '700' }}>
                                                Marriage Compatibility
                                            </h3>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
                                                <span style={{ height: '1px', width: '30px', background: '#86efac' }}></span>
                                                <span style={{ color: '#16a34a', fontSize: '14px' }}>✿</span>
                                                <span style={{ height: '1px', width: '30px', background: '#86efac' }}></span>
                                            </div>
                                            <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>
                                                Understand your marriage compatibility based on planetary positions and build a strong and harmonious life together.
                                            </p>
                                            <a href="https://www.astroved.com/astropedia/en/freetools/marriage-compatibility" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#2c8253', color: '#ffffff', padding: '12px 30px', borderRadius: '30px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', transition: 'background 0.3s ease', margin: '0 auto' }}>
                                                View Details
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>}
                </div>

                <section className="guidance-section animated" id="dynamicCtaSection">

                    {isManglik && <div className="cta-banner-new manglik-cta-banner">
                        <div className="cta-banner-bg-elements">
                            <div className="cta-star star-1">✦</div>
                            <div className="cta-star star-2">✦</div>
                            <div className="cta-dot-grid-right"></div>
                            <div className="cta-dot-grid-left"></div>
                        </div>

                        <h2 className="cta-banner-title">Feeling Unsure About Choosing the Right Remedy?</h2>
                        <p className="cta-banner-desc">Talk to an astrologer for clear guidance on the remedies that best match your birth chart and marriage concerns.</p>

                        <a href="https://www.astroved.com/astrovedspeaks/" className="btn-consult-astrologer">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="consult-chat-icon">
                                <path
                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                </path>
                            </svg>
                            <span>Consult with an Astrologer &rarr;</span>
                        </a>

                        <div className="cta-trust-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <polyline points="9 12 11 14 15 10"></polyline>
                            </svg>
                            Trusted by Thousands
                        </div>
                    </div>}


                    {!isManglik && <div className="cta-banner-new non-manglik-cta-banner">
                        <div className="cta-banner-bg-elements">
                            <div className="cta-star star-1">✦</div>
                            <div className="cta-star star-2">✦</div>
                            <div className="cta-dot-grid-right"></div>
                            <div className="cta-dot-grid-left"></div>
                        </div>

                        <h2 className="cta-banner-title">Go Beyond Tools. Get Real Guidance.</h2>
                        <p className="cta-banner-desc">Talk to an astrologer for a clearer understanding of your marriage prospects, compatibility, and the astrological factors influencing them.</p>

                        <a href="https://www.astroved.com/astrovedspeaks/" className="btn-consult-astrologer">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="consult-chat-icon">
                                <path
                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                </path>
                            </svg>
                            <span>Consult with an Astrologer &rarr;</span>
                        </a>

                        <div className="cta-trust-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <polyline points="9 12 11 14 15 10"></polyline>
                            </svg>
                            Trusted by Thousands
                        </div>
                    </div>}
                </section>

            </section>
        </>
    );
};

export default Result;
