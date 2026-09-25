"use client";

import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="manglik-faq-section">
        
        <div className="faq-bg-moon"></div>
        <div className="faq-bg-stars"></div>

        <div className="container faq-container">
            <div className="faq-header">
                <h2 className="faq-title">Frequently Asked <span className="purple-text">Questions</span></h2>
                <div className="gf-star-divider" style={{marginBottom: '0'}}>
                    <div className="gf-sd-line left"></div>
                    <div className="gf-sd-circle"><span className="gf-star">✦</span></div>
                    <div className="gf-sd-line right"></div>
                </div>
            </div>

            <div className="faq-accordion">
                
                <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                    <div className="faq-question">
                        <h3 className="faq-q-text">Can Manglik Dosha be removed?</h3>
                        <button className="faq-toggle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">
                            <p>The effects can be balanced. Beneficial planetary aspects, remedies like the Mangal
                                Shanti Homa, or matching with another Manglik partner can all reduce its impact.</p>
                        </div>
                    </div>
                </div>

                
                <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                    <div className="faq-question">
                        <h3 className="faq-q-text">Is Manglik Dosha the same as Kuja Dosha or Mangal Dosh?</h3>
                        <button className="faq-toggle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">
                            <p>Yes. Manglik Dosha, Mangal Dosh, and Kuja Dosha all refer to the same placement - Mars in
                                specific houses of your birth chart. The names vary by region and language, not by
                                meaning.</p>
                        </div>
                    </div>
                </div>

                
                <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                    <div className="faq-question">
                        <h3 className="faq-q-text">What is Anshik (Partial) Manglik?</h3>
                        <button className="faq-toggle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">
                            <p>A milder form of the placement. Mars&apos;s influence is present but weaker, usually due to
                                its house position or aspects from other planets. It carries less weight than a full
                                Manglik Dosha.</p>
                        </div>
                    </div>
                </div>

                
                <div className={`faq-item ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                    <div className="faq-question">
                        <h3 className="faq-q-text">Is Manglik Dosha the same for boys and girls?</h3>
                        <button className="faq-toggle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">
                            <p>The calculation is identical for both. Traditional readings sometimes emphasize different
                                things - marriage timing for women, temperament for men - but the underlying placement
                                works the same way.</p>
                        </div>
                    </div>
                </div>

                
                <div className={`faq-item ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
                    <div className="faq-question">
                        <h3 className="faq-q-text">Does Manglik Dosha cancel after 28 years?</h3>
                        <button className="faq-toggle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">
                            <p>No. This is a common myth, not a classical rule. Cancellation depends on your chart&apos;s
                                specific combinations, not your age and remedies that you perform according to your
                                birth chart. You need to consult an expert astrologer before performing any such remedy.
                            </p>
                        </div>
                    </div>
                </div>

                
                <div className={`faq-item ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleFaq(5)}>
                    <div className="faq-question">
                        <h3 className="faq-q-text">Can two Manglik people marry each other?</h3>
                        <button className="faq-toggle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                    <div className="faq-answer">
                        <div className="faq-answer-inner">
                            <p>Yes. Traditional belief holds that two Manglik charts cancel each other&apos;s effect, making
                                this one of the most commonly recommended matches for a Manglik individual.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  );
};

export default FAQ;
