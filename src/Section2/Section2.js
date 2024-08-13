import React, { useState, forwardRef } from 'react';
import './Section2.css';
import Cube from './Cube.png';
import IconDown from './IconDown.png';
import IconUp from './IconUp.png';

const Section2 = forwardRef((props, ref) => {
  const [activeItems, setActiveItems] = useState({
    0: true,
    1: true,
    2: true
  });

  const handleClick = (index) => {
    setActiveItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <section ref={ref} className="section2">
      <div className="frame18">
        <div className="frame17">
          <div className="frame16">
            <p className="work-text">Как это работает?</p>
            <p className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
          </div>
          <div className="list">
            {[ 
              { number: '01', title: 'Загрузка Снимков', description: 'Просто загрузите рентгеновские снимки вашего питомца в нашу безопасную платформу.' },
              { number: '02', title: 'Анализ', description: 'Наша искусственная интеллект-система, разработанная с учетом новейших исследований, анализирует снимки и выделяет потенциальные проблемы.' },
              { number: '03', title: 'Отчет', description: 'В течение 24 часов вы получите детализированный отчет с рекомендациями от наших ветеринарных консультантов.' }
            ].map((item, index) => (
              <div 
                className={`item ${activeItems[index] ? 'expanded' : ''}`} 
                key={index}
                onClick={() => handleClick(index)}
              >
                <div className="frame21">
                  <div className="frame19">
                    <p className="frame19-text-01">{item.number}</p>
                    <p className={`frame19-text-loading ${activeItems[index] ? 'active' : 'inactive'}`}>{item.title}</p>
                  </div>
                  <img 
                    src={activeItems[index] ? IconDown : IconUp} 
                    alt="Icon" 
                    className={`icon ${activeItems[index] ? 'down' : 'up'}`} 
                  />
                </div>
                <p className="text-below-frame21">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img src={Cube} alt="Cube" className="cube-image" />
      </div>
    </section>
  );
});

export default Section2;