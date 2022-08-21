import { useCallback, useRef } from "react";

interface Props {
    imgSrc: string;
    text: string;
}

export const HomeInfo = ({ imgSrc, text }: Props) => {

    const observer = useRef<IntersectionObserver>();
    const element = useCallback((node: any) => {
        observer.current = new IntersectionObserver(entries => {
            const entry = entries[0];
            entry.target.classList.toggle('fade-animation', entry.isIntersecting);
            if (entry.isIntersecting) observer.current?.unobserve(node);
        }, {
            threshold: 1,
        });
        if (node) return observer.current.observe(node);
    }, []);

    return (
        <div className="home__info" ref={element}>
            <img src={imgSrc} alt="Icon" className="img home__info-icon" />
            <p className="home__info-text">{text}</p>
        </div>
    );
};