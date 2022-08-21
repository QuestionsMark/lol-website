import { Dispatch } from "react";
import { Server } from "../../config";
import { FilterAction } from "../../reducers/filterReducer";
import { FilterBrick } from "../common/FilterBrick";
import { FilterPart } from "../common/FilterPart";

interface Props {
    value: Server | null;
    dispatch: Dispatch<FilterAction>;
}

export const ServerFilter = ({ dispatch, value }: Props) => {
    return (
        <FilterPart title="Server" className="filter__section--flex">
            <FilterBrick action={{ type: 'SERVER_CHANGE', payload: Server.EUNE }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'SERVER_CHANGE', payload: Server.EUW }} dispatch={dispatch} value={value} />
            <FilterBrick action={{ type: 'SERVER_CHANGE', payload: Server.NA }} dispatch={dispatch} value={value} />
        </FilterPart>
    );
};