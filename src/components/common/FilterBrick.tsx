import { Dispatch } from "react";
import { FilterAction } from "../../reducers/filterReducer";
import { getBrickValue } from "../../utils/getBrickValue";

interface Props {
    action: FilterAction;
    value: any;
    dispatch: Dispatch<FilterAction>;
}

export function FilterBrick({ dispatch, action, value }: Props) {
    const handleClick = () => {
        dispatch(action);
    };

    return (
        <p className={`filter__brick${value === action.payload ? ' active' : ''}`} onClick={handleClick}>
            {getBrickValue(action)}
        </p>
    );
};