import { SET_VISIBILITY_FILTER } from '../actions';

export default (state = '', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
};
