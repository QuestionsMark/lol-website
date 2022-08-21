import { Dispatch } from "react";
import { FilterAction } from "../../reducers/filterReducer";

interface Props {
    actionType: 'PRICE_CHANGE' | 'LVL_CHANGE' | 'BLUE_ESSENCE_CHANGE';
    value: number | '';
    step?: number;
    className?: string;
    placeHolder?: string;
    min?: number;
    max?: number;
    dispatch: Dispatch<FilterAction>;
}

export const NumberInput = ({ actionType, dispatch, value, className, max, min, placeHolder, step }: Props) => {
    return (
        <input type="number" className={`form__input${className ? ' ' + className : ''}`} step={step} max={max} min={min} placeholder={placeHolder} value={value} onChange={e => dispatch({ type: actionType, payload: e.target.value })} />
    );
};