import React, { useState } from 'react';
import './Header.css';

const Header = ({ scrollToSection1, scrollToSection2, scrollToSection3, scrollToSection4, scrollToSection5, handleSectorMainClick }) => {
  const [btnState, setBtnState] = useState('default');

  const handleMouseEnter = () => {
    setBtnState('hover');
  };

  const handleMouseLeave = () => {
    setBtnState('default');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    setBtnState('click');
    scrollToTop();

    setTimeout(() => {
      handleSectorMainClick();
      setBtnState('default');
    }, 600);
  };

  return (
    <header className="header">
      <div className="frame15">
        <div className="frame39">
          <div className="text-box">
            Нейроскан
          </div>
        </div>
        <div className="frame14">
          <div className="frame38">
            <div className="text-block" onClick={scrollToSection1} style={{ cursor: 'pointer' }}>
              О нас
            </div>
            <div className="text-block" onClick={scrollToSection2} style={{ cursor: 'pointer' }}>
              Как это работает
            </div>
            <div className="text-block" onClick={scrollToSection3} style={{ cursor: 'pointer' }}>
              Что мы диагностируем
            </div>
            <div className="text-block" onClick={scrollToSection4} style={{ cursor: 'pointer' }}>
              Преимущества
            </div>
            <div className="text-block contacts" onClick={scrollToSection5} style={{ cursor: 'pointer' }}>
              Контакты
            </div>
          </div>
          <button
            className={`btn2 ${btnState}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            Приступить
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
