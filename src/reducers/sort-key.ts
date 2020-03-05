import { SET_SORT_KEY } from "../actions";

interface SortKeyAction {
    type: string;
    payload: {
        key: string;
    };
}

export default (state: string = "id", action: SortKeyAction) => {
    switch (action.type) {
        case SET_SORT_KEY:
            return action.payload.key;
        default:
            return state;
    }
};
