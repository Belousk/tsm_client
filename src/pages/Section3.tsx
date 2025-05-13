import React from 'react';

const Section3 = () => {
    return (

        <section className="section" id="section--3">
            <div className="section__title section__title--testimonials">
                <h2 className="section__description">Всё ещё не уверены?</h2>
                <h3 className="section__header">
                    Миллионы пользователей уже сделали свою жизнь проще.
                </h3>
            </div>

            <div className="slider">
                <div className="slide">
                    <div className="testimonial">
                        <h5 className="testimonial__header">Лучшее финансовое решение в жизни</h5>
                        <blockquote className="testimonial__text">
                            Всегда забывал кошелек дома и не мог оплатить покупки. С картой ТСМ Банк проблема решена
                            — все платежи через смартфон, плюс кешбэк и отсутствие комиссий. Теперь финансы под
                            контролем,
                            а покупки — в один клик. Удобно, быстро, без лишних забот!
                        </blockquote>
                        <address className="testimonial__author">
                            <img src="img/user-1.jpg" alt="" className="testimonial__photo"/>
                            <h6 className="testimonial__name">Раскольников Родион</h6>
                            <p className="testimonial__location">Санкт-Петербург, Россия</p>
                        </address>
                    </div>
                </div>

                <div className="slide">
                    <div className="testimonial">
                        <h5 className="testimonial__header">
                            Последня ступень к минималистичности
                        </h5>
                        <blockquote className="testimonial__text">
                            Куча карт, счета в разных банках — полный хаос! Перешел в ТСМ Банк, получил одну
                            универсальную карту и забыл о лишнем. Всё в одном приложении, переводы без комиссий,
                            удобный контроль расходов. Минимум лишнего — максимум удобства!
                        </blockquote>
                        <address className="testimonial__author">
                            <img src="img/user-2.jpg" alt="" className="testimonial__photo"/>
                            <h6 className="testimonial__name">Флорентиец</h6>
                            <p className="testimonial__location">Гималаи, Восток</p>
                        </address>
                    </div>
                </div>

                <div className="slide">
                    <div className="testimonial">
                        <h5 className="testimonial__header">
                            Наконец свобода от старомодных банков
                        </h5>
                        <blockquote className="testimonial__text">
                            Устал от долгих очередей и запутанных условий? С ТСМ Банк всё просто — быстрая
                            регистрация, мгновенные переводы без комиссий и управление финансами прямо в телефоне.
                            Старомодные банки остались в прошлом, теперь только удобство и свобода!
                        </blockquote>
                        <address className="testimonial__author">
                            <img src="img/user-3.jpg" alt="" className="testimonial__photo"/>
                            <h6 className="testimonial__name">Хэнк Риарден</h6>
                            <p className="testimonial__location">Филадельфия, США</p>
                        </address>
                    </div>
                </div>

                <button className="slider__btn slider__btn--left">&larr;</button>
                <button className="slider__btn slider__btn--right">&rarr;</button>
                <div className="dots"></div>
            </div>
        </section>

    );
};

export default Section3;