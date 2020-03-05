import { SET_VISIBILITY_FILTER } from "../actions";

type Action = {
    type: string;
    payload: {
        filter: string;
    };
};

export default (state: string = "", action: Action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
};
