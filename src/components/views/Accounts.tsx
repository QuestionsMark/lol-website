import { useReducer } from "react";
import { Title } from "../common/Title";
import { List } from "../List";

import { defaultFilterState, filterReducer } from '../../reducers/filterReducer';
import { ACCOUNTS } from "../../config";
import { Filter } from "../Filter/Filter";

export const Accounts = () => {

    const [filter, dispatch] = useReducer(filterReducer, defaultFilterState);

    const getAccounts = () => {
        const { blueEssence, lvl, price, rank, server, unverifiedEmail } = filter;
        return ACCOUNTS
            .filter(a => server === null ? true : a.server === server)
            .filter(a => unverifiedEmail === null ? true : a.unverifiedEmail === unverifiedEmail)
            .filter(a => rank === null ? true : a.rank === rank)
            .filter(a => blueEssence ? a.blueEssence >= blueEssence : true)
            .filter(a => lvl ? a.lvl >= lvl : true)
            .filter(a => price ? a.price <= price : true)
    };

    return (
        <div className="main__content accounts slide-animation">
            <Title>Accounts</Title>
            <div className="accounts__container">
                <Filter filter={filter} dispatch={dispatch} />
                <List accounts={getAccounts()} />
            </div>
        </div>
    );
};