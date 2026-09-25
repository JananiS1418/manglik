import React from 'react';

const ManglikInfo = () => {
    return (
        <section style={{ backgroundColor: '#ffffff', padding: '40px 20px', fontFamily: '"Inter", sans-serif' }}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .manglik-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background-color: #D47300;
                    color: #fff;
                    padding: 12px 24px;
                    border-radius: 30px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    box-shadow: 0 4px 6px rgba(212, 115, 0, 0.2);
                }
                .manglik-cta-btn:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 8px 15px rgba(212, 115, 0, 0.3);
                    background-color: #e68a19;
                }
                .manglik-cta-btn svg {
                    transition: transform 0.3s ease;
                }
                .manglik-cta-btn:hover svg {
                    transform: translateX(4px);
                }
                .premium-text-link {
                    color: #D47300;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }
                .premium-text-link:hover {
                    color: #2D1854;
                    text-decoration-color: #2D1854;
                }
                `
            }} />
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                
                {/* Section 1: What is Mangal Dosha */}
                <div>
                    <h2 style={{ color: '#2D1854', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                        What Is Mangal Dosha (Chevvai Dosham)?
                    </h2>
                    <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.7' }}>
                        <p style={{ marginBottom: '15px' }}><a href="https://www.astroved.com/articles/mangal-dosha" className="premium-text-link">Mangal Dosha</a> is a condition in Vedic astrology formed when Mars is placed in certain houses of the birth chart that are linked with marriage, family life, and relationships.</p>
                        <p style={{ marginBottom: '15px' }}>Mars, also called Mangal, Kuja, or Angaraka, represents energy, courage, passion, and action. When its influence falls strongly on relationship-related areas of the horoscope, astrologers study how it may affect compatibility and married life.</p>
                        <p style={{ marginBottom: '15px' }}>A person with this combination is commonly called Manglik.</p>
                        <p style={{ marginBottom: '15px' }}>Kuja Dosha, Mangal Dosha, Manglik Dosha, and Chevvai or Sevvai Dosham refer to the same Mars-related condition. The name changes by region, but the astrological concept remains the same.</p>
                        <p style={{ marginBottom: '0' }}>The actual effect depends on where Mars is placed and how it interacts with the rest of the birth chart.</p>
                    </div>
                </div>

                {/* Section 2: How is it Calculated */}
                <div>
                    <h2 style={{ color: '#2D1854', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                        Mangal Dosha calculation method and chart analysis
                    </h2>
                    <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.7' }}>
                        <p style={{ marginBottom: '15px' }}>Mangal Dosha is calculated by checking the position of Mars in your birth chart using your date, exact time, and place of birth.</p>
                        <p style={{ marginBottom: '15px' }}>A Manglik Dosha calculator first creates your Kundli and then checks whether Mars is placed in the houses traditionally associated with Mangal Dosha. The Lagna (Ascendant) is the main reference point, while some methods also consider Mars from the Moon and Venus.</p>
                        <p style={{ marginBottom: '20px' }}>If Mars falls in one of these sensitive positions, you may be identified as Manglik. If it does not, you are generally considered non-Manglik.</p>
                        
                        <div style={{ marginBottom: '20px' }}>
                            <a href="https://www.astroved.com/astrovedspeaks/" className="manglik-cta-btn">
                                Check your manglik with our astrologer
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <p style={{ marginBottom: '0' }}>The result is not based on Mars alone. Its strength, sign, aspects, and possible cancellation factors also help determine how strongly the Dosha may influence your chart.</p>
                    </div>
                </div>

                {/* Section 3: Which Houses Cause Mangal Dosha */}
                <div>
                    <h2 style={{ color: '#2D1854', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                        Which Houses Cause Mangal Dosha?
                    </h2>
                    <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.7' }}>
                        <p style={{ marginBottom: '15px' }}><a href="https://www.astroved.com/articles/characteristics-of-the-12-zodiac-signs" className="premium-text-link">Several houses</a> influence your marriage compatibility and your relationship with your partner.</p>
                        <p style={{ marginBottom: '15px' }}>Mangal Dosha is traditionally considered when Mars occupies the 1st, 2nd, 4th, 7th, 8th, or 12th house of the <a href="https://www.astroved.com/kundali-report/" className="premium-text-link">birth chart</a>. These houses are closely connected with personality, family life, home, marriage, intimacy, and adjustment in relationships.</p>
                        <p style={{ marginBottom: '15px' }}>The influence of Mars may be understood differently depending on the house:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px', color: '#2D1854' }}>
                            <li style={{ marginBottom: '10px' }}><span style={{ color: '#4a4a4a' }}><strong>1st House:</strong> May bring a strong, assertive temperament that can influence relationships.</span></li>
                            <li style={{ marginBottom: '10px' }}><span style={{ color: '#4a4a4a' }}><strong>4th House:</strong> May affect domestic peace, emotional comfort, and harmony at home.</span></li>
                            <li style={{ marginBottom: '10px' }}><span style={{ color: '#4a4a4a' }}><strong>7th House:</strong> Directly influences marriage, partnership, and the way one relates to a spouse.</span></li>
                            <li style={{ marginBottom: '10px' }}><span style={{ color: '#4a4a4a' }}><strong>8th House:</strong> May influence intimacy, trust, shared responsibilities, and marital stability.</span></li>
                            <li style={{ marginBottom: '0px' }}><span style={{ color: '#4a4a4a' }}><strong>12th House:</strong> May affect private life, emotional closeness, expenses, and adjustment between partners.</span></li>
                        </ul>
                        <p style={{ marginBottom: '0' }}>A Mars placement in these houses does not automatically indicate marital problems. Its actual influence depends on Mars's strength, sign, aspects, and the overall birth chart.</p>
                    </div>
                </div>

                {/* Section 4: Effects on Marriage */}
                <div>
                    <h2 style={{ color: '#2D1854', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                        What Are the Effects of Mangal Dosha on Marriage and Relationships?
                    </h2>
                    <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.7' }}>
                        <p style={{ marginBottom: '15px' }}>Mangal Dosha is traditionally examined for its possible influence on marriage, compatibility, and relationship harmony. When Mars is strong in sensitive relationship areas of the chart, its fiery nature may show through in married life.</p>
                        <p style={{ marginBottom: '15px' }}><strong>Commonly associated effects may include:</strong></p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', color: '#2D1854' }}>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Delay or obstacles in marriage</span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Frequent disagreements or impatience</span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Strong temper or dominant behavior</span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Difficulty adjusting with a partner</span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Emotional or physical distance</span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Stress in family or married life</span></li>
                            <li style={{ marginBottom: '0' }}><span style={{ color: '#4a4a4a' }}>Challenges in maintaining harmony</span></li>
                        </ul>
                        
                        <p style={{ marginBottom: '15px' }}>These effects are <strong>not the same for everyone.</strong> A well-supported Mars can also bring courage, loyalty, passion, and the strength to protect a relationship.</p>
                        <p style={{ marginBottom: '15px' }}><strong>Mangal Dosha in a Girl</strong><br/>The same astrological rules apply. Its influence is judged from the complete horoscope, not gender alone.</p>
                        <p style={{ marginBottom: '15px' }}><strong>Mangal Dosha in a Boy</strong><br/>The interpretation also depends on Mars’s strength, house placement, and the overall birth chart.</p>
                        <p style={{ marginBottom: '0' }}>Having Mangal Dosha does not automatically mean an unhappy marriage. Other planetary combinations may reduce, balance, or even cancel its effects.</p>
                    </div>
                </div>

                {/* Section 5: Can a Manglik Marry a Non-Manglik */}
                <div>
                    <h2 style={{ color: '#2D1854', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                        Can a Manglik Marry a Non-Manglik?
                    </h2>
                    <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.7' }}>
                        <p style={{ marginBottom: '15px' }}><strong>Yes.</strong> A Manglik and a non-Manglik can be compatible when the overall birth charts support the match.</p>
                        <p style={{ marginBottom: '15px' }}>Mangal Dosha is only one part of marriage compatibility. Astrologers also study the 7th house, Venus, Jupiter, Moon, Navamsa, Dashas, and the overall strength of both charts.</p>
                        <p style={{ marginBottom: '0' }}>At AstroVed, Manglik status is viewed as part of the complete marriage compatibility picture, not as a single deciding factor.</p>
                    </div>
                </div>

                {/* Section 6: When is Mangal Dosha Cancelled */}
                <div>
                    <h2 style={{ color: '#2D1854', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                        When Is Mangal Dosha Cancelled?
                    </h2>
                    <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.7' }}>
                        <p style={{ marginBottom: '15px' }}>You may wonder if you can cancel your manglik condition. Yes, Mangal Dosha may be reduced or cancelled when certain supportive planetary combinations are present in the birth chart.</p>
                        <p style={{ marginBottom: '15px' }}>Astrologers look at factors such as Mars&apos;s sign, strength, aspects, conjunctions, and the condition of marriage-related houses before deciding how strongly the Dosha applies.</p>
                        <p style={{ marginBottom: '15px' }}>The idea that Mangal Dosha automatically disappears after <strong>age 28</strong> is not treated as a universal rule. The chart still needs to be examined individually.</p>
                        <p style={{ marginBottom: '0' }}>An astrologer can review your complete horoscope to understand whether the Dosha is <strong>active, reduced, or cancelled</strong>, and what it may mean for your marriage.</p>
                    </div>
                </div>

                {/* Section 7: Traditional Remedies */}
                <div>
                    <h2 style={{ color: '#2D1854', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>
                        What Are the Traditional Remedies for Mangal Dosha?
                    </h2>
                    <div style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.7' }}>
                        <p style={{ marginBottom: '15px' }}><a href="https://www.astroved.com/dosha-pariharam/manglik-dosha-remedies/" className="premium-text-link">Traditional remedies for Mangal Dosha</a> are chosen based on how Mars is placed and supported in the birth chart. The aim is to balance Mars&apos;s influence rather than follow the same remedy for everyone.</p>
                        <p style={{ marginBottom: '15px' }}><strong>Commonly recommended practices include:</strong></p>
                        
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px', color: '#2D1854' }}>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}><strong><a href="https://www.astroved.com/planetary-fire-lab-mars-fire-lab-mars-planetary-blessings-homa--P52.aspx" className="premium-text-link">Mangal Shanti Homa</a> / Kuja Dosha Nivarana Homa</strong></span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Chanting Mars-related mantras</span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}><strong>Navagraha Homa</strong> for broader planetary support</span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Tuesday prayers with <a href="https://www.astroved.com/planets-mars-yantra-3-inch-p23.aspx" className="premium-text-link">mars yantra</a>, fasting, or charity</span></li>
                            <li style={{ marginBottom: '8px' }}><span style={{ color: '#4a4a4a' }}>Worship of <strong>Lord Hanuman or Lord Muruga</strong></span></li>
                            <li style={{ marginBottom: '0' }}><span style={{ color: '#4a4a4a' }}>Other <em>Pariharam</em> recommended after chart analysis</span></li>
                        </ul>

                        <div style={{
                            backgroundColor: '#fff7ed',
                            border: '1px solid #ffedd5',
                            borderRadius: '12px',
                            padding: '20px 25px',
                            marginBottom: '20px',
                            color: '#2a1a4a',
                            fontSize: '15px',
                            lineHeight: '1.6'
                        }}>
                            At AstroVed, <strong><a href="https://www.astroved.com/temple/chevvai-bhagavan-temple/" className="premium-text-link">Vedic Homas and Poojas</a></strong> are performed by experienced priests <strong>following traditional procedures</strong>, with options for personalized participation using your name and birth star.
                        </div>

                        <p style={{ marginBottom: '25px' }}>Since the right remedy depends on your individual horoscope, it is best to first understand <strong>whether Mangal Dosha is present, how strong it is, and whether any cancellation factors already apply.</strong></p>
                    
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a href="#explore" className="manglik-explore-btn" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: '#D47300',
                                color: '#fff',
                                padding: '12px 24px',
                                borderRadius: '30px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '15px'
                            }}>
                                Explore Mangal Dosha Remedies
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#consult" className="manglik-consult-btn" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: 'transparent',
                                border: '2px solid #D47300',
                                color: '#D47300',
                                padding: '10px 24px',
                                borderRadius: '30px',
                                textDecoration: 'none',
                                fontWeight: '600',
                                fontSize: '15px'
                            }}>
                                Consult Astrologer
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <style>{`
                .manglik-explore-btn {
                    transition: all 0.3s ease !important;
                }
                .manglik-explore-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 15px rgba(212, 115, 0, 0.4);
                    background-color: #b36100 !important;
                }
                .manglik-consult-btn {
                    transition: all 0.3s ease !important;
                }
                .manglik-consult-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 15px rgba(212, 115, 0, 0.2);
                    background-color: #fff9f0 !important;
                    color: #b36100 !important;
                    border-color: #b36100 !important;
                }
            `}</style>
        </section>
    );
};

export default ManglikInfo;
