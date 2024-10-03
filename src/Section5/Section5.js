import React, { forwardRef } from 'react';
import './Section5.css';
import FondImg from './Fond.png';

const Section5 = forwardRef(({ handleSectorMainClick }, ref) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleClick = () => {
        scrollToTop();
        setTimeout(() => {
            handleSectorMainClick();
        }, 500);  // Adjust the delay if needed
    };

    return (
        <div className="section5" ref={ref}>
            <div className="frame50">
                <div className="paragraph">
                    <div className="frame43">
                        <div className="frame43-text-top">
                            Присоединяйтесь к Нам
                        </div>
                        <div className="frame43-text-bottom">
                        Давайте вместе заботиться о здоровье наших пушистых друзей
и качественнее диагностировать заболевания домашних
животных!
                        </div>
                    </div>
                    <button
                    className={`btn3`}
                    onClick={handleClick}
                    >Приступить</button>
                </div>
                <div className="frame45">
                    <div className="frame44">
                        <div className="frame44-text-top">
                            Проект: Анастасии Погодаевой
                        </div>
                        <div className="frame44-text-bottom">
                            Номер телефона: +7 (999) 777-00-00 Почта: nast@mail.com
                        </div>
                    </div>
                    <div className="frame29">
                        <img src={FondImg} alt="Fond" />
                        <div className="frame29-text">
                        Проект поддержан Фондом содействия инновациям в
рамках программы «Студенческий стартап» федерального
проекта «Платформа университетского технологического
предпринимательства»
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Section5;
