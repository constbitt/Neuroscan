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
            <p className="work-text">Как это работает???</p>
            <p className="description-text">
            Искусственный интеллект анализирует структуры органов грудной полости кошек и собак на
рентгеновских снимках и распознает патологии дыхательной системы
            </p>
          </div>
          <div className="list">
            {[ 
              { number: '01', title: 'Загрузка', description: 'Вы загружаете рентгеновский снимок боковой проекции вашего питомца на платформу' },
              { number: '02', title: 'Анализ', description: 'Искусственный интеллект анализирует снимки и выделяет неестественные очаги в легочной ткани' },
              { number: '03', title: 'Отчет', description: 'Вы получаете графический отчет имеющихся патологий с процентной вероятностью за считанные минуты' }
            ].map((item, index) => (
              <div 
                className={`item ${activeItems[index] ? 'expanded' : ''}`} 
                key={index}
               
              >
                <div className="frame21">
                  <div className="frame19">
                    <p className="frame19-text-01">{item.number}</p>
                    <p className={`frame19-text-loading ${activeItems[index] ? 'active' : 'inactive'}`}>{item.title}</p>
                  </div>

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