import React, { forwardRef } from 'react';
import './Section1.css';
import Tick from './Tick.png';

const Section1 = forwardRef(({ handleSectorMainClick }, ref) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    scrollToTop();

    setTimeout(() => {
      handleSectorMainClick(); // Вызов handleClic из SectorMain после скролла
    }, 600); // Устанавливаем задержку, аналогичную Header
  };

  return (
    <section ref={ref} className="section1">
      <div className="frame11">
        <div className="frame12">
          <div className="about-text">О нас</div>
          <div className="group1">
            <div className="background"></div>
            <div className="horizontal-divider"></div>
          </div>
        </div>
        <div className="frame10">
          <div className="frame8">
            <p className="info-text">
            Компания Нейроскан понимает, насколько важны ваши любимцы,
поэтому наша цель — сделать диагностику заболеваний более
точной и доступной, предоставляя ветеринарным клиникам
удобный и быстрый инструмент для анализа рентгеновских
снимков 
            </p>
            <div className="list">
              <div className="list-item">
                <img src={Tick} alt="Tick" className="tick" />
                <span className="list-text">Быстрый результат</span>
              </div>
              <div className="list-item">
                <img src={Tick} alt="Tick" className="tick" />
                <span className="list-text">Инновационный подход</span>
              </div>
              <div className="list-item">
                <img src={Tick} alt="Tick" className="tick" />
                <span className="list-text">Перспективное решение для вашей клиники</span>
              </div>
            </div>
          </div>
          <div className="frame9">
            <p>
            Мы стремимся улучшить диагностику заболеваний у домашних животных,
объединяя передовые технологии и опыт лучших ветеринарных
специалистов, чтобы обеспечить здоровье и благополучие ваших питомцев  
            </p>
            <button
              className={`btn3`}
              onClick={handleClick}
            >Приступить</button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section1;
