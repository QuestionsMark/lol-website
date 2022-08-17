import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";

export const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="main__content home">
            <div className="home__content">
                <h2 className="home__title">Start playing again</h2>
                <h2 className="home__title">within seconds</h2>
                <h3 className="home__subtitle">Get a new League of Legends unranked</h3>
                <h3 className="home__subtitle">account and start smurfing again!</h3>
                <Button className="home__btn" onClick={() => navigate('/accounts')}>
                    Buy an Account
                </Button>
            </div>
        </div>
    );
};