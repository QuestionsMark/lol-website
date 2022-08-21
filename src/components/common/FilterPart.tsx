import { ReactNode } from "react";

interface Props {
    title: string;
    className?: string;
    children: ReactNode;
}

export const FilterPart = ({ children, title, className }: Props) => {
    return (
        <div className={`filter__section${className ? ' ' + className : ''}`}>
            <h3 className="filter__title">{title}</h3>
            {children}
        </div>
    );
};