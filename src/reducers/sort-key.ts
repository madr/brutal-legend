import { SET_SORT_KEY } from "../actions";

type Action = {
    type: string;
    payload: {
        key: string;
    };
};

export default (state: string = "id", action: Action) => {
    switch (action.type) {
        case SET_SORT_KEY:
            return action.payload.key;
        default:
            return state;
    }
};
