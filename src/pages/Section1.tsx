import React from 'react';
import digital_lazy from '../assets/digital-lazy.jpg'
import digital from '../assets/digital.jpg'
import grow_lazy from '../assets/grow-lazy.jpg'
import grow from '../assets/grow.jpg'
import card_lazy from '../assets/card-lazy.jpg'
import card from '../assets/card-lazy.jpg'
import LazyImage from "../components/LazyImage.tsx";


const Section1 = () => {
    return (

        <section className="section" id="section--1">
            <div className="section__title">
                <h2 className="section__description">Преимущества</h2>
                <h3 className="section__header">
                    Все что нужно в современном банке и не только
                </h3>
            </div>

            <div className="features">
                <LazyImage
                    placeholder={digital_lazy}
                    src={digital}
                    alt="Computer"
                    className="features__img"
                />
                <div className="features__feature">
                    <div className="features__icon">
                        <svg>
                            <use xlinkHref="/icons.svg#icon-monitor"/>
                        </svg>
                    </div>
                    <h5 className="features__header">100% цифровой банк</h5>
                    <p>
                        ТСМ Банк — полностью цифровой, без отделений и бумажной волокиты. Управляйте финансами из
                        любой точки мира через удобное мобильное приложение. Открывайте счета, переводите деньги,
                        инвестируйте — всё быстро, безопасно и без лишних затрат!
                    </p>
                </div>

                <div className="features__feature">
                    <div className="features__icon">
                        <svg>
                            <use xlinkHref="/icons.svg#icon-trending-up"/>
                        </svg>
                    </div>
                    <h5 className="features__header">Смотри как твои деньги растут</h5>
                    <p>
                        Инвестируйте с умом и наблюдайте, как ваш капитал увеличивается. ТСМ Банк предлагает
                        выгодные депозиты, автоматизированные инвестиции и аналитические инструменты. Ваши деньги
                        работают на вас, принося прибыль каждый день — без лишних усилий!
                    </p>
                </div>
                <LazyImage
                    placeholder={grow_lazy}
                    src={grow}
                    alt="Computer"
                    className="features__img"
                />
                <LazyImage
                    placeholder={card_lazy}
                    src={card}
                    alt="Computer"
                    className="features__img"
                />
                <div className="features__feature">
                    <div className="features__icon">
                        <svg>
                            <use xlinkHref="/icons.svg#icon-credit-card"/>
                        </svg>
                    </div>
                    <h5 className="features__header">Бесплатная дебитовая карта включена</h5>
                    <p>
                        Открывая счет в ТСМ Банк, вы сразу получаете бесплатную дебетовую карту. Снимайте наличные,
                        оплачивайте покупки по всему миру и управляйте финансами через приложение. Без скрытых
                        комиссий — только удобство и свобода ваших платежей!
                    </p>
                </div>
            </div>
        </section>

    );
};

export default Section1;