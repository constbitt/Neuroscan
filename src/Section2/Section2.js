import React, { useState, forwardRef } from 'react';
import './Section2.css';
import Cube from './Cube.png';
import IconDown from './IconDown.png';
import IconUp from './IconUp.png';

const Section2 = forwardRef((props, ref) => {
  const [activeItems, setActiveItems] = useState({
    0: false,
    1: false,
    2: false
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
            <p className="work-text">Как это работает???</p>
            <p className="description-text">
            Искусственный интеллект запрограммирован на распознавание патологий дыхательной системы кошек и собак, анализируя структуры органов грудной полости на рентгеновских снимках.
            </p>
          </div>
          <div className="list">
            {[ 
              { number: '01', title: 'Загрузка Снимков Боковой Проекции', description: 'Просто загрузите рентгеновский снимок вашего питомца в нашу платформу.' },
              { number: '02', title: 'Анализ', description: 'Искусственный интеллект анализирует снимки и выделяет неестественные очаги в легочной ткани.' },
              { number: '03', title: 'Отчет', description: 'Вы получаете графический отчет имеющихся патологий с процентной вероятностью за считанные минуты.' }
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