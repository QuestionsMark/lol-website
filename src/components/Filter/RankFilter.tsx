import { Dispatch } from "react";
import { Rank } from "../../config";
import { FilterAction } from "../../reducers/filterReducer";
import { FilterBrick } from "../common/FilterBrick";
import { FilterPart } from "../common/FilterPart";

interface Props {
    value: Rank | null;
    dispatch: Dispatch<FilterAction>;
}

export const RankFilter = ({ dispatch, value }: Props) => {
    return (
        <FilterPart title="Rank" className="filter__section--flex">
            <FilterBrick action={{ type: 'RANK_CHANGE', payload: Rank.Unranked }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'RANK_CHANGE', payload: Rank.Iron }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'RANK_CHANGE', payload: Rank.Bronze }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'RANK_CHANGE', payload: Rank.Silver }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'RANK_CHANGE', payload: Rank.Gold }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'RANK_CHANGE', payload: Rank.Platinum }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'RANK_CHANGE', payload: Rank.Diamond }} dispatch={dispatch} value={value} />
        </FilterPart>
    );
};