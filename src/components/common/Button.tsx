import { MouseEvent, ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
}

export const Button = ({ children, className, type, onClick }: Props) => {
    const handleClick = (e: MouseEvent) => {
        if (type === 'button') {
            e.preventDefault();
        }
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <button
            type={type ?? 'button'}
            className={`btn${className ? ' ' + className : ''}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};