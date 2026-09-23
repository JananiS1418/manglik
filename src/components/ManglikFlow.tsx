"use client";

import React, { useState } from 'react';
import Hero from './Hero';
import Result from './Result';



const ManglikFlow = () => {
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isManglik, setIsManglik] = useState(false);
  const [loadingText, setLoadingText] = useState("Calculate Manglik Dosha");

  const handleCalculate = () => {
    if (isCalculating) return;

    setIsCalculating(true);
    setLoadingText("✨ Analyzing Birth Chart...");

    setTimeout(() => {
        setLoadingText("✨ Checking Mars Position...");
    }, 300);

    setTimeout(() => {
        setLoadingText("✨ Calculating Manglik Dosha...");
    }, 600);

    setTimeout(() => {
        setIsCalculating(false);
        setLoadingText("Calculate Manglik Dosha");
        
        const randomResult = Math.random() < 0.5;
        setIsManglik(randomResult);
        setShowResult(true);

        setTimeout(() => {
            const resultSection = document.getElementById('resultSection');
            if (resultSection) {
                resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 50);

    }, 1000);
  };

  return (
    <>
      <Hero 
        onCalculate={handleCalculate} 
        isCalculating={isCalculating} 
        loadingText={loadingText} 
      />
      <div className="elegant-section-breaker">
        <svg width="100%" max-width="600" height="24" viewBox="0 0 600 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '600px', display: 'block', margin: '0 auto'}}>
            <line x1="0" y1="12" x2="260" y2="12" stroke="#be123c" strokeWidth="1" strokeDasharray="4 6"
                opacity="0.4" />
            <circle cx="300" cy="12" r="6" fill="#d4af37" />
            <circle cx="280" cy="12" r="3" fill="#be123c" opacity="0.8" />
            <circle cx="320" cy="12" r="3" fill="#be123c" opacity="0.8" />
            <line x1="340" y1="12" x2="600" y2="12" stroke="#be123c" strokeWidth="1" strokeDasharray="4 6"
                opacity="0.4" />
        </svg>
      </div>
      {/* We always render these if showResult is true. They will mount and trigger their internal entrance animations */}
      {showResult && (
        <Result isVisible={showResult} isManglik={isManglik} />
      )}
    </>
  );
};

export default ManglikFlow;
