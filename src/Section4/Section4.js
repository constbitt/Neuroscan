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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
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
                Наша платформа предоставляет результаты значительно быстрее, чем традиционные методы.
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
                Легкий и интуитивно понятный интерфейс позволяет ветеринарным специалистам быстро осваивать нашу систему.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section4;
