import { Link } from "react-router-dom";

export const SmallLogo = () => {
    return (
        <div className="small-logo">
            <Link to="/" className="link small-logo__link">
                <span className="small-logo__span">L9</span>
                <span className="small-logo__span">LoL</span>
                <span className="small-logo__span">Smurfs</span>
            </Link>
        </div>
    );
};