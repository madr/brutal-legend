import { SET_SORT_KEY } from '../actions';

export default (state = 'id', action) => {
    switch (action.type) {
        case SET_SORT_KEY:
            return action.payload.key;
        default:
            return state;
    }
};
