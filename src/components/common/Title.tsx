import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export const Title = ({ children, className }: Props) => {
    return (
        <h2 className={`main__title${className ? ' ' + className : ''}`}>{children}</h2>
    );
};