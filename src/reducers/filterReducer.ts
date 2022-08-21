import { Rank, Server } from "../config";

export interface FilterState {
    blueEssence: number | '';
    server: Server | null;
    unverifiedEmail: boolean | null;
    price: number | '';
    lvl: number | '';
    rank: Rank | null;
}

export const defaultFilterState: FilterState = {
    blueEssence: '',
    lvl: '',
    price: '',
    rank: null,
    server: null,
    unverifiedEmail: null,
}

interface FilterSet {
    type: 'FILTER_SET';
    payload: FilterState;
}
interface BlueEssenceChange {
    type: 'BLUE_ESSENCE_CHANGE';
    payload: string;
}
interface ServerChange {
    type: 'SERVER_CHANGE';
    payload: Server;
}
interface UnverifiedEmailChange {
    type: 'UNVERIFIED_EMAIL_CHANGE';
    payload: boolean;
}
interface PriceChange {
    type: 'PRICE_CHANGE';
    payload: string;
}
interface LvlChange {
    type: 'LVL_CHANGE';
    payload: string;
}
interface RankChange {
    type: 'RANK_CHANGE';
    payload: Rank;
}

// export enum ActionType

export type FilterAction = FilterSet | BlueEssenceChange | ServerChange | UnverifiedEmailChange | PriceChange | LvlChange | RankChange;

export const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
    switch (action.type) {
        case 'FILTER_SET': {
            return action.payload;
        }
        case 'BLUE_ESSENCE_CHANGE': {
            const { payload } = action;
            return { ...state, blueEssence: payload ? Number(payload) : '' };
        }
        case 'LVL_CHANGE': {
            const { payload } = action;
            return { ...state, lvl: payload ? Number(payload) : '' };
        }
        case 'PRICE_CHANGE': {
            const { payload } = action;
            return { ...state, price: payload ? Number(payload) : '' };
        }
        case 'RANK_CHANGE': {
            return { ...state, rank: state.rank === action.payload ? null : action.payload };
        }
        case 'SERVER_CHANGE': {
            const { payload } = action;
            if (state.server === null) return { ...state, server: payload };
            return { ...state, server: state.server === payload ? null : payload };
        }
        case 'UNVERIFIED_EMAIL_CHANGE': {
            const { payload } = action;
            if (state.unverifiedEmail === null) return { ...state, unverifiedEmail: payload };
            return { ...state, unverifiedEmail: state.unverifiedEmail === payload ? null : payload };
        }
        default:
            return state;
    }
};