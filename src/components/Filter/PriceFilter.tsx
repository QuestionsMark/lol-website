import { Dispatch } from "react";
import { FilterAction } from "../../reducers/filterReducer";
import { FilterPart } from "../common/FilterPart";
import { NumberInput } from "../common/NumberInput";

interface Props {
    value: number | '';
    dispatch: Dispatch<FilterAction>;
}

export const PriceFilter = ({ dispatch, value }: Props) => {
    return (
        <FilterPart title="Price">
            <NumberInput
                actionType="PRICE_CHANGE"
                dispatch={dispatch}
                value={value}
                placeHolder="Max price"
                min={0}
            />
        </FilterPart>
    );
};