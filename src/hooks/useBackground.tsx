import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import background from '../assets/background.jpg';

export const useBackground = () => {
    const bodyRef = useRef<HTMLElement | null>(null);
    const { pathname } = useLocation();

    useEffect(() => {
        bodyRef.current = document.querySelector('.app');
    }, []);

    useEffect(() => {
        if (!bodyRef.current) return;
        if (pathname === '/') {
            bodyRef.current.style.backgroundImage = `url('${background}')`;
        } else {
            bodyRef.current.style.backgroundImage = '';
        }
    }, [bodyRef, pathname]);
};