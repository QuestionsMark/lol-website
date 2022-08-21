import { NavLink } from "react-router-dom";
import { EMAIL } from "../../config";

export const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" className="nav__link">Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/accounts" className="nav__link">Accounts</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to="/faq" className="nav__link">FAQ</NavLink>
                </li>
                <li className="nav__item">
                    <a href={`mailto:${EMAIL}`} className="nav__link">Contact</a>
                </li>
            </ul>
        </nav>
    );
};