import { Account, CURRENCY, Rank } from "../../config";
import background from '../../assets/background2.webp';
import Iron from '../../assets/iron.gif';
import Bronze from '../../assets/bronze.gif';
import Silver from '../../assets/silver.gif';
import Gold from '../../assets/gold.gif';
import Platinum from '../../assets/platinum.gif';
import Diamond from '../../assets/diamond.gif';

interface Props {
    account: Account;
}

export const AccountItem = ({ account }: Props) => {
    const { blueEssence, lvl, price, rank, server, shopLink, unverifiedEmail } = account;

    const getImgSrc = () => {
        switch (rank) {
            case 'Iron':
                return Iron;
            case 'Bronze':
                return Bronze;
            case 'Silver':
                return Silver;
            case 'Gold':
                return Gold;
            case 'Platinum':
                return Platinum;
            case 'Diamond':
                return Diamond;
            default:
                return '';
        }
    };

    return (
        <li className="accounts__item show-card-animation">
            <div className="accounts__item-img-wrapper">
                <img src={background} alt="Account background" className="img img--natural" />
                {!([Rank.Unranked, Rank.Unranked5, Rank.Unranked10].includes(rank)) && <img src={getImgSrc()} alt="Rank" className="img img--icon" />}
                {rank === Rank.Unranked5 && <p className="accounts__item-count">x5</p>}
                {rank === Rank.Unranked10 && <p className="accounts__item-count">x10</p>}
            </div>
            <div className="accounts__item-content">
                <div className="accounts__item-information">
                    <p className="accounts__item-information-item">{server}</p>
                    <p className="accounts__item-information-item">{lvl}+ lvl</p>
                    <p className="accounts__item-information-item">{blueEssence / 1000}k BE</p>
                    <p className="accounts__item-information-item">{unverifiedEmail ? 'E-mail is not verified.' : 'E-mail is verified.'}</p>
                </div>
                <a href={shopLink} target="_blank" rel="noreferrer" className="accounts__item-link">
                    Buy for {price.toFixed(2)}{<CURRENCY className="accounts__item-currency" />}
                </a>
            </div>
        </li>
    );
};