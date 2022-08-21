import { FilterAction } from "../reducers/filterReducer";

export const getBrickValue = (action: FilterAction): string => {
    const { payload, type } = action;
    switch (type) {
        case 'RANK_CHANGE':
            return payload;
        case 'SERVER_CHANGE':
            return payload;
        case 'UNVERIFIED_EMAIL_CHANGE':
            return payload ? 'Yes' : 'No';
        default:
            return '';
    }
};