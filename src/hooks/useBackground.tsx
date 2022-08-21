import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import homeBgc from '../assets/background.webp';
import accountsBgc from '../assets/background3.webp';

export const useBackground = () => {
    const bodyRef = useRef<HTMLElement | null>(null);
    const { pathname } = useLocation();

    useEffect(() => {
        bodyRef.current = document.querySelector('.app');
    }, []);

    useEffect(() => {
        if (!bodyRef.current) return;
        switch (pathname) {
            case '/':
                bodyRef.current.style.backgroundImage = `url('${homeBgc}')`;
                break;
            case '/accounts':
                bodyRef.current.style.backgroundImage = `url('${accountsBgc}')`;
                break;

            default:
                bodyRef.current.style.backgroundImage = '';
                break;
        }
    }, [bodyRef, pathname]);
};