import './Landing.css';
import logo from '../assets/logo.png';
import hero from '../assets/hero.png';
import Section1 from "./Section1.tsx";
import Section2 from "./Section2.tsx";
const Landing = () => {
    return (
        <>

            <header className="header">
                <nav className="nav">
                    <img
                        src={logo}
                        alt="TSM logo"
                        className="nav__logo"
                        id="logo"
                        data-version-number="3.0"
                    />
                    <ul className="nav__links">
                        <li className="nav__item">
                            <a className="nav__link" href="#section--1">Преимущества</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#section--2">Операции</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#section--3">Отзывы</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link nav__link--btn btn--show-modal" href="#"
                            >Открыть счет</a
                            >
                        </li>
                    </ul>
                </nav>

                <div className="header__title">
                    <h1>

                        <span className="highlight">управление счетом</span>
                        становится<br/>
                        <span className="highlight">удобно</span>
                    </h1>
                    <h4>Простой в использовании банк для обычной жизни</h4>
                    <button className="btn--text btn--scroll-to">Узнать больше  &DownArrow;</button>
                    <img
                        src={hero}
                        className="header__img"
                        alt="Minimalist bank items"
                    />
                </div>
            </header>

            <Section1/>

            <Section2/>
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

            <section className="section section--sign-up">
                <div className="section__title">
                    <h3 className="section__header">
                        Лучший день когда можно было присоединиться к ТСМ Банку был год назад! Но второй сегодня
                    </h3>
                </div>
                <button className="btn btn--show-modal">Откройте свой бесплатный счет сегодня!</button>
            </section>

            <footer className="footer">
                <ul className="footer__nav">
                    <li className="footer__item">
                        <a className="footer__link" href="#">О компании</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">Расценки</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">Положения</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">Правила конфедециальности</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">Карьера</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">Блог</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#">Свяжитесь с нами</a>
                    </li>
                </ul>
                <img src="img/icon.png" alt="Logo" className="footer__logo"/>
                <p className="footer__copyright">
                    &copy; Copyright by
                    <a
                        className="footer__link twitter-link"
                        target="_blank"
                        href="https://twitter.com/jonasschmedtman"
                    >Jonas Schmedtmann</a
                    >. Use for learning or your portfolio. Don't use to teach. Don't claim
                    as your own product.
                </p>
            </footer>

            <div className="modal hidden">
                <button className="btn--close-modal">&times;</button>
                <h2 className="modal__header">
                    Откройте свой счет <br/>
                    всего лишь за <span className="highlight">5 минут</span>
                </h2>
                <form className="modal__form">
                    <label>First Name</label>
                    <input type="text"/>
                    <label>Last Name</label>
                    <input type="text"/>
                    <label>Email Address</label>
                    <input type="email"/>
                    <button className="btn">Next step &rarr;</button>
                </form>
            </div>
            <div className="overlay hidden"></div>
        </>
    );
};

export default Landing;
