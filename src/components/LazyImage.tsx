import { useEffect, useRef } from 'react';

type Props = {
    src: string;
    placeholder: string;
    alt: string;
    className?: string;
};

const LazyImage = ({ src, placeholder, alt, className = '' }: Props) => {
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const loadImg = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            const [entry] = entries;
            if (!entry.isIntersecting) return;

            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.onload = () => img.classList.remove('lazy-img');
            }

            observer.unobserve(img);
        };

        const observer = new IntersectionObserver(loadImg, {
            root: null,
            threshold: 0,
            rootMargin: '200px',
        });

        observer.observe(img);
    }, []);

    return (
        <img
            ref={imgRef}
            src={placeholder}
            data-src={src}
            alt={alt}
            className={`lazy-img ${className}`}
        />
    );
};

export default LazyImage;
