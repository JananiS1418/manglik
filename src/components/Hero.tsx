"use client";

import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

interface HeroProps {
  onCalculate: () => void;
  isCalculating: boolean;
  loadingText: string;
}

const Hero = ({ onCalculate, isCalculating, loadingText }: HeroProps) => {
  const [formData, setFormData] = useState({
    day: '', month: '', year: '',
    hour: '', minute: '', second: '', ampm: '',
    country: '', city: ''
  });

  const days = Array.from({length: 31}, (_, i) => ({ label: String(i + 1).padStart(2, '0'), value: String(i + 1).padStart(2, '0') }));
  const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const months = monthsList.map((m, i) => ({ label: m, value: String(i + 1).padStart(2, '0') }));
  const currentYear = new Date().getFullYear();
  const years = Array.from({length: currentYear - 1950 + 1}, (_, i) => ({ label: String(currentYear - i), value: String(currentYear - i) }));
  const hours = Array.from({length: 12}, (_, i) => ({ label: String(i + 1).padStart(2, '0'), value: String(i + 1).padStart(2, '0') }));
  const minutes = Array.from({length: 60}, (_, i) => ({ label: String(i).padStart(2, '0'), value: String(i).padStart(2, '0') }));
  const countriesList = ["India", "USA", "UK", "Canada", "Australia", "UAE", "Singapore", "Malaysia", "New Zealand", "South Africa", "Germany", "France", "Japan"];
  const countries = countriesList.map(c => ({ label: c, value: c }));
  const ampm = [{label: 'AM', value: 'AM'}, {label: 'PM', value: 'PM'}];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <>
      <section className="hero-section">
        
        <div className="breadcrumb-container">
            <div className="breadcrumb">
                <a href="#">Home</a>
                <span className="separator">»</span>
                <a href="#">Free Tools</a>
                <span className="separator">»</span>
                <span className="current">Manglik</span>
            </div>
        </div>

        
        <div className="bg-zodiac-wheel"></div>
        <div className="bg-temple-silhouette"></div>
        <div className="decor-star star-1">✧</div>
        <div className="decor-star star-2">✦</div>
        <div className="decor-star star-3">✧</div>
        <div className="decor-star star-4">✦</div>
        <div className="decor-star star-5">✧</div>
        <div className="decor-lotus">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(212, 175, 55, 0.4)"
                strokeWidth="1.5">
                <path d="M12 22s-6-4-6-10a6 6 0 0 1 12 0c0 6-6 10-6 10z" />
                <path d="M12 22s-3-6-3-12a3 3 0 0 1 6 0c0 6-3 12-3 12z" />
                <path d="M12 22s-9-2-9-8a9 9 0 0 1 18 0c0 6-9 8-9 8z" />
            </svg>
        </div>

        
        <style dangerouslySetInnerHTML={{ __html: `
            @media (min-width: 992px) {
                .hero-header-content .hero-title {
                    margin-top: 100px !important;
                }

                .hero-header-content .title-divider {
                    margin-top: 35px !important;
                    margin-bottom: 35px !important;
                }

                .calculator-card.luxury-card {
                    margin-top: 60px !important;
                }
            }

            @media (min-width: 992px) and (max-width: 1200px) {
                .hero-header-content {
                    max-width: 520px !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                }

                .hero-header-content .hero-title {
                    margin-top: 40px !important;
                    font-size: 38px !important;
                }

                .hero-header-content .title-divider {
                    margin-top: 20px !important;
                    margin-bottom: 20px !important;
                }

                .calculator-card.luxury-card {
                    margin-top: 30px !important;
                }
            }

            @media (max-width: 991px) {
                .hero-header-content .title-divider {
                    display: flex !important;
                    margin-top: 8px !important;
                    margin-bottom: 8px !important;
                }
            }

            @media (max-width: 600px) {
                .hero-header-content {
                    padding-top: 85px !important;
                }

                .hero-header-content .title-divider .line {
                    width: 30px !important;
                }

                .hero-header-content .hero-subtitle {
                    font-size: 11px !important;
                    max-width: 170px !important;
                }
            }
        ` }} />
        <div className="hero-header-content">
            <h1 className="hero-title">
                <span className="dark-text">Manglik Dosha </span>
                <span className="gold-text">Calculator</span>
            </h1>
            <div className="title-divider">
                <span className="line"></span>
                <span className="symbol">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(92, 69, 255, 0.6)"
                        strokeWidth="1">
                        <path d="M12 2v20m10-10H2m17.07-7.07L4.93 19.07m14.14 0L4.93 4.93"></path>
                        <circle cx="12" cy="12" r="3" fill="rgba(92, 69, 255, 0.1)"></circle>
                    </svg>
                </span>
                <span className="line"></span>
            </div>
            <p className="hero-subtitle">Check your Manglik Dosha for free and understand its impact on your marriage and
                compatibility.</p>
        </div>

        <div className="container hero-container">

            
            <div className="calculator-card luxury-card fade-in">

                <div className="calc-header redesigned-header">
                    <div className="header-main-title">
                        <div className="header-user-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="#5C45FF" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h2>Enter Your Birth Details</h2>
                    </div>
                    <p className="header-subtitle">Please provide accurate birth details for precise Manglik Dosha analysis.
                    </p>
                </div>

                <form id="calcForm" className="calc-form luxury-form new-design-form" onSubmit={handleSubmit}>
                    <div className="calc-form-grid">
                        
                        <div className="form-group field-box slide-up">
                            <label className="icon-label">
                                <div className="label-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#5C45FF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </div>
                                <span>Birth Date</span>
                            </label>
                            <div className="input-group col-3 luxury-input">
                                <CustomSelect value={formData.day} onChange={(val) => setFormData({...formData, day: val})} options={days} placeholder="Day" />
                                <CustomSelect value={formData.month} onChange={(val) => setFormData({...formData, month: val})} options={months} placeholder="Month" />
                                <CustomSelect value={formData.year} onChange={(val) => setFormData({...formData, year: val})} options={years} placeholder="Year" />
                            </div>
                        </div>

                        
                        <div className="form-group field-box slide-up" style={{animationDelay: '0.1s'}}>
                            <label className="icon-label">
                                <div className="label-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#5C45FF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <span>Birth Time</span>
                            </label>
                            <div className="input-group col-4 luxury-input">
                                <CustomSelect value={formData.hour} onChange={(val) => setFormData({...formData, hour: val})} options={hours} placeholder="Hour" />
                                <CustomSelect value={formData.minute} onChange={(val) => setFormData({...formData, minute: val})} options={minutes} placeholder="Minute" />
                                <CustomSelect value={formData.second} onChange={(val) => setFormData({...formData, second: val})} options={minutes} placeholder="Second" />
                                <CustomSelect value={formData.ampm} onChange={(val) => setFormData({...formData, ampm: val})} options={ampm} placeholder="AM/PM" />
                            </div>
                        </div>

                        
                        <div className="form-group field-box birth-country-group slide-up" style={{animationDelay: '0.2s'}}>
                            <label className="icon-label">
                                <div className="label-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#5C45FF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path
                                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                        </path>
                                    </svg>
                                </div>
                                <span>Birth Country</span>
                            </label>
                            <div className="input-group luxury-input">
                                <CustomSelect value={formData.country} onChange={(val) => setFormData({...formData, country: val})} options={countries} placeholder="Country" />
                            </div>
                        </div>

                        
                        <div className="form-group field-box birth-city-group full-width slide-up"
                            style={{animationDelay: '0.3s'}}>
                            <label className="icon-label">
                                <div className="label-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="#5C45FF" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <span>Birth Place / City</span>
                            </label>
                            <div className="input-group luxury-input">
                                <input type="text" placeholder="Enter Birth Place / City" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                            </div>
                        </div>

                        
                        <div className="form-group action-container full-width slide-up" style={{animationDelay: '0.4s'}}>
                            <div className="submit-wrapper">
                                <button type="submit" id="calcBtn" className="btn-calculate luxury-btn new-design-btn" disabled={isCalculating}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <path d="M12 2v2"></path>
                                        <path d="M12 20v2"></path>
                                        <path d="m4.93 4.93 1.41 1.41"></path>
                                        <path d="m17.66 17.66 1.41 1.41"></path>
                                        <path d="M2 12h2"></path>
                                        <path d="M20 12h2"></path>
                                        <path d="m6.34 17.66-1.41 1.41"></path>
                                        <path d="m19.07 4.93-1.41 1.41"></path>
                                    </svg>
                                    <span>{loadingText}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="arrow-icon">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        
    </section>
    </>
  );
};

export default Hero;
