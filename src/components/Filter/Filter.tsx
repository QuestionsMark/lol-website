import { Dispatch } from "react";
import { FilterAction, FilterState } from "../../reducers/filterReducer";
import { Section } from "../common/Section";
import { BlueEssenceFilter } from "./BlueEssenceFilter";
import { LvlFilter } from "./LvlFilter";
import { PriceFilter } from "./PriceFilter";
import { RankFilter } from "./RankFilter";
import { ServerFilter } from "./ServerFilter";
import { UnverifiedEmailFilter } from "./UnverifiedEmailFilter";

interface Props {
    filter: FilterState;
    dispatch: Dispatch<FilterAction>;
}

export const Filter = ({ dispatch, filter }: Props) => {
    return (
        <Section className="accounts__filter filter">
            <ServerFilter dispatch={dispatch} value={filter.server} />
            <RankFilter dispatch={dispatch} value={filter.rank} />
            <UnverifiedEmailFilter dispatch={dispatch} value={filter.unverifiedEmail} />
            <PriceFilter dispatch={dispatch} value={filter.price} />
            <LvlFilter dispatch={dispatch} value={filter.lvl} />
            <BlueEssenceFilter dispatch={dispatch} value={filter.blueEssence} />
        </Section>
    );
};