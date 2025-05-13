import React from 'react';
import { useState } from 'react';
const Section2 = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs =[

    {
        id: 1,
            icon: 'icon-upload',
        header: 'Мгновенные переводы',
        h5: 'Переводи деньги другому мгновенно! Без коммисии',
        text: 'С картой ТСМ Банк ваши переводы происходят за секунды — без скрытых платежей и' +
            ' дополнительных комиссий. Отправляйте деньги друзьям, оплачивайте покупки или пополняйте' +
            ' счета моментально. Быстро, удобно и бесплатно! Оформите карту и пользуйтесь выгодами уже' +
            ' сегодня!',
    },
    {
        id: 2,
            icon: 'icon-home',
        header: 'Быстрая выдача кредита',
        h5: 'Купи дом или исполни свою мечту! Кредит оформляется быстро',
        text: 'Оформление кредита — просто. Минимум документов, прозрачные условия...',
    },
    {
        id: 3,
            icon: 'icon-user-x',
        header: 'Мгновенное закрытие',
        h5: 'Закрывайте счет легко — без визита в банк!',
        text: 'Закрытие счёта онлайн — быстро, безопасно, удобно.',
    },
];


    return (

        <section className="section" id="section--2">
            <div className="section__title">
                <h2 className="section__description">Операции</h2>
                <h3 className="section__header">
                    Все довольно таки просто, но не проще
                </h3>
            </div>

            <div className="operations">
                <div className="operations__tab-container">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`btn operations__tab operations__tab--${tab.id} ${
                                activeTab === tab.id ? 'operations__tab--active' : ''
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span>0{tab.id}</span> {tab.header}
                        </button>
                    ))}
                </div>

                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`operations__content operations__content--${tab.id} ${
                            activeTab === tab.id ? 'operations__content--active' : ''
                        }`}
                    >
                        <div className={`operations__icon operations__icon--${tab.id}`}>
                            <svg>
                                <use xlinkHref={`/icons.svg#${tab.icon}`}/>
                            </svg>
                        </div>
                        <h5 className="operations__header">{tab.header}</h5>
                        <p>{tab.text}</p>
                    </div>
                ))}
            </div>

        </section>

    );
};

export default Section2;