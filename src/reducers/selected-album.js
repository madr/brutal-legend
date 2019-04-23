import { SELECT_ALBUM, UNSELECT_ALBUM } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_ALBUM:
            return action.payload.album;
        case UNSELECT_ALBUM:
            return {};
        default:
            return state;
    }
};
