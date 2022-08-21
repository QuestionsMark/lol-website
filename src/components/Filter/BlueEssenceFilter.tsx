import { Dispatch } from "react";
import { FilterAction } from "../../reducers/filterReducer";
import { FilterPart } from "../common/FilterPart";
import { NumberInput } from "../common/NumberInput";

interface Props {
    value: number | '';
    dispatch: Dispatch<FilterAction>;
}

export const BlueEssenceFilter = ({ dispatch, value }: Props) => {
    return (
        <FilterPart title="Blue Essence">
            <NumberInput
                actionType="BLUE_ESSENCE_CHANGE"
                dispatch={dispatch}
                value={value}
                min={0}
                placeHolder="Min Blue Essence"
                step={1000}
            />
        </FilterPart>
    );
};