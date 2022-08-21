import { Dispatch } from "react";
import { FilterAction } from "../../reducers/filterReducer";
import { FilterBrick } from "../common/FilterBrick";
import { FilterPart } from "../common/FilterPart";

interface Props {
    value: boolean | null;
    dispatch: Dispatch<FilterAction>;
}

export const UnverifiedEmailFilter = ({ dispatch, value }: Props) => {
    return (
        <FilterPart title="Unverified E-mail" className="filter__section--flex">
            <FilterBrick action={{ type: 'UNVERIFIED_EMAIL_CHANGE', payload: true }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'UNVERIFIED_EMAIL_CHANGE', payload: false }} dispatch={dispatch} value={value} />
        </FilterPart>
    );
};