import { useState, useEffect, useCallback } from 'react';
import './Slider.css';
import user_1 from "../assets/user-1.jpg"
import user_2 from "../assets/user-2.jpg"
import user_3 from "../assets/user-3.jpg"


type Slide = {
    header: string;
    text: string;
    name: string;
    location: string;
    img: string;
};

const slides: Slide[] = [
    {
        header: 'Лучшее финансовое решение в жизни',
        text:
        "Всегда забывал кошелек дома и не мог оплатить покупки. С картой ТСМ Банк проблема решена" +
            " — все платежи через смартфон, плюс кешбэк и отсутствие комиссий. Теперь финансы под" +
            " контролем," +
            " а покупки — в один клик.\n Удобно, быстро, без лишних забот!",
        name: 'Раскольников Родион',
        location: 'Санкт-Петербург, Россия',
        img: user_1,
    },
    {
        header: 'Последняя ступень к минималистичности',
        text:
            'Куча карт, счета в разных банках — полный хаос! Перешел в ТСМ Банк, получил одну универсальную карту.',
        name: 'Флорентиец',
        location: 'Гималаи, Восток',
        img: user_2,
    },
    {
        header: 'Наконец свобода от старомодных банков',
        text:
            'С ТСМ Банк всё просто — быстрая регистрация, мгновенные переводы и управление финансами прямо в телефоне.',
        name: 'Хэнк Риарден',
        location: 'Филадельфия, США',
        img: user_3,
    },
];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="slide"
                    style={{
                        transform: `translateX(${100 * (index - currentSlide)}%)`,
                        transition: 'transform 0.5s',
                    }}
                >
                    <div className="testimonial">
                        <h5 className="testimonial__header">{slide.header}</h5>
                        <blockquote className="testimonial__text">{slide.text}</blockquote>
                        <address className="testimonial__author">
                            <img src={slide.img} alt={slide.name} className="testimonial__photo" />
                            <h6 className="testimonial__name">{slide.name}</h6>
                            <p className="testimonial__location">{slide.location}</p>
                        </address>
                    </div>
                </div>
            ))}

            <button className="slider__btn slider__btn--left" onClick={prevSlide}>
                &larr;
            </button>
            <button className="slider__btn slider__btn--right" onClick={nextSlide}>
                &rarr;
            </button>

            <div className="dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`dots__dot ${i === currentSlide ? 'dots__dot--active' : ''}`}
                        onClick={() => goToSlide(i)}
                    />
                ))}
            </div>
        </div>
    );
}
