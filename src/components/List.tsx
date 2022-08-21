import { Account } from "../config";
import { AccountItem } from "./common/AccountItem";
import { Section } from "./common/Section";

interface Props {
    accounts: Account[];
}

export const List = ({ accounts }: Props) => {

    const accountsList = () => {
        return accounts.map(a => <AccountItem key={a.shopLink} account={a} />);
    };

    return (
        <Section className="accounts__list-container">
            <ul className="accounts__list">
                {accountsList()}
            </ul>
        </Section>
    );
};