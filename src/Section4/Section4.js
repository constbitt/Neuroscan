import React, { forwardRef } from 'react';
import './Section4.css';
import Target from './Target.png';
import Lock from './Lock.png';
import Arrow from './Arrow.png';
import TargetHover from './TargetHover.png';

const Section4 = forwardRef((props, ref) => {
  return (
    <div className="section4" ref={ref}>
      <div className="frame23">
        <div className="frame25">
          <div className="heading2">
            <div className="heading2-text">
              Преимущества
            </div>
            <div className="group1">
              <div className="background"></div>
              <div className="horizontal-divider"></div>
            </div>
          </div>
          <div className="frame25-text">
          Платформа создавалась на основе базовых принципов диагностики: быстрота и точность определения заболевания, 
          а интерфейс программы основан на доступности и понимании использования.    
          </div>
        </div>
        <div className="frame24">
          <div className="shadow">
            <div className="frame27">
              <div className="frame28">
                <div className="frame28-text">
                  Точность
                </div>
                <img src={Target} alt="Target" className="target" />
              </div>
              <div className="frame27-text">
                Мы используем алгоритмы машинного обучения, обученные на огромном количестве рентгеновских изображений, что обеспечивает точность диагностики.
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="frame27">
              <div className="frame28">
                <div className="frame28-text">
                  Скорость
                </div>
                <img src={Arrow} alt="Arrow" className="arrow" />
              </div>
              <div className="frame27-text">
              Платформа благодаря качественной настройке систем диагностирования и искуственного интелекта может предоставлять результат в течение нескольких минут.
              </div>
            </div>
          </div>
          <div className="shadow">
            <div className="frame27">
              <div className="frame28">
                <div className="frame28-text">
                  Доступность
                </div>
                <img src={Lock} alt="Lock" className="lock" />
              </div>
              <div className="frame27-text">
              Легкий и понятный интерфейс позволяет ветеринарным специалистам быстро осваивать нашу систему.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section4;
