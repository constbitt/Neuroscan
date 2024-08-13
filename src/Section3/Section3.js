import React from 'react';
import './Section3.css';
import Ladder from './Ladder.png';

const Section3 = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section3">
      <div className="frame34">
        <img src={Ladder} alt="Ladder" className="ladder" />
        <div className="frame30">
          <div className="frame33">
            <div className="frame33-text-title">Что мы диагностируем?</div>
            <div className="frame33-text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="frame32">
            <div className="container">
              <div className="frame31">
                <div className="frame31-text">Отек легких</div>
                <div className="frame31-percentage">60%</div>
              </div>
              <div className="progressbar">
                <div className="rectangle" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="container">
              <div className="frame31">
                <div className="frame31-text">Гидроторакс</div>
                <div className="frame31-percentage">50%</div>
              </div>
              <div className="progressbar">
                <div className="rectangle" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="container">
              <div className="frame31">
                <div className="frame31-text">Пневмоторакс</div>
                <div className="frame31-percentage">80%</div>
              </div>
              <div className="progressbar">
                <div className="rectangle" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="container">
              <div className="frame31">
                <div className="frame31-text">Коллапс трахеи</div>
                <div className="frame31-percentage">90%</div>
              </div>
              <div className="progressbar">
                <div className="rectangle" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="container">
              <div className="frame31">
                <div className="frame31-text">Новообразование</div>
                <div className="frame31-percentage">40%</div>
              </div>
              <div className="progressbar">
                <div className="rectangle" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="container">
              <div className="frame31">
                <div className="frame31-text">???</div>
                <div className="frame31-percentage">100%</div>
              </div>
              <div className="progressbar">
                <div className="rectangle" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section3;
