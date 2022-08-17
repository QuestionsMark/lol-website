import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: Props) => {
    return (
        <section className={`main__section${className ? ' ' + className : ''}`}>
            {children}
        </section>
    );
};