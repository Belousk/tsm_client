import React from 'react';

const Footer = () => {
    return (
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
                        href="https://t.me/b_e_1_0_4_k_a"
                    > Belous Kirill</a>
                </p>
            </footer>

    );
};

export default Footer;