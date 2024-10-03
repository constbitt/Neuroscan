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
а интерфейс программы основан на доступности и понимании использования
          </div>
        </div>
        <div className="frame24">
          <div className="shadow">
            <div className="frame27">
              <div className="frame28">
                <div className="frame28-text">
                Искусственный
                интеллект
                </div>
                <img src={Target} alt="Target" className="target" />
              </div>
              <div className="frame27-text">
              Мы используем алгоритмы
искусственного интеллекта,
обученного на множестве реальных
рентгеновских снимках
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
              Благодаря настройке систем
диагностирования платформа
предоставляет результат в течение
нескольких секунд
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
              Легкий и понятный интерфейс
позволяет ветеринарным
специалистам использовать нашу
систему без специальной подготовки
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section4;
