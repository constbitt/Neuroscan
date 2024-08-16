import React, { useState, useEffect, forwardRef } from 'react';
import './Section3.css';
import Ladder from './Ladder.png';
import Diagram from './Diagram.png';
import Percents from './Percents.png';

const Section3 = forwardRef((props, ref) => {
  // Определяем начальные значения ширины
  const [progress, setProgress] = useState({
    pulmonaryEdema: 0,
    hydrothorax: 0,
    pneumothorax: 0,
    trachealCollapse: 0,
    neoplasm: 0,
    unknown: 0
  });

  useEffect(() => {
    // Анимация начинается при монтировании компонента
    setProgress({
      pulmonaryEdema: 60,
      hydrothorax: 50,
      pneumothorax: 80,
      trachealCollapse: 90,
      neoplasm: 40,
      unknown: 100
    });
  }, []);

  return (
    <div ref={ref} className="section3">
      <div className="frame34">
        <img src={Ladder} alt="Ladder" className="ladder" />
        <div className="frame30">
          <div className="frame33">
            <div className="frame33-text-title">Что мы диагностируем?</div>
            <div className="frame33-text-description">
              На обучение платформы затрачено более двух тысяч рентгеновских снимков с наиболее встречающимися заболеваниями дыхательной системы
            </div>
          </div>
          <div className="frame32">
            <img src={Diagram} alt="Diagram" className="diagram" />
            <img src={Percents} alt="Percents" className="percents" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section3;
