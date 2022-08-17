import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" className="link logo__link">
                <h1 className="logo__brand-name">
                    <span className="logo__span">L9</span>
                    <span className="logo__span">LoL</span>
                    <span className="logo__span">Smurfs</span>
                </h1>
            </Link>
        </div>
    );
};