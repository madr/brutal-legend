import { SET_VISIBILITY_FILTER } from "../actions";

interface VisibilityFilterAction {
    type: string;
    payload: {
        filter: string;
    };
}

export default (state: string = "", action: VisibilityFilterAction) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
};
