import './Landing.css';
import logo from '../assets/logo.png';
import hero from '../assets/hero.png';
import Section1 from "./Section1.tsx";
import Section2 from "./Section2.tsx";
import Section3 from "./Section3.tsx";
import Footer from "./Footer.tsx";
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
                        <span className="highlight">управление </span>
                        счетом становится<br/>
                        <span className="highlight">удобно</span>
                    </h1>
                    <h4>Простой в использовании банк для обычной жизни</h4>
                    <button className="btn--text btn--scroll-to">Узнать больше </button>
                    <img
                        src={hero}
                        className="header__img"
                        alt="Minimalist bank items"
                    />
                </div>
            </header>

            <Section1/>

            <Section2/>

            <Section3 />

            <section className="section section--sign-up">
                <div className="section__title">
                    <h3 className="section__header">
                        Лучший день когда можно было присоединиться к ТСМ Банку был год назад! Но второй сегодня
                    </h3>
                </div>
                <button className="btn btn--show-modal">Откройте свой бесплатный счет сегодня!</button>
            </section>

            <Footer />
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
