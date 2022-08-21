import { Dispatch } from "react";
import { FilterAction } from "../../reducers/filterReducer";
import { FilterPart } from "../common/FilterPart";
import { NumberInput } from "../common/NumberInput";

interface Props {
    value: number | '';
    dispatch: Dispatch<FilterAction>;
}

export const LvlFilter = ({ dispatch, value }: Props) => {
    return (
        <FilterPart title="Level">
            <NumberInput
                actionType="LVL_CHANGE"
                dispatch={dispatch}
                value={value}
                min={0}
                placeHolder="Min lvl"
            />
        </FilterPart>
    );
};