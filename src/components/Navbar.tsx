"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDrawerDropdown, setOpenDrawerDropdown] = useState<number | null>(null);
  const [activeDockWidget, setActiveDockWidget] = useState<'location' | 'date' | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const openSearch = (e: React.MouseEvent) => { e.preventDefault(); setIsSearchOpen(true); };
  const closeSearch = () => setIsSearchOpen(false);
  
  const toggleDrawerDropdown = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setOpenDrawerDropdown(openDrawerDropdown === index ? null : index);
  };

  const toggleDockWidget = (e: React.MouseEvent, widget: 'location' | 'date') => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDockWidget(activeDockWidget === widget ? null : widget);
  };

  useEffect(() => {
    if (isDrawerOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) closeSearch();
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dock-item-wrapper')) {
        setActiveDockWidget(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <>
      <header className="site-header">
        <div className="navbar-container">

            
            <a href="/" className="brand-logo">
                <img  src="https://www.astroved.com/astropedia/assets/images/astropedia-logo.svg" alt="Astropedia Logo"
                    className="logo-img" />
            </a>

            
            <nav className="main-nav desktop-only">
                <ul className="nav-list">
                    <li className="nav-item has-dropdown">
                        <a href="#">Home <span className="caret"></span></a>
                        <div className="dropdown-menu">
                            <ul className="dropdown-list">
                                <li><a href="#">AstroVed Home</a></li>
                                <li><a href="#">Astropedia Home</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#">108 Divya Desam <span className="badge-new">NEW</span></a>
                    </li>
                    <li className="nav-item has-dropdown">
                        <a href="#">Festivals <span className="caret"></span></a>
                        <div className="dropdown-menu">
                            <ul className="dropdown-list">
                                <li><a href="#">Moon Phases(Thithi)</a></li>
                                <li><a href="#">Yearly Calendar</a></li>
                                <li><a href="#">Hindu Calendar</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item has-dropdown">
                        <a href="#">Fasting <span className="caret"></span></a>
                        <div className="dropdown-menu">
                            <ul className="dropdown-list">
                                <li><a href="#">Weekly</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item has-dropdown">
                        <a href="#">Deities <span className="caret"></span></a>
                        <div className="dropdown-menu">
                            <ul className="dropdown-list">
                                <li><a href="#">Gods</a></li>
                                <li><a href="#">Goddess</a></li>
                                <li><a href="#">Mantras</a></li>
                                <li><a href="#">Virtual Pooja</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item has-dropdown">
                        <a href="#">Temples <span className="caret"></span></a>
                        <div className="dropdown-menu">
                            <ul className="dropdown-list">
                                <li><a href="#">North India</a></li>
                                <li><a href="#">South India</a></li>
                                <li><a href="#">West India</a></li>
                                <li><a href="#">East India</a></li>
                                <li><a href="#">108 Divya Desam</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item has-dropdown">
                        <a href="#">Astrology <span className="caret"></span></a>
                        <div className="dropdown-menu">
                            <ul className="dropdown-list scrollable-menu">
                                <li><a href="#">Hora</a></li>
                                <li><a href="#">Planets</a></li>
                                <li><a href="#">Vastu</a></li>
                                <li><a href="#">Numerology</a></li>
                                <li><a href="#">Nakshatras (Stars)</a></li>
                                <li><a href="#">Panchangam</a></li>
                                <li><a href="#">Today Tithi [Moon Phase]</a></li>
                                <li><a href="#">Rahukalam</a></li>
                                <li><a href="#">Birth Date Astrology</a></li>
                                <li><a href="#">Marriage Prediction</a></li>
                                <li><a href="#">Ask Saibaba</a></li>
                                <li><a href="#">Moon Signs</a></li>
                                <li><a href="#">Choghadiya</a></li>
                                <li><a href="#">Jupiter Retrograde</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item has-dropdown">
                        <a href="#">Free Tools <span className="caret"></span></a>
                        <div className="dropdown-menu">
                            <ul className="dropdown-list scrollable-menu">
                                <li><a href="#">Love Calculator</a></li>
                                <li><a href="#">Dasa Bhukti</a></li>
                                <li><a href="#">Horoscope Matching</a></li>
                                <li><a href="#">Nalla Neram</a></li>
                                <li><a href="#">Chandrashtama</a></li>
                                <li><a href="#">Birth Chart</a></li>
                                <li><a href="#">Hora Watch</a></li>
                                <li><a href="#">More Free Tools</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#">Astrology Services</a>
                    </li>
                </ul>
            </nav>

            
            <div className="right-actions premium-icon-dock">
                
                <a href="#" className="header-cta-btn"
                    style={{background: '#4C35E6', color: '#ffffff', borderRadius: '20px', padding: '8px 20px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', marginRight: '15px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '36px', transition: 'all 0.3s'}}>
                    Speak to Astrologer
                </a>

                
                <a href="#" className="dock-icon" id="desktopSearchBtn" title="Search" onClick={openSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </a>

                
                <div className="dock-item-wrapper">
                    <a href="#" className="dock-icon" id="locationBtn" title="Location" onClick={(e) => toggleDockWidget(e, 'location')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </a>
                    <div className={`dock-dropdown ${activeDockWidget === 'location' ? 'active' : ''}`} id="locationDropdown" onClick={e => e.stopPropagation()}>
                        <div className="dock-widget-header"
                            style={{flexDirection: 'column', alignItems: 'flex-start', gap: '4px', borderBottom: 'none', paddingBottom: '0'}}>
                            <span className="dock-widget-title"
                                style={{fontSize: '11px', color: '#64748b', textTransform: 'uppercase'}}>Current
                                Location</span>
                            <span style={{fontSize: '14px', color: '#1e3a8a', fontWeight: '600'}}>Chennai, India</span>
                        </div>
                        <div className="dock-widget-header" style={{marginTop: '10px', paddingTop: '10px'}}>
                            <span className="dock-widget-title">Set Location</span>
                        </div>
                        <div className="dock-widget-body">
                            <div className="input-group luxury-input dock-input-group">
                                <select id="dockCountry" defaultValue="">
                                    <option value="" disabled hidden>Country</option>
                                </select>
                            </div>
                            <div className="input-group luxury-input dock-input-group mt-2">
                                <input  type="text" id="dockCity" placeholder="Enter Your City" />
                            </div>
                            <button className="btn-calculate luxury-btn mt-3"
                                style={{width: '100%', padding: '8px', fontSize: '13px'}}>Update</button>
                        </div>
                    </div>
                </div>

                
                <div className="dock-item-wrapper">
                    <a href="#" className="dock-icon" id="dateBtn" title="Date" onClick={(e) => toggleDockWidget(e, 'date')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </a>
                    <div className={`dock-dropdown ${activeDockWidget === 'date' ? 'active' : ''}`} id="dateDropdown" onClick={e => e.stopPropagation()}>
                        <div className="dock-widget-header">
                            
                            
                        </div>
                        <div className="dock-widget-body">
                            
    <div style={{display: 'flex', gap: '4px'}}>
        <select value={currentMonth} onChange={(e) => setCurrentMonth(parseInt(e.target.value))} style={{padding: '2px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '4px'}}>
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((m, i) => <option key={i} value={i}>{m}</option>)}
        </select>
        <select value={currentYear} onChange={(e) => setCurrentYear(parseInt(e.target.value))} style={{padding: '2px', fontSize: '12px', border: '1px solid #cbd5e1', borderRadius: '4px'}}>
            {Array.from({length: 10}, (_, i) => new Date().getFullYear() + 5 - i).map(y => <option key={y} value={y}>{y}</option>)}
        </select>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginTop: '10px', textAlign: 'center', fontSize: '12px'}}>
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} style={{color: '#64748b', fontWeight: 600}}>{d}</div>)}
        {/* Dummy dates for visual representation */}
        {Array.from({length: 31}, (_, i) => <div key={i} style={{padding: '4px', borderRadius: '4px', background: i+1 === new Date().getDate() ? '#1e3a8a' : 'transparent', color: i+1 === new Date().getDate() ? 'white' : 'inherit'}}>{i+1}</div>)}
    </div>

                        </div>
                    </div>
                </div>

                
                <button className="hamburger-btn" id="menuToggle" onClick={toggleDrawer}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none"
                        stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>

        
        <div id="dropdownSearchBar" className={`dropdown-search-bar ${isSearchOpen ? 'active' : ''}`}>
            <div className="search-bar-container">
                <svg className="dropdown-search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input  type="text" id="dropdownSearchInput" className="dropdown-search-input"
                    placeholder="Search AstroVed..." />
                <button id="closeDropdownSearchBtn" className="close-dropdown-search" onClick={closeSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    </header>

    
    <div className={`drawer-overlay ${isDrawerOpen ? 'open' : ''}`} id="drawerOverlay" onClick={closeDrawer}></div>
    <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`} id="mobileDrawer">
        <div className="drawer-header">
            <a href="/" className="drawer-logo">
                <img  src="https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg" alt="AstroVed Logo"
                    className="logo-img" />
            </a>
            <button className="close-drawer-btn" id="closeDrawer" onClick={closeDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#5C45FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        

        <div className="drawer-content">
            <div className="drawer-cta-wrapper">
                <a href="#"
                    style={{background: '#4C35E6', color: '#ffffff', width: '100%', display: 'flex', justifyContent: 'center', padding: '12px', fontWeight: '600', fontSize: '14px', textDecoration: 'none', borderRadius: '25px', transition: 'all 0.3s'}}>Speak
                    to Astrologer</a>
            </div>
            <ul className="drawer-nav">
                <li className={`has-drawer-dropdown ${openDrawerDropdown === 0 ? 'active' : ''}`}>
                    <a href="#" className="drawer-link" onClick={(e) => toggleDrawerDropdown(e, 0)}>Home <span className="drawer-caret"></span></a>
                    <ul className="drawer-submenu">
                        <li><a href="#">AstroVed Home</a></li>
                        <li><a href="#">Astropedia Home</a></li>
                    </ul>
                </li>
                <li><a href="#" className="drawer-link">108 Divya Desam <span className="badge-new"
                            style={{position: 'static', marginLeft: '8px'}}>New</span></a></li>
                <li className={`has-drawer-dropdown ${openDrawerDropdown === 1 ? 'active' : ''}`}>
                    <a href="#" className="drawer-link" onClick={(e) => toggleDrawerDropdown(e, 1)}>Festivals <span className="drawer-caret"></span></a>
                    <ul className="drawer-submenu">
                        <li><a href="#">Moon Phases(Thithi)</a></li>
                        <li><a href="#">Yearly Calendar</a></li>
                        <li><a href="#">Hindu Calendar</a></li>
                    </ul>
                </li>
                <li className={`has-drawer-dropdown ${openDrawerDropdown === 2 ? 'active' : ''}`}>
                    <a href="#" className="drawer-link" onClick={(e) => toggleDrawerDropdown(e, 2)}>Fasting <span className="drawer-caret"></span></a>
                    <ul className="drawer-submenu">
                        <li><a href="#">Weekly</a></li>
                    </ul>
                </li>
                <li className={`has-drawer-dropdown ${openDrawerDropdown === 3 ? 'active' : ''}`}>
                    <a href="#" className="drawer-link" onClick={(e) => toggleDrawerDropdown(e, 3)}>Deities <span className="drawer-caret"></span></a>
                    <ul className="drawer-submenu">
                        <li><a href="#">Gods</a></li>
                        <li><a href="#">Goddess</a></li>
                        <li><a href="#">Mantras</a></li>
                        <li><a href="#">Virtual Pooja</a></li>
                    </ul>
                </li>
                <li className={`has-drawer-dropdown ${openDrawerDropdown === 4 ? 'active' : ''}`}>
                    <a href="#" className="drawer-link" onClick={(e) => toggleDrawerDropdown(e, 4)}>Temples <span className="drawer-caret"></span></a>
                    <ul className="drawer-submenu">
                        <li><a href="#">North India</a></li>
                        <li><a href="#">South India</a></li>
                        <li><a href="#">West India</a></li>
                        <li><a href="#">East India</a></li>
                        <li><a href="#">108 Divya Desam</a></li>
                    </ul>
                </li>
                <li className={`has-drawer-dropdown ${openDrawerDropdown === 5 ? 'active' : ''}`}>
                    <a href="#" className="drawer-link" onClick={(e) => toggleDrawerDropdown(e, 5)}>Astrology <span className="drawer-caret"></span></a>
                    <ul className="drawer-submenu scrollable-submenu">
                        <li><a href="#">Hora</a></li>
                        <li><a href="#">Planets</a></li>
                        <li><a href="#">Vastu</a></li>
                        <li><a href="#">Numerology</a></li>
                        <li><a href="#">Nakshatras (Stars)</a></li>
                        <li><a href="#">Panchangam</a></li>
                        <li><a href="#">Today Tithi [Moon Phase]</a></li>
                        <li><a href="#">Rahukalam</a></li>
                        <li><a href="#">Birth Date Astrology</a></li>
                        <li><a href="#">Marriage Prediction</a></li>
                        <li><a href="#">Ask Saibaba</a></li>
                        <li><a href="#">Moon Signs</a></li>
                        <li><a href="#">Choghadiya</a></li>
                        <li><a href="#">Jupiter Retrograde</a></li>
                    </ul>
                </li>
                <li className={`has-drawer-dropdown ${openDrawerDropdown === 6 ? 'active' : ''}`}>
                    <a href="#" className="drawer-link" onClick={(e) => toggleDrawerDropdown(e, 6)}>Free Tools <span className="drawer-caret"></span></a>
                    <ul className="drawer-submenu scrollable-submenu">
                        <li><a href="#">Love Calculator</a></li>
                        <li><a href="#">Dasa Bhukti</a></li>
                        <li><a href="#">Horoscope Matching</a></li>
                        <li><a href="#">Nalla Neram</a></li>
                        <li><a href="#">Chandrashtama</a></li>
                        <li><a href="#">Birth Chart</a></li>
                        <li><a href="#">Hora Watch</a></li>
                        <li><a href="#">More Free Tools</a></li>
                    </ul>
                </li>
                <li><a href="#" className="drawer-link">Astrology Services</a></li>
            </ul>
        </div>
    </div>
    </>
  );
};

export default Navbar;
