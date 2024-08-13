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
              В компании Нейроскан мы понимаем, насколько важны ваши любимцы. Наше стремление — сделать диагностику рентгеновских снимков для кошек и собак более доступной и точной. Мы объединяем передовые технологии и опыт лучших ветеринарных специалистов, чтобы обеспечить здоровье и благополучие ваших питомцев.
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
              Мы стремимся улучшить диагностику заболеваний у домашних животных, предоставляя ветеринарным клиникам удобный и высококачественный инструмент для анализа рентгеновских снимков. Наша цель — не просто увидеть проблему, но и понять ее корень, что позволяет ветеринарам принимать более обоснованные решения.
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
