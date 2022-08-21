import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { HomeInfo } from "../common/HomeInfo";
import { HomeText } from "../../config";

import warranty from '../../assets/warranty.svg';
import access from '../../assets/access.svg';
import time from '../../assets/time.svg';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="main__content home">
            <div className="home__content">
                {/* <div className="home__section"> */}
                <h2 className="home__title fade-animation">Start playing again</h2>
                <h2 className="home__title fade-animation">within seconds</h2>
                <h3 className="home__subtitle fade-delay-animation">Get a new League of Legends Unranked</h3>
                <h3 className="home__subtitle fade-delay-animation">Account and start smurfing again!</h3>
                <Button className="home__btn fade-delay2-animation" onClick={() => navigate('/accounts')}>
                    Buy an Account
                </Button>
                {/* </div> */}
                {/* <div className="home__section"> */}
                <HomeInfo imgSrc={warranty} text={HomeText.LifetimeWarranty} />
                <HomeInfo imgSrc={access} text={HomeText.FullAccess} />
                <HomeInfo imgSrc={time} text={HomeText.InstantDelivery} />
                {/* </div> */}
            </div>
        </div>
    );
};