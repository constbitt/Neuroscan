import React from 'react';
import './Footer.css';
import ScrollIcon from './Scroll.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="frame42">
                <div className="frame41">
                    <p className="footer-text-left">© 2024 Нейроскан. Все права защищены.</p>
                    <p className="footer-text-right">
                        Designed by <a href="https://www.behance.net/050eabb7" className="designer-link">KotuneN</a>
                    </p>
                </div>
                <img 
                    src={ScrollIcon} 
                    alt="Scroll to top" 
                    className="scroll-icon" 
                    onClick={scrollToTop} 
                />
            </div>
        </footer>
    );
};

export default Footer;
